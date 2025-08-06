import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { ArrowLeft, Plus, Zap, Bug, Shield } from 'lucide-react'

export default function ChangelogPage() {
  const releases = [
    {
      version: "1.0.0",
      date: "2024-01-15",
      type: "major",
      title: "Initial Release",
      description: "The first stable release of ShipFast Stack with all core features.",
      changes: [
        { type: "feature", text: "Complete Next.js 14 setup with App Router" },
        { type: "feature", text: "Convex database integration with real-time capabilities" },
        { type: "feature", text: "Clerk authentication with social logins" },
        { type: "feature", text: "Integrated Stripe billing through Clerk" },
        { type: "feature", text: "Shadcn UI component library" },
        { type: "feature", text: "Professional landing page template" },
        { type: "feature", text: "TypeScript configuration with strict mode" },
        { type: "feature", text: "Responsive design for all screen sizes" }
      ]
    },
    {
      version: "1.1.0",
      date: "2024-02-01",
      type: "minor",
      title: "Enhanced UI & Performance",
      description: "Improved user interface and performance optimizations.",
      changes: [
        { type: "feature", text: "Added dark mode support" },
        { type: "feature", text: "Enhanced mobile navigation" },
        { type: "improvement", text: "Improved loading states and animations" },
        { type: "improvement", text: "Better error handling and user feedback" },
        { type: "fix", text: "Fixed responsive issues on tablet devices" },
        { type: "fix", text: "Resolved authentication redirect issues" }
      ]
    },
    {
      version: "1.2.0",
      date: "2024-02-15",
      type: "minor",
      title: "Developer Experience",
      description: "Focus on improving the developer experience and documentation.",
      changes: [
        { type: "feature", text: "Comprehensive documentation site" },
        { type: "feature", text: "Interactive component examples" },
        { type: "feature", text: "Development environment setup guide" },
        { type: "improvement", text: "Better TypeScript types and interfaces" },
        { type: "improvement", text: "Improved code organization and structure" },
        { type: "fix", text: "Fixed build issues with certain Node.js versions" }
      ]
    }
  ]

  const getChangeIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return <Plus className="w-4 h-4 text-emerald-500" />
      case 'improvement':
        return <Zap className="w-4 h-4 text-blue-500" />
      case 'fix':
        return <Bug className="w-4 h-4 text-orange-500" />
      case 'security':
        return <Shield className="w-4 h-4 text-red-500" />
      default:
        return <Plus className="w-4 h-4 text-gray-500" />
    }
  }

  const getVersionBadgeVariant = (type: string) => {
    switch (type) {
      case 'major':
        return 'default'
      case 'minor':
        return 'secondary'
      case 'patch':
        return 'outline'
      default:
        return 'secondary'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Changelog</h1>
          <p className="text-xl text-slate-600">
            Track all updates, improvements, and new features in ShipFast Stack
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {releases.map((release) => (
            <Card key={release.version} className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge variant={getVersionBadgeVariant(release.type)}>
                      v{release.version}
                    </Badge>
                    <h2 className="text-xl font-semibold text-slate-800">
                      {release.title}
                    </h2>
                  </div>
                  <time className="text-sm text-slate-500">
                    {new Date(release.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <CardDescription className="text-base">
                  {release.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {release.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="flex items-start space-x-3">
                      {getChangeIcon(change.type)}
                      <span className="text-slate-700 flex-1">{change.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Want to stay updated? Follow{' '}
            <Link href="https://twitter.com/4mohdisa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
              @4mohdisa
            </Link>{' '}
            on Twitter for the latest updates.
          </p>
        </div>
      </div>
    </div>
  )
}
