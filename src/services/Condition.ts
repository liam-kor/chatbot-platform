import { prisma } from '../context';

interface condition {
  id: number;
  name: string;
  code: string;
  conditionStatuses: any[];
}

// interface conditionStatus {
//   id: number;
//   value: number;
//   description: string;
//   condition: condition;
//   conditionId: number;
// }

export const getCalculatedConditionStatuses = async (
  conditions: condition[],
) => {
  const calculatedConditionStatuses = [];
  for (const condition of conditions) {
    if (condition.code === 'auth_user') {
      const cond = await getConditionStatus(condition.id, checkIsAuth());
      console.log(cond);
      calculatedConditionStatuses.push(cond[0]);
    } else if (condition.code === 'exists_member') {
      const cond = await getConditionStatus(condition.id, checkIsAuth());
      console.log(cond);
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
  return 0;
};

const checkIsMember = () => {
  return 0;
};
