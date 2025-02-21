import nodeMailer, { Transporter } from "nodemailer";

export const sendMail = async (
  template: Parameters<nodeMailer.Transporter["sendMail"]>[0]
) => {
  const transporter: Transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return await transporter.sendMail(template);
};
