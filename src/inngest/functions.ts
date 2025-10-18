import prisma from '@/lib/db';
import { inngest } from './client';

export const helloWorld = inngest.createFunction(
  { id: 'hello-world' },
  { event: 'test/hello.world' },
  async ({ step }) => {
    // Fetching the video
    await step.sleep('fetching', '5s');
    // Transcribing
    await step.sleep('transcribing', '5s');
    // Sending transcription to AI
    await step.sleep('sending-to-ai', '5s');

    await step.run('create-workflow', () => {
      return prisma.workflow.create({ data: { name: 'worflow-from-inngest' } });
    });
  }
);
