import axe from "axe-core";
import { expect } from "vitest";

export async function expectNoA11yViolations(container: Element): Promise<void> {
  // jsdom doesn't paint anything, so color-contrast checks are meaningless (and noisy) here
  const results = await axe.run(container, { rules: { "color-contrast": { enabled: false } } });
  const summary = results.violations
    .map((violation) => `- [${violation.id}] ${violation.help} (${violation.nodes.length} node(s))`)
    .join("\n");

  expect(results.violations, summary).toHaveLength(0);
}
