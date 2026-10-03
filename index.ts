// ::: components

import MnButton from "./src/components/mn-button.vue";
import MnContainer from "./src/components/mn-container.vue";
import MnIcon from "./src/components/mn-icon.vue";
import MnLink from "./src/components/mn-link.vue";
import MnTitle from "./src/components/mn-title.vue";
import MnText from "./src/components/mn-text.vue";

export { MnButton, MnContainer, MnIcon, MnLink, MnTitle, MnText };

export type { MnButtonProps, MnButtonVariant } from "./src/components/mn-button.vue";
export type { MnContainerProps, MnContainerSize, MnContainerFlow } from "./src/components/mn-container.vue";
export type { MnIconProps, MnIconColor } from "./src/components/mn-icon.vue";
export type { MnLinkProps, MnLinkVariant } from "./src/components/mn-link.vue";
export type { MnTitleProps, MnTitleTag, MnTitleAlign } from "./src/components/mn-title.vue";
export type { MnTextProps, MnTextAlign } from "./src/components/mn-text.vue";

// ::: theme

export { generateTheme } from "./src/tools/theme.js";
export type { MnThemeOptions, MnThemeRadius } from "./src/tools/theme.js";

// ::: plugin

export { minuit, useMinuit } from "./src/plugin.js";
export type { MnPluginOptions, MnMinuitInstance } from "./src/plugin.js";