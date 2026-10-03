import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MnText from "./mn-text.vue";
import { expectNoA11yViolations } from "../tools/testing/axe";

describe("mn-text", () => {
  it("renders its slot content in a paragraph", () => {
    const wrapper = mount(MnText, { slots: { default: "Some body copy" } });
    expect(wrapper.element.tagName).toBe("P");
    expect(wrapper.text()).toBe("Some body copy");
  });

  it("applies modifier classes for align, size, weight and style props", () => {
    const wrapper = mount(MnText, {
      props: { align: "center", large: true, muted: true, bold: true, italic: true },
      slots: { default: "Text" },
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(["center", "large", "muted", "bold", "italic"]));
  });

  it("has no automatically detectable accessibility violations", async () => {
    const wrapper = mount(MnText, { slots: { default: "Some body copy" }, attachTo: document.body });
    await expectNoA11yViolations(wrapper.element);
    wrapper.unmount();
  });
});
