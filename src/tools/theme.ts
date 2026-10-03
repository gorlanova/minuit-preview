import Color from "colorjs.io";

export type MnThemeRadius = "sharp" | "soft";

export interface MnThemeOptions {
  /** A Tailwind color token like "blue-500", or a hex value like "#3b82f6". */
  color?: string;
  radius?: MnThemeRadius;
  fontBody?: string;
  fontTitle?: string;
  mode?: "light" | "dark";
}

/** The resolved values generateTheme() falls back to for any option that isn't given. */
export const defaultThemeOptions: Required<MnThemeOptions> = {
  color: "blue-200",
  radius: "soft",
  fontBody: "system-ui, sans-serif",
  fontTitle: "monospace",
  mode: "light",
};

interface OKLCH {
  l: number;
  c: number;
  h: number;
}

// converts hexadecimal color to oklch
function convertHexToOKLCH(hex: string): OKLCH {
  const color = new Color(hex).to("oklch");
  // hue is null for achromatic colors in colorjs.io's model — harmless to default, since
  // chroma is 0 in that case too, so hue has no visible effect either way
  return { l: color.l ?? 0, c: color.c ?? 0, h: color.h ?? 0 };
}


// converts tailwind color to oklch
function getTailwindColor(str: string): OKLCH {
  const variable = getComputedStyle(document.documentElement).getPropertyValue(`--${str}`);
  const color = new Color(variable).to("oklch");
  // hue is null for achromatic colors in colorjs.io's model — harmless to default, since
  // chroma is 0 in that case too, so hue has no visible effect either way
  return { l: color.l ?? 0, c: color.c ?? 0, h: color.h ?? 0 };
}

// clamp lightness
function clamp(lightness: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, lightness));
}

// normalize hue
function normalize(hue: number): number {
  return ((hue % 360) + 360) % 360;
}

// round and stringify number
function formatNumberDecimals(exp: number, steps: number): string {
  const rounding = Math.pow(10, steps);
  return (Math.round(exp * rounding) / rounding).toString();
}

// format oklch color
function getOKLCH(lightness: number, chroma: number, hue: number, alpha?: number): string {
  const l = formatNumberDecimals(lightness, 3),
    c = formatNumberDecimals(chroma, 3),
    h = formatNumberDecimals(hue, 1);
  return void 0 !== alpha && alpha < 1
    ? new Color(`oklch(${l} ${c} ${h} / ${formatNumberDecimals(alpha, 2)})`).display()
    : new Color(`oklch(${l} ${c} ${h})`).display();
}

// calculate oklch color
function calculateOKLCH(lightness: number, chroma: number, hue: number, alpha?: number): string {
  return getOKLCH(clamp(lightness, 0, 1), Math.max(0, chroma), normalize(hue), alpha);
}

// get radius value from name
function getRadiusValue(radius: MnThemeRadius): number {
  if (radius === "sharp") return 0;
  else return 0.5;
}

