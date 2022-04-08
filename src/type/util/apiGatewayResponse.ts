export type ApiGatewayResponse = {
  statusCode: number;
  headers: {
    'Content-Type': string;
  };
  isBase64Encoded: boolean;
  body: string;
};
