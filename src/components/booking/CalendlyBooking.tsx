
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

    // Check if URL has an event type - if not, try to append a common one
    const hasEventType = calendlyUrl.split('/').length > 4;
    if (!hasEventType) {
      console.warn("[Calendly] URL might be missing event type. Trying to append /30min");
    }

    const loadCalendlyResources = async () => {
      try {
        // Clear any existing widget first
        if (widgetRef.current) {
          widgetRef.current.innerHTML = '';
        }

        // Check if CSS is already loaded
        if (!document.querySelector('link[href*="calendly.com"]')) {
          const link = document.createElement("link");
          link.setAttribute("rel", "stylesheet");
          link.setAttribute("href", "https://assets.calendly.com/assets/external/widget.css");
          document.head.appendChild(link);
          console.log("[Calendly] CSS loaded");
        }

        // Check if script is already loaded
        if (!window.Calendly) {
          const script = document.createElement("script");
          script.src = "https://assets.calendly.com/assets/external/widget.js";
          script.async = true;
          
          // Wait for script to load
          await new Promise((resolve, reject) => {
            script.onload = () => {
              console.log("[Calendly] Script loaded successfully");
              resolve(void 0);
            };
            script.onerror = (err) => {
              console.error("[Calendly] Script failed to load:", err);
              reject(err);
            };
            document.body.appendChild(script);
          });
        }

        // Wait a bit more for Calendly to be fully available
        await new Promise(resolve => setTimeout(resolve, 100));

        // Initialize widget
        if (window.Calendly && widgetRef.current) {
          // Try different URL variations
          const urlVariations = [
            calendlyUrl,
            `${calendlyUrl}/30min`,
            `${calendlyUrl}/consultation`,
            `${calendlyUrl}/meeting`
          ];

          let success = false;
          for (const url of urlVariations) {
            try {
              console.log(`[Calendly] Trying URL: ${url}`);
              
              // Clear previous attempts
              widgetRef.current.innerHTML = '';
              
              window.Calendly.initInlineWidget({
                url: url,
                parentElement: widgetRef.current,
                prefill: {},
                utm: {}
              });
              
              console.log(`[Calendly] Successfully initialized with: ${url}`);
              success = true;
              break;
            } catch (err) {
              console.warn(`[Calendly] Failed with URL ${url}:`, err);
              continue;
            }
          }

          if (!success) {
            throw new Error('All URL variations failed');
          }
        } else {
          throw new Error('Calendly object not available or widget ref missing');
        }

        setIsLoading(false);
      } catch (err) {
        console.error("[Calendly] Error loading resources:", err);
        setError(`Failed to load Calendly widget: ${err.message}`);
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
