import { Component, Link } from '../../intents';
import { ChatbotResponse } from './types';
import {
  createTemplate,
  createSimpleText,
  createQuickReply,
  createListCard,
  createListItem,
} from './templates';

export const createChatbotResponse = (
  components: Component[],
  links: Link[],
): ChatbotResponse => {
  const kakaoiComponents = [];
  const kakaoiQuickReplies = [];
  for (const component of components) {
    if (component.kakaoiType === 'SimpleText') {
      let text = component.text;
      if (component.componentData) {
        text = component.componentData.text;
      }
      kakaoiComponents.push(createSimpleText(text));
    } else if (component.kakaoiType === 'ListCard') {
      const header = createListItem(component.componentData.header.imageUrl);
      const listItems = [];
      for (const data of component.componentData.listItemData) {
        listItems.push(
          createListItem(data.imageUrl, data.title, data.description),
        );
      }
      kakaoiComponents.push(createListCard(header, listItems));
    }
  }
  for (const link of links) {
    kakaoiQuickReplies.push(createQuickReply(link.label, link.intentCode));
  }

  return {
    version: '2.0',
    template: createTemplate(kakaoiComponents, kakaoiQuickReplies),
  };
};
