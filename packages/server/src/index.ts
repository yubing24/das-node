import Koa, { Context } from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();

router.get("/hello", (ctx: Context, next: any) => {
  ctx.body = "Hello, world from Koa Routers";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
