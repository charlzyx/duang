import React from "react";
import { Simulator } from "../containers";
import { IWorkspaceItemProps, WorkspacePanel } from "./WorkspacePanel";
export const ViewportPanel: React.FC<IWorkspaceItemProps> = (props) => {
  return (
    <WorkspacePanel.Item {...props} flexable>
      <Simulator>{props.children}</Simulator>
    </WorkspacePanel.Item>
  );
};
