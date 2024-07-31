import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    console.log("Form data received:", { name, email, message });

    // Set up Nodemailer transport with Interia's SMTP server
    const transporter = nodemailer.createTransport({
      host: "poczta.interia.pl",
      port: 465, // or 465 for SSL/TLS
      secure: true, // use true for 465
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log("Transporter configured with email:", process.env.EMAIL);

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Wiadomość od ${name}`,
      text: `Adres email nadawcy: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
    return new Response(JSON.stringify({ status: "success" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ status: "error", error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
