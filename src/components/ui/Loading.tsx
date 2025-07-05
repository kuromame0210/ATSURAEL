import React from 'react'
import { cn } from '@/lib/utils'

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  text?: string
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  className,
  text = '読み込み中...',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  }

  return (
    <div className={cn('flex flex-col items-center justify-center space-y-2', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-accent-gold border-t-transparent',
          sizeClasses[size]
        )}
      />
      {text && (
        <p className="text-sm text-text-secondary">{text}</p>
      )}
    </div>
  )
}

export { Loading }