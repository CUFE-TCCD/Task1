var nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');

class Email {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            },
        });
    }

    async sendSignupEmail(userEmail, firstName) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: 'Welcome to TCCD',
            text: `
            Hi ${firstName},

            Welcome to TCCD! 🎉
            We're excited to have you on board. With Us

            Best regards,  
            TCCD Team
            `,
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

module.exports = Email
