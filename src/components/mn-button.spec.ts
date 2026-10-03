import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MnButton from "./mn-button.vue";
import { expectNoA11yViolations } from "../tools/testing/axe";

describe("mn-button", () => {
  it("renders the label", () => {
    const wrapper = mount(MnButton, { props: { label: "confirm" } });
    expect(wrapper.text()).toBe("confirm");
  });

  it("applies the variant class, defaulting to primary", () => {
    expect(mount(MnButton, { props: { label: "ok" } }).classes()).toContain("primary");
    expect(mount(MnButton, { props: { label: "ok", variant: "danger" } }).classes()).toContain("danger");
  });

  it("ignores labelless when there's no icon to fall back to, so the text label stays visible", () => {
    const wrapper = mount(MnButton, { props: { label: "confirm", labelless: true } });
    expect(wrapper.classes()).not.toContain("labelless");
    expect(wrapper.text()).toBe("confirm");
  });

  it("applies labelless sizing and hides the text label only when labelless is paired with an icon", () => {
    const wrapper = mount(MnButton, { props: { label: "confirm", labelless: true, icon: "fas check" } });
    expect(wrapper.classes()).toContain("labelless");
    expect(wrapper.find(".mn-button-label").classes()).toContain("invisible");
  });

  it("is disabled and inert when the disabled prop is set", () => {
    const wrapper = mount(MnButton, { props: { label: "ok", disabled: true } });
    expect(wrapper.attributes("disabled")).toBeDefined();
  });

  it("renders as a native button so click and keyboard activation work for free", () => {
    const wrapper = mount(MnButton, { props: { label: "ok" } });
    expect(wrapper.element.tagName).toBe("BUTTON");
  });

  it("is reachable by keyboard focus", () => {
    const wrapper = mount(MnButton, { props: { label: "ok" }, attachTo: document.body });
    wrapper.element.focus();
    expect(document.activeElement).toBe(wrapper.element);
    wrapper.unmount();
  });

  it("is excluded from keyboard focus when disabled", () => {
    const wrapper = mount(MnButton, { props: { label: "ok", disabled: true }, attachTo: document.body });
    wrapper.element.focus();
    expect(document.activeElement).not.toBe(wrapper.element);
    wrapper.unmount();
  });

  it("does not emit a click while disabled", async () => {
    const wrapper = mount(MnButton, { props: { label: "ok", disabled: true } });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  it("has no automatically detectable accessibility violations, default state", async () => {
    const wrapper = mount(MnButton, { props: { label: "confirm" }, attachTo: document.body });
    await expectNoA11yViolations(wrapper.element);
    wrapper.unmount();
  });

  it("has no automatically detectable accessibility violations, disabled + labelless + icon state", async () => {
    const wrapper = mount(MnButton, {
      props: { label: "confirm", disabled: true, labelless: true, icon: "fas check" },
      attachTo: document.body,
    });
    await expectNoA11yViolations(wrapper.element);
    wrapper.unmount();
  });
});
