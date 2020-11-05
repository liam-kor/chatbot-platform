import { prisma } from '../context';
import { ConditionStatus } from './Condition';

export interface Block {
  id: number;
  intentId: number;
  text: string;
}

export const getBlockByConditions = async (
  intentId: number,
  conditionStatuses: ConditionStatus[],
): Promise<Block> => {
  const Blocks = await prisma.block.findMany({
    where: {
      intent: {
        id: intentId,
      },
      conditionStatuses: {
        every: {
          OR: conditionStatuses,
        },
      },
    },
  });
  return Blocks[0];
};
