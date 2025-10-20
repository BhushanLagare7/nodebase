import { inngest } from '@/inngest/client';
import {
  createTRPCRouter,
  premiumProcedure,
  protectedProcedure,
} from '../init';
import prisma from '@/lib/db';

export const appRouter = createTRPCRouter({
  testAi: premiumProcedure.mutation(async () => {
    await inngest.send({ name: 'execute/ai' });
    return { success: true, message: 'Job Queued' };
  }),
  getWorkflows: protectedProcedure.query(() => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: 'test/hello.world',
      data: { name: 'bhushan@mail.com' },
    });
    return { success: true, message: 'Job Queued' };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
