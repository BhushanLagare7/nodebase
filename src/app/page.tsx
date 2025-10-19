'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { LogoutButton } from '@/app/logout';
import { Button } from '@/components/ui/button';
import { useTRPC } from '@/trpc/client';

const Page = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success('AI Job Queued');
      },
    })
  );

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success('Job Queued');
      },
    })
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen gap-y-6">
      protected server component
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button onClick={() => testAi.mutate()} disabled={testAi.isPending}>
        Test AI
      </Button>
      <Button onClick={() => create.mutate()} disabled={create.isPending}>
        Create workflow
      </Button>
      <LogoutButton />
    </div>
  );
};

export default Page;
