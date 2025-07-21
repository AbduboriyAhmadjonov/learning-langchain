import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const telegramUserSchema = new Schema({
  user: {
    telegramId: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
});

export default mongoose.model('TelegramUser', telegramUserSchema);
