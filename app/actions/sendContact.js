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
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(formData.phone || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(formData.service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(formData.message).replace(/\n/g, "<br>")}</p>
      `,
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
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${escapeHtml(formData.name)},</p>
        <p>We have received your message and will get back to you within one business day.</p>
        <p><strong>Your message details:</strong></p>
        <ul>
          <li><strong>Service:</strong> ${escapeHtml(formData.service)}</li>
          <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        <p>Best regards,<br>Technology Craft Team</p>
      `,
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
