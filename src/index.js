import bodyParser from 'body-parser';
import { Telegraf } from 'telegraf';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import errorHandler from './middlewares/errorHandler.js';
import routes from './routes/index.js';

import runTelegram from './services/telegram.js';

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

runTelegram(bot);

const app = express();

app.use(
  cors({
    origin: ['https://llm.abduboriy.tech', 'https://abduboriy.tech', 'http://localhost:5173'],
    credentials: true,
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

app.use(bodyParser.json());

app.use(errorHandler);

app.use(routes);

const PORT = process.env.PORT || 8003;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(PORT, '127.0.0.1', () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
