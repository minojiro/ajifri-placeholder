import { expect, test } from "bun:test";
import { ajifriPlaceholder } from "./";

test("main", () => {
  const text = ajifriPlaceholder(10000);
  expect(text.length).toBe(10000);
  expect(text).toContain("アジフライ");
  expect(typeof text === "string").toBe(true);
});

test("range", () => {
  const lengthSet = new Set<number>();
  for (let i = 0; i < 1000; i++) {
    lengthSet.add(ajifriPlaceholder(10, 15).length);
  }
  expect(lengthSet.has(0)).toBeFalse();
  expect(lengthSet.has(9)).toBeFalse();
  expect(lengthSet.has(10)).toBeTrue();
  expect(lengthSet.has(15)).toBeTrue();
  expect(lengthSet.has(16)).toBeFalse();
});

test("invalid length", () => {
  expect(ajifriPlaceholder(0).length).toBe(0);
  expect(ajifriPlaceholder(-1).length).toBe(0);
  expect(ajifriPlaceholder(10, 1).length).toBe(0);
});
