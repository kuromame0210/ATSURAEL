'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface MobileOptimizedProps {
  children: React.ReactNode
  className?: string
}

// モバイル最適化されたコンテナ
export const MobileContainer: React.FC<MobileOptimizedProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('mobile-padding', className)}>
      {children}
    </div>
  )
}

// モバイル最適化されたテキスト
export const MobileText: React.FC<MobileOptimizedProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('mobile-text-lg', className)}>
      {children}
    </div>
  )
}

// モバイル最適化されたグリッド
interface MobileGridProps extends MobileOptimizedProps {
  cols?: 1 | 2 | 3 | 4
  mdCols?: 1 | 2 | 3 | 4
  lgCols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
}

export const MobileGrid: React.FC<MobileGridProps> = ({
  children,
  className,
  cols = 1,
  mdCols = 2,
  lgCols = 3,
  gap = 'md',
}) => {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }

  const mdColsClass = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  const lgColsClass = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }

  const gapClass = {
    sm: 'gap-2 md:gap-4',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8',
  }

  return (
    <div className={cn(
      'grid',
      colsClass[cols],
      mdColsClass[mdCols],
      lgColsClass[lgCols],
      gapClass[gap],
      className
    )}>
      {children}
    </div>
  )
}

// タッチ最適化されたボタン
interface TouchButtonProps extends MobileOptimizedProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
}

export const TouchButton: React.FC<TouchButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
}) => {
  const variantClass = {
    primary: 'bg-accent-gold text-white hover:bg-accent-gold/90',
    secondary: 'bg-gray-200 text-primary-dark hover:bg-gray-300',
    outline: 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white',
  }

  const sizeClass = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'rounded-lg font-medium transition-all touch-manipulation',
        'focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'active:scale-95',
        variantClass[variant],
        sizeClass[size],
        className
      )}
    >
      {children}
    </button>
  )
}

// レスポンシブテーブル
interface ResponsiveTableProps {
  children: React.ReactNode
  className?: string
}

export const ResponsiveTable: React.FC<ResponsiveTableProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('responsive-table', className)}>
      {children}
    </div>
  )
}

// モバイルフレンドリーなカード
interface MobileCardProps extends MobileOptimizedProps {
  padding?: 'sm' | 'md' | 'lg'
}

export const MobileCard: React.FC<MobileCardProps> = ({
  children,
  className,
  padding = 'md',
}) => {
  const paddingClass = {
    sm: 'p-3 md:p-4',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8',
  }

  return (
    <div className={cn(
      'bg-white rounded-lg shadow-sm border border-gray-200',
      paddingClass[padding],
      className
    )}>
      {children}
    </div>
  )
}

// スティッキーコンテナ（モバイル対応）
interface MobileStickyProps extends MobileOptimizedProps {
  top?: string
}

export const MobileSticky: React.FC<MobileStickyProps> = ({
  children,
  className,
  top = 'top-20 md:top-24',
}) => {
  return (
    <div className={cn('sticky sticky-mobile', top, className)}>
      {children}
    </div>
  )
}