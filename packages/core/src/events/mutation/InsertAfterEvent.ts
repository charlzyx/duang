import { ICustomEvent } from "@duang/shared";
import { AbstractMutationNodeEvent } from "./AbstractMutationNodeEvent";

export class InsertAfterEvent
  extends AbstractMutationNodeEvent
  implements ICustomEvent
{
  type = "insert:after";
}
