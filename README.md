🚀 Admin Panel – Flyweis Technology Task
This project is an Admin Panel built as part of a technical task for Flyweis Technology. It is developed using modern web technologies including Next.js 15, React 19, TanStack Query, Material UI 7, and TypeScript. The application includes five core admin screens with full API integration and SEO optimization.

🧑‍💻 Developed By
Your Name Here

🛠️ Tech Stack
Next.js 15 – App router, server/client rendering

React 19 – Latest React features including use()

TanStack Query (React Query) – Data fetching & caching

Material UI 7 – UI components and theming

TypeScript – Type-safe codebase

SEO Optimization – Meta tags, Open Graph, and improved crawlability

📱 Features
✅ 5 Admin Screens

✅ Full API Integration (CRUD where applicable)

✅ Responsive Material UI layout

✅ Loading states, error handling via TanStack

✅ Accessible and SEO-friendly

✅ Type-safe implementation with TypeScript

✅ Modular and scalable project structure

📂 Project Structure
bash
Copy
Edit
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── [screens]/
├── components/
│   └── [UI Components]
├── hooks/
│   └── api.ts  # All API calls using TanStack
├── utils/
│   └── seo.ts  # SEO helper functions
├── models/
│   └── [Interfaces and Types]
└── public/
🖼️ Screens Implemented
Dashboard – Overview of metrics/statistics

Users Management – List, search, edit, delete users

Orders Panel – View and manage customer orders

Products Panel – CRUD for product inventory

Settings Page – General application settings

🔗 API Integration
All API calls are managed through TanStack Query using useQuery and useMutation.

Global API error and loading state handling.

Each screen has its own API service layer in services/.

🌐 SEO Optimization
Dynamic head metadata using metadata export in Next.js 15 App Router

Open Graph tags

Optimized title, description, and canonical URLs

Fully accessible and crawlable layout

🚀 Getting Started
bash
Copy
Edit
# Clone the repository
git clone https://github.com/Tamilarasan143/flyweis-task.git
cd admin-panel-flyweis

# Install dependencies
npm install

# Start development server
npm run dev
📦 Build for Production
bash
Copy
Edit
npm run build
npm start
📃 License
This project is for demonstration purposes as part of a task assigned by Flyweis Technology.