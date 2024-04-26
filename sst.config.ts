import { SSTConfig } from "sst";
import { FunctionsAPI } from "./packages/functions/FunctionsStack";
import { FunctionsCopyAPI } from "./packages/functions-copy/FunctionsCopyStack";

export default {
  config(_input) {
    return {
      name: "my-sst-app",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(FunctionsAPI);
    app.stack(FunctionsCopyAPI);
  },
} satisfies SSTConfig;
