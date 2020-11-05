import { prisma } from '../context';

export interface Condition {
  id: number;
  name: string;
  code: string;
  conditionStatuses: ConditionStatus[];
}

export interface ConditionStatus {
  id: number;
  value: number;
  description: string;
  conditionId: number;
  blockId: number;
}

export const getCalculatedConditionStatuses = async (
  conditions: Condition[],
): Promise<ConditionStatus[]> => {
  const calculatedConditionStatuses = [];
  for (const condition of conditions) {
    if (condition.code === 'auth_user') {
      const cond = await getConditionStatus(condition.id, checkIsAuth());
      calculatedConditionStatuses.push(cond[0]);
    } else if (condition.code === 'exists_member') {
      const cond = await getConditionStatus(condition.id, checkIsMember());
      calculatedConditionStatuses.push(cond[0]);
    } else {
      //
    }
  }

  return calculatedConditionStatuses;
};

const getConditionStatus = async (conditionId, value) => {
  console.log(conditionId);
  console.log(value);
  return await prisma.conditionStatus.findMany({
    where: {
      condition: {
        id: conditionId,
      },
      value: value,
    },
  });
};

const checkIsAuth = () => {
  return 1;
};

const checkIsMember = () => {
  return 1;
};
