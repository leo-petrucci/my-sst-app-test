import { StackContext, Api, EventBus } from "sst/constructs";

export function FunctionsCopyAPI({ stack }: StackContext) {
  const api = new Api(stack, "functions-copy-api", {
    routes: {
      "GET /": "./src/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
