import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotifyPayload {
  event: "download" | "ai-analysis";
  email?: string;
  site?: string; // URL or business/site name
  industry?: string;
  resourceId?: string;
  resourceTitle?: string;
  notes?: string;
  analysis?: string; // AI output text
}

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

function buildSubject(payload: NotifyPayload) {
  const base = payload.event === "download" ? "Resource Download" : "AI Analysis Run";
  const site = payload.site ? ` — ${payload.site}` : "";
  return `[Mission Digital] ${base}${site}`;
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildHtml(payload: NotifyPayload) {
  const lines = [
    `<h2>${payload.event === "download" ? "Resource Download" : "AI Analysis"}</h2>`,
    payload.site ? `<p><strong>Site:</strong> ${payload.site}</p>` : "",
    payload.email ? `<p><strong>Email:</strong> ${payload.email}</p>` : "",
    payload.industry ? `<p><strong>Industry:</strong> ${payload.industry}</p>` : "",
    payload.resourceTitle ? `<p><strong>Resource:</strong> ${payload.resourceTitle}</p>` : "",
    payload.resourceId ? `<p><strong>Resource ID:</strong> ${payload.resourceId}</p>` : "",
    payload.notes ? `<p><strong>Notes:</strong> ${payload.notes}</p>` : "",
    payload.analysis
      ? `<div style="margin-top:12px;"><strong>Analysis Output:</strong><pre style="white-space:pre-wrap;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;background:#f8f8f8;padding:12px;border-radius:8px;">${escapeHtml(payload.analysis)}</pre></div>`
      : "",
  ].filter(Boolean).join("\n");
  return `
    <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, \"Helvetica Neue\", \"Segoe UI\", Arial; line-height:1.6;">
      ${lines}
      <hr style="margin:16px 0;border:none;border-top:1px solid #eee" />
      <p style="color:#666;font-size:12px;">This notification was triggered by the website.</p>
    </div>
  `;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.json() as NotifyPayload;

    if (!payload || !payload.event) {
      return new Response(JSON.stringify({ error: "Missing event" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const to = "maxzipperman@gmail.com"; // operator email (hidden from users)

    const res = await resend.emails.send({
      from: "Mission Digital <notifications@resend.dev>",
      to: [to],
      subject: buildSubject(payload),
      html: buildHtml(payload),
    });

    return new Response(JSON.stringify({ ok: true, id: (res as any)?.id ?? null }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("operator-notify error:", error);
    return new Response(JSON.stringify({ error: error?.message || "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
