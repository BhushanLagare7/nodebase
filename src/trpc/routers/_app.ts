import { workflowsRouter } from "@/features/workflows/server/router";
import { credentialsRouter } from "@/features/credentials/server/routers";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  workflows: workflowsRouter,
  credentials: credentialsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
