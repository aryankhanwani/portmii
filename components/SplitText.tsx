'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string
  splitType?: 'chars' | 'words'
  from?: any
  to?: any
  threshold?: number
  rootMargin?: string
  textAlign?: 'left' | 'center' | 'right'
  onLetterAnimationComplete?: () => void
}

export default function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 0.8,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const charsRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const chars = charsRef.current

    // Set initial state
    gsap.set(chars, from)

    // Create animation
    const animation = gsap.to(chars, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        threshold,
        rootMargin,
        toggleActions: 'play none none reverse',
      },
      onComplete: onLetterAnimationComplete
    })

    return () => {
      animation.kill()
    }
  }, [delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete])

  const splitText = () => {
    if (splitType === 'chars') {
      return text.split('').map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) charsRef.current[index] = el
          }}
          className={`inline-block pb-3 ${className}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))
    } else {
      return text.split(' ').map((word, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) charsRef.current[index] = el
          }}
          className={`inline-block mr-1 ${className}`}
        >
          {word}
        </span>
      ))
    }
  }

  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[textAlign]

  return (
    <div ref={containerRef} className={textAlignClass}>
      {splitText()}
    </div>
  )
}
