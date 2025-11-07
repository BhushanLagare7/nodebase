import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import { executeAi } from "@/inngest/functions";

// Create an API that serves all functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [executeAi],
});
