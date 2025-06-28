import { AppConfig } from "src/model/app-config.js";

export const createAppConfig = (): AppConfig => {
  return {
    apiPort: 3000,
    frontEndUrl: "http://localhost:4200",
    databaseConfig: {
      prismaDatabaseUrl: "postgresql://user:password@localhost:5432/mydb",
    },
    cacheConfig: {
      redisHost: "localhost",
      redisPort: 6379,
    },
    oidcProviderConfig: {
      serverPort: 3001,
      cookieKeys: process.env.OIDC_COOKIE_KEYS || "default_cookie_key",
      jwks: process.env.OIDC_JWKS || "",
    },
  };
};
