import { TreeNode } from "@duang/core";
import { observer } from "@formily/reactive-react";
import React, { Fragment } from "react";
export interface INodeTitleWidgetProps {
  node: TreeNode;
}

export const NodeTitleWidget: React.FC<INodeTitleWidgetProps> = observer(
  (props) => {
    const takeNode = () => {
      const node = props.node;
      if (node.componentName === "$$ResourceNode$$") {
        return node.children[0];
      }
      return node;
    };
    const node = takeNode();
    return (
      // biome-ignore lint/complexity/noUselessFragments: <explanation>
      <Fragment>{node.getMessage("title") || node.componentName}</Fragment>
    );
  },
);
