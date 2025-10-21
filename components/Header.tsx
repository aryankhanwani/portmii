'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import { ShinyButton } from '@/components/shiny-button'

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-white/30 border-slate-200/30 border-b top-0 left-0 right-0 backdrop-blur-xl shadow-lg shadow-slate-200/20">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/20" />
      <div className="relative max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
        <div className="flex items-center justify-between">
          <a href="/home" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Portmii Logo" 
              width={32} 
              height={32} 
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold text-slate-900 tracking-tight">Portmii</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-slate-600 gap-x-8 gap-y-8 items-center cursor-pointer">
            <a href="/features" className="hover:text-slate-900 transition">
              Features
            </a>
            <a href="/pricing" className="hover:text-slate-900 transition">
              Pricing
            </a>
            <a href="/referrals" className="hover:text-slate-900 transition">
              Referrals
            </a>
            <ShinyButton 
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg ring-1 ring-slate-300"
              style={{background: 'linear-gradient(180deg, rgb(102, 126, 234) 0%, rgb(240, 147, 251) 100%)'}}
              aria-label="Get Started"
            >
              Get Started
            </ShinyButton>
          </nav>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
            <Menu className="h-5 w-5 text-slate-700" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  )
}

