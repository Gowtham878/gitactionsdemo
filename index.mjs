import * as lod from 'lodash'

export const handler = async (event) => {
  const random  = lod.random(10)
  console.log("event: ", event)
  const response = {
    statusCode: 200,
    body: JSON.stringify(`The random value is: ${random}`),
  };
  return response;
};
