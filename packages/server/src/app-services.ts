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
  auth?: AuthServices;
  redisClient: RedisClientType;
  prismaClient: PrismaClient;
}
export const createAppServices = async (
  config: AppConfig
): Promise<AppServices> => {
  // create cache client
  const cache = new RedisCache(config.cacheConfig);
  const redisClient = await cache.getClient();

  // create database client
  const prismaClient = new PrismaClient();

  return {
    config,
    cache,
    redisClient,
    prismaClient,
  } as AppServices;
};
