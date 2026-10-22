import assert from "node:assert/strict";
import test from "node:test";
import { contrastText, defaultTheme, parseTheme, themePresets, themeVariables } from "./theme.ts";

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
  assert.equal(contrastText(defaultTheme.glass), "#ffffff");
});


test("legacy saved themes migrate and section colors are validated", () => {
  const legacy = { ...defaultTheme };
  delete legacy.accent;
  assert.equal(parseTheme(legacy).accent, legacy.foreground);
  assert.equal(parseTheme({ ...defaultTheme, accent: "invalid" }), null);
});

test("presets change the page, sections, glass and native color scheme", () => {
  const palettes = themePresets.map(preset => themeVariables(preset.colors));
  for (const token of ["--background", "--foreground", "--accent", "--glass-color", "--primary"]) {
    assert.equal(new Set(palettes.map(palette => palette[token])).size, themePresets.length);
  }
  assert.equal(palettes[0]["color-scheme"], "light");
  assert.equal(palettes[2]["color-scheme"], "dark");
  for (const palette of palettes) {
    assert.equal(palette["--accent-foreground"], contrastText(palette["--accent"]));
  }
});
