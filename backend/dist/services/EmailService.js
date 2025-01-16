"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        console.log('Email sent to ${to.name}: ${message.subject}');
    }
}
exports.default = EmailService;
