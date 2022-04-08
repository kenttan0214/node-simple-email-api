export const mockCreateTestAccount = jest.fn(() => ({ user: 'test-account', pass: 'test-password' }));
export const mockSendMail = jest.fn();
export const mockCreateTransport = jest.fn(() => ({ sendMail: mockSendMail }));
export const mockGetTestMessageUrl = jest.fn(() => 'https://unit-test-mock-email-url.example.com');

jest.mock('nodemailer', () => ({
  createTestAccount: mockCreateTestAccount,
  createTransport: mockCreateTransport,
  getTestMessageUrl: mockGetTestMessageUrl,
}));
