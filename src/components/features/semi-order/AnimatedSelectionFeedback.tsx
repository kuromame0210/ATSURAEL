'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSelectionFeedbackProps {
  isSelected: boolean
  children: React.ReactNode
  className?: string
  feedbackType?: 'pulse' | 'glow' | 'bounce' | 'shake'
  duration?: number
}

const AnimatedSelectionFeedback: React.FC<AnimatedSelectionFeedbackProps> = ({
  isSelected,
  children,
  className = '',
  feedbackType = 'pulse',
  duration = 600
}) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [justSelected, setJustSelected] = useState(false)

  useEffect(() => {
    if (isSelected && !justSelected) {
      setJustSelected(true)
      setIsAnimating(true)
      
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, duration)
      
      return () => clearTimeout(timer)
    } else if (!isSelected) {
      setJustSelected(false)
      setIsAnimating(false)
    }
  }, [isSelected, justSelected, duration])

  const getAnimationClass = () => {
    if (!isAnimating) return ''
    
    switch (feedbackType) {
      case 'pulse':
        return 'animate-pulse'
      case 'glow':
        return 'animate-pulse drop-shadow-lg'
      case 'bounce':
        return 'animate-bounce'
      case 'shake':
        return 'animate-bounce'
      default:
        return 'animate-pulse'
    }
  }

  return (
    <div className={cn(
      'relative transition-all duration-300',
      isSelected && 'transform scale-105',
      className
    )}>
      {children}
      
      {/* 選択時のエフェクト */}
      {isSelected && (
        <>
          {/* グローエフェクト */}
          <div className="absolute inset-0 bg-accent-gold/10 rounded-lg pointer-events-none" />
          
          {/* ボーダーアニメーション */}
          <div className={cn(
            'absolute inset-0 border-2 border-accent-gold rounded-lg pointer-events-none',
            'animate-in zoom-in-95 duration-300'
          )} />
          
          {/* 選択確認アニメーション */}
          {isAnimating && (
            <div className={cn(
              'absolute inset-0 pointer-events-none',
              getAnimationClass()
            )}>
              <div className="absolute inset-0 bg-accent-gold/20 rounded-lg" />
            </div>
          )}
        </>
      )}
      
      {/* 選択時のサクセスインジケーター */}
      {justSelected && isAnimating && (
        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center animate-in zoom-in-0 duration-300">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  )
}

export { AnimatedSelectionFeedback }