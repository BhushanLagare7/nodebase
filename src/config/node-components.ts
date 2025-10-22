import type { NodeTypes } from '@xyflow/react';
import { NodeType } from '@/generated/prisma';
import { InitialNode } from '@/components/initial-node';

export const nodeComponents = {
  [NodeType.INITIAL]: InitialNode,
} as const satisfies NodeTypes;

export type RegisteredNodeTypes = keyof typeof nodeComponents;
