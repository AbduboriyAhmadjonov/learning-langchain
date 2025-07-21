import { buttons } from '../keyboard/index.js';

export default async function loginHandler(bot) {
  bot.hears('Login', async (ctx) => {
    ctx.session ??= {};

    await ctx.reply('Enter password', buttons.login);
  });

  bot.action('LOGIN', async (ctx) => {
    const userId = ctx.from.id;
    const expenses = ctx.session?.expensesToConfirm || [];

    const categories = await categoryHandler(bot, ctx, expenses);

    if (!categories || categories.length === 0) {
      await ctx.reply('❌ Something went wrong. Please try again.');
      return;
    }

    // Save to DB here...
    addExpense({
      userId: userId.toString(),
      expenses: expenses,
    });

    ctx.session = null;
    await ctx.editMessageText('✅ Expenses added successfully.');
    await ctx.reply('Back to Main Menu.', keyboard.mainMenu);
  });

  bot.action('CANCEL_EXPENSES', async (ctx) => {
    // ctx.session = null;
    await ctx.editMessageText('❌ Expense entry canceled.');
    await ctx.reply(
      'Try again\nSend your expense (e.g., `10000 food`).\nYou can send multiple using commas.\n\nPress ❌ Cancel to go back.',
      keyboard.cancelKeyboard
    );
    // await ctx.reply('Back to Main Menu.', keyboard.mainMenu);
  });
}
