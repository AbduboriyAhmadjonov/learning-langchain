import { requireAdmin } from '../middlewares/adminCheck.js';

const runTelegram = (bot) => {
  bot.command('register', requireAdmin(), async (ctx) => {
    const message = await handleStatsCommand(ctx);

    if (message) {
      await ctx.reply(message);
      return;
    }

    ctx.reply('❌ Bu buyruq faqat adminlar uchun.');
  });

  // Bot launcher
  (async () => {
    try {
      bot.launch();
      console.log(`✅ Bot started successfully`);
    } catch (error) {
      console.error('❌ Failed to launch bot:', error);
    }
  })();

  // Graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
};

export default runTelegram;
