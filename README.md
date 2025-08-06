# 🚀 ShipFast Stack - NextJS SaaS Boilerplate

**Ship your SaaS in days, not weeks!** A production-ready boilerplate that combines the best modern technologies to help developers launch faster.

![ShipFast Stack](https://img.shields.io/badge/ShipFast-Stack-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Convex](https://img.shields.io/badge/Convex-Database-orange?style=for-the-badge)
![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge)

## ✨ What is ShipFast Stack?

ShipFast Stack is a **developer boilerplate** designed to eliminate the repetitive setup process that every SaaS project requires. Instead of spending weeks configuring authentication, databases, billing, and UI components, you can start building your actual product features from day one.

### 🎯 Perfect For:
- 👨‍💻 Indie developers who want to ship fast
- 🚀 Startups building their MVP
- 🏢 Agencies creating client projects
- 📚 Developers learning modern web development

## 🛠️ Tech Stack

| Technology | Purpose | Why We Chose It |
|------------|---------|----------------|
| **Next.js 14** | Frontend + API | Latest features, App Router, Server Components |
| **Convex** | Database + Backend | Real-time, serverless, no backend setup needed |
| **Clerk** | Authentication + Billing | Complete auth system with Stripe integration |
| **Shadcn UI** | UI Components | Beautiful, accessible, customizable components |
| **Tailwind CSS** | Styling | Utility-first, highly customizable |
| **TypeScript** | Type Safety | Better developer experience and fewer bugs |
| **Vercel** | Hosting | Optimized for Next.js, automatic deployments |

## 🎥 Demo Video

Watch the setup process in action:

📹 **[Clerk Next.js Quickstart.mp4](./Clerk%20Next.js%20Quickstart.mp4)**

This video demonstrates the complete authentication flow and billing integration setup.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/4mohdisa/NextJ-SaaS-ShipFast.git
cd NextJ-SaaS-ShipFast
```

### 2. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory:

```env
# Convex
NEXT_PUBLIC_CONVEX_URL=your_convex_url

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 4. Start Development Server
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your SaaS in action! 🎉

## 📋 Features

### ✅ Authentication & User Management
- Social logins (Google, GitHub, etc.)
- Email/password authentication
- User profiles and settings
- Protected routes and middleware

### ✅ Database & Backend
- Real-time Convex database
- Serverless functions
- Type-safe queries and mutations
- Automatic scaling

### ✅ Billing & Subscriptions
- Stripe integration through Clerk
- Subscription management
- Invoice handling
- Payment processing

### ✅ UI & Design
- Professional landing page
- Responsive design (mobile-first)
- Dark/light mode support
- Accessible components
- Beautiful animations

### ✅ Developer Experience
- TypeScript throughout
- ESLint + Prettier
- Hot reload
- Type-safe APIs
- Comprehensive documentation

## 📁 Project Structure

```
NextJ-SaaS-ShipFast/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── docs/              # Documentation page
│   ├── changelog/         # Changelog page
│   ├── pricing/           # Pricing page
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── ui/                # Shadcn UI components
│   └── ConvexClientProvider.tsx
├── convex/                # Convex backend
│   ├── _generated/        # Auto-generated files
│   ├── auth.config.js     # Auth configuration
│   └── messages.ts        # Example queries
├── public/                # Static assets
└── README.md              # You are here!
```

## 🔧 Configuration

### Convex Setup
1. Create a [Convex](https://convex.dev) account
2. Run `npx convex dev` to set up your database
3. Copy the deployment URL to your `.env.local`

### Clerk Setup
1. Create a [Clerk](https://clerk.com) account
2. Create a new application
3. Copy your keys to `.env.local`
4. Configure social providers (optional)
5. Set up Stripe for billing (optional)

### Deployment
Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/4mohdisa/NextJ-SaaS-ShipFast)

## 📚 Documentation

Visit our comprehensive documentation:
- 📖 [Getting Started Guide](./app/docs/page.tsx)
- 📝 [Changelog](./app/changelog/page.tsx)
- 🔧 [Configuration Guide](./docs/configuration.md)
- 🎨 [Customization Guide](./docs/customization.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show Your Support

If ShipFast Stack helped you ship faster, please consider:
- ⭐ **Starring this repository**
- 🐦 **Following [@4mohdisa](https://twitter.com/4mohdisa)** on Twitter
- 🌐 **Visiting [isaxcode.com](https://isaxcode.com)** for more projects

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) team for the amazing framework
- [Convex](https://convex.dev) for the real-time database
- [Clerk](https://clerk.com) for authentication and billing
- [Shadcn](https://ui.shadcn.com) for the beautiful UI components
- The amazing developer community for inspiration and feedback

---

**Built with ❤️ by [Mohammed Isa](https://isaxcode.com)**

*Ship faster, build better, launch sooner.* 🚀
