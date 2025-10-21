'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <a href="/home" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Portmii Logo" 
                width={28} 
                height={28} 
                className="h-7 w-7"
              />
              <span className="text-lg font-semibold text-slate-900">Portmii</span>
            </a>
            <p className="text-sm text-slate-600 max-w-sm mt-3">
              The ultimate platform for creating stunning link-in-bio pages that convert visitors into followers, customers, and fans.
            </p>
          </div>

          <div className="">
            <h4 className="text-sm font-semibold text-slate-900">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="/features" className="hover:text-slate-900">Features</a></li>
              <li><a href="/pricing" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="/referrals" className="hover:text-slate-900">Referrals</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="/#" className="hover:text-slate-900">About</a></li>
              <li><a href="/mailto:support@portmii.com" className="hover:text-slate-900">Support</a></li>
            </ul>
          </div>

          <div className="">
            <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="/privacy-policty" className="hover:text-slate-900">Privacy</a></li>
              <li><a href="/terms-of-service" className="hover:text-slate-900">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10 gap-x-4 gap-y-4 items-center justify-center">
          <p className="text-xs text-slate-500">© {currentYear} Portmii, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

