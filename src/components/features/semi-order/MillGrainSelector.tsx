'use client'

import React from 'react'
import { useOrderStore } from '@/store/useOrderStore'
import { cn } from '@/lib/utils'

const MillGrainSelector: React.FC = () => {
  const { selections, updateMilGrain } = useOrderStore()

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-primary-dark mb-2">ミル打ち加工</h3>
        <p className="text-sm text-text-secondary mb-4">
          指輪の縁に細かい粒状の装飾を施す伝統的な技法です（追加料金：¥4,000）
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex space-x-4">
          <button
            onClick={() => updateMilGrain(false)}
            className={cn(
              'px-4 py-2 rounded-lg border-2 transition-all',
              'focus:outline-none focus:ring-2 focus:ring-accent-gold',
              !selections.milGrain
                ? 'border-accent-gold bg-accent-gold/5 text-primary-dark'
                : 'border-gray-200 text-text-secondary hover:border-gray-300'
            )}
          >
            ミル打ちなし
          </button>
          <button
            onClick={() => updateMilGrain(true)}
            className={cn(
              'px-4 py-2 rounded-lg border-2 transition-all',
              'focus:outline-none focus:ring-2 focus:ring-accent-gold',
              selections.milGrain
                ? 'border-accent-gold bg-accent-gold/5 text-primary-dark'
                : 'border-gray-200 text-text-secondary hover:border-gray-300'
            )}
          >
            ミル打ちあり（+¥4,000）
          </button>
        </div>
      </div>

      {/* ミル打ちの説明 */}
      <div className="bg-background-light p-4 rounded-lg">
        <h4 className="font-medium text-primary-dark mb-2">ミル打ちとは</h4>
        <p className="text-sm text-text-secondary leading-relaxed">
          指輪の表面や縁部分に、小さな粒状の模様を連続して打ち込む装飾技法です。
          アンティーク調の上品な仕上がりになり、光の反射により美しい輝きを生み出します。
        </p>
      </div>

      {selections.milGrain && (
        <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
          <p className="text-sm sm:text-base text-yellow-700 leading-relaxed">
            ⚠️ ミル打ち加工により、製作期間が通常より1〜2日延長される場合があります。
          </p>
        </div>
      )}
    </div>
  )
}

export { MillGrainSelector }