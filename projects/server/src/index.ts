import express from "express";
import * as dotenv from "dotenv";
import serveStatic from "serve-static";
import path from "path";

const app = express();

// TODO: make this an env variable
const port = 3000;

// TODO: make this an env variable
const SPA_DIRECTORY = "../../frontend/dist/das-frontend";

dotenv.config();

app.get("/health", (req, res) => {
  res.send("Good!");
});

app.use(serveStatic(path.join(__dirname, SPA_DIRECTORY)));

app.listen(port, () => {
  const spaPath = path.join(__dirname, SPA_DIRECTORY, "index.html");
  console.log(`Assumed SPA PATH: ${spaPath}`);
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

console.log("🚀 Application starting");
