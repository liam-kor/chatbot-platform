import { Component, Link } from '../../intents';
import { ChatbotResponse } from './types';
import {
  TEMPLATE_VERSION,
  createTemplate,
  createSimpleText,
  createQuickReply,
  createListCard,
  createListItem,
} from './templates';

export const createDynamicChatbotResponse = (
  blockCode: string,
): ChatbotResponse => {
  if (blockCode === 'game:have_a_meal:practice1') {
    const menuList = [
      {
        product_name: '소프트콘',
        product_price: 3000,
        product_image:
          'http://image.newdaily.co.kr/site/data/img/2018/08/14/2018081400127_0.jpg',
      },
      {
        product_name: '소프트콘',
        product_price: 3000,
        product_image:
          'http://image.newdaily.co.kr/site/data/img/2018/08/14/2018081400127_0.jpg',
      },
    ];
    const menuHeader = {
      image:
        'http://image.newdaily.co.kr/site/data/img/2018/08/14/2018081400127_0.jpg',
    };
    const items = [];
    const header = createListItem(menuHeader.image);
    for (const menu of menuList) {
      const item = createListItem(
        menu.product_image,
        menu.product_name,
        menu.product_price + '원',
      );
      items.push(item);
    }
    return {
      version: TEMPLATE_VERSION,
      template: {
        outputs: [createListCard(header, items)],
      },
    };
  }
  return {
    version: TEMPLATE_VERSION,
    template: {
      outputs: [],
    },
  };
};

export const createStaticChatbotResponse = (
  components: Component[],
  links: Link[],
): ChatbotResponse => {
  const kakaoiComponents = [];
  const kakaoiQuickReplies = [];
  for (const component of components) {
    if (component.kakaoiType === 'SimpleText') {
      kakaoiComponents.push(createSimpleText(component.text));
    } else if (component.kakaoiType === 'ListCard') {
      // const header = createListItem(component.componentData.header.imageUrl);
      // const listItems = [];
      // for (const data of component.componentData.listItemData) {
      //   listItems.push(
      //     createListItem(data.imageUrl, data.title, data.description),
      //   );
      // }
      // kakaoiComponents.push(createListCard(header, listItems));
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
