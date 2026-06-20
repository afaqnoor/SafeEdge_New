import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not defined.");
      throw new Error("Email service configuration error. Please try again later.");
    }

    try {
      // Send email using Resend API via fetch to avoid extra NPM package dependencies
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Note: When using Resend's free tier, you can send emails from 'onboarding@resend.dev'
          // only to your own registered email address.
          // Once you verify a custom domain in Resend, you can change 'onboarding@resend.dev' to 'info@yourdomain.com'.
          from: "SafeEdge international training Center <onboarding@resend.dev>",
          to: "afaqnoor.ninesol@gmail.com",
          replyTo: data.email, // Allows you to click "Reply" in your email client to reply directly to the sender
          subject: data.subject
            ? `[Contact Form] ${data.subject}`
            : `New SafeEdge Contact: ${data.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1a73e8; border-bottom: 1px solid #ddd; padding-bottom: 8px; margin-top: 0;">New Contact Form Submission</h3>
              
              <p style="margin: 8px 0;"><strong>name</strong> &nbsp; &nbsp; ${data.name}</p>
              <p style="margin: 8px 0;"><strong>email</strong> &nbsp; &nbsp; <a href="mailto:${data.email}">${data.email}</a></p>
              <p style="margin: 8px 0;"><strong>phone</strong> &nbsp; &nbsp; ${data.phone || "Not provided"}</p>
              <p style="margin: 8px 0;"><strong>subject</strong> &nbsp; &nbsp; ${data.subject || "Not provided"}</p>
              
              <div style="margin-top: 16px; padding: 12px; background-color: #f9f9f9; border-left: 4px solid #1a73e8; border-radius: 4px;">
                <p style="margin: 0; font-weight: bold; color: #555;">Message:</p>
                <p style="margin: 8px 0 0 0; white-space: pre-wrap;">${data.message}</p>
              </div>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Resend API responded with error status:", response.status, errorText);
        throw new Error("Failed to send email via Resend API.");
      }

      const result = await response.json();
      return { success: true, id: result.id };
    } catch (error) {
      console.error("Error in sendContactEmail handler:", error);
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred while sending the email.",
      );
    }
  });
