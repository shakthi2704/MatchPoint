📦 football-dashboard
│── 📂 public # Static assets (logos, icons, images)
│── 📂 src # Source code
│ ├── 📂 app # Next.js App Router (if using App Router)
│ │ ├── 📂 (auth) # Auth-related pages (login, register)
│ │ ├── 📂 dashboard # Main dashboard pages
│ │ ├── 📂 leagues # All leagues, standings, stats
│ │ ├── 📂 teams # Team pages & details
│ │ ├── 📂 players # Player profiles & stats
│ │ ├── 📂 matches # Live scores, match results
│ │ ├── 📂 settings # User settings & preferences
│ │ ├── 📂 api # API routes (Next.js server-side API)
│ │ │ ├── auth # Authentication related endpoints
│ │ │ │ ├── [...nextauth].js # NextAuth.js configuration
│ │ │ │ ├── register.js # User registration endpoint
│ │ │ │ └── login.js # User login endpoint
│ │ │ ├── leagues.js # Fetch leagues data endpoint
│ │ │ ├── teams.js # Fetch teams data endpoint
│ │ │ ├── players.js # Fetch players data endpoint
│ │ │ ├── matches.js # Fetch matches data endpoint
│ │ │ └── [otherEndpoints].js # Additional backend endpoints
│ │ ├── layout.jsx # Main layout
│ │ ├── page.jsx # Default route (Dashboard)
│ │ ├── loading.jsx # Loading state for pages
│ │ ├── error.jsx # Error handling page
│ │ └── not-found.jsx # 404 Page
│ │
│ ├── 📂 components # Reusable UI components
│ │ ├── 📂 ui # UI components
│ │ ├── Header.jsx # Navbar/Header
│ │ ├── Sidebar.jsx # Sidebar navigation
│ │ ├── Card.jsx # Reusable Card component
│ │ ├── Loader.jsx # Loading spinner
│ │ └── Button.jsx # Custom button component
│ │
│ ├── 📂 lib # Utilities & helper functions
│ │ ├── api.js # API calls (Axios or fetch)
│ │ ├── auth.js # Auth helper functions
│ │ ├── formatDate.js # Date formatting helper
│ │ └── constants.js # App-wide constants (API URLs, league IDs)
│ │
│ ├── 📂 hooks # Custom React hooks
│ │ ├── useAuth.js # Hook for authentication state
│ │ ├── useLeagues.js # Hook for fetching leagues data
│ │ ├── useMatches.js # Hook for fetching match data
│ │ └── useTeams.js # Hook for fetching team data
│ │
│ ├── 📂 store # State management (Redux or Zustand)
│ │ ├── index.js # Store configuration
│ │ ├── authSlice.js # Auth state (Redux)
│ │ ├── leagueSlice.js # League state (Redux)
│ │ ├── matchSlice.js # Match state (Redux)
│ │ ├── playerSlice.js # Player state (Redux)
│ │ ├── teamSlice.js # Team state (Redux)
│ │ └── uiSlice.js # UI state (dark mode, sidebar toggle)
│ │
│ ├── 📂 styles # Global styles (Tailwind, CSS, SCSS)
│ │ ├── globals.css # Global styles
│ │ ├── theme.css # Theme styles
│ │ └── dashboard.css # Dashboard styles
│ │
│ ├── 📂 middleware # Middleware functions
│ │ ├── authMiddleware.js # Protect routes
│ │ └── logger.js # Logging middleware
│ │
│ ├── 📂 config # App configuration (env variables, constants)
│ │ ├── env.js # Environment variables
│ │ └── nextauth.js # NextAuth config
│ │
│ ├── 📂 tests # Unit & integration tests (Jest, React Testing Library)
│ │ ├── auth.test.js # Auth tests
│ │ ├── leagues.test.js # League API tests
│ │ ├── ui.test.js # UI component tests
│ │ └── store.test.js # Redux store tests
│ │
│── .env # Environment variables
│── .gitignore # Git ignore file
│── next.config.js # Next.js configuration
│── tailwind.config.js # Tailwind CSS configuration
│── postcss.config.js # PostCSS configuration
│── package.json # Dependencies and scripts
│── README.md # Project documentation

# MatchPoint

