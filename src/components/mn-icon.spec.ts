import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MnIcon from "./mn-icon.vue";
import { expectNoA11yViolations } from "../tools/testing/axe";

describe("mn-icon", () => {
  it("has a single root element, so it can be styled/ref'd/transformed directly", () => {
    const wrapper = mount(MnIcon, { props: { icon: "fas check", label: "Success" } });
    expect(wrapper.element.tagName).toBe("SPAN");
    expect(wrapper.element.children).toHaveLength(2); // the rendered svg + the hidden label span
  });

  it("is hidden from assistive tech when it has no label (decorative)", () => {
    const wrapper = mount(MnIcon, { props: { icon: "fas check" } });
    expect(wrapper.attributes("aria-hidden")).toBe("true");
    expect(wrapper.attributes("aria-labelledby")).toBeUndefined();
  });

  it("exposes a label to assistive tech via aria-labelledby + a visually hidden text node", () => {
    // aria-labelledby (not aria-label) so the name is real, visible-to-the-DOM text: browser
    // page-translation tools translate text nodes, not attribute values, so aria-label would
    // leave icon names untranslated while the rest of the page gets translated.
    const wrapper = mount(MnIcon, { props: { icon: "fas check", label: "Success" } });
    expect(wrapper.attributes("aria-hidden")).toBe("false");
    const labelledBy = wrapper.attributes("aria-labelledby");
    expect(labelledBy).toBeTruthy();
    expect(wrapper.find(`#${labelledBy}`).text()).toBe("Success");
  });

  it("defaults to the solid style when only an icon name is given", () => {
    const wrapper = mount(MnIcon, { props: { icon: "check" } });
    expect(wrapper.find("svg").attributes("data-icon")).toBe("check");
    expect(wrapper.find("svg").attributes("data-prefix")).toBe("fas");
  });

  it("applies the color and rtl modifier classes to the root element", () => {
    const wrapper = mount(MnIcon, { props: { icon: "fas check", color: "danger" } });
    expect(wrapper.classes()).toContain("danger");

    const rtl = mount(MnIcon, { props: { icon: "fas arrow-up-right-from-square -rtl" } });
    expect(rtl.classes()).toContain("rtl");
  });

  it("has no automatically detectable accessibility violations, labeled state", async () => {
    const wrapper = mount(MnIcon, { props: { icon: "fas check", label: "Success" }, attachTo: document.body });
    await expectNoA11yViolations(wrapper.element);
    wrapper.unmount();
  });
});
