export const helloHandler = async (event: Record<string, any>) => {
  return {
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,    
  };
};
