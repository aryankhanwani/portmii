'use client'

import { ArrowRight } from 'lucide-react'
import { ShinyButton } from '@/components/shiny-button'

export default function CTA() {
  return (
    <section className="max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-24 pl-6">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white">
        <div className="absolute inset-0" style={{background: 'radial-gradient(70% 60% at 80% 20%, rgba(102,126,234,0.12), transparent 60%), radial-gradient(60% 60% at 20% 80%, rgba(240,147,251,0.10), transparent 60%)'}}></div>
        <div className="relative px-8 py-12 lg:px-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Manage your links smarter with Portmii
          </h3>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            Create, track, and optimize every link—from campaigns to QR codes—on one modern platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <ShinyButton 
              className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition ring-1 ring-slate-300"
              style={{background: 'linear-gradient(180deg, rgb(102,126,234) 0%, rgb(240,147,251) 100%)'}}
              aria-label="Get started with Portmii"
              onClick={() => window.location.href = '/signup'}
            >
              <span className="flex items-center normal-case text-base">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </span>
            </ShinyButton>
            <a href="/pricing" className="inline-flex items-center px-6 py-3 rounded-lg text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 ring-1 ring-slate-200 font-medium" aria-label="View pricing">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}