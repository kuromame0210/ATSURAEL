'use client'

import React from 'react'
import { EngravingFont } from '@/types'
import { ENGRAVING_FONTS } from '@/lib/data'
import { useOrderStore } from '@/store/useOrderStore'
import { Input, Select } from '@/components/ui'
import { cn } from '@/lib/utils'

const EngravingSelector: React.FC = () => {
  const { selections, updateEngraving } = useOrderStore()

  const fontOptions = ENGRAVING_FONTS.map(font => ({
    value: font.id,
    label: font.name,
  }))

  const handleEngravingToggle = (enabled: boolean) => {
    updateEngraving(enabled, selections.engravingContent, selections.engravingFont)
  }

  const handleContentChange = (content: string) => {
    updateEngraving(selections.engraving, content, selections.engravingFont)
  }

  const handleFontChange = (font: EngravingFont) => {
    updateEngraving(selections.engraving, selections.engravingContent, font)
  }

  return (
    <div className="space-y-4 touch-manipulation">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-primary-dark mb-2">刻印設定</h3>
        <p className="text-sm sm:text-base text-text-secondary mb-4 leading-relaxed">
          指輪に文字を刻印することができます（追加料金：¥6,000）
        </p>
      </div>

      {/* 刻印の有無選択 */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => handleEngravingToggle(false)}
            className={cn(
              'min-h-[44px] px-4 py-3 rounded-lg border-2 transition-all touch-manipulation',
              'focus:outline-none focus:ring-2 focus:ring-accent-gold',
              'active:scale-95 active:transition-transform active:duration-75',
              'text-sm sm:text-base',
              !selections.engraving
                ? 'border-accent-gold bg-accent-gold/5 text-primary-dark'
                : 'border-gray-200 text-text-secondary hover:border-gray-300'
            )}
          >
            刻印なし
          </button>
          <button
            onClick={() => handleEngravingToggle(true)}
            className={cn(
              'min-h-[44px] px-4 py-3 rounded-lg border-2 transition-all touch-manipulation',
              'focus:outline-none focus:ring-2 focus:ring-accent-gold',
              'active:scale-95 active:transition-transform active:duration-75',
              'text-sm sm:text-base',
              selections.engraving
                ? 'border-accent-gold bg-accent-gold/5 text-primary-dark'
                : 'border-gray-200 text-text-secondary hover:border-gray-300'
            )}
          >
            刻印あり（+¥6,000）
          </button>
        </div>
      </div>

      {/* 刻印詳細設定 */}
      {selections.engraving && (
        <div className="space-y-4 p-3 sm:p-4 bg-background-light rounded-lg">
          <Input
            label="刻印内容"
            value={selections.engravingContent || ''}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="例: Forever, 2025, LOVE"
            helperText="アルファベット（A〜Z）、数字4桁（西暦）が可能です"
            maxLength={20}
          />

          <Select
            label="フォント選択"
            value={selections.engravingFont || 'classic'}
            onChange={(e) => handleFontChange(e.target.value as EngravingFont)}
            options={fontOptions}
          />

          <div className="bg-white p-3 sm:p-4 rounded border">
            <h4 className="font-medium text-primary-dark mb-2 text-sm sm:text-base">刻印位置について</h4>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              刻印位置（内側・外側）は注文確認時にLINEでお伺いいたします。
            </p>
          </div>
        </div>
      )}

      {/* 注意事項 */}
      <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
        <p className="text-sm sm:text-base text-blue-700 leading-relaxed">
          💡 刻印内容や詳細な位置については、ご注文後にLINEで詳しくご相談いたします。
        </p>
      </div>
    </div>
  )
}

export { EngravingSelector }