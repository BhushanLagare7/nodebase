import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { HydrateClient } from "@/trpc/server";

import { requireAuth } from "@/lib/auth-utils";

import { prefetchCredential } from "@/features/credentials/server/prefetch";
import { CredentialView } from "@/features/credentials/components/credential";
import {
  CredentialsError,
  CredentialsLoading,
} from "@/features/credentials/components/credentials";

interface PageProps {
  params: Promise<{
    credentialId: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  await requireAuth();

  const { credentialId } = await params;
  prefetchCredential(credentialId);

  return (
    <div className="h-full p-4 md:px-10 md:py-6">
      <div className="flex flex-col w-full h-full max-w-screen-md mx-auto gap-y-8">
        <HydrateClient>
          <ErrorBoundary fallback={<CredentialsError />}>
            <Suspense fallback={<CredentialsLoading />}>
              <CredentialView credentialId={credentialId} />
            </Suspense>
          </ErrorBoundary>
        </HydrateClient>
      </div>
    </div>
  );
};

export default Page;
