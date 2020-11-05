import {
  BasicCard,
  ChatbotResponse,
  Template,
  SimpleImage,
  SimpleText,
  ListCard,
  Thumbnail,
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

export const createBasicCard = (
  title: string,
  description: string,
  thumbnail: Thumbnail,
  profile: Profile,
  buttons: Button[],
) => {
  return {
    title: title,
    description: description,
    thumbnail: thumbnail,
    profile: profile,
    buttons: buttons,
  };
};
