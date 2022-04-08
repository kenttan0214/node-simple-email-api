import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export default ({ user, pass }: { user: string; pass: string }): Transporter<SMTPTransport.SentMessageInfo> => {
  // create reusable transporter object using the default SMTP transport

  return createTransport({
    host: 'smtp.ethereal.email', // email provider host, eg. smtp.gmail.com
    port: 587, // depends on SMTP host, 25, 465 (SSL but not RFC compliant), 587 (TLS)
    secure: false, // true for 465, false for other ports
    auth: {
      /**
       * Actual use case will use the email account user and password created from the email provider
       * These credentials can be stored in AWS Secret Manager
       * And retrieve it to environment parameters when build
       */
      user,
      pass,
    },
  });
};
