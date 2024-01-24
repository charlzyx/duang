import { ICustomEvent } from "@duang/shared";
import { AbstractHistoryEvent } from "./AbstractHistoryEvent";

export class HistoryRedoEvent
  extends AbstractHistoryEvent
  implements ICustomEvent
{
  type = "history:redo";
}
