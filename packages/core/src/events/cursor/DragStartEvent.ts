import { ICustomEvent } from "@duang/shared";
import { AbstractCursorEvent } from "./AbstractCursorEvent";

export class DragStartEvent
  extends AbstractCursorEvent
  implements ICustomEvent
{
  type = "drag:start";
}
