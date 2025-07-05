'use client'

import React, { useState } from 'react'
import { MATERIALS } from '@/lib/data'
import { useOrderStore } from '@/store/useOrderStore'
import { cn } from '@/lib/utils'

const MaterialSelectorCard: React.FC = () => {
  const { selections, updateMaterial } = useOrderStore()
  const [tooltip, setTooltip] = useState<{ id: string; x: number; y: number } | null>(null)

  const handleMouseEnter = (e: React.MouseEvent, materialId: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltip({
      id: materialId,
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    })
  }

  const handleMouseLeave = () => {
    setTooltip(null)
  }

  // 価格帯別にグルーピング
  const groupedMaterials = {
    basic: MATERIALS.filter(m => typeof m.basePrice === 'number'),
    premium: MATERIALS.filter(m => m.basePrice === 'TBD' || m.basePrice === 'CONTACT')
  }

  const renderMaterialCard = (material: any, isSelected: boolean) => (
    <div
      key={material.id}
      onClick={() => material.available && updateMaterial(material.id)}
      onMouseEnter={(e) => handleMouseEnter(e, material.id)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 transform',
        'hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-gold',
        material.available ? 'cursor-pointer' : 'cursor-not-allowed opacity-60',
        isSelected
          ? 'ring-2 ring-accent-gold shadow-xl scale-105'
          : 'hover:shadow-lg'
      )}
    >
      {/* 背景グラデーション（素材に応じて） */}
      <div className={cn(
        'absolute inset-0 transition-opacity duration-300',
        material.id.includes('sv') && 'bg-gradient-to-br from-gray-100 to-gray-200',
        material.id.includes('yg') && 'bg-gradient-to-br from-yellow-100 to-yellow-200',
        material.id.includes('pg') && 'bg-gradient-to-br from-pink-100 to-pink-200',
        material.id.includes('k18') && 'bg-gradient-to-br from-yellow-200 to-yellow-300',
        isSelected && 'opacity-100',
        !isSelected && 'opacity-50 group-hover:opacity-80'
      )} />

      {/* カードコンテンツ */}
      <div className="relative bg-white/90 backdrop-blur-sm p-4 md:p-6 h-full">
        {/* 選択インジケーター */}
        {isSelected && (
          <div className="absolute top-3 right-3 w-6 h-6 bg-accent-gold text-white rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}

        {/* 素材アイコン/画像エリア */}
        <div className="flex items-center justify-center mb-4">
          <div className={cn(
            'w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold transition-all duration-300',
            'group-hover:scale-110',
            material.id.includes('sv') && 'bg-gray-300 text-gray-700',
            material.id.includes('yg') && 'bg-yellow-300 text-yellow-800',
            material.id.includes('pg') && 'bg-pink-300 text-pink-800',
            material.id.includes('k18') && 'bg-yellow-400 text-yellow-900'
          )}>
            {material.id.includes('sv') && '🥈'}
            {material.id.includes('yg') && '🥇'}
            {material.id.includes('pg') && '🌸'}
            {material.id.includes('k18') && '💎'}
          </div>
        </div>

        {/* 素材名 */}
        <h4 className={cn(
          'text-center font-semibold text-sm md:text-base mb-2 transition-colors duration-300',
          isSelected ? 'text-accent-gold' : 'text-primary-dark group-hover:text-accent-gold'
        )}>
          {material.name}
        </h4>

        {/* 価格表示 */}
        <div className="text-center mb-3">
          <div className={cn(
            'text-xs md:text-sm font-mono font-medium transition-colors duration-300',
            isSelected ? 'text-accent-gold' : 'text-primary-dark'
          )}>
            {typeof material.basePrice === 'number' 
              ? `¥${material.basePrice.toLocaleString()}〜` 
              : material.basePrice === 'TBD' 
                ? '価格未定' 
                : '要問合せ'
            }
          </div>
        </div>

        {/* 特徴バッジ */}
        <div className="flex flex-wrap gap-1 justify-center mb-3">
          {material.id === 'sv925' && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
              人気
            </span>
          )}
          {material.id.includes('k18') && (
            <span className="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">
              最高級
            </span>
          )}
          {typeof material.basePrice === 'number' && (
            <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
              即納
            </span>
          )}
        </div>

        {/* 説明文（短縮版） */}
        <p className="text-xs text-gray-600 text-center leading-tight">
          {material.description.substring(0, 30)}...
        </p>

        {/* 利用不可の場合 */}
        {!material.available && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              選択不可
            </span>
          </div>
        )}

        {/* ホバーエフェクト */}
        <div className={cn(
          'absolute inset-0 bg-accent-gold/10 opacity-0 transition-opacity duration-300',
          'group-hover:opacity-100'
        )} />
      </div>
    </div>
  )

  return (
    <div className="space-y-4 md:space-y-6 relative">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base md:text-lg font-semibold text-primary-dark whitespace-nowrap flex-shrink-0">
          素材選択
        </h3>
        {selections.material && (
          <div className="text-xs md:text-sm text-accent-gold font-medium whitespace-nowrap">
            ✓ {MATERIALS.find(m => m.id === selections.material)?.name}
          </div>
        )}
      </div>

      {/* ベーシック素材 */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <h4 className="text-sm font-medium text-gray-700">ベーシック</h4>
          <span className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded-full">
            すぐ作れます
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {groupedMaterials.basic.map((material) => 
            renderMaterialCard(material, selections.material === material.id)
          )}
        </div>
      </div>

      {/* プレミアム素材 */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <h4 className="text-sm font-medium text-gray-700">プレミアム</h4>
          <span className="px-2 py-1 text-xs bg-purple-50 text-purple-600 rounded-full">
            要相談
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {groupedMaterials.premium.map((material) => 
            renderMaterialCard(material, selections.material === material.id)
          )}
        </div>
      </div>

      {/* ツールチップ */}
      {tooltip && (
        <div
          className="fixed z-50 bg-primary-dark text-white text-xs px-3 py-2 rounded-lg shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          <div className="font-medium mb-1">
            {MATERIALS.find(m => m.id === tooltip.id)?.name}
          </div>
          <div className="text-gray-300 leading-tight max-w-48">
            {MATERIALS.find(m => m.id === tooltip.id)?.description}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary-dark"></div>
        </div>
      )}
    </div>
  )
}

export { MaterialSelectorCard }