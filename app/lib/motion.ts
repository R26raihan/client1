// Only animate panels opened by a click; page content never animates on scroll.
export function startPageMotion(root: ParentNode = document) {
  if (!("MutationObserver" in globalThis) || typeof window.matchMedia !== "function") return () => {};
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const active = new Set<Animation>();
  const mutations = new MutationObserver(records => {
    if (preference.matches) return;
    for (const record of records) {
      const panel = record.target;
      if (!(panel instanceof HTMLElement) || !panel.matches("[data-motion-panel]") || panel.hidden || typeof panel.animate !== "function") continue;
      if (record.attributeName === "open" && !panel.hasAttribute("open")) continue;
      const animation = panel.animate([
        { opacity: 0, transform: "translateY(-6px)" },
        { opacity: 1, transform: "translateY(0)" },
      ], { duration: 200, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "backwards" });
      active.add(animation);
      animation.onfinish = animation.oncancel = () => active.delete(animation);
    }
  });
  mutations.observe(root, { subtree: true, attributes: true, attributeFilter: ["hidden", "open"] });
  const stop = () => { active.forEach(animation => animation.cancel()); active.clear(); };
  const onPreferenceChange = () => { if (preference.matches) stop(); };
  preference.addEventListener("change", onPreferenceChange);
  return () => { mutations.disconnect(); preference.removeEventListener("change", onPreferenceChange); stop(); };
}
