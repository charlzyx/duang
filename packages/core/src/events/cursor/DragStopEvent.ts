import { ICustomEvent } from "@duang/shared";
import { AbstractCursorEvent } from "./AbstractCursorEvent";

export class DragStopEvent extends AbstractCursorEvent implements ICustomEvent {
  type = "drag:stop";
}
