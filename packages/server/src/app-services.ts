export interface AppServices {
  config: AppConfig;
  cache: AppCache;
  auth: AuthServices;
  redisClient: RedisClientType;
  prismaClient: PrismaClient;
}
