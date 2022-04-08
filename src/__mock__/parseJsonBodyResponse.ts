// a simple util function to parse the unit test JSON response into Object
export const parseJsonBody = (response: { body: string }): Record<string, any> => {
  return {
    ...response,
    body: JSON.parse(response.body),
  };
};
