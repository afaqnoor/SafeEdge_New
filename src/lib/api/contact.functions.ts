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
          from: "Safe Edge Solutions <onboarding@resend.dev>",
          to: "afaqnoor.ninesol@gmail.com",
          replyTo: data.email, // Allows you to click "Reply" in your email client to reply directly to the sender
          subject: data.subject ? `[Contact Form] ${data.subject}` : `New SafeEdge Contact: ${data.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
              <h2 style="color: #1a73e8; border-bottom: 2px solid #1a73e8; padding-bottom: 8px; margin-top: 0;">New Contact Message Received</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 6px 0;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 6px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Phone:</td>
                  <td style="padding: 6px 0;">${data.phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Subject:</td>
                  <td style="padding: 6px 0;">${data.subject || "Not provided"}</td>
                </tr>
              </table>
              
              <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #1a73e8; border-radius: 4px;">
                <h4 style="margin-top: 0; margin-bottom: 10px; color: #555;">Message Content:</h4>
                <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
              </div>
              
              <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0 15px 0;" />
              <p style="font-size: 11px; color: #999; text-align: center; margin: 0;">This email was sent via the SafeEdge Contact Form Serverless Function on Vercel.</p>
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
      throw new Error(error instanceof Error ? error.message : "An unexpected error occurred while sending the email.");
    }
  });
