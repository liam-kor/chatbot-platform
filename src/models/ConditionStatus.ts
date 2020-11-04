import { objectType } from '@nexus/schema';

export const ConditionStatus = objectType({
  name: 'ConditionStatus',
  definition(t) {
    t.model.id();
    t.model.value();
    t.model.description();
    t.model.condition();
    t.model.block();
  },
});
