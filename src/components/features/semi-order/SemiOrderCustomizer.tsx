'use client'

import React from 'react'
import { useSemiOrderStore } from '@/store/useSemiOrderStore'
import { 
  MATERIALS, 
  RING_SIZES, 
  SHAPES, 
  GEMSTONES, 
  ENGRAVING_FONTS, 
  STONE_SETTINGS, 
  MIL_GRAIN_OPTIONS 
} from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { PriceDisplay } from '@/components/ui/PriceDisplay'

interface SemiOrderCustomizerProps {
  className?: string
}

const SemiOrderCustomizer: React.FC<SemiOrderCustomizerProps> = ({ className = '' }) => {
  const {
    material,
    size,
    shape,
    gemstone,
    engraving,
    stoneSetting,
    milGrain,
    calculatedPrice,
    setMaterial,
    setSize,
    setShape,
    setGemstone,
    setEngraving,
    setStoneSetting,
    setMilGrain,
    isComplete
  } = useSemiOrderStore()

  const availableMaterials = MATERIALS.filter(m => m.available)
  const sizeOptions = RING_SIZES.map(size => ({ 
    value: size.toString(), 
    label: `${size}号` 
  }))
  const fontOptions = ENGRAVING_FONTS.map(font => ({
    value: font.id,
    label: font.name
  }))

  return (
    <div className={`${className}`}>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* 左側：プレビュー */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-serif font-bold text-primary-dark mb-4">
              プレビュー
            </h3>
            <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/testImage/ミニマリストリングコレクション.webp"
                alt={`${SHAPES.find(s => s.id === shape)?.name || '楕円'}型 ${MATERIALS.find(m => m.id === material)?.name || 'シルバー925'}リング プレビュー`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* 選択内容サマリー */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">素材:</span>
                <span className="font-medium">{MATERIALS.find(m => m.id === material)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">サイズ:</span>
                <span className="font-medium">{size}号</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">形状:</span>
                <span className="font-medium">{SHAPES.find(s => s.id === shape)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">宝石:</span>
                <span className="font-medium">{GEMSTONES.find(g => g.id === gemstone)?.name}</span>
              </div>
              {engraving.enabled && (
                <div className="flex justify-between">
                  <span className="text-gray-600">刻印:</span>
                  <span className="font-medium">&quot;{engraving.text}&quot;</span>
                </div>
              )}
            </div>
          </div>

          {/* 価格表示 */}
          <div className="bg-primary-light/20 rounded-2xl p-6">
            <h3 className="text-lg font-serif font-bold text-primary-dark mb-4">
              価格内訳
            </h3>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span>基本価格:</span>
                <span>¥{calculatedPrice.base.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>オプション:</span>
                <span>¥{calculatedPrice.options.toLocaleString()}</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between font-bold text-lg">
                <span>合計:</span>
                <PriceDisplay price={calculatedPrice.total} />
              </div>
            </div>
            {!calculatedPrice.isValid && (
              <p className="text-orange-600 text-sm">
                ※ 選択された素材の価格は要お問い合わせです
              </p>
            )}
          </div>
        </div>

        {/* 右側：カスタマイズオプション */}
        <div className="space-y-8">
          {/* 素材選択 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-serif font-bold text-primary-dark mb-4">
              素材
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableMaterials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setMaterial(mat.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    material === mat.id
                      ? 'border-primary-green bg-primary-light/20'
                      : 'border-gray-200 hover:border-primary-light'
                  }`}
                >
                  <div className="font-medium text-primary-dark">{mat.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{mat.description}</div>
                  <div className="text-sm font-mono mt-2">
                    {typeof mat.basePrice === 'number' 
                      ? `¥${mat.basePrice.toLocaleString()}` 
                      : mat.basePrice
                    }
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* サイズ選択 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-serif font-bold text-primary-dark mb-4">
              リングサイズ
            </h3>
            <Select
              value={size.toString()}
              onChange={(e) => setSize(parseInt(e.target.value))}
              options={sizeOptions}
              placeholder="サイズを選択"
            />
          </div>

          {/* 形状選択 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-serif font-bold text-primary-dark mb-4">
              形状
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {SHAPES.map((shapeOption) => (
                <button
                  key={shapeOption.id}
                  onClick={() => setShape(shapeOption.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    shape === shapeOption.id
                      ? 'border-primary-green bg-primary-light/20'
                      : 'border-gray-200 hover:border-primary-light'
                  }`}
                >
                  <div className="font-medium text-primary-dark">{shapeOption.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{shapeOption.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 宝石選択 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-serif font-bold text-primary-dark mb-4">
              宝石
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {GEMSTONES.map((gem) => (
                <button
                  key={gem.id}
                  onClick={() => setGemstone(gem.id)}
                  className={`p-3 rounded-lg border-2 text-center transition-all ${
                    gemstone === gem.id
                      ? 'border-primary-green bg-primary-light/20'
                      : 'border-gray-200 hover:border-primary-light'
                  }`}
                >
                  {gem.color !== 'transparent' && (
                    <div 
                      className="w-6 h-6 rounded-full mx-auto mb-2"
                      style={{ backgroundColor: gem.color }}
                    />
                  )}
                  <div className="text-sm font-medium text-primary-dark">{gem.name}</div>
                  {gem.month && (
                    <div className="text-xs text-gray-600">{gem.month}月</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 刻印オプション */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-serif font-bold text-primary-dark mb-4">
              刻印 (+¥6,000)
            </h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={engraving.enabled}
                  onChange={(e) => setEngraving(e.target.checked, engraving.text, engraving.font)}
                  className="w-5 h-5 text-primary-green"
                />
                <span className="text-primary-dark">刻印を追加</span>
              </label>
              
              {engraving.enabled && (
                <div className="space-y-3">
                  <Input
                    placeholder="テキストを入力 (A-Z, 0-9, 最大20文字)"
                    value={engraving.text}
                    onChange={(e) => setEngraving(true, e.target.value, engraving.font)}
                    maxLength={20}
                  />
                  <Select
                    value={engraving.font}
                    onChange={(e) => setEngraving(true, engraving.text, e.target.value)}
                    options={fontOptions}
                    placeholder="フォントを選択"
                  />
                </div>
              )}
            </div>
          </div>

          {/* 石留め選択 */}
          {gemstone !== 'none' && (
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-serif font-bold text-primary-dark mb-4">
                石留め (+¥3,000)
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => setStoneSetting('none')}
                  className={`p-3 rounded-lg border-2 text-left transition-all ${
                    stoneSetting === 'none'
                      ? 'border-primary-green bg-primary-light/20'
                      : 'border-gray-200 hover:border-primary-light'
                  }`}
                >
                  <div className="font-medium text-primary-dark">設定なし</div>
                  <div className="text-sm text-gray-600">シンプルな仕上がり</div>
                </button>
                {STONE_SETTINGS.slice(0, 3).map((setting) => (
                  <button
                    key={setting.id}
                    onClick={() => setStoneSetting(setting.id)}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      stoneSetting === setting.id
                        ? 'border-primary-green bg-primary-light/20'
                        : 'border-gray-200 hover:border-primary-light'
                    }`}
                  >
                    <div className="font-medium text-primary-dark">{setting.name}</div>
                    <div className="text-sm text-gray-600">{setting.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ミル打ちオプション */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-serif font-bold text-primary-dark mb-4">
              ミル打ち
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {MIL_GRAIN_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setMilGrain(option.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    milGrain === option.id
                      ? 'border-primary-green bg-primary-light/20'
                      : 'border-gray-200 hover:border-primary-light'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-primary-dark">{option.name}</div>
                      <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                    </div>
                    <div className="text-sm font-mono">
                      {option.price > 0 ? `+¥${option.price.toLocaleString()}` : '無料'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 注文ボタン */}
          <div className="bg-primary-light/20 rounded-2xl p-6">
            <Button
              variant="green"
              size="lg"
              className="w-full"
              disabled={!isComplete() || !calculatedPrice.isValid}
            >
注文する - ¥{calculatedPrice.total.toLocaleString()}
            </Button>
            <p className="text-sm text-gray-600 mt-3 text-center">
予定制作期間: 2-4週間
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SemiOrderCustomizer }