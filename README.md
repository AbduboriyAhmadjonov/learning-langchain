# AI Chat Application

A full-stack AI-powered chat bot REST API. Built with Node.js, Express, Telegraf, MongoDB, and LangChain/Anthropic for advanced conversational AI.

## Features

- **AI Chatbot**: Interact with an AI assistant trained on Abduboriy's portfolio using REST API.
- **Telegram Bot**: Register, login, and manage messages directly from Telegram for the sake of simplicity.
- **Admin Commands**: Secure admin-only features for AI chat bot management.
- **Persistent Storage**: All chats and users are stored in MongoDB.
- **Clean Architecture**: Modular codebase with controllers, services, models, and middlewares.

## Tech Stack

- **Backend**: Node.js, Express, Telegraf
- **Database**: MongoDB (via Mongoose)
- **AI/LLM**: LangChain, Anthropic (Claude)
- **Other**: dotenv, cors, GitHub Actions for CI/CD

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance
- Telegram Bot Token
- Anthropic API Key

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/AbduboriyAhmadjonov/learning-langchain.git
   cd learning-langchain
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**

   - Copy `.env.example` to `.env` and fill in your credentials.

4. **Start the application:**
   ```sh
   npm run dev
   ```
   The server will run at `http://localhost:8003`.

### API Endpoints

- `GET /api/health` — Health check.
- `POST /api/chat` — Send a message to the AI assistant.
  - Body: `{ "message": "Your question here" }`
  - Response: `{ "reply": "AI's answer" }`

### Telegram Bot

- Start a chat with your bot on Telegram.
- Use `/register` to register (admin only).
- Use the provided keyboard to login, submit expenses, or view history.

## Project Structure

See [src/](src) for the main codebase:

- [`src/index.js`](src/index.js): App entry point
- [`src/routes/index.js`](src/routes/index.js): REST API routes
- [`src/services/service.js`](src/services/service.js): AI chat logic
- [`src/services/telegram.js`](src/services/telegram.js): Telegram bot logic
- [`src/models/`](src/models/): Mongoose models
- [`src/middlewares/`](src/middlewares/): Express/Telegraf middlewares
- [`src/controller/`](src/controller/): Telegram bot controllers
- [`src/keyboard/`](src/keyboard/): Telegram bot keyboards

## Deployment

- Uses GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) for CI/CD.
- Deploy with PM2 or your preferred Node.js process manager.

## License

[ISC](LICENSE)

---

Built by `Abduboriy` — Full-Stack Developer & Junior AI Engineer
