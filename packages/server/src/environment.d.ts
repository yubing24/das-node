declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      API_PORT?: string;
      FRONTEND_URL?: string;
      PRISMA_DATABASE_URL?: string;
    }
  }
}

export {};
