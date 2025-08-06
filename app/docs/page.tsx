import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Code, Database, Shield, Zap } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Documentation</h1>
          <p className="text-xl text-slate-600">
            Everything you need to get started with ShipFast Stack
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Quick Start</h2>
          <Card>
            <CardHeader>
              <CardTitle>Get Started in 3 Steps</CardTitle>
              <CardDescription>
                Follow these steps to get your SaaS up and running in minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-emerald-400 text-sm">
                  <div># 1. Clone the repository</div>
                  <div>git clone https://github.com/4mohdisa/nextjs-saas-shipfast.git</div>
                  <div className="mt-2"># 2. Install dependencies</div>
                  <div>pnpm install</div>
                  <div className="mt-2"># 3. Start development server</div>
                  <div>pnpm dev</div>
                </code>
              </div>
              <p className="text-slate-600">
                That&apos;s it! Your SaaS boilerplate is now running at <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000</code>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Code className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Next.js 14</CardTitle>
                <CardDescription>
                  React framework with App Router, Server Components, and TypeScript
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Database className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Convex</CardTitle>
                <CardDescription>
                  Real-time database with serverless functions and automatic scaling
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Clerk</CardTitle>
                <CardDescription>
                  Complete authentication system with billing and user management
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Shadcn UI</CardTitle>
                <CardDescription>
                  Beautiful, accessible components built with Radix UI and Tailwind CSS
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Configuration</h2>
          <Card>
            <CardHeader>
              <CardTitle>Environment Variables</CardTitle>
              <CardDescription>
                Set up your environment variables in <code>.env.local</code>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-emerald-400 text-sm">
                  <div># Convex</div>
                  <div>NEXT_PUBLIC_CONVEX_URL=your_convex_url</div>
                  <div className="mt-2"># Clerk</div>
                  <div>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key</div>
                  <div>CLERK_SECRET_KEY=your_clerk_secret</div>
                </code>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Features</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">✅</Badge>
              <div>
                <h3 className="font-semibold text-slate-800">Authentication & Authorization</h3>
                <p className="text-slate-600">Complete user management with Clerk integration</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">✅</Badge>
              <div>
                <h3 className="font-semibold text-slate-800">Real-time Database</h3>
                <p className="text-slate-600">Convex database with real-time subscriptions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">✅</Badge>
              <div>
                <h3 className="font-semibold text-slate-800">Billing Integration</h3>
                <p className="text-slate-600">Stripe billing through Clerk with subscription management</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">✅</Badge>
              <div>
                <h3 className="font-semibold text-slate-800">Modern UI Components</h3>
                <p className="text-slate-600">Shadcn UI components with Tailwind CSS styling</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">✅</Badge>
              <div>
                <h3 className="font-semibold text-slate-800">TypeScript</h3>
                <p className="text-slate-600">Full TypeScript support with strict type checking</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge variant="secondary" className="mt-1">✅</Badge>
              <div>
                <h3 className="font-semibold text-slate-800">Responsive Design</h3>
                <p className="text-slate-600">Mobile-first responsive design that works on all devices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Need Help?</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-slate-600 mb-4">
                If you need help getting started or have questions about ShipFast Stack:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="https://github.com/4mohdisa/nextjs-saas-shipfast/issues" target="_blank" rel="noopener noreferrer">
                    GitHub Issues
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://twitter.com/4mohdisa" target="_blank" rel="noopener noreferrer">
                    Contact on Twitter
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
