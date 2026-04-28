# The Simpsons Characters Explorer

A React + TypeScript app that fetches characters from the Simpsons API and lets you browse them with search and pagination.

## Implemented Features

- Fetches character data from `https://thesimpsonsapi.com/api/characters`.
- Uses a reusable custom hook (`useFetchSimpsons`) to manage:
  - loading state
  - error state
  - current page
  - next/previous page availability
- Displays characters in responsive cards with:
  - portrait image
  - character name
  - gender
- Adds client-side search by name (case-insensitive).
- Sorts filtered results alphabetically by character name.
- Supports pagination with `Prev` / `Next` controls:
  - buttons disable automatically when no previous/next page exists
  - current page number is shown in the UI
- Shows contextual result text:
  - total visible characters
  - active search term (when present)
  - current page
- Handles API failures with a user-facing error message.

## Testing

- Includes unit tests for the custom hook (`useFetchSimpsons`) with mocked `fetch`.
- Tests cover:
  - successful API response flow
  - failed API response flow

Run tests from the app folder:

```bash
cd template
npm test
```

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Vitest + Testing Library
- ESLint + Prettier


## Run Locally

```bash
cd template
npm install
npm run dev
```

Then open the local Vite URL: `http://localhost:5173`
