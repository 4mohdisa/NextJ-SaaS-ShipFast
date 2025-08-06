'use client'

import { Authenticated, Unauthenticated } from 'convex/react'
import { SignInButton, SignUpButton, UserButton, PricingTable } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Menu, Code, Zap, Shield, Rocket, Database, Users, Star, ArrowRight, Github, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <SocialProofSection />
      <StarRequestSection />
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-800">ShipFast Stack</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              <Link href="#features" className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link href="/docs" className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors">
                Docs
              </Link>
              <Link href="/changelog" className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors">
                Changelog
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Authenticated>
              <UserButton />
            </Authenticated>
            <Unauthenticated>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm">
                  Get Started
                </Button>
              </SignUpButton>
            </Unauthenticated>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="#features" className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
                    Features
                  </Link>
                  <Link href="#pricing" className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
                    Pricing
                  </Link>
                  <Link href="/docs" className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
                    Docs
                  </Link>
                  <Link href="/changelog" className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
                    Changelog
                  </Link>
                  <Separator />
                  <div className="flex flex-col space-y-2">
                    <Authenticated>
                      <UserButton />
                    </Authenticated>
                    <Unauthenticated>
                      <SignInButton mode="modal">
                        <Button variant="ghost" className="justify-start">
                          Sign In
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <Button className="justify-start">
                          Get Started
                        </Button>
                      </SignUpButton>
                    </Unauthenticated>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Production-Ready Boilerplate
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Ship Your SaaS in
            <span className="text-blue-600"> Days, Not Weeks</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Skip the setup, focus on features. Our production-ready boilerplate combines Next.js, Convex, Clerk, and Shadcn UI 
            so you can launch faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <SignUpButton mode="modal">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Building Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignUpButton>
            <Link href="https://github.com/4mohdisa/NextJ-SaaS-ShipFast" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </Link>
          </div>
          <div className="mt-12">
            <div className="bg-slate-900 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm ml-4">terminal</span>
              </div>
              <code className="text-emerald-400 text-sm">
                <div>$ git clone https://github.com/4mohdisa/NextJ-SaaS-ShipFast.git</div>
                <div>$ npm install</div>
                <div>$ npm dev</div>
                <div className="text-slate-400"># 🚀 Your SaaS is ready!</div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Next.js 14 + TypeScript",
      description: "Built with the latest Next.js features including App Router, Server Components, and TypeScript for type safety."
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Convex Backend",
      description: "Real-time database with serverless functions. No backend setup required - just write your queries and mutations."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Clerk Authentication",
      description: "Complete auth system with social logins, user management, and integrated billing - all configured and ready."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Shadcn UI Components",
      description: "Beautiful, accessible components built with Radix UI and Tailwind CSS. Customizable and production-ready."
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: "Deploy in Minutes",
      description: "Optimized for Vercel deployment. Push to GitHub and your SaaS is live with automatic CI/CD."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Billing Integration",
      description: "Stripe billing through Clerk with subscription management, invoicing, and payment processing built-in."
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Everything You Need to Ship Fast
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A complete, production-ready stack that eliminates weeks of setup and configuration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-slate-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include the complete boilerplate and updates.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="[&_.cl-pricingTable]:text-slate-800 [&_.cl-pricingTable-card]:border-gray-200 [&_.cl-pricingTable-card]:shadow-sm [&_.cl-pricingTable-card:hover]:shadow-md [&_.cl-pricingTable-button]:bg-blue-600 [&_.cl-pricingTable-button]:hover:bg-blue-700 [&_.cl-pricingTable-button]:border-blue-600 [&_.cl-pricingTable-price]:text-slate-800 [&_.cl-pricingTable-title]:text-slate-800 [&_.cl-pricingTable-description]:text-slate-600 [&_.cl-pricingTable-feature]:text-slate-600 [&_.cl-pricingTable-checkmark]:text-emerald-500">
            <PricingTable />
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProofSection() {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Full-stack Developer",
      content: "Saved me 2 weeks of setup time. The Clerk + Convex integration is flawless.",
      avatar: "AC"
    },
    {
      name: "Sarah Johnson",
      role: "Indie Maker",
      content: "Finally launched my SaaS idea in 3 days instead of 3 months. Game changer!",
      avatar: "SJ"
    },
    {
      name: "Mike Rodriguez",
      role: "Startup Founder",
      content: "The billing integration alone is worth the price. Everything just works.",
      avatar: "MR"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Loved by Developers Worldwide
          </h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-slate-600">4.9/5 from 200+ developers</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">Join 500+ developers who ship faster with ShipFast Stack</p>
          <div className="flex items-center justify-center flex-wrap gap-6 opacity-60">
            <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <div className="text-2xl font-bold text-slate-400">Next.js</div>
            </Link>
            <Link href="https://convex.dev" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <div className="text-2xl font-bold text-slate-400">Convex</div>
            </Link>
            <Link href="https://clerk.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <div className="text-2xl font-bold text-slate-400">Clerk</div>
            </Link>
            <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <div className="text-2xl font-bold text-slate-400">shadcn/ui</div>
            </Link>
            <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <div className="text-2xl font-bold text-slate-400">Vercel</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function StarRequestSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Love ShipFast Stack? ⭐
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            If this boilerplate helped you ship faster, please consider giving it a star on GitHub. 
            Your support helps me maintain and improve this project for the developer community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://github.com/4mohdisa/NextJ-SaaS-ShipFast" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Star className="mr-2 h-5 w-5" />
                Star on GitHub
              </Button>
            </Link>
            <Link href="https://twitter.com/4mohdisa" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Twitter className="mr-2 h-4 w-4" />
                Follow for Updates
              </Button>
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            Thank you for being part of the ShipFast Stack community! 🚀
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Link href="/docs" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Docs
            </Link>
            <Link href="/changelog" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Changelog
            </Link>
            <Link href="https://github.com/4mohdisa" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              GitHub
            </Link>
            <Link href="https://twitter.com/4mohdisa" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Twitter
            </Link>
          </div>
          
          {/* Credit */}
          <p className="text-slate-400 text-xs text-center">
            Built with ❤️ by{' '}
            <Link href="https://isaxcode.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              Mohammed Isa
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}