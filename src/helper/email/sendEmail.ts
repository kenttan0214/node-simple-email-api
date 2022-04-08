import { createTestAccount, getTestMessageUrl } from 'nodemailer';
import { EmailInput } from '../../type/helper/sendEmail/sendEmailInput';
import smtpTransporter from '../../util/smtpTransporter';

export default async ({ subject, content, recipients }: EmailInput): Promise<{ preview: string | false }> => {
  // use nodemailer test account, actual use case will create own mail acccount such as Gmail
  const testAccount = await createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = smtpTransporter(testAccount);

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo" <foo@example.com>', // sender address
    to: recipients.toString(), // list of recipients
    subject, // Subject line
    text: content, // plain text body
  });

  return {
    // Preview only available when sending through an Ethereal account
    preview: getTestMessageUrl(info),
  };
};
