import { Intent } from './Intent';

export interface LinkModel {
  id: number;
  label: string;
  intentId: number;
  intent: Intent;
}

export interface Link {
  label: string;
  intentCode: string;
}

export const createLinks = (linkModels: LinkModel[]): Link[] => {
  const links = [];
  for (const linkModel of linkModels) {
    links.push(createLink(linkModel));
  }
  return links;
};

const createLink = (linkModel: LinkModel): Link => {
  return {
    label: linkModel.label,
    intentCode: linkModel.intent.code,
  };
};
