'use client'

import React from 'react'
import { GEMSTONES } from '@/lib/data'
import { useOrderStore } from '@/store/useOrderStore'
import { cn } from '@/lib/utils'

const GemstoneSelector: React.FC = () => {
  const { selections, updateGemstone } = useOrderStore()

  return (
    <div className="space-y-4 touch-manipulation">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-primary-dark mb-2">宝石選択</h3>
        <p className="text-sm sm:text-base text-text-secondary mb-4 leading-relaxed">
          誕生石から選択いただけます。宝石を選択すると石留め料金も含まれます。
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {GEMSTONES.map((gemstone) => (
          <button
            key={gemstone.id}
            onClick={() => updateGemstone(gemstone.id)}
            className={cn(
              'min-h-[44px] p-3 sm:p-4 rounded-lg border-2 text-left transition-all touch-manipulation',
              'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-gold',
              'active:scale-95 active:transition-transform active:duration-75',
              selections.gemstone === gemstone.id
                ? 'border-accent-gold bg-accent-gold/5'
                : 'border-gray-200 hover:border-gray-300',
              gemstone.id === 'none' && 'border-dashed'
            )}
          >
            <div className="flex items-center space-x-3 mb-2">
              {/* 宝石の色を示す円 */}
              <div 
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-300 flex-shrink-0"
                style={{ backgroundColor: gemstone.color }}
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-primary-dark text-sm sm:text-base truncate">
                  {gemstone.month ? `${gemstone.name}(${gemstone.month}月)` : gemstone.name}
                </h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{gemstone.description}</p>
          </button>
        ))}
      </div>

      {selections.gemstone !== 'none' && (
        <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
          <p className="text-sm sm:text-base text-yellow-700 leading-relaxed">
            ⚠️ 宝石を選択すると、石留め料金（¥3,000）と宝石料金（¥8,000）が追加されます。
          </p>
        </div>
      )}
    </div>
  )
}

export { GemstoneSelector }