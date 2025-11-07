import { requireUnauth } from "@/lib/auth-utils";

import { RegisterForm } from "@/features/auth/components/register-form";

const Signup = async () => {
  await requireUnauth();

  return <RegisterForm />;
};

export default Signup;
