# Next.js Starter Kit

> A modern, high-performance, and minimal setup starter kit for building web applications with Next.js.

## Tech Stack

The project leverages the following technologies:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI/Components**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Sass
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Environment Validation**: [@t3-oss/env-nextjs](https://env.t3.gg/) with Zod
- **Code Quality**: ESLint & Prettier
- **Git Hooks**: Husky & lint-staged

## Getting Started

### Prerequisites

You'll need [Node.js](https://nodejs.org/) (LTS recommended) and a package manager like `npm run`, `npm`, or `yarn`.

### Installation

Clone the repository and install dependencies:

```bash
# Install dependencies using npm
npm install
```

### Environment Variables

Copy the provided `.env.example` file to configure your local environment:

```bash
cp .env.example .env
```

Ensure the basic required environment variables are set. By default:

- `NEXT_PUBLIC_APP_URL=http://localhost:3000`

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

The following commands are defined in the `package.json`:

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Starts the application in production mode.
- `npm run lint`: Runs ESLint to catch syntax and style errors.
- `npm run lint:fix`: Automatically fixes linting errors.
- `npm run format`: Formats code utilizing Prettier.
- `npm run typecheck`: Validates TypeScript types across the codebase.
