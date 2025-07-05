'use client'

import React from 'react'
import { SHAPES } from '@/lib/data'
import { useOrderStore } from '@/store/useOrderStore'
import { cn } from '@/lib/utils'
import { getShapeIcon } from './ShapeIcons'

const ShapeSelector: React.FC = () => {
  const { selections, updateShape } = useOrderStore()

  return (
    <div className="space-y-3 md:space-y-4 touch-manipulation">
      <div>
        <div className="flex items-center justify-between mb-2 gap-2">
          <h3 className="text-base md:text-lg font-semibold text-primary-dark whitespace-nowrap flex-shrink-0">型の形状</h3>
          {selections.shape && (
            <div className="text-xs md:text-sm text-accent-gold font-medium whitespace-nowrap">
              ✓ {SHAPES.find(s => s.id === selections.shape)?.name}
            </div>
          )}
        </div>
        <p className="text-xs md:text-sm text-text-secondary mb-3 md:mb-4 leading-tight md:leading-relaxed">
          指輪の基本形状を選択<span className="hidden md:inline">  ※価格に影響しません</span>
        </p>
      </div>
      
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        {SHAPES.map((shape) => (
          <button
            key={shape.id}
            onClick={() => updateShape(shape.id)}
            className={cn(
              'min-h-[80px] md:min-h-[100px] p-3 md:p-4 rounded-xl border-2 text-center transition-all touch-manipulation relative flex flex-col items-center justify-center group',
              'hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-gold',
              'active:scale-95 active:transition-transform active:duration-75',
              selections.shape === shape.id
                ? 'border-accent-gold bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 shadow-xl transform scale-105'
                : 'border-gray-200 hover:border-accent-gold/50 hover:bg-gradient-to-br hover:from-accent-gold/5 hover:to-transparent'
            )}
          >
            {selections.shape === shape.id && (
              <div className="absolute top-1 md:top-2 right-1 md:right-2 w-4 h-4 md:w-5 md:h-5 bg-accent-gold text-white rounded-full flex items-center justify-center text-xs font-bold">
                ✓
              </div>
            )}
            {/* SVGアイコンエリア */}
            <div className={cn(
              "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-2 md:mb-3 transition-all duration-300 transform",
              "group-hover:scale-110 group-hover:rotate-3",
              selections.shape === shape.id
                ? "bg-accent-gold/20 text-accent-gold border-2 border-accent-gold shadow-lg"
                : "bg-gray-50 text-gray-600 border border-gray-200 group-hover:bg-accent-gold/10 group-hover:text-accent-gold"
            )}>
              {getShapeIcon(shape.id, { 
                className: "w-6 h-6 md:w-7 md:h-7",
                fill: selections.shape === shape.id ? "#d4af37" : "currentColor"
              })}
            </div>
            
            {/* 名前 */}
            <h4 className={cn(
              "font-medium text-xs md:text-sm leading-tight",
              selections.shape === shape.id ? "text-accent-gold font-semibold" : "text-primary-dark"
            )}>{shape.name}</h4>
          </button>
        ))}
      </div>
      
      <div className="bg-blue-50 p-2 md:p-4 rounded-lg hidden md:block">
        <p className="text-sm text-blue-700 leading-relaxed">
          💡 形状選択は価格に影響しません。お好みのデザインをお選びください。
        </p>
      </div>
    </div>
  )
}

export { ShapeSelector }