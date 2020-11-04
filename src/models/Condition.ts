import { objectType } from '@nexus/schema';

export const Condition = objectType({
  name: 'Condition',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.code();
    t.model.intents();
    t.model.conditionStatuses();
  },
});
