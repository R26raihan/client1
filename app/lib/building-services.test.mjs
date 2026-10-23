import assert from "node:assert/strict";
import test from "node:test";
import { buildingServices, designEstimate, dummyInteriorRate } from "./building-services.ts";

test("dummy architecture estimates use the selected building rate", () => {
  assert.equal(designEstimate("ruko", 250, false), 37500000);
  assert.equal(designEstimate("villa", 120.5, false), 24100000);
  for (const service of buildingServices) {
    assert.equal(designEstimate(service.id, 300, true) - designEstimate(service.id, 300, false), 300 * dummyInteriorRate);
  }
});

test("invalid areas and unknown building types produce no quote", () => {
  for (const area of [0, -1, NaN, Infinity]) assert.equal(designEstimate("ruko", area, true), 0);
  assert.equal(designEstimate("unknown", 250, false), 0);
});
