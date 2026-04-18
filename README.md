# KeenKeeper

**KeenKeeper — keep your friendships alive.** A lightweight Next.js app to track your interactions (calls, texts, video calls) with friends, quickly log check-ins from a friend detail page, and view analytics on your connection history.

**Tech stack**
- Next.js
- React
- Tailwind CSS + DaisyUI
- react-hot-toast
- react-icons
- Recharts

**Key features**
- Quick Check-in: log Call / Text / Video from a friend's detail page and show a toast confirmation.
- Timeline: view a chronological list of logged interactions with filter controls (All / Call / Text / Video).
- Analytics: Pie chart summarizing Call / Text / Video counts built with Recharts.

## Setup & Run
1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Open http://localhost:3000

## How it works
- The app stores timeline entries in a React Context (`src/context/TimelineContext.jsx`).
- Clicking Call/Text/Video creates a timeline entry (title, date, type, name) and shows a `react-hot-toast` notification.
- The Timeline page reads entries from context and supports filtering by type.
- The Stats page reads the same context and renders a Pie chart using Recharts.

## Status / Notes
- Implemented: Timeline logging, toast notifications, Timeline filter, dynamic Stats pie chart, Relationship buttons wired to timeline.
- Not implemented yet: persistent storage (localStorage) — timeline entries are kept in memory for the session.

