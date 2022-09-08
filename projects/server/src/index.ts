import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Express + TypeScript server");
});
app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
