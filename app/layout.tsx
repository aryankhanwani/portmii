import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Portmii — The Ultimate Link Management Platform',
  description: 'Create branded short links, track clicks in real time, manage QR codes, and optimize campaigns—all in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900 bg-white h-full">
        {children}
      </body>
    </html>
  )
}
