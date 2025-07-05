'use client'

import React from 'react'
import { MATERIALS } from '@/lib/data'
import { useOrderStore } from '@/store/useOrderStore'
import { cn } from '@/lib/utils'

const MaterialSelectorDropdown: React.FC = () => {
  const { selections, updateMaterial } = useOrderStore()

  const selectedMaterial = MATERIALS.find(m => m.id === selections.material)

  return (
    <div className="space-y-3 md:space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base md:text-lg font-semibold text-primary-dark">素材選択</h3>
        {selections.material && (
          <div className="text-xs md:text-sm text-accent-gold font-medium">
            ✓ {selectedMaterial?.name}
          </div>
        )}
      </div>
      
      <div className="relative">
        <select
          value={selections.material || ''}
          onChange={(e) => updateMaterial(e.target.value)}
          className={cn(
            'w-full p-3 md:p-4 rounded-lg border-2 bg-white text-left transition-all',
            'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-gold',
            'appearance-none cursor-pointer',
            selections.material
              ? 'border-accent-gold bg-accent-gold/5'
              : 'border-gray-200 hover:border-gray-300'
          )}
        >
          <option value="" disabled>素材を選択してください</option>
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
        
        {/* カスタム矢印 */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* 選択中の素材の詳細表示 */}
      {selectedMaterial && (
        <div className="bg-gray-50 p-3 md:p-4 rounded-lg border">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-medium text-sm md:text-base text-primary-dark">
              {selectedMaterial.name}
            </h4>
            <div className="text-xs md:text-sm font-mono text-primary-dark">
              {typeof selectedMaterial.basePrice === 'number' 
                ? `¥${selectedMaterial.basePrice.toLocaleString()}〜` 
                : selectedMaterial.basePrice === 'TBD' 
                  ? '価格未定' 
                  : '要問合せ'
              }
            </div>
          </div>
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
            {selectedMaterial.description}
          </p>
          {!selectedMaterial.available && (
            <p className="text-xs md:text-sm text-red-500 mt-2">※現在選択できません</p>
          )}
        </div>
      )}
    </div>
  )
}

export { MaterialSelectorDropdown }