import { describe, expect, test } from "@jest/globals";

describe("index module", () => {
  it("should be able to run", () => {
    expect("hello").toBeTruthy();
  });
});
