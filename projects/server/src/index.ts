import express from "express";
import * as dotenv from "dotenv";

const app = express();
const port = 3000;

dotenv.config();

app.get("/", (req, res) => {
  res.send("Express + TypeScript server");
});
app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

console.log("🚀 Application starting");
