import { mockSendMail } from '../../__mock__/mockNodeMailer';
import sendEmail from './sendEmail';

describe('sendEmail', () => {
  it('should trigger transporter.sendMail function with the provided input', async () => {
    await sendEmail({
      subject: 'test email subject',
      content: 'test content',
      recipients: ['baz@example.com', 'bar@example.com'],
    });

    expect(mockSendMail.mock.calls).toMatchSnapshot();
  });

  it('should return the preview URL after success sent mail', async () => {
    const result = await sendEmail({
      subject: 'test email subject',
      content: 'test content',
      recipients: ['baz@example.com', 'bar@example.com'],
    });

    expect(result).toMatchSnapshot();
  });
});
