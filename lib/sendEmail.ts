import { ContactRequest } from "@/components/Contact";
import nodemailer from "nodemailer";
export type SendMailProps = {
  subject: string;
  html: string;
};
export const sendEmail = async (data: SendMailProps) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      auth: {
        user: process.env.MAIL_ADDRESS || "no-reply@eprocuretech.com",
        pass: process.env.MAIL_PASSWORD || "NoReplyLogin2023",
      },
    });

    let info = await transporter.sendMail({
      from: "<no-reply@eprocuretech.com>",
      to: "mspwebcraft@gmail.com",
      subject: data.subject,
      html: data.html,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export const createHtml = (data: ContactRequest) => {
  const { firstName, lastName, email, message, mobile } = data;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Request</title>
</head>
<body>

  <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">

    <h2>Contact Request</h2>

    <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Mobile:</strong> ${mobile}</p>

    <hr>

    <p>This is a contact request from the MSP website. Please respond accordingly.</p>

  </div>

</body>
</html>
`;
};
