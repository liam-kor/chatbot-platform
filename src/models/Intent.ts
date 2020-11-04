import { objectType } from '@nexus/schema';

export const Intent = objectType({
  name: 'Intent',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.code();
    t.model.type();
    t.model.conditions();
    t.model.blocks();
  },
});
