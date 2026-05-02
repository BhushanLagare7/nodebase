# Nodebase

A powerful Next.js application foundation featuring workflow automation, authentication, and background job processing. Built for scalability and developer experience.

## ✨ Features

- **Advanced Authentication**: Secure user management powered by [Better Auth](https://www.better-auth.com/).
- **Workflow Automation**: Built-in engine for defining `workflows`, `triggers`, and tracking `executions` (powered by Inngest).
- **Subscription Ready**: Integrated with [Polar](https://polar.sh/) for SaaS monetization and subscription management.
- **Background Jobs**: Robust asynchronous task processing using [Inngest](https://www.inngest.com/).
- **Type-Safe API**: End-to-end type safety with [tRPC](https://trpc.io/).
- **Modern UI**: Polished interface built with [Tailwind CSS](https://tailwindcss.com/) and [Radix UI](https://www.radix-ui.com/).

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: Prisma (ORM)
- **Styling**: Tailwind CSS
- **State Management**: Jotai
- **Validation**: Zod
- **Error Tracking**: Sentry

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- MPM package manager (or npm/yarn/pnpm)
- SQLite (default) or PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/BhushanLagare7/nodebase.git
   cd nodebase
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Copy the example environment file and configure your secrets:

   ```bash
   cp .env.example .env
   ```

   > Update `.env` with your database URL, authentication secrets, and API keys.

4. **Database Setup**
   Push the schema to your database:
   ```bash
   npx prisma db push
   ```

### Running the App

This project uses `mprocs` to run multiple development services (Next.js, Inngest, ngrok) simultaneously.

```bash
npm run dev:all
```

- **App**: [http://localhost:3000](http://localhost:3000)
- **Inngest Dashboard**: [http://localhost:8288](http://localhost:8288)

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on how to submit pull requests, report issues, and suggest improvements.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
