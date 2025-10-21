'use client'

import { Sparkles, Check, Link as LinkIcon, BarChart, Palette, Zap, Users, Lock, ZapOff, Clock, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full mb-6 border border-indigo-100"
        >
          <Sparkles className="h-4 w-4" strokeWidth={2} />
          Powerful Features
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6"
        >
          Everything you need to{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            manage links
          </span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 leading-relaxed"
        >
          Build branded short links, Link-in-bio pages, QR codes, and real-time analytics—track every click and optimize performance.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 1: Link Management */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
              <LinkIcon className="h-5 w-5 text-indigo-600" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Link Management</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Create, customize, and manage all your links in one place with our intuitive dashboard.
            </p>
          </div>
          <div className="relative bg-white rounded-xl border border-slate-100 overflow-hidden group-hover:shadow-sm transition-shadow duration-300">
            <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                <span className="text-xs font-medium text-slate-700">spring-campaign</span>
              </div>
            </div>
            <div className="p-3.5 space-y-2 text-xs font-mono">
              <div className="text-indigo-600 text-[10px] font-sans font-medium">Your custom link</div>
              <div className="text-slate-800 font-medium">
                portmii.com/<span className="text-indigo-600">spring</span>
              </div>
              <div className="text-slate-400 text-[10px] flex items-center">
                <span className="mr-1">→</span>
                <span className="truncate">https://example.com/landing?utm_source=social</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 2: Advanced Analytics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-purple-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <BarChart className="h-5 w-5 text-purple-600" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Advanced Analytics</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Track clicks, views, and engagement metrics with detailed, real-time insights.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100 hover:border-purple-100 transition-colors">
              <div className="h-9 w-9 rounded-md flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Users className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-800 mb-1">2,847</div>
                <div className="text-xs text-slate-500">Total Clicks</div>
              </div>
              <div className="text-xs font-medium text-emerald-600">+12.5%</div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100 hover:border-purple-100 transition-colors">
              <div className="h-9 w-9 rounded-md flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Globe className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-800 mb-1">1,294</div>
                <div className="text-xs text-slate-500">Unique Visitors</div>
              </div>
              <div className="text-xs font-medium text-emerald-600">+8.2%</div>
            </div>
          </div>
        </motion.div>

        {/* Feature 3: Custom Branding */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-pink-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
              <Palette className="h-5 w-5 text-pink-600" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Custom Branding</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Personalize your page with custom themes, colors, and logos to match your brand.
            </p>
          </div>
          <div className="relative bg-white rounded-xl border border-slate-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-900">Brand Preview</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] font-medium text-emerald-700">Live</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Primary Color</span>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600"></div>
                  <span className="text-xs font-medium text-slate-900">#6366F1</span>
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full rounded-full" style={{ 
                  background: 'linear-gradient(90deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
                  width: '100%'
                }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Brand Assets</span>
                <div className="flex -space-x-1.5">
                  <div className="h-5 w-5 rounded-full border-2 border-white bg-gradient-to-br from-indigo-100 to-indigo-200"></div>
                  <div className="h-5 w-5 rounded-full border-2 border-white bg-gradient-to-br from-pink-100 to-pink-200"></div>
                  <div className="h-5 w-5 rounded-full border-2 border-white bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-purple-800">+2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 4: Lightning Fast */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
              <Zap className="h-5 w-5 text-emerald-600" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Lightning Fast</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Optimized for speed and performance across all devices and networks.
            </p>
          </div>
          <div className="relative bg-white rounded-xl border border-slate-100 p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-900">Performance</span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-medium text-emerald-700">Optimal</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-emerald-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-700">Global CDN</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-600">98.9% uptime</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-emerald-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-700">Edge Caching</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-600">
                    <span className="text-slate-500">~</span>50ms
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-emerald-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-700">DDoS Protection</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-600">Active</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 5: Team Collaboration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Users className="h-5 w-5 text-blue-600" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Team Collaboration</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Work together with your team members and manage multiple profiles and campaigns.
            </p>
          </div>
          <div className="relative bg-white rounded-xl border border-slate-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-900">Team Activity</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                <span className="text-[10px] font-medium text-blue-700">3 online</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-medium">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-900">John Doe</span>
                    <span className="text-xs text-slate-500">2m ago</span>
                  </div>
                  <p className="text-sm text-slate-600 truncate">Updated the Spring 2025 campaign</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-medium">
                  AS
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-900">Alex Smith</span>
                    <span className="text-xs text-slate-500">15m ago</span>
                  </div>
                  <p className="text-sm text-slate-600 truncate">Added new social media links</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-medium">
                  MJ
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-900">Maria Garcia</span>
                    <span className="text-xs text-slate-500">1h ago</span>
                  </div>
                  <p className="text-sm text-slate-600 truncate">Created Q2 email campaign</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 6: Priority Support */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-cyan-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600">
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V10c0-.63.3-1.22.8-1.6l8-6c.5-.38 1.2-.38 1.7 0l8 6Z"/>
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Priority Support</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Get dedicated support with fast response times and expert assistance when you need it most.
            </p>
          </div>
          <div className="relative bg-white rounded-xl border border-slate-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-900">Support Options</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-50 border border-cyan-100">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                <span className="text-[10px] font-medium text-cyan-700">24/7 Available</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 hover:border-cyan-100 transition-colors">
                <div className="h-9 w-9 rounded-md flex-shrink-0 bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-900">24/7 Live Chat</div>
                  <div className="text-xs text-slate-500">Instant response, 24/7 availability</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 hover:border-cyan-100 transition-colors">
                <div className="h-9 w-9 rounded-md flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="m22 6-10 7L2 6"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-900">Email Support</div>
                  <div className="text-xs text-slate-500">Response within 1 business hour</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 hover:border-cyan-100 transition-colors">
                <div className="h-9 w-9 rounded-md flex-shrink-0 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-900">Dedicated Account Manager</div>
                  <div className="text-xs text-slate-500">For enterprise customers</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
