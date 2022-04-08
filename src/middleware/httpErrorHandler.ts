export default (): any => {
  return {
    onError: (handler) => {
      // if there are a `statusCode` and an `error` field
      // this is a valid http error object
      if (handler.error.statusCode && handler.error.message) {
        const { error } = handler;
        const { statusCode, ...errorDetails } = error;
        return {
          statusCode,
          body: JSON.stringify({
            ...errorDetails,
          }),
        };
      }

      // if without a statusCode then return a generic error
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Internal Server Error',
        }),
      };
    },
  };
};
