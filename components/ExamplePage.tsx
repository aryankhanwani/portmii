'use client'

import { Eye, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function ExamplePage() {
  return (
    <section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-indigo-600/90 bg-indigo-500/10 ring-1 ring-indigo-500/20 rounded-full mb-6">
            <Eye className="h-3 w-3" strokeWidth={1.5} />
            Example Page
          </div>
          <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            See how your page could look
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Explore a live demo of a Link‑in‑bio and branded links setup to visualize your own experience.
          </p>
          <a href="/example" className="inline-flex items-center px-5 py-3 rounded-lg text-white font-medium ring-1 ring-slate-300" style={{background: 'linear-gradient(180deg, rgb(102, 126, 234) 0%, rgb(240, 147, 251) 100%)'}}>
            View Example
            <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
        <div className="lg:col-span-7">
          <a href="https://portmii.com/official" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="relative rounded-2xl ring-1 ring-slate-200 overflow-hidden bg-white shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="absolute inset-0" style={{background: 'radial-gradient(60% 50% at 70% 30%, rgba(102,126,234,0.10), transparent 60%)'}}></div>
              <div className="relative">
                <Image 
                  src="/screenshot.png" 
                  alt="Portmii example page preview" 
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-base font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center">
                    View Live Example <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
