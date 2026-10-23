import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import { virtualTours, virtualTourUrl } from "./virtual-tours.ts";

test("each tour uses a distinct panorama and an existing preview", () => {
  assert.equal(new Set(virtualTours.map(tour => tour.id)).size, 4);
  for (const tour of virtualTours) {
    assert.ok(existsSync(new URL(`../../public${tour.preview}`, import.meta.url)));
    const url = new URL(virtualTourUrl(tour), "https://loka.example");
    const parameters = new URLSearchParams(url.hash.slice(1));
    assert.ok(parameters.get("panorama").endsWith(`/${tour.id}.webp`));
    assert.ok(existsSync(new URL(`../../public${parameters.get("panorama")}`, import.meta.url)));
    assert.equal(url.pathname, "/vr-viewer.html");
    assert.equal(parameters.get("title"), tour.title);
    assert.equal(parameters.get("author"), `${tour.author} / Poly Haven`);
    assert.ok(!url.hash.includes("+")); // The hosted viewer uses decodeURIComponent, not form decoding.
    for (const key of parameters.keys()) {
      assert.ok(["panorama", "autoLoad", "hfov", "title", "author"].includes(key));
    }
  }
});
