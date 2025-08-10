
import { useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type CalendlyBookingProps = {
  calendlyUrl: string;
  height?: number;
};

const CalendlyBooking = ({ calendlyUrl, height = 780 }: CalendlyBookingProps) => {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Inject Calendly CSS if not present
    if (!document.querySelector('link[data-calendly-styles]')) {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "https://assets.calendly.com/assets/external/widget.css");
      link.setAttribute("data-calendly-styles", "true");
      document.head.appendChild(link);
    }

    // Inject Calendly script if not present
    if (!document.querySelector('script[data-calendly-script]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.setAttribute("data-calendly-script", "true");
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const handleMessage = async (e: MessageEvent) => {
      const isCalendly =
        typeof e.data === "object" &&
        e.data &&
        (e.data as any).event &&
        String(e.origin).includes("calendly.com");
      if (!isCalendly) return;

      const data = e.data as { event?: string };
      if (data.event === "calendly.event_scheduled") {
        toast("Booking confirmed! Redirecting to secure checkout...");
        console.log("[Calendly] Event scheduled — creating Stripe Checkout session");

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
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="w-full">
      <div
        ref={widgetRef}
        className="calendly-inline-widget rounded-lg border border-border"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height }}
      />
      <p className="text-xs text-muted-foreground mt-2">
        After selecting a time, you’ll be redirected to secure checkout to pay for your consultation.
      </p>
    </div>
  );
};

export default CalendlyBooking;
