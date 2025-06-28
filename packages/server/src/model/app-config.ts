/**
 * Configurations for the server.
 */

export interface AppConfig {
  apiPort: number;
  frontEndUrl: string;
  databaseConfig: AppConfigDatabase;
  cacheConfig: AppConfigCache;
  oidcProviderConfig: AppConfigOidcProvider;
}

export interface AppConfigDatabase {
  prismaDatabaseUrl: string;
}

export interface AppConfigCache {
  redisHost: string;
  redisPort: number;
}

export interface AppConfigOidcProvider {
  serverPort: number;
  jwks: string;
  cookieKeys: string;
}
