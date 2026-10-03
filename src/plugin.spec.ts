import { describe, it, expect, beforeEach } from "vitest";
import { createApp, defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { minuit, useMinuit } from "./plugin";
import { defaultThemeOptions } from "./tools/theme";

describe("minuit plugin", () => {
  beforeEach(() => {
    document.documentElement.removeAttribute("data-theme");
    // theme.js's default color ("blue-200") is looked up via getComputedStyle, which jsdom won't
    // resolve from an actual stylesheet without extra setup — define it directly so the default
    // path works the same as a hex color does (see the "no options" test below), matching
    // variables.css's real value.
    document.documentElement.style.cssText = "--blue-200: oklch(88.2% 0.059 254.128);";
  });

  it("generates the theme from the given options", () => {
    createApp({ template: "<div />" }).use(minuit({ color: "#3b82f6" }));
    expect(document.documentElement.style.getPropertyValue("--primary-background")).not.toBe("");
  });

  it("sets data-theme when a mode is given", () => {
    createApp({ template: "<div />" }).use(minuit({ mode: "dark" }));
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("leaves data-theme untouched when no mode is given, following the OS preference default", () => {
    createApp({ template: "<div />" }).use(minuit({ color: "#3b82f6" }));
    expect(document.documentElement.getAttribute("data-theme")).toBeNull();
  });

  it("works with no options at all", () => {
    expect(() => createApp({ template: "<div />" }).use(minuit())).not.toThrow();
  });

  it("does nothing outside the browser (SSR-safe)", () => {
    const originalDocument = globalThis.document;
    // @ts-expect-error simulating an SSR environment where document doesn't exist
    delete globalThis.document;
    try {
      expect(() => createApp({ template: "<div />" }).use(minuit({ mode: "dark" }))).not.toThrow();
    } finally {
      globalThis.document = originalDocument;
    }
  });

  describe("useMinuit()", () => {
    it("throws when called without the plugin installed", () => {
      const Consumer = defineComponent({
        setup() {
          useMinuit();
          return () => null;
        },
      });
      // @vue/test-utils surfaces a component's setup() error via mount() itself
      expect(() => mount(Consumer)).toThrow(/app\.use\(minuit\(\)\)/);
    });

    it("gives descendant components the same reactive instance the plugin installed", () => {
      let injected: ReturnType<typeof useMinuit> | undefined;
      const Consumer = defineComponent({
        setup() {
          injected = useMinuit();
          return () => null;
        },
      });

      mount(Consumer, { global: { plugins: [minuit({ mode: "dark", color: "#3b82f6" })] } });

      expect(injected?.mode).toBe("dark");
      expect(injected?.color).toBe("#3b82f6");
    });

    it("seeds color/radius/fontBody/fontTitle with resolved defaults, so they're never undefined", () => {
      let injected: ReturnType<typeof useMinuit> | undefined;
      const Consumer = defineComponent({
        setup() {
          injected = useMinuit();
          return () => null;
        },
      });

      mount(Consumer, { global: { plugins: [minuit()] } });

      expect(injected?.color).toBe(defaultThemeOptions.color);
      expect(injected?.radius).toBe(defaultThemeOptions.radius);
      expect(injected?.fontBody).toBe(defaultThemeOptions.fontBody);
      expect(injected?.fontTitle).toBe(defaultThemeOptions.fontTitle);
    });

    it("does not seed mode with a resolved value — undefined is meaningful (follow the OS preference)", () => {
      let injected: ReturnType<typeof useMinuit> | undefined;
      const Consumer = defineComponent({
        setup() {
          injected = useMinuit();
          return () => null;
        },
      });

      mount(Consumer, { global: { plugins: [minuit()] } });

      expect(injected?.mode).toBeUndefined();
    });

    it("re-applies the theme reactively when a consumer mutates the injected instance", async () => {
      let injected!: ReturnType<typeof useMinuit>;
      const Consumer = defineComponent({
        setup() {
          injected = useMinuit();
          return () => null;
        },
      });

      mount(Consumer, { global: { plugins: [minuit({ mode: "light" })] } });
      expect(document.documentElement.getAttribute("data-theme")).toBe("light");

      injected.mode = "dark";
      await Promise.resolve(); // let the watcher's default (pre-flush) scheduling run

      expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    });

    it("removes data-theme when a consumer sets mode back to undefined", async () => {
      let injected!: ReturnType<typeof useMinuit>;
      const Consumer = defineComponent({
        setup() {
          injected = useMinuit();
          return () => null;
        },
      });

      mount(Consumer, { global: { plugins: [minuit({ mode: "dark" })] } });
      expect(document.documentElement.getAttribute("data-theme")).toBe("dark");

      injected.mode = undefined;
      await Promise.resolve();

      expect(document.documentElement.getAttribute("data-theme")).toBeNull();
    });
  });
});
