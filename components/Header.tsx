'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ShinyButton } from '@/components/shiny-button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="fixed z-50 w-full bg-white/30 border-slate-200/30 border-b top-0 left-0 right-0 backdrop-blur-xl shadow-lg shadow-slate-200/20">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/20" />
      <div className="relative max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 bg-white">
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
          <div className="md:hidden mobile-menu-container relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 z-50 relative"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-slate-700" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5 text-slate-700" strokeWidth={1.5} />
              )}
            </button>

            {/* Mobile Menu Dropdown */}
            <div 
              className={`absolute right-0 top-12 w-64 bg-white rounded-lg shadow-xl ring-1 ring-slate-200 transition-all duration-300 ease-in-out origin-top-right ${
                isMenuOpen 
                  ? 'opacity-100 scale-100 visible' 
                  : 'opacity-0 scale-95 invisible'
              }`}
            >
              <div className="flex flex-col p-4 space-y-2">
                <Link 
                  href="/features" 
                  className="text-base font-medium text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-base font-medium text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/referrals" 
                  className="text-base font-medium text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Referrals
                </Link>
                <div className="pt-2">
                  <ShinyButton 
                    className="w-full justify-center px-4 py-3 text-sm font-medium text-white rounded-lg"
                    style={{background: 'linear-gradient(180deg, rgb(102, 126, 234) 0%, rgb(240, 147, 251) 100%)'}}
                    aria-label="Get Started"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </ShinyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}