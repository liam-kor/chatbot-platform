import { prisma } from '../../context';
import { ConditionStatus } from './Condition';
import { LinkModel } from './Link';
import { ComponentModel } from './Component';

export interface BlockModel {
  id: number;
  intentId: number;
  description: string;
  code: string;
  components: ComponentModel[];
  links: LinkModel[];
  isDynamic: boolean;
}

export const getBlockByConditionStatuses = async (
  intentId: number,
  conditionStatuses: ConditionStatus[],
): Promise<BlockModel> => {
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
    include: {
      components: {
        orderBy: {
          order: 'asc',
        },
      },
      links: {
        include: {
          intent: true,
        },
      },
    },
  });
  return Blocks[0];
};
