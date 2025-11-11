import { Suspense } from "react";
import { SearchParams } from "nuqs";
import { ErrorBoundary } from "react-error-boundary";

import { HydrateClient } from "@/trpc/server";

import { requireAuth } from "@/lib/auth-utils";

import { prefetchCredentials } from "@/features/credentials/server/prefetch";
import { credentialsParamsLoader } from "@/features/credentials/server/params-loader";
import {
  CredentialsContainer,
  CredentialsError,
  CredentialsList,
  CredentialsLoading,
} from "@/features/credentials/components/credentials";

type Props = {
  searchParams: Promise<SearchParams>;
};

const Credentials = async ({ searchParams }: Props) => {
  await requireAuth();

  const params = await credentialsParamsLoader(searchParams);
  prefetchCredentials(params);

  return (
    <CredentialsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<CredentialsError />}>
          <Suspense fallback={<CredentialsLoading />}>
            <CredentialsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </CredentialsContainer>
  );
};

export default Credentials;
