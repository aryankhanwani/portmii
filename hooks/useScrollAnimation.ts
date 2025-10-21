import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useScrollAnimation = () => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: 50,
    })

    // Create animation
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      animation.kill()
    }
  }, [])

  return ref
}

export const useStaggerAnimation = (delay: number = 0.1) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const children = element.querySelectorAll('.animate-item')

    // Set initial state
    gsap.set(children, {
      opacity: 0,
      y: 30,
    })

    // Create staggered animation
    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      animation.kill()
    }
  }, [delay])

  return ref
}

export const useParallaxAnimation = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const animation = gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      animation.kill()
    }
  }, [speed])

  return ref
}
