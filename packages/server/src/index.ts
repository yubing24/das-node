import Koa, { Context } from "koa";

const app = new Koa();

app.use(async (ctx: Context) => {
  ctx.body = "Hello, world!";
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
