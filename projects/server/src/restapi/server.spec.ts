import { describe, expect, test } from "@jest/globals";
import { Request, Response } from "express";
import { server } from "./server";

describe("Server API Tests", () => {
  test("should return text if server is healthy", async () => {
    const req: any = {};
    const res: any = {};

    const output = server().health(req, res);
    expect(output).toEqual("not bad");
  });
});
