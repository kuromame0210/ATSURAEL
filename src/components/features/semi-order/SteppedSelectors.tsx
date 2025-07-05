'use client'

import React, { useEffect, useMemo } from 'react'
import { StepContainer } from './StepContainer'
import { MaterialSelector } from './MaterialSelector'
import { ShapeSelector } from './ShapeSelector'
import { SizeSelector } from './SizeSelector'
import { GemstoneSelector } from './GemstoneSelector'
import { StoneSettingSelector } from './StoneSettingSelector'
import { MillGrainSelector } from './MillGrainSelector'
import { EngravingSelector } from './EngravingSelector'
import { useOrderStore } from '@/store/useOrderStore'

const SteppedSelectors: React.FC = () => {
  const { stepProgress, completeStep, validateStep } = useOrderStore()

  // ステップ定義
  const steps = useMemo(() => [
    {
      id: 'basic',
      title: '基本設定',
      description: '素材・形状・サイズを選択してください（必須項目）',
      required: true
    },
    {
      id: 'customize',
      title: 'カスタマイズ',
      description: 'お好みに合わせて宝石や装飾を追加できます（オプション）',
      required: false
    },
    {
      id: 'finish',
      title: '仕上げ',
      description: '刻印などの最終仕上げオプションです（オプション）',
      required: false
    }
  ], [])

  // 自動バリデーション
  useEffect(() => {
    steps.forEach(step => {
      if (validateStep(step.id) && !stepProgress.completedSteps.includes(step.id)) {
        completeStep(step.id)
      }
    })
  }, [validateStep, completeStep, stepProgress.completedSteps, steps])

  const handleStepComplete = (stepId: string) => {
    if (validateStep(stepId)) {
      completeStep(stepId)
    }
  }

  const handleAllStepsComplete = () => {
    console.log('All steps completed!')
    // ここで注文確認画面への遷移などを実装
  }

  return (
    <div className="w-full">
      <StepContainer
        steps={steps}
        onStepComplete={handleStepComplete}
        onAllStepsComplete={handleAllStepsComplete}
      >
        {/* Step 1: 基本設定 */}
        <div className="space-y-6 md:space-y-8">
          <div className="grid gap-6 md:gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <MaterialSelector />
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <ShapeSelector />
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <SizeSelector />
            </div>
          </div>

          {/* 基本設定の進捗表示 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                ℹ️
              </div>
              <span className="text-sm font-medium text-blue-700">基本設定の進捗</span>
            </div>
            <div className="text-sm text-blue-600">
              {validateStep('basic') 
                ? '✅ 基本設定が完了しました！次のステップに進めます。' 
                : '❗ 素材・形状・サイズをすべて選択してください。'
              }
            </div>
          </div>
        </div>

        {/* Step 2: カスタマイズ */}
        <div className="space-y-6 md:space-y-8">
          <div className="grid gap-6 md:gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <GemstoneSelector />
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <StoneSettingSelector />
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <MillGrainSelector />
            </div>
          </div>

          {/* カスタマイズの説明 */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                ✨
              </div>
              <span className="text-sm font-medium text-green-700">カスタマイズオプション</span>
            </div>
            <div className="text-sm text-green-600">
              これらの設定はオプションです。お好みに合わせて追加してください。
            </div>
          </div>
        </div>

        {/* Step 3: 仕上げ */}
        <div className="space-y-6 md:space-y-8">
          <div className="grid gap-6 md:gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <EngravingSelector />
            </div>
          </div>

          {/* 完了メッセージ */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-4 h-4 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">
                🎨
              </div>
              <span className="text-sm font-medium text-purple-700">最終仕上げ</span>
            </div>
            <div className="text-sm text-purple-600">
              {validateStep('finish') 
                ? '✅ すべての設定が完了しました！注文に進むことができます。' 
                : '💡 刻印を追加する場合は、内容を入力してください。'
              }
            </div>
          </div>
        </div>
      </StepContainer>
    </div>
  )
}

export { SteppedSelectors }