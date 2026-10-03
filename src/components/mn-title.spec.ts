import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MnTitle from "./mn-title.vue";
import { expectNoA11yViolations } from "../tools/testing/axe";

describe("mn-title", () => {
  it("renders the tag it's given", () => {
    const wrapper = mount(MnTitle, { props: { tag: "h2" }, slots: { default: "Section title" } });
    expect(wrapper.element.tagName).toBe("H2");
    expect(wrapper.text()).toBe("Section title");
  });

  it("applies the align class", () => {
    const wrapper = mount(MnTitle, { props: { tag: "h1", align: "end" }, slots: { default: "Title" } });
    expect(wrapper.classes()).toContain("end");
  });

  it("has no automatically detectable accessibility violations", async () => {
    const wrapper = mount(MnTitle, {
      props: { tag: "h1" },
      slots: { default: "Page title" },
      attachTo: document.body,
    });
    await expectNoA11yViolations(wrapper.element);
    wrapper.unmount();
  });
});
