import { Block } from '../../intents';
import {
  BasicCard,
  ChatbotResponse,
  Template,
  SimpleImage,
  SimpleText,
  Thumbnail,
  Button,
  Profile,
} from './types';
import { createTemplate, createSimpleText } from './templates';

export const createChatbotResponse = (block: Block): ChatbotResponse => {
  const template = createTestTemplate(block);
  return {
    version: '2.0',
    template: template,
  };
};

const createTestTemplate = (block: Block): Template => {
  const components = [createSimpleText('Hi')];
  return createTemplate(components);
};
