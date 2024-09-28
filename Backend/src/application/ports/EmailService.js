class EmailService {
    async sendSignupEmail(userEmail) {
        throw new Error('Method not implemented');
    }

    async sendPasswordResetEmail(userEmail, resetLink) {
        throw new Error('Method not implemented');
    }
}

module.exports = EmailService;