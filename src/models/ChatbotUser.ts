import { objectType } from '@nexus/schema';

export const ChatbotUser = objectType({
  name: 'ChatbotUser',
  definition(t) {
    t.model.id();
    t.model.bot_user_key();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
