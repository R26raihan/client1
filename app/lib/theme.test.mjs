import assert from "node:assert/strict";
import test from "node:test";
import { contrastText, defaultTheme, parseTheme, themePresets } from "./theme.ts";

test("saved themes accept presets and reject malformed storage", () => {
  for (const preset of themePresets) {
    assert.deepEqual(parseTheme(JSON.parse(JSON.stringify(preset.colors))), preset.colors);
  }
  for (const invalid of [null, [], {}, { ...defaultTheme, primary: "red;display:none" }, { ...defaultTheme, glass: "#fff" }, { ...defaultTheme, opacity: 59 }, { ...defaultTheme, opacity: 101 }, { ...defaultTheme, opacity: "85" }, { ...defaultTheme, opacity: NaN }]) {
    assert.equal(parseTheme(invalid), null);
  }
  assert.deepEqual(parseTheme({ ...defaultTheme, unexpected: "ignored" }), defaultTheme);
});

test("button labels adapt to both bright and dark colors", () => {
  assert.equal(contrastText("#ffffff"), "#000000");
  assert.equal(contrastText("#000000"), "#ffffff");
  assert.equal(contrastText(defaultTheme.primary), "#000000");
  assert.equal(contrastText(defaultTheme.glass), "#000000");
});
