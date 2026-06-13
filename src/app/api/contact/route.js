import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Jobs Live Now Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Form Message - ${subject}`,

      html: `
            <div style="font-family: Arial, sans-serif; background:#f6f7fb; padding:20px;">

              <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #eaeaea;">

                <div style="background:#0d6efd;color:white;padding:15px;text-align:center;">
                  <h2 style="margin:0;">Jobs Live Now</h2>
                  <p style="margin:0;font-size:14px;">New Contact Message Received</p>
                </div>

                <div style="padding:20px;">

                  <p style="font-size:16px;color:#333;">
                    You have received a new message from your website contact form.
                  </p>

                  <hr style="border:none;border-top:1px solid #eee;" />

                  <p><b>👤 Name:</b> ${name}</p>
                  <p><b>📧 Email:</b> ${email}</p>
                  <p><b>📌 Subject:</b> ${subject}</p>

                  <div style="margin-top:15px;">
                    <b>💬 Message:</b>
                    <div style="background:#f9f9f9;padding:12px;border-radius:6px;margin-top:8px;white-space:pre-line;">
                      ${message}
                    </div>
                  </div>

                </div>

                <div style="background:#f1f1f1;padding:12px;text-align:center;font-size:12px;color:#777;">
                  This email was sent from Jobs Live Now Contact Form
                </div>

              </div>

            </div>
            `,
    });

    return Response.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}