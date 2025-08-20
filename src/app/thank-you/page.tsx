'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ThankYou() {
  useEffect(() => {
    // Track conversion event with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'event_category': 'engagement',
        'event_label': 'early_access_signup',
        'value': 1
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            You've successfully joined the waitlist for "Getting Started with Generative AI in Research" 4th Edition.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What happens next?</h2>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <p>You'll receive a confirmation email shortly</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <p>You'll be the first to know when the course is available</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <p>You'll get exclusive early access before the public release</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">
            In the meantime, feel free to explore more about the course.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-[#bc4749] hover:bg-[#a63f41] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            ← Back to Course Details
          </Link>
        </div>
      </div>
    </div>
  )
}
