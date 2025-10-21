'use client'

import { Check, ArrowRight, Star, Rocket, Crown, Zap, CheckCircle } from 'lucide-react'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import { ShinyButton } from '@/components/shiny-button'
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../hooks/useCountUp';

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const sectionRef = useScrollAnimation()
  const cardsRef = useStaggerAnimation(0.2)
  
  // Count up values for each plan (faster animation: 1000ms)
  const freePrice = useCountUp(0, 0, 1000, inView);
  const premiumPrice = useCountUp(5, 0, 1000, inView);
  const enterprisePrice = useCountUp(15, 0, 1000, inView);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto py-24">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-blue-600/90 bg-blue-500/10 ring-1 ring-blue-500/20 rounded-full mb-6 animate-fade-in">
          <Zap className="h-3.5 w-3.5" />
          PRICING PLANS
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Simple, transparent pricing
        </h2>
        <p className="text-lg md:text-xl text-slate-600">
          Start free and upgrade as you grow. All plans include our core features with no hidden fees.
        </p>
      </div>

      <div ref={ref} className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {/* Free */}
        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="animate-item group relative bg-white rounded-2xl p-8 transition-all duration-300 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full w-full"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex-1 flex flex-col">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 mb-6 mx-auto">
                <Star className="h-6 w-6 text-blue-500" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-3">Free</h3>
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-bold text-slate-900">{freePrice}€</span>
                  <span className="text-sm text-slate-500">/month</span>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-slate-700 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <span className="font-medium">Up to 3 Links</span>
                    <p className="text-slate-500 text-sm">Perfect for getting started</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <span className="font-medium">Custom Portmii Domain</span>
                    <p className="text-slate-500 text-sm">Yourname.portmii.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <span className="font-medium">Basic Analytics</span>
                    <p className="text-slate-500 text-sm">Track link performance</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-6 border-t border-slate-100">
              <ShinyButton 
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-300 hover:shadow-lg group"
                aria-label="Get started with Free plan"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Get Started Free</span>
              </ShinyButton>
            </div>
          </div>
        </div>

        {/* Premium */}
        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="animate-item group relative bg-white rounded-2xl p-8 transition-all duration-300 border-2 border-blue-100 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
        >
          <div className="absolute -top-3 right-6 px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
            POPULAR
          </div>
          <div className="relative flex-1 flex flex-col">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 mb-6 mx-auto">
                <Rocket className="h-6 w-6 text-blue-500" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-3">Premium</h3>
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-bold text-slate-900">{premiumPrice}€</span>
                  <span className="text-sm text-slate-500">/month</span>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-slate-700 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="font-medium">Up to 50 Links</span>
                    <p className="text-slate-500 text-sm">Plenty for growing needs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="font-medium">Custom Domain</span>
                    <p className="text-slate-500 text-sm">Use your own domain</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="font-medium">Advanced Analytics</span>
                    <p className="text-slate-500 text-sm">Detailed insights & reports</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="font-medium">Custom Branding</span>
                    <p className="text-slate-500 text-sm">Colors, fonts & styles</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-6 border-t border-slate-100">
              <ShinyButton 
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-300 hover:shadow-lg group"
                aria-label="Buy Premium plan"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Buy Now</span>
              </ShinyButton>
            </div>
          </div>
        </div>

        {/* Enterprise */}
        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="animate-item group relative bg-white rounded-2xl p-8 transition-all duration-300 border-2 border-purple-100 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
        >
          <div className="absolute -top-3 right-6 px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md">
            BEST VALUE
          </div>
          <div className="relative flex-1 flex flex-col">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-50 mb-6 mx-auto">
                <Crown className="h-6 w-6 text-purple-500" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-3">Enterprise</h3>
              
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-bold text-slate-900">{enterprisePrice}€</span>
                  <span className="text-sm text-slate-500">/month</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="font-medium">Unlimited Links & Analytics</span>
                    <p className="text-slate-500 text-sm">Grow without limits with advanced tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="font-medium">Custom Domain & Branding</span>
                    <p className="text-slate-500 text-sm">Your domain, your brand, your rules</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="font-medium">Referral Program + API</span>
                    <p className="text-slate-500 text-sm">Earn more with custom integrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="font-medium">Priority 24/7 Support</span>
                    <p className="text-slate-500 text-sm">Dedicated help whenever you need it</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-6 border-t border-slate-100">
              <ShinyButton 
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl transition-all duration-300 hover:shadow-lg group"
                aria-label="Get started with Enterprise plan"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Get Enterprise</span>
              </ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
