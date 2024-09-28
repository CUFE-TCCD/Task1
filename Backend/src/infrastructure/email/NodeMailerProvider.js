const nodemailer = require('nodemailer');
const EmailService = require('../../application/ports/EmailService');

class NodeMailerProvider extends EmailService {
    constructor() {
        super();
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }

    async sendSignupEmail(userEmail) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: 'Login Notification',
            text: "You've logged in successfully.",
        };
        await this.transporter.sendMail(mailOptions);
    }

    async sendPasswordResetEmail(userEmail, resetLink) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: 'Password Reset Request',
            text: `Click this link to reset your password: ${resetLink}`,
        };
        await this.transporter.sendMail(mailOptions);
    }
}

module.exports = NodeMailerProvider;