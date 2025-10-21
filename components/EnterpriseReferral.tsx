'use client'

import { Plus, CheckCircle, DollarSign, CreditCard, ArrowRight } from 'lucide-react'

export default function EnterpriseReferral() {
  return (
    <section id="referral" className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white">
        <div className="absolute -top-24 -right-12 h-64 w-64 rounded-full blur-3xl opacity-50" style={{background: 'radial-gradient(closest-side, rgba(102,126,234,0.15), rgba(240,147,251,0.08), transparent)'}}></div>
        <div className="relative p-8 lg:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-medium text-emerald-700 bg-emerald-500/10 ring-1 ring-emerald-500/20 rounded-full mb-4">
              <Plus className="h-3 w-3 text-emerald-700" strokeWidth={1.5} />
              Referral Program
            </div>
            <h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">
              Refer. Earn. Get paid.
            </h3>
            <p className="text-lg text-slate-600">
              Share your referral link. When they purchase, you earn commission—payouts are processed securely via Stripe.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card: Eligibility */}
            <div className="hover:ring-slate-300 transition bg-white ring-1 ring-slate-200 rounded-2xl p-6 relative overflow-hidden" style={{backgroundImage: 'radial-gradient(800px 300px at 50% -20%, rgba(16,185,129,0.08), transparent 60%)'}}>
              <div className="flex items gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 grid place-items-center">
                  <CheckCircle className="h-4.5 w-4.5 text-emerald-600" strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-semibold text-slate-900">Eligibility</h4>
              </div>
              <p className="text-sm text-slate-600">Referrals are available to active users with an eligible plan.</p>
            </div>

            {/* Card: Commission */}
            <div className="hover:ring-slate-300 transition bg-white ring-1 ring-slate-200 rounded-2xl p-6 relative overflow-hidden" style={{backgroundImage: 'radial-gradient(800px 300px at 50% -20%, rgba(99,102,241,0.08), transparent 60%)'}}>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/20 grid place-items-center">
                  <DollarSign className="h-4.5 w-4.5 text-indigo-600" strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-semibold text-slate-900">Earn Commission</h4>
              </div>
              <p className="text-sm text-slate-600">When your referral becomes a paying customer, you receive a commission based on the plan they purchase.</p>
            </div>

            {/* Card: Stripe Payouts */}
            <div className="hover:ring-slate-300 transition bg-white ring-1 ring-slate-200 rounded-2xl p-6 relative overflow-hidden" style={{backgroundImage: 'radial-gradient(800px 300px at 50% -20%, rgba(244,114,182,0.10), transparent 60%)'}}>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-pink-500/10 ring-1 ring-pink-500/20 grid place-items-center">
                  <CreditCard className="h-4.5 w-4.5 text-pink-600" strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-semibold text-slate-900">Payouts via Stripe</h4>
              </div>
              <p className="text-sm text-slate-600">Connect your account to receive seamless payouts through Stripe once commissions are approved.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/referrals" className="inline-flex items-center px-5 py-3 rounded-lg text-white font-medium transition ring-1 ring-emerald-200" style={{background: 'linear-gradient(180deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)'}} aria-label="Start referring">
              Start Referring
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="/referral-terms" className="inline-flex items-center px-5 py-3 rounded-lg text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 ring-1 ring-slate-200 font-medium transition">
              Program Terms
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

