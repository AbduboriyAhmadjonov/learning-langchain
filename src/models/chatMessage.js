import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const chatMessageSchema = new Schema({
  messages: [
    {
      messageFromHuman: { type: String, required: true },
      messageFromAI: { type: String, required: true },
      Date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

export default mongoose.model('ChatMessage', chatMessageSchema);
