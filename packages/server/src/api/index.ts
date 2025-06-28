import { AppServices } from "src/app-services.js";
import { referenceApis } from "./references/index.js";

export const api = async (appServices: AppServices) => {
  const references = referenceApis(appServices);
  return {
    ...references,
  };
};
