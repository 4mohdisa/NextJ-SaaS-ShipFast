# Landing Page Development Workflow & Instructions

## 🎯 Project Context
This is a developer boilerplate project called "ShipFast Stack / Clerk-Convex Launchpad" - a production-ready template that combines Next.js, Convex, Clerk, Shadcn UI, and Tailwind CSS to help developers ship products faster.

## 🚀 Current Status
- ✅ Clerk authentication fully integrated
- ✅ Convex database and backend connected
- ✅ Clerk billing system implemented and functional
- ✅ All core integrations tested and working

## 📋 Landing Page Requirements

### Core Sections to Include
1. **Navigation Bar**
   - Logo/Brand name on the left
   - Navigation links: Features, Pricing, Docs, About
   - Auth buttons: Sign In / Get Started (right side)
   - Mobile-responsive hamburger menu

2. **Hero Section**
   - Compelling headline about shipping faster
   - Subtitle explaining the developer boilerplate concept
   - Primary CTA button: "Get Started" / "Start Building"
   - Secondary CTA: "View Demo" / "See Documentation"
   - Hero image/illustration or code snippet preview

3. **Features Section**
   - Tech stack highlights (Next.js, Convex, Clerk, Shadcn UI)
   - Benefits: Time savings, best practices, production-ready
   - Use icons and brief descriptions for each feature

4. **Pricing Section**
   - Integrate with existing Clerk billing
   - Multiple tiers if applicable (Free, Pro, Enterprise)
   - Clear feature comparison
   - "Start Free" or "Get Started" buttons

5. **Social Proof Section**
   - Placeholder testimonials
   - Logos of companies/tools used
   - Statistics (time saved, developers using it, etc.)

6. **Footer**
   - Links to documentation, GitHub, support
   - Social media links
   - Legal pages (Privacy, Terms)

## 🎨 Design & Color Theme

### Color Palette
- **Primary**: Blue-600 (`#2563eb`) - for main CTAs and brand elements
- **Secondary**: Slate-800 (`#1e293b`) - for text and headers
- **Accent**: Emerald-500 (`#10b981`) - for success states and highlights
- **Background**: White (`#ffffff`) with subtle Gray-50 (`#f9fafb`) sections
- **Borders**: Gray-200 (`#e5e7eb`) for subtle dividers

### Design Principles
- **Clean and Modern**: Plenty of whitespace, subtle shadows
- **Developer-Focused**: Use code-style fonts for technical elements
- **Professional**: Business-ready appearance that inspires confidence
- **Fast Loading**: Optimized images and minimal animations

## 🛠️ Technical Implementation

### Required Shadcn Components
Add these components as needed:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add sheet # for mobile menu
npx shadcn@latest add separator
npx shadcn@latest add avatar
```

### File Structure
- Update `app/page.tsx` as the main landing page
- Create components in `components/` folder:
  - `components/navbar.tsx`
  - `components/hero-section.tsx`
  - `components/features-section.tsx`
  - `components/pricing-section.tsx`
  - `components/footer.tsx`

### Integration Points
- **Authentication**: Use existing Clerk setup for sign-in/sign-up flows
- **Billing**: Connect pricing CTAs to Clerk billing system
- **Responsive**: Ensure mobile-first responsive design
- **Performance**: Optimize for Core Web Vitals

## 📝 Content Guidelines

### Messaging Focus
- **Speed**: "Ship in days, not weeks"
- **Quality**: "Production-ready from day one"
- **Developer Experience**: "Focus on features, not setup"
- **Modern Stack**: "Built with the latest tools"

### Call-to-Action Language
- Primary: "Get Started", "Start Building", "Launch Faster"
- Secondary: "View Demo", "See Docs", "Learn More"

## ✅ Acceptance Criteria

### Functionality
- [ ] All authentication flows work with Clerk
- [ ] Pricing buttons connect to billing system
- [ ] Mobile navigation functions properly
- [ ] All links and buttons are functional
- [ ] Responsive design works on all screen sizes

### Design
- [ ] Consistent color theme throughout
- [ ] Professional, developer-focused aesthetic
- [ ] Clear visual hierarchy
- [ ] Accessible contrast ratios
- [ ] Loading states and hover effects

### Content
- [ ] Clear value proposition in hero
- [ ] Technical benefits well explained
- [ ] Pricing is transparent and compelling
- [ ] All text is developer-focused and professional

Remember: This landing page should convert developers into users by clearly demonstrating the value of using this boilerplate to ship faster.