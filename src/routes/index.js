import { Router } from 'express';

import chatWithAI from '../services/service.js';
import Chat from '../models/chatMessage.js';

const router = Router();

/** Health checker */
router.get('/api/chat', async (req, res) => {
  const message = req.body.message;
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }
  console.log('success');
  return res.status(200).send('OK');
});

/** Chat bot for my Portfolio */
router.post('/api/chat', async (req, res) => {
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

export default router;
