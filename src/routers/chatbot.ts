import express from 'express';
import { prisma } from '../context';
import { getCalculatedConditionStatuses } from '../services';

export const router = express.Router();

router.get('/', async (req, res) => {
  const intentCode = req.query.intent_code;
  const intent = await prisma.intent.findOne({
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
  console.log(intent);

  const conditions = await getCalculatedConditionStatuses(intent.conditions);

  console.log(conditions);
  // const nonMember = [{ id: 1 }, { id: 3 }];
  // const nonAuth = [{ id: 4 }];
  // const member = [{ id: 3 }, { id: 2 }];

  const block = await prisma.block.findMany({
    where: {
      intent: {
        id: intent.id,
      },
      conditionStatuses: {
        every: {
          OR: conditions,
        },
      },
    },
  });
  console.log(block);

  res.send('ok');
});
