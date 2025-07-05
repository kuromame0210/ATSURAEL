'use client'

import React, { useState } from 'react'
import { MATERIALS } from '@/lib/data'
import { useOrderStore } from '@/store/useOrderStore'
import { cn } from '@/lib/utils'

const MaterialSelector: React.FC = () => {
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

  return (
    <div className="space-y-3 md:space-y-4 relative">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base md:text-lg font-semibold text-primary-dark whitespace-nowrap flex-shrink-0">素材選択</h3>
        {selections.material && (
          <div className="text-xs md:text-sm text-accent-gold font-medium whitespace-nowrap">
            ✓ {MATERIALS.find(m => m.id === selections.material)?.name}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
        {MATERIALS.map((material) => (
          <button
            key={material.id}
            onClick={() => updateMaterial(material.id)}
            onMouseEnter={(e) => handleMouseEnter(e, material.id)}
            onMouseLeave={handleMouseLeave}
            disabled={!material.available}
            className={cn(
              'p-3 md:p-4 rounded-lg border-2 text-left transition-all min-h-[60px] md:min-h-[72px] touch-manipulation relative',
              'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-gold',
              'active:scale-95',
              selections.material === material.id
                ? 'border-accent-gold bg-accent-gold/5 shadow-md'
                : 'border-gray-200 hover:border-gray-300',
              !material.available && 'opacity-50 cursor-not-allowed'
            )}
          >
            {selections.material === material.id && (
              <div className="absolute top-1 md:top-2 right-1 md:right-2 w-4 h-4 md:w-5 md:h-5 bg-accent-gold text-white rounded-full flex items-center justify-center text-xs font-bold">
                ✓
              </div>
            )}
            <div className="flex justify-between items-start mb-1 md:mb-2">
              <h4 className={cn(
                "font-medium text-sm md:text-base",
                selections.material === material.id ? "text-accent-gold font-semibold" : "text-primary-dark"
              )}>{material.name}</h4>
              <div className="text-xs md:text-sm font-mono text-primary-dark">
                {typeof material.basePrice === 'number' 
                  ? `¥${material.basePrice.toLocaleString()}〜` 
                  : material.basePrice === 'TBD' 
                    ? '価格未定' 
                    : '要問合せ'
                }
              </div>
            </div>
            <p className="text-xs md:text-sm text-text-secondary leading-tight md:leading-relaxed hidden md:block">{material.description}</p>
            <p className="text-xs text-text-secondary leading-tight block md:hidden">
              {material.description.substring(0, 20)}...
            </p>
            {!material.available && (
              <p className="text-xs md:text-sm text-red-500 mt-1 md:mt-2">※現在選択できません</p>
            )}
          </button>
        ))}
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

export { MaterialSelector }