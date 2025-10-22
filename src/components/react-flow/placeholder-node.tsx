'use client';

import React, { forwardRef, type ReactNode } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

import { BaseNode } from './base-node';

export type PlaceholderNodeProps = Partial<NodeProps> & {
  children?: ReactNode;
  onClick?: () => void;
};

export const PlaceholderNode = forwardRef<HTMLDivElement, PlaceholderNodeProps>(
  ({ children, onClick }, ref) => {
    return (
      <BaseNode
        ref={ref}
        className="w-auto h-auto p-4 text-center text-gray-400 border-gray-400 border-dashed shadow-none cursor-pointer bg-card hover:border-gray-500 hover:bg-gray-50"
        onClick={onClick}
      >
        {children}
        <Handle
          type="target"
          style={{ visibility: 'hidden' }}
          position={Position.Top}
          isConnectable={false}
        />
        <Handle
          type="source"
          style={{ visibility: 'hidden' }}
          position={Position.Bottom}
          isConnectable={false}
        />
      </BaseNode>
    );
  }
);

PlaceholderNode.displayName = 'PlaceholderNode';
