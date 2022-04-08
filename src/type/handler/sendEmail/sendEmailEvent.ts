import { APIGatewayProxyEvent } from 'aws-lambda';

export type EmailBody = {
  subject: string;
  content: string;
  recipients: string[];
};

export type SendEmailEvent = {
  body: EmailBody;
} & APIGatewayProxyEvent;
