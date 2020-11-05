import { objectType } from '@nexus/schema';

export const Block = objectType({
  name: 'Block',
  definition(t) {
    t.model.id();
    t.model.intent();
    t.model.conditionStatuses();
  },
});
