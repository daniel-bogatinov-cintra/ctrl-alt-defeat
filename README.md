# Meme Retro

The vibe check for your sprint.

## Setup

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Initialize Database:**
    ```bash
    npx prisma generate
    npx prisma db push
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## Technolgies

-   **Framework:** Next.js 14+ (App Router)
-   **UI:** MUI (Material UI) v6 + Framer Motion
-   **Database:** SQLite (Prisma ORM)
-   **Real-time:** Polling (SWR)

## Deployment

Set `DATABASE_URL` and `NEXT_PUBLIC_MEMEGEN_BASE_URL` (optional) in your environment.
For production, switch `provider = "sqlite"` to `"postgresql"` in `prisma/schema.prisma` if desired.
