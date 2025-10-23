import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';
import { MousePointerIcon } from 'lucide-react';
import { BaseTriggerNode } from '../base-trigger-node';

export const ManualTriggerNode = memo((props: NodeProps) => {
  return (
    <>
      <BaseTriggerNode
        {...props}
        icon={MousePointerIcon}
        name="When clicking 'Execute workflow'"
        // status={nodeStatus} // TODO: Add functionality
        // onSettings={handleOpenSettings} // TODO: Add functionality
        // onDoubleClick={handleOpenSettings} // TODO: Add functionality
      />
    </>
  );
});

ManualTriggerNode.displayName = 'ManualTriggerNode';
