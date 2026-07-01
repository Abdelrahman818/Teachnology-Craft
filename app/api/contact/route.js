import nodemailer from "nodemailer";
import { mail } from "../../../lib/contactMethods";

function validateBody(body) {
  if (typeof body !== "object" || body === null) return false;
  const { name, email, service, message } = body;
  return (
    typeof name === "string" && name.trim().length >= 2 &&
    typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    typeof service === "string" && service.trim().length > 0 &&
    typeof message === "string" && message.trim().length >= 10
  );
}

function getEnv(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is required.`);
  }
  return value;
}

function emailTo(target) {
  switch (target) {
    case "it":
      return mail.it;
    case "design":
    case "designs":
      return mail.design;
    case "dev":
      return mail.development;
    case "marketing":
      return mail.marketing;
    case "contact":
    default:
      return mail.contact;
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON payload." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!validateBody(body)) {
    return new Response(JSON.stringify({ error: "Please provide valid contact form details." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const transporter = nodemailer.createTransport({
    host: getEnv("SMTP_HOST"),
    port: Number(getEnv("SMTP_PORT")),
    secure: getEnv("SMTP_SECURE") === "true",
    auth: {
      user: getEnv("SMTP_USER"),
      pass: getEnv("SMTP_PASS"),
    },
  });

  const target = body.service || "contact";
  const mailOptions = {
    from: getEnv("EMAIL_FROM"),
    to: emailTo(target),
    subject: `New contact request from ${body.name}`,
    text: [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone || "n/a"}`,
      `Service: ${body.service}`,
      "",
      "Message:",
      body.message,
    ].join("\n"),
    html: `
      <h1>New contact request</h1>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone || "n/a"}</p>
      <p><strong>Service:</strong> ${body.service}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message.replace(/\n/g, "<br />")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return new Response(JSON.stringify({ error: "Failed to send email. Please try again later." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
