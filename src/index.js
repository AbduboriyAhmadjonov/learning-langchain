import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import chatWithAI from './services/service.js';
import errorHandler from '../middlewares/errorHandler.js';
import Chat from './models/chatMessage.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(errorHandler);

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: 'No message provided' });

  console.log('Human: ' + message);

  try {
    const aiReply = await chatWithAI(message);

    if (!aiReply) return res.status(500).json({ error: 'No response from AI' });

    const chat = new Chat({
      messages: {
        messageFromHuman: message,
        messageFromAI: aiReply,
      },
    });

    await chat.save();

    res.status(201).json({ reply: aiReply });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: `Something went wrong: ${error.message}` });
  }
});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
