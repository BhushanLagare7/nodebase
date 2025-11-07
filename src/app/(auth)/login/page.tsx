import { requireUnauth } from "@/lib/auth-utils";

import { LoginForm } from "@/features/auth/components/login-form";

const Login = async () => {
  await requireUnauth();

  return <LoginForm />;
};

export default Login;
