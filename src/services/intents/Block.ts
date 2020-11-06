import { prisma } from '../../context';
import { ConditionStatus } from './Condition';
import { LinkModel } from './Link';
import { ComponentModel } from './Component';

export interface BlockModel {
  id: number;
  intentId: number;
  description: string;
  components: ComponentModel[];
  links: LinkModel[];
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
        include: {
          ComponentData: true,
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
