import { GlobalRegistry, IDesignerRegistry } from "@duang/core";
import { globalThisPolyfill } from "@duang/shared";

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill["__DESIGNER_REGISTRY__"] || GlobalRegistry;
};
