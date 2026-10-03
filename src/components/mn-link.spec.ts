import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory, type Router } from "vue-router";
import MnLink from "./mn-link.vue";
import { expectNoA11yViolations } from "../tools/testing/axe";

let router: Router;

beforeEach(async () => {
  router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: "/", component: { template: "<div />" } },
      { path: "/about", component: { template: "<div />" } },
    ],
  });
  router.push("/");
  await router.isReady();
});

describe("mn-link", () => {
  it("renders an internal link as a router-driven anchor", () => {
    const wrapper = mount(MnLink, {
      props: { label: "about", to: "/about" },
      global: { plugins: [router] },
    });
    expect(wrapper.element.tagName).toBe("A");
    expect(wrapper.text()).toBe("about");
  });

  it("renders an external link with target=_blank and a safe rel", () => {
    const wrapper = mount(MnLink, {
      props: { label: "docs", to: "https://example.com" },
      global: { plugins: [router] },
    });
    expect(wrapper.attributes("target")).toBe("_blank");
    expect(wrapper.attributes("rel")).toBe("noopener noreferrer");
  });

  it("ignores labelless when there's no icon to fall back to, so the text label stays visible", () => {
    const wrapper = mount(MnLink, {
      props: { label: "about", to: "/about", labelless: true },
      global: { plugins: [router] },
    });
    expect(wrapper.classes()).not.toContain("labelless");
    expect(wrapper.text()).toBe("about");
  });

  it("applies labelless sizing and hides the text label only when labelless is paired with an icon", () => {
    const wrapper = mount(MnLink, {
      props: { label: "about", to: "/about", labelless: true, icon: "fas check" },
      global: { plugins: [router] },
    });
    expect(wrapper.classes()).toContain("labelless");
    expect(wrapper.find(".mn-link-label").classes()).toContain("invisible");
  });

  it("is reachable by keyboard focus", () => {
    const wrapper = mount(MnLink, {
      props: { label: "about", to: "/about" },
      global: { plugins: [router] },
      attachTo: document.body,
    });
    wrapper.element.focus();
    expect(document.activeElement).toBe(wrapper.element);
    wrapper.unmount();
  });

  it("does not mark an internal link as external", () => {
    const wrapper = mount(MnLink, {
      props: { label: "about", to: "/about" },
      global: { plugins: [router] },
    });
    expect(wrapper.attributes("target")).toBeUndefined();
  });

  it("has no automatically detectable accessibility violations, external link with icon", async () => {
    const wrapper = mount(MnLink, {
      props: { label: "docs", to: "https://example.com", icon: "fas check" },
      global: { plugins: [router] },
      attachTo: document.body,
    });
    await expectNoA11yViolations(wrapper.element);
    wrapper.unmount();
  });
});
