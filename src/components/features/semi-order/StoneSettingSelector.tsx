'use client'

import React from 'react'
import { STONE_SETTINGS } from '@/lib/data'
import { useOrderStore } from '@/store/useOrderStore'
import { cn } from '@/lib/utils'
import { StoneSetting } from '@/types'

const StoneSettingSelector: React.FC = () => {
  const { selections, updateStoneSetting } = useOrderStore()

  return (
    <div className="space-y-4 touch-manipulation">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-primary-dark mb-2">石留め</h3>
        <p className="text-sm sm:text-base text-text-secondary mb-4 leading-relaxed">
          宝石を選択した場合の石留め方法をお選びください。
        </p>
        <div className="bg-yellow-50 p-3 rounded-lg mb-4">
          <p className="text-sm text-yellow-700 leading-relaxed">
            💰 石留め料金：¥3,000+tax（宝石選択時に自動追加されます）
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {STONE_SETTINGS.map((setting) => (
          <button
            key={setting.id}
            onClick={() => updateStoneSetting(setting.id as StoneSetting)}
            disabled={selections.gemstone === 'none'}
            className={cn(
              'min-h-[44px] p-3 sm:p-4 rounded-lg border-2 text-left transition-all touch-manipulation',
              'hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-gold',
              'active:scale-95 active:transition-transform active:duration-75',
              selections.stoneSetting === setting.id && selections.gemstone !== 'none'
                ? 'border-accent-gold bg-accent-gold/5'
                : 'border-gray-200 hover:border-gray-300',
              selections.gemstone === 'none' && 'opacity-50 cursor-not-allowed hover:border-gray-200 hover:shadow-none'
            )}
          >
            <div className="flex items-start space-x-3">
              {/* 位置インジケーター */}
              <div className={cn(
                "w-3 h-3 rounded-full border-2 flex-shrink-0 mt-1",
                setting.position === 'top' ? 'bg-blue-100 border-blue-400' : 'bg-green-100 border-green-400'
              )} />
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-primary-dark text-sm sm:text-base mb-1">
                  {setting.name}
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {setting.description}
                </p>
                <span className={cn(
                  "inline-block mt-1 px-2 py-1 text-xs rounded-full",
                  setting.position === 'top' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-green-100 text-green-700'
                )}>
                  {setting.position === 'top' ? 'トップ' : 'サイド'}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selections.gemstone === 'none' && (
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            💡 石留めオプションは宝石を選択した場合にご利用いただけます。
          </p>
        </div>
      )}
    </div>
  )
}

export { StoneSettingSelector }