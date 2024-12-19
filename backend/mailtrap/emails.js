import {mailtrapclient, sender, sender as user} from "./mailtrap.config.js";
import {VERIFICATION_EMAIL_TEMPLATE} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [
        {
            email
        }
    ]
    try{
        const response = await mailtrapclient.send({
            from: sender,
            to: recipient,
            subject: 'Verification Email',
            html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', verificationToken),
            category: 'Verification Email',
        })
        console.log("Email Sent Successfully!")
    }catch(err){
        console.error("Error Sending Verification Email", err);
        throw new Error(err);
    }
}