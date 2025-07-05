'use client'

import React from 'react'
import { MATERIALS, SHAPES, GEMSTONES, RING_SIZES } from '@/lib/data'
import { useOrderStore } from '@/store/useOrderStore'
import { Material, Shape, Gemstone } from '@/types'

const SimpleOrderForm: React.FC = () => {
  const { selections, updateMaterial, updateShape, updateSize, updateGemstone, updateEngraving, priceInfo } = useOrderStore()

  // 価格範囲を計算
  const getPriceRange = () => {
    const basePrices = MATERIALS.filter(m => typeof m.basePrice === 'number').map(m => m.basePrice as number)
    if (basePrices.length === 0) return '要問合せ'
    
    const minPrice = Math.min(...basePrices)
    const maxPrice = Math.max(...basePrices) + 20000 // オプション込みの概算
    
    return `¥${minPrice.toLocaleString()} ～ ¥${maxPrice.toLocaleString()}`
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* 商品タイトル */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-primary-dark mb-2">
          カスタムリング セミオーダー
        </h2>
        <div className="text-lg font-mono text-primary-dark">
          {priceInfo.finalPrice ? 
            `¥${priceInfo.finalPrice.toLocaleString()}` : 
            getPriceRange()
          }
          <span className="text-sm text-gray-600 ml-2">(税込)</span>
        </div>
      </div>

      {/* 選択フォーム */}
      <div className="space-y-6">
        
        {/* 基本設定 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* 素材選択 */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">素材</h3>
            <select
              value={selections.material || ''}
              onChange={(e) => updateMaterial(e.target.value as Material)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
            >
              <option value="">素材を選択</option>
              {MATERIALS.map((material) => (
                <option
                  key={material.id}
                  value={material.id}
                  disabled={!material.available}
                >
                  {material.name} - {
                    typeof material.basePrice === 'number' 
                      ? `¥${material.basePrice.toLocaleString()}〜` 
                      : material.basePrice === 'TBD' 
                        ? '価格未定' 
                        : '要問合せ'
                  }
                </option>
              ))}
            </select>
          </div>

          {/* 形状選択 */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">形状</h3>
            <select
              value={selections.shape || ''}
              onChange={(e) => updateShape(e.target.value as Shape)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
            >
              <option value="">形状を選択</option>
              {SHAPES.map((shape) => (
                <option key={shape.id} value={shape.id}>
                  {shape.name}
                </option>
              ))}
            </select>
          </div>

          {/* サイズ選択 */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">サイズ</h3>
            <select
              value={selections.size || ''}
              onChange={(e) => updateSize(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
            >
              <option value="">サイズを選択</option>
              {RING_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}号
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* オプション設定 */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">オプション</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 宝石選択 */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">宝石（誕生石）</label>
              <select
                value={selections.gemstone || 'none'}
                onChange={(e) => updateGemstone(e.target.value as Gemstone)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
              >
                {GEMSTONES.map((gemstone) => (
                  <option key={gemstone.id} value={gemstone.id}>
                    {gemstone.name}
                    {gemstone.month && ` (${gemstone.month}月)`}
                  </option>
                ))}
              </select>
            </div>

            {/* 数量 */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">数量</label>
              <input
                type="number"
                min="1"
                max="10"
                defaultValue="1"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
              />
            </div>

          </div>

          {/* 刻印オプション */}
          <div className="mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selections.engraving}
                onChange={(e) => updateEngraving(e.target.checked, selections.engravingContent)}
                className="rounded border-gray-300 text-accent-gold focus:ring-accent-gold"
              />
              <span className="text-sm text-gray-700">刻印を追加 (+¥6,000)</span>
            </label>
            
            {selections.engraving && (
              <input
                type="text"
                placeholder="刻印内容を入力（英数字のみ、最大20文字）"
                value={selections.engravingContent}
                onChange={(e) => updateEngraving(true, e.target.value)}
                maxLength={20}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
              />
            )}
          </div>

        </div>

        {/* 注文ボタン */}
        <div className="border-t border-gray-200 pt-6">
          <button
            className="w-full bg-accent-gold text-white font-semibold py-4 px-6 rounded-lg hover:bg-accent-gold/90 transition-colors duration-200 transform hover:scale-105"
            disabled={!selections.material || !selections.size || !selections.shape}
          >
            {(!selections.material || !selections.size || !selections.shape) 
              ? '基本設定を完了してください' 
              : 'カートに追加'
            }
          </button>
          
          {/* 注意事項 */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              製作期間：2-4週間 | 決済後にLINEでご連絡いたします
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export { SimpleOrderForm }