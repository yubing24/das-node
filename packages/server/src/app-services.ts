import Provider from "oidc-provider";
import { AppConfig } from "./model/app-config.js";
import { AppCache, RedisCache } from "./services/cache.js";
import { PrismaClient } from "@prisma/client";
import { RedisClientType } from "redis";

export interface AuthServices {
  oidcProvider: Provider;
  oidcRelyingParty: ReturnType<any>; // placeholder for now,
}

export interface AppServices {
  config: AppConfig;
  cache: AppCache;
  auth: AuthServices;
  redisClient: RedisClientType;
  prismaClient: PrismaClient;
}
export const createAppServices = async (
  config: AppConfig
): Promise<AppServices> => {
  // TODO: finish implementation

  // create cache client
  const cache = new RedisCache(config.cacheConfig);

  const prismaClient = new PrismaClient();
  return {
    config,
    prismaClient,
  } as AppServices;
};
