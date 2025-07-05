'use client'

import React from 'react'
import { useOrderStore } from '@/store/useOrderStore'
import { Select } from '@/components/ui'
import { MATERIALS, GEMSTONES, SHAPES, RING_SIZES, ENGRAVING_FONTS, MIL_GRAIN_OPTIONS } from '@/lib/data'
import { Material, Shape, Gemstone, EngravingFont } from '@/types'

const CompactSelectors: React.FC = () => {
  const { 
    selections, 
    updateMaterial, 
    updateSize, 
    updateShape, 
    updateGemstone, 
    updateEngraving,
    updateMilGrain
  } = useOrderStore()

  // 各選択肢のオプション生成
  const materialOptions = MATERIALS.filter(m => m.available).map(material => ({
    value: material.id,
    label: `${material.name} (${typeof material.basePrice === 'number' 
      ? `¥${material.basePrice.toLocaleString()}〜` 
      : material.basePrice === 'TBD' ? '価格未定' : '要問合せ'})`
  }))

  const sizeOptions = RING_SIZES.map(size => ({
    value: size.toString(),
    label: `${size}号`
  }))

  const shapeOptions = SHAPES.map(shape => ({
    value: shape.id,
    label: shape.name
  }))

  const gemstoneOptions = GEMSTONES.map(gemstone => ({
    value: gemstone.id,
    label: gemstone.name
  }))

  const engravingFontOptions = ENGRAVING_FONTS.map(font => ({
    value: font.id,
    label: font.name
  }))

  const milGrainOptions = MIL_GRAIN_OPTIONS.map(option => ({
    value: option.id,
    label: `${option.name} ${option.price > 0 ? `(+¥${option.price.toLocaleString()})` : ''}`
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* 左列 */}
      <div className="space-y-4">
        {/* 素材選択 */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-900">素材</label>
            {selections.material && (
              <span className="text-xs text-accent-gold font-medium">✓ 選択済み</span>
            )}
          </div>
          <Select
            value={selections.material || ''}
            onChange={(e) => updateMaterial(e.target.value as Material)}
            options={materialOptions}
            placeholder="素材を選択してください"
            required
          />
        </div>

        {/* サイズ選択 */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-900">サイズ</label>
            {selections.size && (
              <span className="text-xs text-accent-gold font-medium">✓ {selections.size}号</span>
            )}
          </div>
          <Select
            value={selections.size?.toString() || ''}
            onChange={(e) => updateSize(parseInt(e.target.value))}
            options={sizeOptions}
            placeholder="サイズを選択してください"
            required
          />
          <div className="mt-2 text-xs text-gray-500">
            目安: 女性9-11号 / 男性17-19号
          </div>
        </div>

        {/* 形状選択 */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-900">形状</label>
            {selections.shape && (
              <span className="text-xs text-accent-gold font-medium">
                ✓ {SHAPES.find(s => s.id === selections.shape)?.name}
              </span>
            )}
          </div>
          <Select
            value={selections.shape || ''}
            onChange={(e) => updateShape(e.target.value as Shape)}
            options={shapeOptions}
            placeholder="形状を選択してください"
          />
          <div className="mt-2 text-xs text-gray-500">
            ※価格に影響しません
          </div>
        </div>
      </div>

      {/* 右列 */}
      <div className="space-y-4">
        {/* 宝石選択 */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-900">宝石</label>
            {selections.gemstone && selections.gemstone !== 'none' && (
              <span className="text-xs text-accent-gold font-medium">
                ✓ {GEMSTONES.find(g => g.id === selections.gemstone)?.name}
              </span>
            )}
          </div>
          <Select
            value={selections.gemstone || 'none'}
            onChange={(e) => updateGemstone(e.target.value as Gemstone)}
            options={gemstoneOptions}
            placeholder="宝石を選択してください"
          />
        </div>

        {/* 刻印オプション */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-900">刻印</label>
            {selections.engraving && (
              <span className="text-xs text-accent-gold font-medium">✓ あり</span>
            )}
          </div>
          
          <div className="space-y-3">
            {/* 刻印有無 */}
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="engraving"
                  checked={!selections.engraving}
                  onChange={() => updateEngraving(false)}
                  className="mr-2"
                />
                <span className="text-sm">なし</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="engraving"
                  checked={selections.engraving}
                  onChange={() => updateEngraving(true)}
                  className="mr-2"
                />
                <span className="text-sm">あり (+¥6,000)</span>
              </label>
            </div>

            {/* 刻印内容 */}
            {selections.engraving && (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="刻印内容を入力"
                  value={selections.engravingContent || ''}
                  onChange={(e) => updateEngraving(true, e.target.value, selections.engravingFont)}
                  maxLength={20}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold"
                />
                <Select
                  value={selections.engravingFont || 'classic'}
                  onChange={(e) => updateEngraving(true, selections.engravingContent, e.target.value as EngravingFont)}
                  options={engravingFontOptions}
                  placeholder="フォントを選択"
                />
              </div>
            )}
          </div>
        </div>

        {/* ミル打ち選択 */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-900">ミル打ち</label>
            {selections.milGrain && (
              <span className="text-xs text-accent-gold font-medium">✓ あり</span>
            )}
          </div>
          <Select
            value={selections.milGrain ? 'basic' : 'none'}
            onChange={(e) => updateMilGrain(e.target.value === 'basic')}
            options={milGrainOptions}
            placeholder="ミル打ちを選択してください"
          />
        </div>
      </div>
    </div>
  )
}

export { CompactSelectors }