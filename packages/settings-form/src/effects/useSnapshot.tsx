import { Operation } from "@duang/core";
import { onFieldInputValueChange } from "@formily/core";

let timeRequest = -1;

export const useSnapshot = (operation: Operation) => {
  onFieldInputValueChange("*", () => {
    clearTimeout(timeRequest);
    timeRequest = setTimeout(() => {
      operation.snapshot("update:node:props");
    }, 1000);
  });
};
