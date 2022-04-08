// import core
import middy from '@middy/core';
// import middy middlewares
import jsonBodyParser from '@middy/http-json-body-parser';
import validator from '@middy/validator';
import cors from '@middy/http-cors';
import httpErrorHandler from './httpErrorHandler';

export default (handler: any = {}, inputSchema: any = {}): any => {
  const middlewares = [jsonBodyParser(), validator({ inputSchema }), httpErrorHandler(), cors()];
  return middy(handler).use(middlewares);
};
