import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  console.log("✅ Received POST request to /api/contact"); // Debug log

  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = `${firstName} ${lastName}`;

    console.log("📨 Sending email with details:", { name, email, phone, message });

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const emailResponse = await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent:", emailResponse.response);

    res.status(200).json({ status: "Message Sent" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
}
