'use client'

import { Link, ArrowRight, ExternalLink } from 'lucide-react'
import SplitText from './SplitText'
import { ShinyButton } from '@/components/shiny-button'

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

  return (
    <section className="lg:pt-32 lg:pb-32 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        {/* Centered Copy Only */}
        <div className="lg:col-span-12 text-center mx-auto">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-indigo-600/90 bg-indigo-500/10 ring-1 ring-indigo-500/20 rounded-full mb-6">
            <Link className="h-3 w-3" strokeWidth={1.5} />
            Link Management Platform
          </div> */}
          
          <div className="mb-6 space-y-4">
            <SplitText
              text="The Ultimate"
              className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.05]"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] lg:leading-[1.2] pb-4 lg:pb-6 mb-2">
              <SplitText
                text="Link Management Platform"
                className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
          </div>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Create branded short links, track clicks in real time, manage QR codes, and optimize campaigns—all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ShinyButton 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-lg shadow-lg" 
              style={{background: 'linear-gradient(180deg, rgb(102, 126, 234) 0%, rgb(240, 147, 251) 100%)'}}
              aria-label="Get Started Free"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
            </ShinyButton>
            <a href="/example" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 ring-1 ring-slate-200 rounded-lg transition">
              View Demo
              <ExternalLink className="ml-2 h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
