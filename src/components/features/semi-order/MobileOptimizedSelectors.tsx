'use client'

import React from 'react'
import { useOrderStore } from '@/store/useOrderStore'
import { Select } from '@/components/ui'
import { MATERIALS, GEMSTONES, SHAPES, RING_SIZES, ENGRAVING_FONTS, STONE_SETTINGS } from '@/lib/data'
import { Material, Shape, Gemstone, EngravingFont, StoneSetting } from '@/types'

const MobileOptimizedSelectors: React.FC = () => {

  const { 
    selections, 
    updateMaterial, 
    updateSize, 
    updateShape, 
    updateGemstone, 
    updateEngraving,
    updateStoneSetting,
    updateMilGrain
  } = useOrderStore()

  // 各選択肢のオプション生成
  const sizeOptions = RING_SIZES.map(size => ({
    value: size.toString(),
    label: `${size}号`
  }))

  const gemstoneOptions = GEMSTONES.map(gemstone => ({
    value: gemstone.id,
    label: gemstone.month ? `${gemstone.name}(${gemstone.month}月)` : gemstone.name
  }))

  const stoneSettingOptions = STONE_SETTINGS.map(setting => ({
    value: setting.id,
    label: setting.name
  }))

  const engravingFontOptions = ENGRAVING_FONTS.map(font => ({
    value: font.id,
    label: font.name
  }))

  return (
    <div className="space-y-4">
      {/* 基本選択（必須） */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">基本設定</h3>
        <div className="space-y-3">
            {/* 素材選択 */}
            <div>
              <label className="text-xs text-gray-600 mb-0.5 block">
                素材 {selections.material && <span className="text-accent-gold">✓</span>}
              </label>
              <select
                value={selections.material || ''}
                onChange={(e) => updateMaterial(e.target.value as Material)}
                className="w-full px-1.5 py-0 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-accent-gold h-5"
              >
                <option value="">素材を選択</option>
                {MATERIALS.filter(m => m.available).map((material) => (
                  <option key={material.id} value={material.id}>
                    {material.name}
                  </option>
                ))}
              </select>
            </div>

            {/* サイズ選択 */}
            <div>
              <label className="text-xs text-gray-600 mb-0.5 block">
                サイズ {selections.size && <span className="text-accent-gold">✓</span>}
              </label>
              <Select
                value={selections.size?.toString() || ''}
                onChange={(e) => updateSize(parseInt(e.target.value))}
                options={sizeOptions}
                placeholder="サイズを選択"
                required
              />
            </div>

            {/* 形状選択 */}
            <div>
              <label className="text-xs text-gray-600 mb-0.5 block">
                形状 {selections.shape && <span className="text-accent-gold">✓</span>}
              </label>
              <select
                value={selections.shape || ''}
                onChange={(e) => updateShape(e.target.value as Shape)}
                className="w-full px-1.5 py-0 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-accent-gold h-5"
              >
                <option value="">形状を選択</option>
                {SHAPES.map((shape) => (
                  <option key={shape.id} value={shape.id}>
                    {shape.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 宝石選択 */}
            <div>
              <label className="text-xs text-gray-600 mb-0.5 block">
                宝石 {selections.gemstone && selections.gemstone !== 'none' && <span className="text-accent-gold">✓</span>}
              </label>
              <Select
                value={selections.gemstone || 'none'}
                onChange={(e) => updateGemstone(e.target.value as Gemstone)}
                options={gemstoneOptions}
                placeholder="宝石を選択"
              />
            </div>
        </div>
      </div>

      {/* オプション設定 */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">オプション</h3>
        <div className="space-y-3">
            {/* 刻印設定 */}
            <div className="mb-1">
              <label className="text-xs text-gray-600 mb-0.5 block">
                刻印 {selections.engraving && <span className="text-accent-gold">✓</span>}
              </label>
              <select
                value={selections.engraving ? 'true' : 'false'}
                onChange={(e) => updateEngraving(e.target.value === 'true')}
                className="w-full px-2 py-0.5 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-accent-gold h-6 mb-1"
              >
                <option value="false">なし</option>
                <option value="true">あり (+¥6,000)</option>
              </select>

              {selections.engraving && (
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="刻印内容 (最大20文字)"
                    value={selections.engravingContent || ''}
                    onChange={(e) => updateEngraving(true, e.target.value, selections.engravingFont)}
                    maxLength={20}
                    className="w-full px-1.5 py-0 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-accent-gold h-5"
                  />
                  <Select
                    value={selections.engravingFont || 'classic'}
                    onChange={(e) => updateEngraving(true, selections.engravingContent, e.target.value as EngravingFont)}
                    options={engravingFontOptions}
                    placeholder="フォント"
                  />
                </div>
              )}
            </div>

            {/* 石留め設定 */}
            {selections.gemstone && selections.gemstone !== 'none' && (
              <div className="mb-1">
                <label className="text-xs text-gray-600 mb-0.5 block">
                  石留め {selections.stoneSetting && <span className="text-accent-gold">✓</span>}
                  <span className="text-yellow-600 ml-1">(+¥3,000)</span>
                </label>
                <Select
                  value={selections.stoneSetting || ''}
                  onChange={(e) => updateStoneSetting(e.target.value as StoneSetting)}
                  options={stoneSettingOptions}
                  placeholder="石留め方法を選択"
                />
                <div className="text-xs text-gray-500 mt-1">
                  宝石を選択すると石留め料金が自動追加されます
                </div>
              </div>
            )}

            {/* ミル打ち設定 */}
            <div>
              <label className="text-xs text-gray-600 mb-0.5 block">
                ミル打ち {selections.milGrain && <span className="text-accent-gold">✓</span>}
              </label>
              <select
                value={selections.milGrain ? 'true' : 'false'}
                onChange={(e) => updateMilGrain(e.target.value === 'true')}
                className="w-full px-1.5 py-0 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-accent-gold h-5"
              >
                <option value="false">なし</option>
                <option value="true">あり (+¥4,000)</option>
              </select>
            </div>
        </div>
      </div>

      {/* サイズガイド */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">サイズガイド</h3>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex justify-between items-center text-xs text-gray-600">
            <span className="font-medium">サイズ目安:</span>
            <span>女性 9-11号 | 男性 17-19号</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MobileOptimizedSelectors }