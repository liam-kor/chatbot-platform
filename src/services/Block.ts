import { prisma } from '../context';

export const getBlockByConditions = async (intentId, conditions) => {
  return await prisma.block.findMany({
    where: {
      intent: {
        id: intentId,
      },
      conditionStatuses: {
        every: {
          OR: conditions,
        },
      },
    },
  });
};
