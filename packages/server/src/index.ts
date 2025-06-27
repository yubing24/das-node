import Koa, { Context } from "koa";
import Router from "@koa/router";
import helmet from "helmet";
import { promisify } from "node:util";
import { provider } from "./oidc-server/index.js";

const app = new Koa();
const router = new Router();

const directives = helmet.contentSecurityPolicy.getDefaultDirectives();
const helmetPromise = promisify(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives,
    },
  })
);

router.get("/hello", (ctx: Context, next: any) => {
  ctx.body = "Hello, world from Koa Routers";
});

app.use(async (ctx: Context, next: any) => {
  const origin = ctx.req.secure;
  ctx.req.secure = ctx.request.secure;
  await helmetPromise(ctx.req, ctx.res);
  ctx.req.secure = origin;
  return next();
});

app.use(router.routes()).use(router.allowedMethods());
app.use(routes(provider).routes());

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
