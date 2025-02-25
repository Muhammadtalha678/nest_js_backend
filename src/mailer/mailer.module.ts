import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Module({
    providers: [MailerService],
    exports: [MailerService], // 🟢 Export kar rahe hain taake AuthService me use ho sake
})
export class MailerModule { }
