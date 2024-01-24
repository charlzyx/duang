import { ICustomEvent } from "@duang/shared";
import { AbstractMutationNodeEvent } from "./AbstractMutationNodeEvent";

export class SelectNodeEvent
  extends AbstractMutationNodeEvent
  implements ICustomEvent
{
  type = "select:node";
}
