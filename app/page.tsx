import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ExamplePage from '@/components/ExamplePage'
import Pricing from '@/components/Pricing'
import EnterpriseReferral from '@/components/EnterpriseReferral'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <Header />
      <Hero />
      
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
      
      <Features />
      
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
      
      <ExamplePage />
      
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
      
      <Pricing />
      
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
      
      <EnterpriseReferral />
      
      <CTA />
      <Footer />
    </div>
  )
}

