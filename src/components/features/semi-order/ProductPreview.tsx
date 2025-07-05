'use client'

import React from 'react'
import { useOrderStore } from '@/store/useOrderStore'
import { MATERIALS, GEMSTONES, SHAPES } from '@/lib/data'
import { ImagePlaceholder } from '@/components/ui'

const ProductPreview: React.FC = () => {
  const { selections } = useOrderStore()

  // 選択された素材、宝石、形状の情報を取得
  const selectedMaterial = MATERIALS.find(m => m.id === selections.material)
  const selectedGemstone = GEMSTONES.find(g => g.id === selections.gemstone)
  const selectedShape = SHAPES.find(s => s.id === selections.shape)

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-primary-dark">商品プレビュー</h3>
      
      {/* メイン画像エリア */}
      <ImagePlaceholder
        variant="detail"
        aspectRatio="square"
        imageType="product"
        text={`${selectedMaterial?.name || '素材'} × ${selectedShape?.name || '形状'}\n${selectedGemstone?.name || '宝石'} ${selections.size}号`}
        className="w-full"
      />

      {/* 選択内容サマリー */}
      <div className="bg-white p-4 rounded-lg border border-primary-light">
        <h4 className="font-medium text-primary-dark mb-3">現在の選択内容</h4>
        <div className="space-y-3">
          {/* 素材 */}
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-accent-green rounded-full"></div>
            <div>
              <span className="text-sm font-medium">素材: </span>
              <span className="text-sm text-primary-green">
                {selectedMaterial?.name || '未選択'}
              </span>
            </div>
          </div>

          {/* サイズ */}
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 border-2 border-accent-green rounded-full"></div>
            <div>
              <span className="text-sm font-medium">サイズ: </span>
              <span className="text-sm text-primary-green">{selections.size}号</span>
            </div>
          </div>

          {/* 形状 */}
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-accent-emerald rounded"></div>
            <div>
              <span className="text-sm font-medium">形状: </span>
              <span className="text-sm text-primary-green">
                {selectedShape?.name || '未選択'}
              </span>
            </div>
          </div>

          {/* 宝石 */}
          <div className="flex items-center space-x-3">
            <div 
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ 
                backgroundColor: selectedGemstone?.color || 'transparent' 
              }}
            ></div>
            <div>
              <span className="text-sm font-medium">宝石: </span>
              <span className="text-sm text-primary-green">
                {selectedGemstone?.name || '未選択'}
              </span>
            </div>
          </div>

          {/* オプション */}
          {(selections.engraving || selections.milGrain) && (
            <div className="pt-2 border-t border-gray-100">
              <p className="text-sm font-medium text-primary-dark mb-2">オプション:</p>
              <div className="space-y-1">
                {selections.engraving && (
                  <p className="text-xs text-text-secondary">
                    • 刻印: {selections.engravingContent || '内容未設定'}
                  </p>
                )}
                {selections.milGrain && (
                  <p className="text-xs text-text-secondary">
                    • ミル打ち加工
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 製作期間 */}
      <div className="bg-background-green p-4 rounded-lg">
        <h4 className="font-medium text-primary-dark mb-2">製作期間について</h4>
        <p className="text-sm text-text-secondary">
          ご注文確定後、2〜4週間でお届けいたします。
          詳しい完成予定日は、ご注文確認時にお知らせいたします。
        </p>
      </div>
    </div>
  )
}

export { ProductPreview }