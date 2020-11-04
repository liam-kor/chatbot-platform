import { prisma } from '../context';

export const getIntentByCode = async (intentCode: string) => {
  return await prisma.intent.findOne({
    where: {
      code: intentCode,
    },
    include: {
      blocks: true,
      conditions: {
        include: {
          conditionStatuses: true,
        },
      },
    },
  });
};
