import { requireAuth } from '@/lib/auth-utils';
import { caller } from '@/trpc/server';
import { LogoutButton } from '@/app/logout';

const Page = async () => {
  await requireAuth();
  const data = await caller.getUsers();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen gap-y-6">
      protected server component
      <div>{JSON.stringify(data, null, 2)}</div>
      <LogoutButton />
    </div>
  );
};

export default Page;
