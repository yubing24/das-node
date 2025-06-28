import * as esbuild from "esbuild";

let result = await esbuild.build({
  bundle: true,
  entryPoints: ["./src/index.ts"],
  // some dependencies are not ESM compatible and it's better to keep them as runtime dependencies
  external: ["@koa/router", "@prisma/client", "koa", "redis"],
  format: "esm",
  outdir: "./dist",
  packages: "external",
  platform: "node",
  sourcemap: true,
  target: ["es2022"],
});

console.log(result);