https://www.football-data.org/
[OpenLigaDB](https://www.openligadb.de/)
https://www.api-football.com/

Here’s a **summarized table** to help you quickly find which **free** football stats API or dataset is best suited for the data you need:

| **API/Dataset**                | **Data Available**                                         | **Free Tier**   | **API Key**      | **Link**                                                             |
| ------------------------------ | ---------------------------------------------------------- | --------------- | ---------------- | -------------------------------------------------------------------- |
| **Football-Data.org**          | Live scores, fixtures, standings, player & team stats      | Yes             | Yes              | [Football-Data.org](https://www.football-data.org/documentation/api) |
| **OpenLigaDB**                 | Live scores, standings, match data, team/player stats      | Yes             | No               | [OpenLigaDB](https://www.openligadb.de/)                             |
| **API-Football**               | Live scores, player stats, teams, matches, historical data | Yes             | Yes              | [API-Football](https://www.api-football.com/documentation-v3)        |
| **Football-API.com**           | Live scores, match details, player & team info             | Yes             | Yes              | [Football-API.com](https://www.football-api.com/)                    |
| **SofaScore API (Unofficial)** | Live scores, match stats, player ratings, team data        | Yes             | Yes (Unofficial) | [SofaScore (Unofficial)](https://github.com/erengy/sofascore-api)    |
| **Betfair API**                | Football match stats, betting odds, live updates           | Yes (trial)     | Yes              | [Betfair API](https://developer.betfair.com/)                        |
| **Whoscored**                  | Player ratings, match stats, team performance              | No official API | No               | [Whoscored](https://www.whoscored.com/)                              |
| **Kaggle Datasets**            | Football match results, player stats, historical data      | Yes             | No               | [Kaggle Datasets](https://www.kaggle.com/datasets)                   |
| **SportRadar (Trial)**         | Live scores, player stats, match events, historical data   | Yes (trial)     | Yes              | [SportRadar](https://developer.sportradar.com/docs/read/soccer)      |

### Key Points:

- **Football-Data.org** and **API-Football** are great for **live scores** and **player/team stats** with a **free tier**.
- **OpenLigaDB** is completely **free** (no API key required) and is good for **match data and standings**.
- **SofaScore API** is **free** through community-driven projects but isn’t officially supported.
- **Betfair API** offers **betting data** and **live updates**, but it's more focused on odds.
- **Kaggle Datasets** is a **free data source** if you prefer working with downloaded datasets, rather than real-time APIs.

This table should help you quickly decide which API or dataset to use depending on your needs for football statistics!
📂 app
┣ 📂 (auth) # Authentication pages
┃ ┗ 📜 page.jsx # Login page (UI ready, needs integration)
┣ 📂 dashboard # Main dashboard layout
┃ ┗ 📜 page.jsx # Dashboard home (summary of all data)
┣ 📂 live-score # Live match scores
┃ ┗ 📜 page.jsx  
 ┣ 📂 leagues
┃ ┣ 📜 page.jsx # All leagues
┃ ┣ 📜 standings.jsx # League standings
┃ ┣ 📜 fixtures.jsx # League fixtures
┃ ┗ 📜 stats.jsx # League stats
┣ 📂 tournaments
┃ ┣ 📜 page.jsx
┃ ┗ 📜 standings.jsx
┣ 📂 teams
┃ ┣ 📜 page.jsx # All teams
┃ ┣ 📜 stats.jsx # Team stats
┃ ┗ 📜 squad.jsx # Squad list
┣ 📂 players
┃ ┣ 📜 page.jsx # General player info
┃ ┣ 📜 top-scorers.jsx
┃ ┣ 📜 top-assists.jsx
┃ ┗ 📜 profile.jsx # Player profiles
┣ 📂 stats-analytics
┃ ┣ 📜 page.jsx # Overview
┃ ┣ 📜 match.jsx # Match stats
┃ ┣ 📜 team.jsx # Team performance
┃ ┗ 📜 player.jsx # Player performance
┣ 📂 settings
┃ ┗ 📜 page.jsx
┣ 📜 layout.jsx # Main layout (Navbar, Sidebar, etc.)
┣ 📜 page.jsx # Root (redirects to dashboard)
📂 components
┣ 📜 LiveScoreCard.jsx
┣ 📜 LeagueTable.jsx
┣ 📜 PlayerCard.jsx
┣ 📜 TeamStats.jsx
┗ 📜 Navbar.jsx
📂 lib
┣ 📜 api.js # API handler (Axios or Fetch)
┣ 📜 utils.js # Helper functions
📂 server
┣ 📜 index.js # Express.js server entry (if needed)
┣ 📜 routes.js # API routes
┗ 📜 db.js # PostgreSQL connection
📜 next.config.js
📜 tailwind.config.js
📜 package.json
