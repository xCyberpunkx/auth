import { MailtrapClient } from "mailtrap"



const TOKEN = "8dd89ccf9a7c75cec2749f239573af4f";
const SENDER_EMAIL = "hello@demomailtrap.com";

export const mailtrapclient = new MailtrapClient({ token: TOKEN });

export const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };
