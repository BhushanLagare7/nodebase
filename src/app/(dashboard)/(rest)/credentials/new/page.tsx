import { requireAuth } from "@/lib/auth-utils";

import { CredentialForm } from "@/features/credentials/components/credential";

const Page = async () => {
  await requireAuth();

  return (
    <div className="h-full p-4 md:px-10 md:py-6">
      <div className="flex flex-col w-full h-full max-w-screen-md mx-auto gap-y-8">
        <CredentialForm />
      </div>
    </div>
  );
};

export default Page;
