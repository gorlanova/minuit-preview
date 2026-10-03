import { inject, reactive, watch, type App, type InjectionKey, type Plugin } from "vue";
import { defaultThemeOptions, generateTheme, type MnThemeOptions } from "./tools/theme.js";

export interface MnPluginOptions extends MnThemeOptions {
  mode?: "light" | "dark";
}

// ::: reactive theme state

export type MnMinuitInstance = MnPluginOptions;

const minuitInjectionKey: InjectionKey<MnMinuitInstance> = Symbol("minuit");

function applyTheme(instance: MnMinuitInstance): void {
  if (typeof document === "undefined") return;

  generateTheme(instance);

  if (instance.mode) document.documentElement.setAttribute("data-theme", instance.mode);
}

function minuit(options: MnPluginOptions = {}): Plugin {
  return {
    install(app: App) {
      const instance = reactive<MnMinuitInstance>({ ...defaultThemeOptions, ...options });

      watch(instance, () => applyTheme(instance), { immediate: true, deep: true });

      app.provide(minuitInjectionKey, instance);
    },
  };
}

// ::: theme composable

function useMinuit(): MnMinuitInstance {
  const instance = inject(minuitInjectionKey);
  if (!instance) {
    throw new Error("useMinuit() was called without app.use(minuit()) having been installed first.");
  }
  return instance;
}

export { minuit, useMinuit };
