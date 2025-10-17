import { RegisterForm } from '@/features/auth/components/register-form';
import { requireUnauth } from '@/lib/auth-utils';

const Signup = async () => {
  await requireUnauth();

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Signup;
