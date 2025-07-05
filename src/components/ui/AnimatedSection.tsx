'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInScale' | 'slideInFromLeft'
  delay?: number
  threshold?: number
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = ref.current
    if (!current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          // 一度表示されたら監視を停止
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: '20px 0px -20px 0px' // マージンを縮小
      }
    )

    observer.observe(current)

    return () => {
      observer.unobserve(current)
    }
  }, [delay, threshold, isVisible])

  const animationClasses = {
    fadeIn: 'animate-fade-in',
    fadeInUp: 'animate-fade-in-up',
    fadeInScale: 'animate-fade-in-scale',
    slideInFromLeft: 'animate-slideInFromLeft'
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-800 ease-out',
        !isVisible && 'opacity-0 translate-y-8',
        isVisible && 'opacity-100 translate-y-0',
        isVisible && animationClasses[animation],
        className
      )}
    >
      {children}
    </div>
  )
}

export { AnimatedSection }