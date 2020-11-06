import express from 'express';
import {
  getCalculatedConditionStatuses,
  getIntentByCode,
  getBlockByConditionStatuses,
  createComponents,
  createLinks,
} from '../services/intents';
import { createChatbotResponse } from '../services/templates/kakaoi';
export const router = express.Router();

router.get('/', async (req, res) => {
  const intentCode = String(req.query.intent_code);
  console.log(intentCode);
  const intent = await getIntentByCode(intentCode);
  console.log(intent);
  console.log('Next');
  const conditionModels = await getCalculatedConditionStatuses(
    intent.conditions,
  );
  console.log(conditionModels);

  const blockModel = await getBlockByConditionStatuses(
    intent.id,
    conditionModels,
  );
  console.log(blockModel);
  const components = createComponents(blockModel.components);
  const links = createLinks(blockModel.links);
  res.send(createChatbotResponse(components, links));
});

router.post('/', async (req, res) => {
  const intentCode = String(req.query.intent_code);
  const intent = await getIntentByCode(intentCode);
  console.log(intent);

  const conditions = await getCalculatedConditionStatuses(intent.conditions);
  console.log(conditions);

  const block = await getBlockByConditionStatuses(intent.id, conditions);
  console.log(block);

  res.send(block);
});
