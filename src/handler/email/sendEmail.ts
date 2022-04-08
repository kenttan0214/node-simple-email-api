import { APIGatewayProxyResult } from 'aws-lambda';
import middleware from '../../middleware';
import { SendEmailEvent } from '../../type/handler/sendEmail/sendEmailEvent';
import { badRequest, ok } from '../../util/apiGatewayResponse';
import sendEmailHelper from '../../helper/email/sendEmail';

export const inputSchema = {
  type: 'object',
  required: ['body'],
  properties: {
    body: {
      type: 'object',
      properties: {
        subject: {
          type: 'string',
        },
        content: {
          type: 'string',
        },
        recipients: {
          type: 'array',
          minItems: 1,
          uniqueItems: true,
          items: {
            type: 'string',
            format: 'email',
          },
        },
      },
      required: ['subject', 'content', 'recipients'],
    },
  },
};

const sendEmail = async (event: SendEmailEvent): Promise<APIGatewayProxyResult> => {
  try {
    const {
      body: { subject, content, recipients },
    } = event;

    const response = await sendEmailHelper({ subject, content, recipients });

    return ok(response);
  } catch (error) {
    return badRequest(error);
  }
};

export const handler = middleware(sendEmail, inputSchema);
