import { Profiler } from 'inspector';

export interface ChatbotResponse {
  version: string;
  template: Template;
  // context: ChatbotContext;
  // data: ChatbotData;
}

export interface Template {
  outputs: (SimpleText | SimpleImage | BasicCard)[];
  quickReplies?: QuickReply[];
}

export type Action = 'message' | 'block' | 'webLink' | 'phone';

export interface QuickReply {
  label: string;
  action: Action;
  messageText: string;
  blockId: string;
  extra: any;
}

export interface SimpleText {
  simpleText: Text;
}

export interface Text {
  text: string;
}

export interface SimpleImage {
  simpleImage: Thumbnail;
}

export interface BasicCard {
  title?: string;
  description?: string;
  thumbnail?: Thumbnail;
  profile?: Profile;
  buttons?: Button[];
}

export interface Thumbnail {
  imageUrl: string;
  link?: string;
  fixedRatio?: boolean;
  width?: number;
  height?: number;
}

export interface Button {
  label: string;
  action: Action;
  webLinkUrl?: string;
  messageText?: string;
  phoneNumber?: string;
  blockId?: string;
  extra?: any;
}

export interface Profile {
  nickname: string;
  imageUrl?: string;
}

export interface ListCard {
  header: ListItem;
  items: ListItem[];
  buttons: Button[];
}

export interface ListItem {
  title: string;
  description?: string;
  imageUrl?: string;
  link: Link;
}

export interface Link {
  pc?: string;
  mobile?: string;
  web?: string;
}
