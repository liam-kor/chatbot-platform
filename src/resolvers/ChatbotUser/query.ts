import { getUserId } from '../../utils';
import { queryField } from '@nexus/schema';

export const chatbotUsers = queryField('chatbotUsers', {
  nullable: true,
  type: 'ChatbotUser',
  list: true,
  resolve: async (_root, _args, ctx) => {
    return await ctx.prisma.user.findMany();
  },
});
