import { GlobalRegistry } from "@duang/core";
import enUS from "./en-US";
import koKR from "./ko-KR";
import zhCN from "./zh-CN";

GlobalRegistry.registerDesignerLocales(zhCN, enUS, koKR);
