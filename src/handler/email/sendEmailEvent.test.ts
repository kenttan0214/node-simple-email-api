import { parseJsonBody } from '../../__mock__/parseJsonBodyResponse';
import '../../__mock__/mockNodeMailer';
import * as sendEmailHelper from '../../helper/email/sendEmail';
import { handler } from './sendEmail';

describe('sendEmail hanlder', () => {
  it('should return 200 response with email preview URL', async () => {
    const event = {
      body: {
        subject: 'foo subject',
        content: 'foo content',
        recipients: ['foo@example.com', 'bar@example.com'],
      },
    };

    const response = await handler(event);
    expect(parseJsonBody(response)).toMatchSnapshot();
  });

  it('should return 400 error when there is any unknown exception thrown in helper fuction', async () => {
    const spy = jest.spyOn(sendEmailHelper, 'default');
    // Simulate situation where helper throws unknown, unexpected errors
    spy.mockRejectedValueOnce('unknown error');

    const event = {
      body: {
        subject: 'foo subject',
        content: 'foo content',
        recipients: ['foo@example.com'],
      },
    };

    const response = await handler(event);
    expect(parseJsonBody(response)).toMatchSnapshot();
  });
});

describe('input validation', () => {
  it('should return 400 error when subject is not provided', async () => {
    const event = {
      body: {
        content: 'foo content',
        recipients: ['foo@example.com', 'bar@example.com'],
      },
    };

    const response = await handler(event);
    expect(parseJsonBody(response)).toMatchSnapshot();
  });

  it('should return 400 error when content is not provided', async () => {
    const event = {
      body: {
        subject: 'foo subject',
        recipients: ['foo@example.com', 'bar@example.com'],
      },
    };

    const response = await handler(event);
    expect(parseJsonBody(response)).toMatchSnapshot();
  });

  it('should return 400 error when recipients is not provided', async () => {
    const event = {
      body: {
        subject: 'foo subject',
        content: 'foo content',
      },
    };

    const response = await handler(event);
    expect(parseJsonBody(response)).toMatchSnapshot();
  });

  it('should return 400 error when recipients is an empty array', async () => {
    const event = {
      body: {
        subject: 'foo subject',
        content: 'foo content',
        recipients: [],
      },
    };

    const response = await handler(event);
    expect(parseJsonBody(response)).toMatchSnapshot();
  });

  it('should return 400 error when recipients have duplicate entry', async () => {
    const event = {
      body: {
        subject: 'foo subject',
        content: 'foo content',
        recipients: ['foo@example.com', 'foo@example.com'],
      },
    };

    const response = await handler(event);
    expect(parseJsonBody(response)).toMatchSnapshot();
  });
});