function generateTheme(options?: MnThemeOptions) {
  const { color, radius, fontBody, fontTitle } = { ...defaultThemeOptions, ...options };

  let oklch: OKLCH;
  if (color.startsWith("#")) {
    oklch = convertHexToOKLCH(color);
  } else {
    oklch = getTailwindColor(color);
  }
  const radiusValue = getRadiusValue(radius);
  const s = { l: oklch.l, c: oklch.c, h: oklch.h };
  const hue = s.h;
  const chroma = s.c;
  const isPrimaryLightEnough = s.l > 0.7;
  const isPrimaryVeryDark = s.l < 0.4;
  const darkModePrimaryLightness = isPrimaryVeryDark ? 0.98 : s.l;

  const theme: { light: Record<string, string>; dark: Record<string, string> } = {
    light: {
      "--app-background": calculateOKLCH(1, 0, 0),
      "--app-background-alt": calculateOKLCH(0.97, Math.min(0.02 * chroma, 0.005), hue),
      "--app-background-active": calculateOKLCH(0.965, Math.min(0.03 * chroma, 0.008), hue),
      "--app-border": calculateOKLCH(0.25, Math.min(0.3 * chroma, 0.09), hue, 0.15),
      "--app-ring": getOKLCH(clamp(s.l, 0.35, 0.9), chroma, normalize(hue), 0.9),
      "--app-text": calculateOKLCH(0.25, Math.min(0.3 * chroma, 0.09), hue),
      "--app-text-muted": calculateOKLCH(0.52, Math.min(0.2 * chroma, 0.055), hue),

      "--sidebar-background": calculateOKLCH(0.984, Math.min(0.02 * chroma, 0.004), hue),
      "--sidebar-background-active": calculateOKLCH(0.965, Math.min(0.03 * chroma, 0.008), hue),
      "--sidebar-border": calculateOKLCH(0.25, Math.min(0.3 * chroma, 0.09), hue, 0.15),
      "--sidebar-ring": calculateOKLCH(0.925, Math.min(0.05 * chroma, 0.015), hue),
      "--sidebar-text": calculateOKLCH(0.25, Math.min(0.3 * chroma, 0.09), hue),

      "--primary-background": calculateOKLCH(s.l, chroma, hue),
      "--primary-text": isPrimaryLightEnough
        ? calculateOKLCH(0.1, Math.min(0.2 * chroma, 0.05), hue)
        : calculateOKLCH(1, 0, 0),

      "--secondary-background": calculateOKLCH(0.955, Math.min(0.1 * chroma, 0.03), hue),
      "--secondary-text": calculateOKLCH(0.25, Math.min(0.5 * chroma, 0.15), hue),

      "--success-background": calculateOKLCH(0.596, 0.145, 163.225, 0.1),
      "--success-text": calculateOKLCH(0.596, 0.145, 163.225),

      "--warning-background": calculateOKLCH(0.769, 0.188, 70.08, 0.1),
      "--warning-text": calculateOKLCH(0.769, 0.188, 70.08),

      "--danger-background": calculateOKLCH(0.551, 0.245, 27.33, 0.1),
      "--danger-text": calculateOKLCH(0.551, 0.245, 27.33),

      "--chart-1": calculateOKLCH(0.25, Math.min(chroma, 0.26), hue),
      "--chart-2": calculateOKLCH(0.35, Math.min(chroma, 0.25), hue),
      "--chart-3": calculateOKLCH(0.55, Math.min(chroma, 0.22), hue),
      "--chart-4": calculateOKLCH(0.75, Math.min(chroma, 0.18), hue),
      "--chart-5": calculateOKLCH(0.85, Math.min(chroma, 0.13), hue),

      "--font-body": `${fontBody}`,
      "--font-title": `${fontTitle || fontBody}`,

      "--radius-small": `calc(${radiusValue}rem - 4px)`,
      "--radius-medium": `calc(${radiusValue}rem - 2px)`,
      "--radius-large": `${radiusValue}rem`,

      "--shadow-2xs": `0 1px 0 0 ${calculateOKLCH(0.55, Math.min(0.15 * chroma, 0.04), hue, 0.05)}`,
      "--shadow-xs": `0 1px 2px 0 ${calculateOKLCH(0.55, Math.min(0.15 * chroma, 0.04), hue, 0.05)}`,
      "--shadow-sm": `0 1px 3px 0 ${calculateOKLCH(0.55, Math.min(0.15 * chroma, 0.04), hue, 0.1)}, 0 1px 2px -1px ${calculateOKLCH(0.55, Math.min(0.15 * chroma, 0.04), hue, 0.1)}`,
      "--shadow-md": `0 4px 6px -1px ${calculateOKLCH(0.55, Math.min(0.15 * chroma, 0.04), hue, 0.1)}, 0 2px 4px -2px ${calculateOKLCH(0.55, Math.min(0.15 * chroma, 0.04), hue, 0.1)}`,
      "--shadow-lg": `0 10px 15px -3px ${calculateOKLCH(0.55, Math.min(0.15 * chroma, 0.04), hue, 0.1)}, 0 4px 6px -4px ${calculateOKLCH(0.55, Math.min(0.15 * chroma, 0.04), hue, 0.1)}`,
      "--shadow-xl": `0 20px 25px -5px oklch(0 0 0 / 0.1), 0 8px 10px -6px ${calculateOKLCH(0.55, Math.min(0.15 * chroma, 0.04), hue, 0.1)}`,
      "--shadow-2xl": `0 25px 50px -12px ${calculateOKLCH(0.55, Math.min(0.15 * chroma, 0.04), hue, 0.15)}`,
    },
    dark: {
      "--app-background": calculateOKLCH(0.15, Math.min(0.1 * chroma, 0.03), hue),
      "--app-background-alt": calculateOKLCH(0.2, Math.min(0.07 * chroma, 0.02), hue),
      "--app-background-active": calculateOKLCH(0.38, Math.min(0.1 * chroma, 0.03), hue),
      "--app-border": calculateOKLCH(0.29, Math.min(0.07 * chroma, 0.02), hue),
      "--app-ring": calculateOKLCH(clamp(s.l + 0.08, 0.45, 0.92), chroma, hue),
      "--app-text": calculateOKLCH(0.98, 0, 0),
      "--app-text-muted": calculateOKLCH(0.65, Math.min(0.15 * chroma, 0.04), hue),

      "--sidebar-background": calculateOKLCH(0.11, Math.min(0.07 * chroma, 0.02), hue),
      "--sidebar-background-active": calculateOKLCH(0.24, Math.min(0.07 * chroma, 0.02), hue),
      "--sidebar-border": calculateOKLCH(0.28, Math.min(0.07 * chroma, 0.02), hue),
      "--sidebar-ring": calculateOKLCH(clamp(s.l + 0.08, 0.45, 0.92), chroma, hue),
      "--sidebar-text": calculateOKLCH(0.98, 0, 0),

      "--primary-background": calculateOKLCH(darkModePrimaryLightness, chroma, hue),
      "--primary-text": isPrimaryVeryDark
        ? calculateOKLCH(0.12, Math.min(0.08 * chroma, 0.02), hue)
        : isPrimaryLightEnough
          ? calculateOKLCH(0.1, Math.min(0.1 * chroma, 0.03), hue)
          : calculateOKLCH(1, 0, 0),

      "--secondary-background": getOKLCH(clamp(s.l + 0.08, 0.45, 0.92), chroma, normalize(hue), 0.25),
      "--secondary-text": calculateOKLCH(0.9, Math.min(chroma, 0.25), hue),

      "--success-background": calculateOKLCH(0.765, 0.177, 163.223, 0.1),
      "--success-text": calculateOKLCH(0.765, 0.177, 163.223),

      "--warning-background": calculateOKLCH(0.828, 0.189, 84.429, 0.1),
      "--warning-text": calculateOKLCH(0.828, 0.189, 84.429),

      "--danger-background": calculateOKLCH(0.704, 0.191, 22.22, 0.2),
      "--danger-text": calculateOKLCH(0.704, 0.191, 22.22),

      "--chart-1": calculateOKLCH(0.35, Math.min(chroma, 0.25), hue),
      "--chart-2": calculateOKLCH(0.55, Math.min(chroma, 0.22), hue),
      "--chart-3": calculateOKLCH(0.75, Math.min(chroma, 0.18), hue),
      "--chart-4": calculateOKLCH(0.9, Math.min(chroma, 0.15), hue),
      "--chart-5": calculateOKLCH(0.99, Math.min(chroma, 0.11), hue),

      "--shadow-2xs": "0 1px 3px 0 hsl(0 0% 0% / 0.05)",
      "--shadow-xs": "0 1px 3px 0 hsl(0 0% 0% / 0.05)",
      "--shadow-sm": "0 1px 3px 0 hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)",
      "--shadow-md": "0 1px 3px 0 hsl(0 0% 0% / 0.1), 0 2px 4px -1px hsl(0 0% 0% / 0.1)",
      "--shadow-lg": "0 1px 3px 0 hsl(0 0% 0% / 0.1), 0 4px 6px -1px hsl(0 0% 0% / 0.1)",
      "--shadow-xl": "0 1px 3px 0 hsl(0 0% 0% / 0.1), 0 8px 10px -1px hsl(0 0% 0% / 0.1)",
      "--shadow-2xl": "0 1px 3px 0 hsl(0 0% 0% / 0.25)",
    },
  };

  for (const variable in theme.light) {
    // if variable is only in light theme, set it in the global stylesheet as "variable": theme.light[variable]
    // else, set it in the global stylesheet as "variable": light-dark(theme.light[variable], theme.dark[variable])

    const root = document.querySelector(":root") as HTMLElement;
    if (theme.dark[variable]) {
      root.style.setProperty(variable, `light-dark(${theme.light[variable]}, ${theme.dark[variable]})`);
    } else {
      root.style.setProperty(variable, theme.light[variable]);
    }
  }

  return theme;
}

export { generateTheme };

// @TODO: add a11y check for color contrast