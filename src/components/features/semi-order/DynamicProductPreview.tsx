'use client'

import React from 'react'
import Image from 'next/image'
import { useOrderStore } from '@/store/useOrderStore'
import { MATERIALS, GEMSTONES, SHAPES } from '@/lib/data'

const DynamicProductPreview: React.FC = () => {
  const { selections } = useOrderStore()

  const getProductImage = () => {
    const material = selections.material || 'sv925'
    
    // 素材に基づいて画像を選択
    const materialImageMap: Record<string, string> = {
      'sv925': '/testImage/ミニマリストリングコレクション.webp', // シルバー
      'k10yg': '/testImage/ゴールド・シルバーカスタムリング.jpg', // 10Kイエローゴールド
      'k10pg': '/testImage/高級感のあるカスタマイズ指輪.jpeg', // 10Kピンクゴールド
      'k18yg': '/testImage/18Kゴールドシグネットリング制作プロセス .jpg', // 18Kイエローゴールド
      'k18pg': '/testImage/高級感のあるカスタマイズ指輪.jpeg', // 18Kピンクゴールド
    }
    
    return materialImageMap[material] || '/testImage/ゴールド・シルバーカスタムリング.jpg'
  }

  const getMaterialName = () => MATERIALS.find(m => m.id === selections.material)?.name || '素材未選択'
  const getShapeName = () => SHAPES.find(s => s.id === selections.shape)?.name || '形状未選択'
  const getGemstoneName = () => GEMSTONES.find(g => g.id === selections.gemstone)?.name || '宝石なし'

  return (
    <div className="">
      {/* 画像エリア - オーバーレイなし */}
      <div className="relative aspect-square bg-gray-50">
        <Image
          src={getProductImage()}
          alt={`${getMaterialName()} × ${getShapeName()} × ${getGemstoneName()}`}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      
      {/* 選択内容表示 - 画像下部に移動 */}
      <div className="p-1 mt-2">
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">素材:</span>
            <span className="font-medium text-gray-900 truncate ml-1">{getMaterialName()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">形状:</span>
            <span className="font-medium text-gray-900 truncate ml-1">{getShapeName()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">宝石:</span>
            <span className="font-medium text-gray-900 truncate ml-1">{getGemstoneName()}</span>
          </div>
          {selections.size && (
            <div className="flex justify-between">
              <span className="text-gray-500">サイズ:</span>
              <span className="font-medium text-gray-900">{selections.size}号</span>
            </div>
          )}
        </div>
        
        {/* 追加オプション */}
        {(selections.engraving || selections.milGrain) && (
          <div className="mt-2 pt-1">
            <div className="text-xs text-gray-600 space-y-0.5">
              {selections.engraving && (
                <div>刻印: {selections.engravingContent || '内容未入力'}</div>
              )}
              {selections.milGrain && (
                <div>ミル打ち: あり</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { DynamicProductPreview }