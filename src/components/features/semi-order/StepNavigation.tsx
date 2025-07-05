'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface Step {
  id: string
  title: string
  description: string
  required: boolean
}

interface StepNavigationProps {
  steps: Step[]
  currentStep: string
  completedSteps: string[]
  onStepClick: (stepId: string) => void
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  steps,
  currentStep,
  completedSteps,
  onStepClick
}) => {
  const getStepStatus = (stepId: string) => {
    if (completedSteps.includes(stepId)) return 'completed'
    if (stepId === currentStep) return 'current'
    return 'pending'
  }

  const isStepClickable = (stepId: string, index: number) => {
    // 現在のステップまたは完了済みは常にクリック可能
    if (stepId === currentStep || completedSteps.includes(stepId)) return true
    
    // 前のステップが完了していればクリック可能
    if (index === 0) return true
    const previousStep = steps[index - 1]
    return completedSteps.includes(previousStep.id)
  }

  return (
    <div className="relative">
      {/* デスクトップ用ステップナビゲーション */}
      <div className="hidden md:flex items-center justify-between mb-6">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id)
          const clickable = isStepClickable(step.id, index)
          
          return (
            <div key={step.id} className="flex items-center flex-1">
              {/* ステップアイコンとタイトル */}
              <button
                onClick={() => clickable && onStepClick(step.id)}
                disabled={!clickable}
                className={cn(
                  'flex flex-col items-center space-y-2 transition-all duration-300 p-2 rounded-lg',
                  clickable ? 'cursor-pointer hover:bg-gray-50' : 'cursor-not-allowed opacity-50',
                  'group'
                )}
              >
                {/* アイコン */}
                <div className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 transform',
                  'group-hover:scale-110',
                  status === 'completed' 
                    ? 'bg-accent-gold text-white shadow-lg'
                    : status === 'current'
                      ? 'bg-accent-gold/20 text-accent-gold border-2 border-accent-gold animate-pulse'
                      : 'bg-gray-200 text-gray-500'
                )}>
                  {status === 'completed' ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                
                {/* タイトル */}
                <div className="text-center">
                  <div className={cn(
                    'text-xs font-medium transition-colors duration-300',
                    status === 'current' ? 'text-accent-gold' : 'text-gray-600'
                  )}>
                    {step.title}
                  </div>
                  {step.required && (
                    <div className="text-xs text-red-500 mt-1">必須</div>
                  )}
                </div>
              </button>
              
              {/* 接続線 */}
              {index < steps.length - 1 && (
                <div className={cn(
                  'flex-1 h-px mx-4 transition-colors duration-500',
                  completedSteps.includes(step.id) ? 'bg-accent-gold' : 'bg-gray-200'
                )} />
              )}
            </div>
          )
        })}
      </div>

      {/* モバイル用コンパクトステップインジケーター */}
      <div className="md:hidden mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-primary-dark">
            {steps.find(s => s.id === currentStep)?.title}
          </h3>
          <div className="text-xs text-gray-500">
            {steps.findIndex(s => s.id === currentStep) + 1} / {steps.length}
          </div>
        </div>
        
        {/* プログレスバー */}
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-accent-gold to-accent-gold/80 transition-all duration-500 ease-out"
            style={{ 
              width: `${((completedSteps.length + (currentStep ? 0.5 : 0)) / steps.length) * 100}%` 
            }}
          />
        </div>
        
        {/* ドット表示 */}
        <div className="flex items-center justify-center space-x-2 mt-3">
          {steps.map((step) => {
            const status = getStepStatus(step.id)
            return (
              <div
                key={step.id}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  status === 'completed' 
                    ? 'bg-accent-gold scale-110'
                    : status === 'current'
                      ? 'bg-accent-gold/60 scale-125 animate-pulse'
                      : 'bg-gray-300'
                )}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { StepNavigation }