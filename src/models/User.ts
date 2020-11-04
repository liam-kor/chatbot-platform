import { objectType } from '@nexus/schema';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.bot_user_key();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
