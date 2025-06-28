import { AppServices, createAppServices } from "./app-services.js";
import { AppConfig } from "./model/app-config.js";
import { createAppConfig } from "./services/config.js";
import { api } from "./api/index.js";
import Koa from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();
const createAppServer = async (config: AppConfig, services: AppServices) => {
  const endpoints = await api(services);
  router.get("/api/references/countries", endpoints.getCountries);

  // simple logging middleware
  app.use(async (ctx, next) => {
    console.log(`Received request: ${ctx.method} ${ctx.url}`);
    await next();
    console.log("DONE!");
  });

  app.use(router.routes());
};

const appConfig = createAppConfig();
const appServices = await createAppServices(appConfig);
await createAppServer(appConfig, appServices);
app.listen(appConfig.apiPort, () => {
  console.log(`Server is running on http://localhost:${appConfig.apiPort}`);
});
