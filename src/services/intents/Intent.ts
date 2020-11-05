import { prisma } from '../../context';
import { Condition } from './Condition';

export interface Intent {
  id: number;
  name: string;
  code: string;
  type: string;
  conditions: Condition[];
}

export const getIntentByCode = async (intentCode: string): Promise<Intent> => {
  console.log('check intent code');
  console.log(intentCode);
  return await prisma.intent.findOne({
    where: {
      code: intentCode,
    },
    include: {
      conditions: true,
    },
  });
};
