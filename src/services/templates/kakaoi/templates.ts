import {
  BasicCard,
  Template,
  SimpleImage,
  SimpleText,
  ListCard,
  ListItem,
  Thumbnail,
  Link,
  Button,
  Profile,
  QuickReply,
} from './types';

export const createTemplate = (
  components: (SimpleText | SimpleImage | BasicCard | ListCard)[],
  quickReplies = [],
): Template => {
  return {
    outputs: components,
    quickReplies: quickReplies,
  };
};

export const createQuickReply = (label, intentCode): QuickReply => {
  return {
    label: label,
    action: 'block',
    blockId: 'blockId',
    extra: {
      intentCode: intentCode,
    },
  };
};

export const createSimpleText = (text: string): SimpleText => {
  return {
    simpleText: {
      text: text,
    },
  };
};

export const createSimpleImage = (imageUrl: string): SimpleImage => {
  return {
    simpleImage: {
      imageUrl: imageUrl,
    },
  };
};

export const createListItem = (
  imageUrl: string,
  title?: string,
  description?: string,
  link?: Link,
): ListItem => {
  return {
    title: title,
    description: description,
    imageUrl: imageUrl,
    link: link,
  };
};

export const createListCard = (
  header: ListItem,
  items: ListItem[],
  buttons?: Button[],
): ListCard => {
  return {
    header: header,
    items: items,
    buttons: buttons,
  };
};

export const createBasicCard = (
  title: string,
  description: string,
  thumbnail: Thumbnail,
  profile: Profile,
  buttons: Button[],
): BasicCard => {
  return {
    title: title,
    description: description,
    thumbnail: thumbnail,
    profile: profile,
    buttons: buttons,
  };
};
