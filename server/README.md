# HighEndFree Server (Express + Prisma)

## Setup
1) Copy `.env.example` to `.env` and fill values
2) Install deps
```bash
cd server
npm install
```
3) Generate Prisma client
```bash
npm run prisma:generate
```
4) Create and run migrations (requires Postgres)
```bash
npm run prisma:migrate -- --name init
```
5) Start dev server
```bash
npm run dev
```

API available at `http://localhost:4000`.
