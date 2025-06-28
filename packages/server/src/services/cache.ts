import { createClient, type RedisClientType } from "redis";
import { AppConfigCache } from "src/model/app-config.js";

export interface AppCache {
  get<T>(key: string): Promise<T | undefined>;
  set<T>(key: string, value: T, ttl?: string | number): Promise<boolean>;
  clear(key: string | string[]): Promise<void>;
  flush(): Promise<void>;
  terminate(): Promise<void>;
}

export class RedisCache implements AppCache {
  private client: RedisClientType | null = null;
  private host: string;
  private port: number;

  constructor(config: AppConfigCache) {
    this.host = config.redisHost;
    this.port = config.redisPort;
  }

  private async connect(): Promise<void> {
    // this function is necessary because the redis client cannot be created in the constructor
    // due to the async nature.
    this.client = await createClient({
      url: `redis://@${this.host}:${this.port}`,
    });
    await this.client.connect();
  }

  async getClient(): Promise<RedisClientType | null> {
    if (this.client === null) {
      await this.connect();
    }
    return this.client;
  }

  async get<T>(key: string): Promise<T | undefined> {
    // Implementation here
    return undefined; // Placeholder return value
  }

  async set<T>(key: string, value: T, ttl?: string | number): Promise<boolean> {
    // Implementation here
    return true; // Placeholder return value
  }

  async clear(key: string | string[]): Promise<void> {
    // Implementation here
  }

  async flush(): Promise<void> {
    // Implementation here
  }

  async terminate(): Promise<void> {
    // Implementation here
    this.client?.destroy();
  }
}
