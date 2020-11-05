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
import {
  createTemplate,
  createSimpleText,
  createQuickReply,
} from './templates';

export const createChatbotResponse = (block: Block): ChatbotResponse => {
  const components = block.components;
  const links = block.links;
  const kakaoiComponents = [];
  const kakaoiQuickReplies = [];
  for (const component of components) {
    if (component.kakaoiType === 'SimpleText') {
      kakaoiComponents.push(createSimpleText(component.text));
    }
  }
  for (const link of links) {
    kakaoiQuickReplies.push(createQuickReply(link.label, link.intent.code));
  }

  return {
    version: '2.0',
    template: createTemplate(kakaoiComponents, kakaoiQuickReplies),
  };
};
