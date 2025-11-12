import { workflowsRouter } from "@/features/workflows/server/router";
import { executionsRouter } from "@/features/executions/server/routers";
import { credentialsRouter } from "@/features/credentials/server/routers";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  workflows: workflowsRouter,
  credentials: credentialsRouter,
  executions: executionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
