import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MnContainer from "./mn-container.vue";
import { expectNoA11yViolations } from "../tools/testing/axe";

describe("mn-container", () => {
  it("renders a div by default", () => {
    const wrapper = mount(MnContainer, { slots: { default: "Content" } });
    expect(wrapper.element.tagName).toBe("DIV");
  });

  it("renders the tag it's given", () => {
    const wrapper = mount(MnContainer, { props: { tag: "section" }, slots: { default: "Content" } });
    expect(wrapper.element.tagName).toBe("SECTION");
  });

  it("applies size and flow classes", () => {
    const wrapper = mount(MnContainer, { props: { size: "medium", flow: "row" }, slots: { default: "x" } });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(["medium", "row"]));
  });

  it("has no automatically detectable accessibility violations", async () => {
    const wrapper = mount(MnContainer, {
      props: { tag: "section", surface: true },
      slots: { default: "Content" },
      attachTo: document.body,
    });
    await expectNoA11yViolations(wrapper.element);
    wrapper.unmount();
  });
});
