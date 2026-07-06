"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData) {
  try {
    // Create a fresh transporter with current environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      return {
        success: false,
        error: "Missing required fields",
      };
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: "contact@technology-craft.com",
      replyTo: formData.email,
      subject: `New Contact Form Submission - ${formData.service}`,
      html: getContactEmailHTML(formData),
      text: `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Service: ${formData.service}
Message:
${formData.message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to user
    const confirmationEmail = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: formData.email,
      subject: "We received your message - Technology Craft",
      html: getConfirmationEmailHTML(formData),
    };

    await transporter.sendMail(confirmationEmail);

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error.message || "Failed to send email. Please try again.",
    };
  }
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function getContactEmailHTML(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;">
      <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 40px 20px; text-align: center;">
          <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">New Contact Form Submission</h1>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
          <p style="margin: 0 0 30px 0; color: #666666; font-size: 16px; line-height: 1.6;">
            You have received a new message from the contact form:
          </p>

          <!-- Contact Details Card -->
          <div style="background-color: #f9fafb; border-left: 4px solid #1e40af; border-radius: 4px; padding: 20px; margin-bottom: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="font-weight: 600; color: #1f2937; font-size: 14px;">NAME</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; color: #374151;">${escapeHtml(data.name)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="font-weight: 600; color: #1f2937; font-size: 14px;">EMAIL</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                  <a href="mailto:${escapeHtml(data.email)}" style="color: #1e40af; text-decoration: none;">${escapeHtml(data.email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="font-weight: 600; color: #1f2937; font-size: 14px;">PHONE</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; color: #374151;">${escapeHtml(data.phone || "Not provided")}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0;">
                  <span style="font-weight: 600; color: #1f2937; font-size: 14px;">SERVICE</span>
                </td>
                <td style="padding: 12px 0; text-align: right;">
                  <span style="display: inline-block; background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;">${escapeHtml(data.service)}</span>
                </td>
              </tr>
            </table>
          </div>

          <!-- Message Section -->
          <div style="margin-bottom: 30px;">
            <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 16px; font-weight: 600;">Message:</h3>
            <div style="background-color: #f9fafb; border-radius: 4px; padding: 20px; border-left: 4px solid #1e40af; color: #374151; line-height: 1.8; font-size: 15px; white-space: pre-wrap; word-wrap: break-word;">
              ${escapeHtml(data.message).replace(/\n/g, "<br>")}
            </div>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #999999; font-size: 12px;">
            <p style="margin: 0 0 10px 0;">
              <a href="mailto:${escapeHtml(data.email)}" style="color: #1e40af; text-decoration: none; margin-right: 10px;">Reply to Email</a>
            </p>
            <p style="margin: 0; color: #cccccc;">Technology Craft - Web & IT Solutions</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function getConfirmationEmailHTML(data) {
  const currentYear = new Date().getFullYear();
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;">
      <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 40px 20px; text-align: center;">
          <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">Message Received</h1>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
          <!-- Success Badge -->
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; width: 60px; height: 60px; background-color: #d1fae5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
              <svg style="width: 32px; height: 32px; color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>

          <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 24px; font-weight: 600; text-align: center;">Thank you for reaching out!</h2>
          <p style="margin: 0 0 25px 0; color: #666666; font-size: 16px; line-height: 1.6; text-align: center;">
            Hi ${escapeHtml(data.name)},
          </p>

          <p style="margin: 0 0 30px 0; color: #666666; font-size: 15px; line-height: 1.8;">
            We have received your message and appreciate you taking the time to contact us. Our team will review your submission and get back to you within <strong>one business day</strong>.
          </p>

          <!-- Summary Card -->
          <div style="background-color: #f0f9ff; border-left: 4px solid #1e40af; border-radius: 4px; padding: 20px; margin-bottom: 30px;">
            <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Your Submission Summary</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #666666;"><strong>Service:</strong></td>
                <td style="padding: 8px 0; text-align: right; color: #1f2937;">${escapeHtml(data.service)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666666;"><strong>Date & Time:</strong></td>
                <td style="padding: 8px 0; text-align: right; color: #1f2937;">${new Date().toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666666;"><strong>Reference Email:</strong></td>
                <td style="padding: 8px 0; text-align: right;"><a href="mailto:${escapeHtml(data.email)}" style="color: #1e40af; text-decoration: none;">${escapeHtml(data.email)}</a></td>
              </tr>
            </table>
          </div>

          <p style="margin: 0 0 30px 0; color: #666666; font-size: 15px; line-height: 1.8;">
            If you have any urgent matters or would like to expedite your request, please feel free to reach out directly via phone or email.
          </p>

          <!-- CTA Button -->
          <div style="text-align: center; margin-bottom: 30px;">
            <a href="https://technology-craft.com" style="display: inline-block; background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: #ffffff; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
              Visit Our Website
            </a>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #999999; font-size: 12px;">
            <p style="margin: 0 0 10px 0;">
              <a href="mailto:contact@technology-craft.com" style="color: #1e40af; text-decoration: none;">contact@technology-craft.com</a> | 
              <a href="https://technology-craft.com" style="color: #1e40af; text-decoration: none;">technology-craft.com</a>
            </p>
            <p style="margin: 0; color: #cccccc;">&copy; ${currentYear} Technology Craft. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
