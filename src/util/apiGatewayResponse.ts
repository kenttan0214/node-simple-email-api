import { ApiGatewayResponse } from '../type/util/apiGatewayResponse';

/**
 * Build the `APIGatewayProxyResult` object with the given status code and response body
 * @param statusCode the HTTP status code
 * @param body the HTTP result body
 */
export const buildResult = (statusCode: number, body: string): ApiGatewayResponse => {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    isBase64Encoded: false,
    body,
  };
};

/**
 * Build a HTTP.OK (200) API response
 * @param body the response body
 */
export const ok = (body: any): ApiGatewayResponse => {
  return buildResult(200, JSON.stringify(body));
};

/**
 * Build a HTTP.BAD_REQUEST (400) API response
 * @param error the error response body
 */
export const badRequest = (error: any): ApiGatewayResponse => {
  const { message } = error;
  const errorMessage = message ? message : 'Something Went Wrong';

  return buildResult(
    400,
    JSON.stringify({
      errorMessage,
    }),
  );
};
