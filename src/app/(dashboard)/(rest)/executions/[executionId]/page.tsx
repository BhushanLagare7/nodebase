import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { HydrateClient } from "@/trpc/server";

import { requireAuth } from "@/lib/auth-utils";

import {
  ExecutionsError,
  ExecutionsLoading,
} from "@/features/executions/components/executions";
import { prefetchExecution } from "@/features/executions/server/prefetch";
import { ExecutionView } from "@/features/executions/components/execution";

interface PageProps {
  params: Promise<{
    executionId: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  await requireAuth();

  const { executionId } = await params;
  prefetchExecution(executionId);

  return (
    <div className="p-4 md:px-10 md:py-6 h-full">
      <div className="flex flex-col w-full h-full max-w-screen-md mx-auto gap-y-8">
        <HydrateClient>
          <ErrorBoundary fallback={<ExecutionsError />}>
            <Suspense fallback={<ExecutionsLoading />}>
              <ExecutionView executionId={executionId} />
            </Suspense>
          </ErrorBoundary>
        </HydrateClient>
      </div>
    </div>
  );
};

export default Page;
