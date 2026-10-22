import assert from "node:assert/strict";
import test from "node:test";
import { startPageMotion } from "./motion.ts";

function environment(reduced = false) {
  const state = { observed: [], unobserved: [], animations: [], observerDisconnected: false, mutationsDisconnected: false };
  const preference = {
    matches: reduced,
    addEventListener: (_name, callback) => { state.changePreference = callback; },
    removeEventListener: () => { state.listenerRemoved = true; },
  };
  class Element {
    constructor(kind) { this.dataset = { motion: kind }; this.hidden = false; this.children = []; }
    querySelectorAll() { return this.children; }
    matches(selector) { return selector === "[data-motion]" ? Boolean(this.dataset.motion) : Boolean(this.panel); }
    hasAttribute() { return Boolean(this.open); }
    animate(frames, options) {
      const animation = { frames, options, cancelled: false, cancel() { this.cancelled = true; this.oncancel?.(); } };
      state.animations.push(animation);
      return animation;
    }
  }
  class Observer {
    constructor(callback) { state.intersect = callback; }
    observe(element) { state.observed.push(element); }
    unobserve(element) { state.unobserved.push(element); }
    disconnect() { state.observerDisconnected = true; }
  }
  globalThis.HTMLElement = Element;
  globalThis.IntersectionObserver = Observer;
  globalThis.MutationObserver = class {
    constructor(callback) { state.mutate = callback; }
    observe() {}
    disconnect() { state.mutationsDisconnected = true; }
  };
  globalThis.window = { IntersectionObserver: Observer, matchMedia: () => preference };
  const root = new Element();
  return { root, Element, preference, state };
}

test("page content is never observed or animated on scroll", () => {
  const { root, Element, state } = environment();
  root.children = [new Element("title"), new Element("image"), new Element("card")];
  const cleanup = startPageMotion(root);
  assert.equal(state.intersect, undefined);
  assert.equal(state.observed.length, 0);
  assert.equal(state.animations.length, 0);
  cleanup();
  assert.ok(state.mutationsDisconnected && state.listenerRemoved);
});

test("reduced motion skips entrances and cancels running animations when enabled", () => {
  const { root, Element, preference, state } = environment(true);
  const card = new Element("card"); root.children = [card];
  const cleanup = startPageMotion(root);

  assert.equal(state.animations.length, 0);
  preference.matches = false;
  const panel = new Element(); panel.panel = true;
  state.mutate([{ type: "attributes", target: panel, attributeName: "hidden" }]);
  assert.equal(state.animations[0].options.duration, 200);
  preference.matches = true; state.changePreference();
  assert.equal(state.animations[0].cancelled, true);
  cleanup();
});

test("filtered content stays static and only opening panels animate", () => {
  const { root, Element, state } = environment();
  const cleanup = startPageMotion(root);
  const card = new Element("card");
  state.mutate([{ type: "childList", addedNodes: [card] }]);
  state.mutate([{ type: "childList", addedNodes: [card] }]);
  assert.equal(state.observed.length, 0);
  const panel = new Element(); panel.panel = true; panel.hidden = true;
  state.mutate([{ type: "attributes", target: panel, attributeName: "hidden" }]);
  assert.equal(state.animations.length, 0);
  panel.hidden = false;
  state.mutate([{ type: "attributes", target: panel, attributeName: "hidden" }]);
  assert.equal(state.animations.length, 1);
  cleanup();
});

test("older browsers retain readable content without an observer", () => {
  globalThis.window = {};
  assert.doesNotThrow(() => startPageMotion({})());
});
