import { ApiHandler } from "sst/node/api";
import { logToConsole } from "@my-sst-app/shared";

export const handler = ApiHandler(async (_evt) => {
  logToConsole();
  return {
    statusCode: 200,
    body: `Hello world. The time from functions-copy is ${new Date().toISOString()}`,
  };
});
