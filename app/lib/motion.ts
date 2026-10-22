type MotionKind = "title" | "text" | "image" | "card" | "step" | "fade" | "menu" | "hero";

const frames: Record<MotionKind, Keyframe[]> = {
  title: [{ opacity: 0.3, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
  text: [{ opacity: 0.4 }, { opacity: 1 }],
  image: [{ opacity: 0.5 }, { opacity: 1 }],
  hero: [{ opacity: 0.7, transform: "scale(1.035)" }, { opacity: 1, transform: "scale(1)" }],
  card: [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
  step: [{ opacity: 0.3, transform: "translateX(-12px)" }, { opacity: 1, transform: "translateX(0)" }],
  fade: [{ opacity: 0.6 }, { opacity: 1 }],
  menu: [{ opacity: 0, transform: "translateY(-6px)" }, { opacity: 1, transform: "translateY(0)" }],
};

// Content stays visible without JavaScript; animations only run after it enters the viewport.
export function startPageMotion(root: ParentNode = document) {
  if (!("IntersectionObserver" in window)) return () => {};
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const registered = new WeakSet<Element>();
  const active = new Set<Animation>();
  const play = (element: HTMLElement, kind: MotionKind, delay = 0) => {
    if (preference.matches || typeof element.animate !== "function") return;
    const animation = element.animate(frames[kind], {
      duration: kind === "menu" ? 200 : kind === "image" || kind === "hero" ? 1000 : 700,
      delay,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "backwards",
    });
    active.add(animation);
    animation.onfinish = animation.oncancel = () => active.delete(animation);
  };
  const observer = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).forEach((entry, index) => {
      observer.unobserve(entry.target);
      const element = entry.target as HTMLElement;
      const kind = element.dataset.motion as MotionKind;
      play(element, kind in frames ? kind : "fade", Math.min(index * 65, 240));
    });
  }, { threshold: 0.08 });

  const register = (scope: ParentNode) => {
    scope.querySelectorAll<HTMLElement>("[data-motion]").forEach(element => {
      if (registered.has(element)) return;
      registered.add(element);
      observer.observe(element);
    });
  };
  register(root);
  const mutations = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === "childList") {
        record.addedNodes.forEach(node => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches("[data-motion]") && !registered.has(node)) {
            registered.add(node);
            observer.observe(node);
          }
          register(node);
        });
      } else if (record.target instanceof HTMLElement && record.target.matches("[data-motion-panel]") && !record.target.hidden) {
        if (record.attributeName !== "open" || record.target.hasAttribute("open")) play(record.target, "menu");
      }
    }
  });
  mutations.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["hidden", "open"] });
  const stop = () => { active.forEach(animation => animation.cancel()); active.clear(); };
  const onPreferenceChange = () => { if (preference.matches) stop(); };
  preference.addEventListener("change", onPreferenceChange);
  return () => { observer.disconnect(); mutations.disconnect(); preference.removeEventListener("change", onPreferenceChange); stop(); };
}
