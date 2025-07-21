export function requireAdmin() {
  return async (ctx, next) => {
    if (!ctx.session?.isAdmin) {
      return ctx.reply('⛔ Bu buyruq faqat adminlar uchun.');
    }
    return next();
  };
}
