import test from "node:test";
import assert from "node:assert";
import { sumar } from "./suma.js";

test("suma 2 + 3", () => {
  assert.strictEqual(sumar(2, 3), 5);
});