'use client'

import React from 'react'
import { RING_SIZES } from '@/lib/data'
import { useOrderStore } from '@/store/useOrderStore'
import { Select } from '@/components/ui'

const SizeSelector: React.FC = () => {
  const { selections, updateSize } = useOrderStore()

  const sizeOptions = RING_SIZES.map(size => ({
    value: size.toString(),
    label: `${size}号`,
  }))

  return (
    <div className="space-y-3 md:space-y-4 touch-manipulation">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base md:text-lg font-semibold text-primary-dark">リングサイズ</h3>
          {selections.size && (
            <div className="text-xs md:text-sm text-accent-gold font-medium">
              ✓ {selections.size}号
            </div>
          )}
        </div>
        <p className="text-xs md:text-sm text-text-secondary mb-3 md:mb-4 leading-tight md:leading-relaxed hidden md:block">
          5号〜23号からお選びください。サイズが不明な場合は、一般的な目安をご参考ください。
        </p>
        <p className="text-xs text-text-secondary mb-3 leading-tight block md:hidden">
          5号〜23号から選択
        </p>
      </div>

      <Select
        value={selections.size.toString()}
        onChange={(e) => updateSize(parseInt(e.target.value))}
        options={sizeOptions}
        placeholder="サイズを選択してください"
        required
      />

      {/* サイズガイド - スマホではコンパクト表示 */}
      <div className="bg-background-light p-2 md:p-4 rounded-lg">
        <h4 className="font-medium text-primary-dark mb-2 md:mb-3 text-xs md:text-base">サイズの目安</h4>
        <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm text-text-secondary">
          <div>
            <p className="font-medium">女性: 9-11号</p>
            <p className="text-xs hidden md:block">7〜13号（平均：9〜11号）</p>
          </div>
          <div>
            <p className="font-medium">男性: 17-19号</p>
            <p className="text-xs hidden md:block">15〜21号（平均：17〜19号）</p>
          </div>
        </div>
        <p className="text-xs text-text-secondary mt-2 md:mt-3 leading-tight md:leading-relaxed">
          ※あくまで目安です。<span className="hidden md:inline">正確なサイズは指輪専門店でご計測ください。</span>
        </p>
      </div>
    </div>
  )
}

export { SizeSelector }