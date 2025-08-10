
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type CalendlyBookingProps = {
  calendlyUrl: string;
  height?: number;
};

const CalendlyBooking = ({ calendlyUrl, height = 780 }: CalendlyBookingProps) => {
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("[Calendly] Initializing with URL:", calendlyUrl);
    
    // Validate Calendly URL
    if (!calendlyUrl || calendlyUrl.includes('your-calendly-username')) {
      setError('Please configure a valid Calendly URL');
      setIsLoading(false);
      return;
    }

    const loadCalendlyResources = async () => {
      try {
        // Check if CSS is already loaded
        if (!document.querySelector('link[data-calendly-styles]')) {
          const link = document.createElement("link");
          link.setAttribute("rel", "stylesheet");
          link.setAttribute("href", "https://assets.calendly.com/assets/external/widget.css");
          link.setAttribute("data-calendly-styles", "true");
          document.head.appendChild(link);
          console.log("[Calendly] CSS loaded");
        }

        // Check if script is already loaded
        if (!document.querySelector('script[data-calendly-script]')) {
          const script = document.createElement("script");
          script.src = "https://assets.calendly.com/assets/external/widget.js";
          script.async = true;
          script.setAttribute("data-calendly-script", "true");
          
          // Wait for script to load
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
          console.log("[Calendly] Script loaded");
        }

        // Initialize widget after resources are loaded
        if (window.Calendly && widgetRef.current) {
          window.Calendly.initInlineWidget({
            url: calendlyUrl,
            parentElement: widgetRef.current,
            prefill: {},
            utm: {}
          });
          console.log("[Calendly] Widget initialized");
        }

        setIsLoading(false);
      } catch (err) {
        console.error("[Calendly] Error loading resources:", err);
        setError('Failed to load Calendly widget');
        setIsLoading(false);
      }
    };

    loadCalendlyResources();
  }, [calendlyUrl]);

  useEffect(() => {
    const handleMessage = async (e: MessageEvent) => {
      const isCalendly =
        typeof e.data === "object" &&
        e.data &&
        (e.data as any).event &&
        String(e.origin).includes("calendly.com");
      
      if (!isCalendly) return;

      const data = e.data as { event?: string };
      console.log("[Calendly] Received event:", data.event);
      
      if (data.event === "calendly.event_scheduled") {
        toast("Booking confirmed! Redirecting to secure checkout...");
        console.log("[Calendly] Event scheduled — creating Stripe Checkout session");

        try {
          const { data: fnData, error } = await supabase.functions.invoke("create-payment", {
            body: { product: "2-hour-consultation" },
          });

          if (error) {
            console.error("Error creating checkout session:", error);
            toast.error("Could not start checkout. Please contact support.");
            return;
          }

          if (fnData?.url) {
            // Open Stripe checkout in a new tab (per requirements)
            window.open(fnData.url, "_blank");
          } else {
            toast.error("Checkout URL missing. Please try again.");
          }
        } catch (err) {
          console.error("Payment processing error:", err);
          toast.error("Payment processing failed. Please try again.");
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (error) {
    return (
      <div className="w-full p-8 text-center">
        <div className="text-red-600 mb-4">⚠️ Calendly Error</div>
        <p className="text-sm text-muted-foreground">{error}</p>
        <p className="text-xs text-muted-foreground mt-2">
          Please contact support if this issue persists.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full p-8 text-center">
        <div className="text-muted-foreground mb-4">Loading Calendly...</div>
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        ref={widgetRef}
        className="calendly-inline-widget rounded-lg border border-border"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height }}
      />
      <p className="text-xs text-muted-foreground mt-2">
        After selecting a time, you'll be redirected to secure checkout to pay for your consultation.
      </p>
    </div>
  );
};

// Extend window type to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill: any;
        utm: any;
      }) => void;
    };
  }
}

export default CalendlyBooking;
