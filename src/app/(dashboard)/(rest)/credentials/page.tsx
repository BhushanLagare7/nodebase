import { requireAuth } from '@/lib/auth-utils';

const Credentials = async () => {
  await requireAuth();

  return <div>Credentials</div>;
};

export default Credentials;
