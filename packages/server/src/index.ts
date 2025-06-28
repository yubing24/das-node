import { AppServices, createAppServices } from "./app-services.js";
import { AppConfig } from "./model/app-config.js";
import { createAppConfig } from "./services/config.js";

const createAppServer = async (config: AppConfig, services: AppServices) => {};

const appConfig = createAppConfig();
const appServices = await createAppServices(appConfig);
await createAppServer(appConfig, appServices);
