import { Suspense } from "react";
import { SearchParams } from "nuqs";
import { ErrorBoundary } from "react-error-boundary";

import { HydrateClient } from "@/trpc/server";

import { requireAuth } from "@/lib/auth-utils";

import { prefetchExecutions } from "@/features/executions/server/prefetch";
import { executionsParamsLoader } from "@/features/executions/server/params-loader";
import {
  ExecutionsContainer,
  ExecutionsError,
  ExecutionsList,
  ExecutionsLoading,
} from "@/features/executions/components/executions";

type Props = {
  searchParams: Promise<SearchParams>;
};

const Executions = async ({ searchParams }: Props) => {
  await requireAuth();

  const params = await executionsParamsLoader(searchParams);
  prefetchExecutions(params);

  return (
    <ExecutionsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<ExecutionsError />}>
          <Suspense fallback={<ExecutionsLoading />}>
            <ExecutionsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </ExecutionsContainer>
  );
};

export default Executions;
