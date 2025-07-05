'use client'

import React from 'react'
import { cn } from '@/lib/utils'

// フェードイン/アウトトランジション
interface FadeTransitionProps {
  show: boolean
  children: React.ReactNode
  className?: string
  duration?: 'fast' | 'normal' | 'slow'
}

export const FadeTransition: React.FC<FadeTransitionProps> = ({
  show,
  children,
  className = '',
  duration = 'normal'
}) => {
  const durationClass = {
    fast: 'duration-200',
    normal: 'duration-300',
    slow: 'duration-500'
  }[duration]

  return (
    <div className={cn(
      'transition-all',
      durationClass,
      show 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-2 scale-95 pointer-events-none',
      className
    )}>
      {children}
    </div>
  )
}

// スライドトランジション
interface SlideTransitionProps {
  show: boolean
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  className?: string
}

export const SlideTransition: React.FC<SlideTransitionProps> = ({
  show,
  children,
  direction = 'right',
  className = ''
}) => {
  const getTransformClass = () => {
    if (show) return 'translate-x-0 translate-y-0'
    
    switch (direction) {
      case 'left':
        return '-translate-x-full'
      case 'right':
        return 'translate-x-full'
      case 'up':
        return '-translate-y-full'
      case 'down':
        return 'translate-y-full'
      default:
        return 'translate-x-full'
    }
  }

  return (
    <div className={cn(
      'transition-transform duration-300 ease-in-out',
      getTransformClass(),
      !show && 'pointer-events-none',
      className
    )}>
      {children}
    </div>
  )
}

// スケールトランジション
interface ScaleTransitionProps {
  show: boolean
  children: React.ReactNode
  className?: string
  scale?: 'small' | 'medium' | 'large'
}

export const ScaleTransition: React.FC<ScaleTransitionProps> = ({
  show,
  children,
  className = '',
  scale = 'medium'
}) => {
  const scaleValue = {
    small: show ? 'scale-100' : 'scale-95',
    medium: show ? 'scale-100' : 'scale-90',
    large: show ? 'scale-100' : 'scale-75'
  }[scale]

  return (
    <div className={cn(
      'transition-all duration-300 ease-out',
      scaleValue,
      show ? 'opacity-100' : 'opacity-0 pointer-events-none',
      className
    )}>
      {children}
    </div>
  )
}

// ステッガード（順次表示）アニメーション
interface StaggeredAnimationProps {
  children: React.ReactNode[]
  delay?: number
  className?: string
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  delay = 100,
  className = ''
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className="animate-in slide-in-from-bottom-4 fade-in"
          style={{
            animationDelay: `${index * delay}ms`,
            animationFillMode: 'both'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

// パルスエフェクト
interface PulseEffectProps {
  active: boolean
  children: React.ReactNode
  color?: 'gold' | 'blue' | 'green' | 'red'
  intensity?: 'low' | 'medium' | 'high'
  className?: string
}

export const PulseEffect: React.FC<PulseEffectProps> = ({
  active,
  children,
  color = 'gold',
  intensity = 'medium',
  className = ''
}) => {
  const colorClasses = {
    gold: 'bg-accent-gold/20',
    blue: 'bg-blue-500/20',
    green: 'bg-green-500/20',
    red: 'bg-red-500/20'
  }

  const intensityClasses = {
    low: 'animate-pulse',
    medium: 'animate-pulse scale-105',
    high: 'animate-pulse scale-110'
  }

  return (
    <div className={cn('relative', className)}>
      {children}
      {active && (
        <div className={cn(
          'absolute inset-0 rounded-lg pointer-events-none',
          colorClasses[color],
          intensityClasses[intensity]
        )} />
      )}
    </div>
  )
}

// 数値カウントアップアニメーション
interface CountUpProps {
  value: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export const CountUp: React.FC<CountUpProps> = ({
  value,
  duration = 1000,
  className = '',
  prefix = '',
  suffix = ''
}) => {
  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.floor(value * easeOut))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return (
    <span className={className}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}