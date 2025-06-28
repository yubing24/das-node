import { Context } from "koa";
import Router from "@koa/router";
import { AppServices } from "src/app-services.js";

export const referenceApis = (appServices: AppServices) => {
  const { prismaClient } = appServices;
  const getCountries = async (ctx: Context) => {
    const countries = await prismaClient.country.findMany({
      orderBy: {
        name: "asc",
      },
    });

    ctx.body = countries;
  };
  return { getCountries };
};
