import { describe, test, expect } from "vitest";
import { PlacementSheet, RecallSheet } from "./index.js";
import { faker } from "@faker-js/faker";

describe("Test recall sheet", () => {
  test("should check if sheet has correct recalls", () => {
    const sheet = new RecallSheet(faker.string.nanoid(), faker.word.noun(), [
      "A",
      "B",
      "C",
    ]);
    expect(sheet.hasCorrectRecalls(3)).toBe(true);
    expect(sheet.hasCorrectRecalls(2)).toBe(false);
    expect(sheet.hasCorrectRecalls(4)).toBe(false);
  });

  test("should test for duplicate recalls", () => {
    const sheetWithDuplicates = new RecallSheet(
      faker.string.nanoid(),
      faker.word.noun(),
      ["A", "B", "A"]
    );
    expect(sheetWithDuplicates.hasDuplicateRecalls()).toBe(true);

    const sheetWithoutDuplicates = new RecallSheet(
      faker.string.nanoid(),
      faker.word.noun(),
      ["A", "B", "C"]
    );
    expect(sheetWithoutDuplicates.hasDuplicateRecalls()).toBe(false);
  });
});

describe("Test placement sheet", () => {
  test("should check if placements are unique", () => {
    const sheetWithDuplicates = new PlacementSheet(
      faker.string.nanoid(),
      faker.word.noun(),
      [
        "101",
        "102",
        "101", // Duplicate placement
      ]
    );
    expect(sheetWithDuplicates.hasDuplicatePlacements()).toBe(true);

    const sheetWithoutDuplicates = new RecallSheet(
      faker.string.nanoid(),
      faker.word.noun(),
      ["101", "102", "103"]
    );
    expect(sheetWithoutDuplicates.hasDuplicateRecalls()).toBe(false);
  });
});
