import { MailtrapClient } from "mailtrap"

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = "8dd89ccf9a7c75cec2749f239573af4f";
const SENDER_EMAIL = "hello@demomailtrap.com";
const RECIPIENT_EMAIL = "peeplil6666@gmail.com";

export const mailtrapclient = new MailtrapClient({ token: TOKEN });

export const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };
