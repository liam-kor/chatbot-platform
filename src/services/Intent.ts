import { prisma } from '../context';
import { Condition } from './Condition';

interface Intent {
  id: number;
  name: string;
  code: string;
  type: string;
  conditions: Condition[];
}

export const getIntentByCode = async (intentCode: string): Promise<Intent> => {
  return await prisma.intent.findOne({
    where: {
      code: intentCode,
    },
    include: {
      conditions: true,
    },
  });
};
