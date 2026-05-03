<div align="center">
  <h1>🛒 SunCart</h1>
  <p><strong>A Modern Next.js E-Commerce Platform</strong></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2.4-blue?logo=react)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-7.2-47A248?logo=mongodb)](https://www.mongodb.com/)
</div>

<br />

## 📖 Overview

**SunCart** is a modern, beautifully designed e-commerce platform built to demonstrate seamless user authentication and secure profile management. Built on the bleeding-edge Next.js 16 App Router interface, SunCart provides users with lightning-fast routing, beautiful glassmorphic UI components, and bulletproof route protection across all product and profile interactions.

🔗 **Live Demo:** [Click Here to View Live Project](https://your-vercel-domain.vercel.app/) *(Update this with your Vercel link!)*

---

## ✨ Key Features

- 🔐 **Robust Authentication:** Next-generation authentication powered by `better-auth`. Seamlessly supports both robust Email/Password workflows and instant 1-click Google OAuth logins.
- 🛡️ **Edge-Ready Middleware Protection:** Secure navigation natively handled through Next.js highly responsive Edge Runtime, automatically bouncing unauthenticated traffic from interacting with secured routes like `/profile` and `/products/*`.
- 👤 **Dynamic Profile Management:** Dedicated dashboard allowing users to view and update their connected user-data and avatars instantly upon logging in.
- 🔔 **Instant UI Feedback:** High quality, real-time toast notifications (via `react-toastify`) keeping users informed of submission success, rejections, and background loading statuses.
- 💅 **Responsive & Accessible Design:** Utilizing Tailwind CSS v4 alongside DaisyUI to deliver fluid, highly-polished interface elements that scale identically across Desktop and Mobile viewings.

---

## 🛠️ Technologies & NPM Packages

This project leverages the most modern ecosystem capabilities in React development:

### Core Frame & Styling
- **[`next` (v16.2.4)](https://nextjs.org/)** - Core Application Framework
- **[`react` & `react-dom` (v19.2.4)](https://react.dev/)** - UI Rendering Engine
- **[`tailwindcss` (v4.2.4)](https://tailwindcss.com/)** - Atomic Utility-First Styling
- **[`daisyui` (v5.5.19)](https://daisyui.com/)** - Tailwind Component Architecture

### Backend & Authentication
- **[`better-auth` (v1.6.9)](https://better-auth.com/)** - Next-generation Auth Ecosystem
- **[`mongodb` (v7.2.0)](https://www.mongodb.com/)** - NoSQL Database Integration
- **[`@better-auth/mongo-adapter`](https://better-auth.com/)** - Bridging Auth directly to the Mongo backend

### User Interaction Utilities
- **[`react-toastify` (v11.1.0)](https://fkhadra.github.io/react-toastify/)** - Exquisite notification snackbars

---

## 🚀 Getting Started

To get the application running locally in your own development environment:

1. **Clone the repository** and install dependencies:
   ```bash
   npm install
   ```

2. **Configure your Environment Variables:**
   Create a `.env` file referencing your backend configuration:
   ```env
   # Database Configuration
   DATABASE_URL="mongodb+srv://..."
   
   # Auth Core Settings
   BETTER_AUTH_URL="http://localhost:3000"
   BETTER_AUTH_SECRET="your-secret-key"
   
   # Optional: Google OAuth
   GOOGLE_CLIENT_ID="your-client-id"
   GOOGLE_CLIENT_SECRET="your-client-secret"
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open** `http://localhost:3000` inside your browser to start browsing SunCart!

---
*Developed with modern React & Next.js best practices.*
