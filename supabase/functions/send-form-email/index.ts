// cspell:words apikey Moda
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import nodemailer from "npm:nodemailer";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type FormType = "contact" | "get-started";

type FormRequest = {
  formType?: FormType;
  fields?: Record<string, string>;
};

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM_EMAIL",
  "SMTP_TO_EMAIL",
] as const;

const buildEmailContent = (formType: FormType, fields: Record<string, string>) => {
  const title = formType === "contact" ? "Contact Form Submission" : "Get Started Form Submission";
  const orderedEntries =
    formType === "contact"
      ? [
          ["Name", fields.name],
          ["Email", fields.email],
          ["Company", fields.company],
          ["Subject", fields.subject],
          ["Message", fields.message],
        ]
      : [
          ["Name", fields.name],
          ["Email", fields.email],
          ["Company", fields.company],
          ["Budget", fields.budget],
          ["Timeline", fields.timeline],
          ["Project Description", fields.message],
        ];

  const normalizedEntries = orderedEntries.map(([label, value]) => [label, value?.trim() || "N/A"]);

  const text = [
    title,
    "",
    ...normalizedEntries.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin-bottom: 16px;">${title}</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tbody>
          ${normalizedEntries
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600; width: 180px;">${label}</td>
                  <td style="padding: 8px 12px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${value}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;

  return { title, text, html };
};

serve(async (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }

  const missingEnvVar = requiredEnvVars.find((envVar) => !Deno.env.get(envVar));
  if (missingEnvVar) {
    return new Response(JSON.stringify({ error: `Missing ${missingEnvVar}` }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const body = (await request.json()) as FormRequest;
    const formType = body.formType;
    const fields = body.fields ?? {};

    if (!formType || !["contact", "get-started"].includes(formType)) {
      return new Response(JSON.stringify({ error: "Invalid form type" }), {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    if (!fields.name?.trim() || !fields.email?.trim() || !fields.message?.trim()) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    const smtpPort = Number(Deno.env.get("SMTP_PORT"));
    const smtpSecure = Deno.env.get("SMTP_SECURE") === "true" || smtpPort === 465;
    const fromEmail = Deno.env.get("SMTP_FROM_EMAIL")!;
    const fromName = Deno.env.get("SMTP_FROM_NAME") || "Moda Maestro Website";
    const toEmail = Deno.env.get("SMTP_TO_EMAIL")!;
    const { title, text, html } = buildEmailContent(formType, fields);

    const transporter = nodemailer.createTransport({
      host: Deno.env.get("SMTP_HOST"),
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: Deno.env.get("SMTP_USER"),
        pass: Deno.env.get("SMTP_PASS"),
      },
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: fields.email.trim(),
      subject: `${title} from ${fields.name.trim()}`,
      text,
      html,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }
});
