import express from 'express';
import { prisma } from '../context';
import {
  getCalculatedConditionStatuses,
  getIntentByCode,
  getBlockByConditions,
} from '../services';

export const router = express.Router();

router.get('/', async (req, res) => {
  const intentCode = String(req.query.intent_code);
  const intent = await getIntentByCode(intentCode);
  console.log(intent);

  const conditions = await getCalculatedConditionStatuses(intent.conditions);
  console.log(conditions);

  const block = await getBlockByConditions(intent.id, conditions);
  console.log(block);

  res.send('ok');
});
