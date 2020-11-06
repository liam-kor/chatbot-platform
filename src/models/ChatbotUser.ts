import { objectType } from '@nexus/schema';

export const ChatbotUser = objectType({
  name: 'ChatbotUser',
  definition(t) {
    t.model.id();
    t.model.botUserKey();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
