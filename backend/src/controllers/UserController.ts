import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Felipe', email: 'felipecamiloalves04@gmail.com' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Felipe', 
                email: 'felipecamiloalves04@gmail.com'
            }, 
            message: { 
                subject: 'Welcome to the system', 
                body: 'Welcome' 
            }
        });

        return res.send();
    }
};