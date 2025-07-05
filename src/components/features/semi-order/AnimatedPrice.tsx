'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedPriceProps {
  price: number | null
  previousPrice?: number | null
  className?: string
  showChange?: boolean
}

const AnimatedPrice: React.FC<AnimatedPriceProps> = ({
  price,
  previousPrice,
  className = '',
  showChange = true
}) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [priceChange, setPriceChange] = useState<'increase' | 'decrease' | null>(null)

  useEffect(() => {
    if (previousPrice !== undefined && price !== null && previousPrice !== null) {
      if (price > previousPrice) {
        setPriceChange('increase')
      } else if (price < previousPrice) {
        setPriceChange('decrease')
      } else {
        setPriceChange(null)
      }
      
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setPriceChange(null)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [price, previousPrice])

  if (price === null) {
    return (
      <div className={cn('text-gray-500 font-mono', className)}>
        要問合せ
      </div>
    )
  }

  return (
    <div className="relative">
      <div className={cn(
        'font-mono font-bold transition-all duration-500 transform',
        isAnimating && 'scale-110',
        priceChange === 'increase' && 'text-green-600',
        priceChange === 'decrease' && 'text-blue-600',
        !priceChange && 'text-primary-dark',
        className
      )}>
        ¥{price.toLocaleString()}
      </div>
      
      {/* 変更アニメーション */}
      {showChange && priceChange && (
        <div className={cn(
          'absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium px-2 py-1 rounded-full',
          'animate-in slide-in-from-bottom-2 fade-in duration-300',
          'animate-out slide-out-to-top-2 fade-out delay-700',
          priceChange === 'increase' && 'bg-green-100 text-green-700',
          priceChange === 'decrease' && 'bg-blue-100 text-blue-700'
        )}>
          {priceChange === 'increase' ? '↗️ UP' : '↘️ DOWN'}
        </div>
      )}
      
      {/* パルスエフェクト */}
      {isAnimating && (
        <div className="absolute inset-0 bg-accent-gold/20 rounded-lg animate-ping" />
      )}
    </div>
  )
}

export { AnimatedPrice }