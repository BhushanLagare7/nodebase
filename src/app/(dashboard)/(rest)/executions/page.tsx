import { requireAuth } from "@/lib/auth-utils";

const Executions = async () => {
  await requireAuth();

  return <div>Executions</div>;
};

export default Executions;
