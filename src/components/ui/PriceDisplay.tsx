import React from 'react'
import { cn, formatPriceNumber } from '@/lib/utils'

export interface PriceDisplayProps {
  price: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showTax?: boolean
  showEstimate?: boolean
  className?: string
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  size = 'md',
  showTax = true,
  showEstimate = true,
  className,
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }

  const noteClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  }

  return (
    <div className={cn('text-center', className)}>
      <div className={cn(
        'font-mono font-semibold text-primary-dark',
        sizeClasses[size]
      )}>
        ¥{formatPriceNumber(price)}
      </div>
      <div className={cn(
        'text-text-secondary mt-1',
        noteClasses[size]
      )}>
        {showTax && '（税込'}
        {showTax && showEstimate && '・'}
        {showEstimate && '概算価格'}
        {(showTax || showEstimate) && '）'}
      </div>
      {showEstimate && (
        <p className={cn(
          'text-text-secondary mt-2 leading-relaxed',
          noteClasses[size]
        )}>
          ※表示価格は概算です。最終価格はご注文確認時に決定いたします。
        </p>
      )}
    </div>
  )
}

export { PriceDisplay }