import { requireAuth } from '@/lib/auth-utils';

const Workflows = async () => {
  await requireAuth();

  return <div>Workflows</div>;
};

export default Workflows;
