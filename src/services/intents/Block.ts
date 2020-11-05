import { prisma } from '../../context';
import { ConditionStatus } from './Condition';
import { Intent } from './Intent';

export interface Block {
  id: number;
  intentId: number;
  description: string;
  components: Component[];
  links: Link[];
}

interface Component {
  id: number;
  text: string;
  kakaoiType: string;
  imageUrl: string;
  componentDataId: number;
}

interface Link {
  id: number;
  label: string;
  intentId: number;
  intent: Intent;
}

export const getBlockByConditionStatuses = async (
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
    include: {
      components: true,
      links: {
        include: {
          intent: true,
        },
      },
    },
  });
  return Blocks[0];
};
