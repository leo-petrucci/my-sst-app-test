import { StackContext, Api, EventBus } from "sst/constructs";

export function FunctionsAPI({ stack }: StackContext) {
  const api = new Api(stack, "functions-api", {
    routes: {
      "GET /": "./src/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
