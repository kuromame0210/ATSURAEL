'use client'

import React, { useState } from 'react'
import { StepNavigation, Step } from './StepNavigation'
import { cn } from '@/lib/utils'

interface StepContainerProps {
  steps: Step[]
  children: React.ReactNode[]
  onStepComplete?: (stepId: string) => void
  onAllStepsComplete?: () => void
}

const StepContainer: React.FC<StepContainerProps> = ({
  steps,
  children,
  onStepComplete,
  onAllStepsComplete
}) => {
  const [currentStep, setCurrentStep] = useState(steps[0]?.id || '')
  const [completedSteps, setCompletedSteps] = useState<string[]>([])

  const handleStepClick = (stepId: string) => {
    setCurrentStep(stepId)
  }

  const handleStepComplete = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      const newCompletedSteps = [...completedSteps, stepId]
      setCompletedSteps(newCompletedSteps)
      onStepComplete?.(stepId)
      
      // 全ステップ完了チェック
      if (newCompletedSteps.length === steps.length) {
        onAllStepsComplete?.()
      }
    }
  }

  const handleNextStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep)
    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1]
      setCurrentStep(nextStep.id)
    }
  }

  const handlePrevStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep)
    if (currentIndex > 0) {
      const prevStep = steps[currentIndex - 1]
      setCurrentStep(prevStep.id)
    }
  }

  const currentStepIndex = steps.findIndex(step => step.id === currentStep)
  const currentStepData = steps[currentStepIndex]

  return (
    <div className="space-y-4">
      {/* ステップナビゲーション */}
      <StepNavigation
        steps={steps}
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={handleStepClick}
      />

      {/* ステップコンテンツ */}
      <div className="relative min-h-[400px]">
        {children.map((child, index) => {
          const step = steps[index]
          const isActive = step.id === currentStep
          
          return (
            <div
              key={step.id}
              className={cn(
                'absolute inset-0 transition-all duration-500 ease-in-out',
                isActive 
                  ? 'opacity-100 translate-x-0 pointer-events-auto' 
                  : 'opacity-0 translate-x-4 pointer-events-none'
              )}
            >
              {/* ステップヘッダー */}
              <div className="mb-4 md:mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <h2 className="text-lg md:text-xl font-semibold text-primary-dark">
                    {step.title}
                  </h2>
                  {step.required && (
                    <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-full">
                      必須
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* ステップコンテンツ */}
              <div className="animate-in slide-in-from-right-4 duration-300">
                {child}
              </div>
            </div>
          )
        })}
      </div>

      {/* ナビゲーションボタン */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <button
          onClick={handlePrevStep}
          disabled={currentStepIndex === 0}
          className={cn(
            'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
            currentStepIndex === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:text-primary-dark hover:bg-gray-50'
          )}
        >
          ← 前へ
        </button>

        <div className="flex items-center space-x-2">
          {/* 完了ボタン（現在のステップ用） */}
          {!completedSteps.includes(currentStep) && (
            <button
              onClick={() => handleStepComplete(currentStep)}
              className="px-4 py-2 bg-accent-gold text-white text-sm font-medium rounded-lg hover:bg-accent-gold/90 transition-all duration-200 transform hover:scale-105"
            >
              この項目を完了
            </button>
          )}

          {/* 次へボタン */}
          <button
            onClick={handleNextStep}
            disabled={currentStepIndex === steps.length - 1}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
              currentStepIndex === steps.length - 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'bg-primary-dark text-white hover:bg-primary-dark/90 transform hover:scale-105'
            )}
          >
            次へ →
          </button>
        </div>
      </div>
    </div>
  )
}

export { StepContainer }