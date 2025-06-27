import { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension.js";

export const getClaims = (user: User, use: any, scope: any) => {
  return {
    sub: user.id,
    email: user.email,
    email_verified: false, // for now
    fmaily_name: user.lastName,
    given_name: user.firstName,
    locale: "en-US", // default for now
    name: `${user.firstName} ${user.lastName}`,
  };
};

export const userTransactions = (client: PrismaClient) => {};
