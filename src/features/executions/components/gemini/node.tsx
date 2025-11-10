"use client";

import { memo, useState } from "react";
import { useReactFlow, type Node, type NodeProps } from "@xyflow/react";

import { GEMINI_CHANNEL_NAME } from "@/inngest/channels/gemini";

import { useNodeStatus } from "../../hooks/use-node-status";

import { BaseExecutionNode } from "../base-execution-node";

import { fetchGeminiRealtimeToken } from "./actions";
import { GeminiDialog, GeminiFormValues } from "./dialog";

type GeminiNodeData = {
  variableName?: string;
  systemPrompt?: string;
  userPrompt?: string;
};

type GeminiNodeType = Node<GeminiNodeData>;

export const GeminiNode = memo((props: NodeProps<GeminiNodeType>) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { setNodes } = useReactFlow();

  const nodeStatus = useNodeStatus({
    nodeId: props.id,
    channel: GEMINI_CHANNEL_NAME,
    topic: "status",
    refreshToken: fetchGeminiRealtimeToken,
  });

  const handleOpenSettings = () => setDialogOpen(true);

  const handleSubmit = (values: GeminiFormValues) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === props.id) {
          return { ...node, data: { ...node.data, ...values } };
        }
        return node;
      })
    );
  };

  const nodeData = props.data;
  const description = nodeData?.userPrompt
    ? `"gemini-2.5-flash": ${nodeData.userPrompt.slice(0, 50)}...`
    : "Not configured";

  return (
    <>
      <GeminiDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handleSubmit}
        defaultValues={nodeData}
      />
      <BaseExecutionNode
        {...props}
        id={props.id}
        icon="/logos/gemini.svg"
        name="Gemini"
        status={nodeStatus}
        description={description}
        onSettings={handleOpenSettings}
        onDoubleClick={handleOpenSettings}
      />
    </>
  );
});

GeminiNode.displayName = "GeminiNode";
