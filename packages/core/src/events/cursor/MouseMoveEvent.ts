import { ICustomEvent } from "@duang/shared";
import { AbstractCursorEvent } from "./AbstractCursorEvent";

export class MouseMoveEvent
  extends AbstractCursorEvent
  implements ICustomEvent
{
  type = "mouse:move";
}
