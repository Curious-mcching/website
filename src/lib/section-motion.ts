export function setupPillarMotion(elements: HTMLElement[], preference: MediaQueryList) {
  let observer: IntersectionObserver | undefined;
  let disposed = false;

  const configure = () => {
    observer?.disconnect();
    elements.forEach((element) => element.removeAttribute("data-motion-active"));
    if (preference.matches || typeof IntersectionObserver === "undefined") return;

    const current = new IntersectionObserver((entries) => {
      if (disposed || observer !== current || preference.matches) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.setAttribute("data-motion-active", "");
        else entry.target.removeAttribute("data-motion-active");
      });
    }, { threshold: 0.25 });
    observer = current;
    elements.forEach((element) => observer?.observe(element));
  };

  configure();
  preference.addEventListener("change", configure);
  return () => {
    disposed = true;
    observer?.disconnect();
    preference.removeEventListener("change", configure);
    elements.forEach((element) => element.removeAttribute("data-motion-active"));
  };
}

export function setupSectionEntrances(elements: HTMLElement[], preference: MediaQueryList) {
  const played = new WeakSet<Element>();
  let observer: IntersectionObserver | undefined;
  let disposed = false;
  const clearEntrance = (event: Event) => {
    const element = event.currentTarget as HTMLElement;
    played.add(element);
    observer?.unobserve(element);
    element.removeAttribute("data-motion");
  };
  const events = ["animationend", "animationcancel", "focusin"];

  const configure = () => {
    observer?.disconnect();
    elements.forEach((element) => element.removeAttribute("data-motion"));
    if (preference.matches || typeof IntersectionObserver === "undefined") return;

    observer = new IntersectionObserver((entries) => {
      if (disposed) return;
      entries.forEach((entry) => {
        if (!entry.isIntersecting || played.has(entry.target)) return;
        played.add(entry.target);
        entry.target.setAttribute("data-motion", "enter");
        observer?.unobserve(entry.target);
      });
    });

    elements.forEach((element) => {
      if (played.has(element)) return;
      if (element.getBoundingClientRect().top < window.innerHeight) played.add(element);
      else observer?.observe(element);
    });
  };

  elements.forEach((element) => events.forEach((event) => element.addEventListener(event, clearEntrance)));
  configure();
  preference.addEventListener("change", configure);
  return () => {
    disposed = true;
    observer?.disconnect();
    preference.removeEventListener("change", configure);
    elements.forEach((element) => {
      element.removeAttribute("data-motion");
      events.forEach((event) => element.removeEventListener(event, clearEntrance));
    });
  };
}
