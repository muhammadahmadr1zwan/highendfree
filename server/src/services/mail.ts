import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const from = process.env.SMTP_FROM || 'no-reply@example.com';

let transporter: nodemailer.Transporter | null = null;

if (host && port && user && pass) {
  transporter = nodemailer.createTransport({ host, port, auth: { user, pass } });
}

export async function sendMail(to: string, subject: string, html: string) {
  if (!transporter) return; // silently no-op if not configured
  await transporter.sendMail({ from, to, subject, html });
}
