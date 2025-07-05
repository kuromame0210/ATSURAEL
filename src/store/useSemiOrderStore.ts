import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PRICING_CONFIG } from '@/lib/data'

export interface SemiOrderState {
  // 選択状態
  material: string
  size: number
  shape: string
  gemstone: string
  engraving: {
    enabled: boolean
    text: string
    font: string
  }
  stoneSetting: string
  milGrain: string
  
  // 計算結果
  calculatedPrice: {
    base: number
    options: number
    total: number
    isValid: boolean
  }
  
  // アクション
  setMaterial: (material: string) => void
  setSize: (size: number) => void
  setShape: (shape: string) => void
  setGemstone: (gemstone: string) => void
  setEngraving: (enabled: boolean, text?: string, font?: string) => void
  setStoneSetting: (setting: string) => void
  setMilGrain: (option: string) => void
  calculatePrice: () => void
  reset: () => void
  isComplete: () => boolean
}

const initialState = {
  material: 'sv925',
  size: 13,
  shape: 'oval',
  gemstone: 'none',
  engraving: {
    enabled: false,
    text: '',
    font: 'classic'
  },
  stoneSetting: 'none',
  milGrain: 'none',
  calculatedPrice: {
    base: 12000,
    options: 0,
    total: 12000,
    isValid: true
  }
}

const getSizeCategory = (size: number): keyof typeof PRICING_CONFIG.sizeMultiplier => {
  if (size >= 5 && size <= 10) return 'small'
  if (size >= 11 && size <= 14) return 'medium' 
  if (size >= 15 && size <= 19) return 'large'
  return 'xlarge'
}

export const useSemiOrderStore = create<SemiOrderState>()(
  persist(
    (set, get) => ({
      ...initialState,
      
      setMaterial: (material) => {
        set({ material })
        get().calculatePrice()
      },
      
      setSize: (size) => {
        set({ size })
        get().calculatePrice()
      },
      
      setShape: (shape) => {
        set({ shape })
        get().calculatePrice()
      },
      
      setGemstone: (gemstone) => {
        set({ gemstone })
        get().calculatePrice()
      },
      
      setEngraving: (enabled, text = '', font = 'classic') => {
        set({ 
          engraving: { enabled, text, font }
        })
        get().calculatePrice()
      },
      
      setStoneSetting: (setting) => {
        set({ stoneSetting: setting })
        get().calculatePrice()
      },
      
      setMilGrain: (option) => {
        set({ milGrain: option })
        get().calculatePrice()
      },
      
      calculatePrice: () => {
        const state = get()
        const { material, size, gemstone, engraving, stoneSetting, milGrain } = state
        
        // ベース価格取得
        const basePrice = PRICING_CONFIG.basePrices[material as keyof typeof PRICING_CONFIG.basePrices]
        
        if (!basePrice) {
          set({
            calculatedPrice: {
              base: 0,
              options: 0,
              total: 0,
              isValid: false
            }
          })
          return
        }
        
        // サイズ補正
        const sizeCategory = getSizeCategory(size)
        const sizeMultiplier = PRICING_CONFIG.sizeMultiplier[sizeCategory]
        const adjustedBasePrice = Math.floor(basePrice * sizeMultiplier)
        
        // オプション料金計算
        let optionPrice = 0
        
        if (engraving.enabled) {
          optionPrice += PRICING_CONFIG.options.engraving
        }
        
        if (stoneSetting !== 'none') {
          optionPrice += PRICING_CONFIG.options.stoneSetting
        }
        
        if (milGrain !== 'none') {
          optionPrice += PRICING_CONFIG.options.milGrain
        }
        
        if (gemstone !== 'none') {
          optionPrice += PRICING_CONFIG.options.gemstone
        }
        
        const total = adjustedBasePrice + optionPrice
        
        set({
          calculatedPrice: {
            base: adjustedBasePrice,
            options: optionPrice,
            total,
            isValid: true
          }
        })
      },
      
      reset: () => {
        set(initialState)
      },
      
      isComplete: () => {
        const state = get()
        return !!(
          state.material &&
          state.size &&
          state.shape &&
          state.calculatedPrice.isValid
        )
      }
    }),
    {
      name: 'semi-order-storage',
      partialize: (state) => ({
        material: state.material,
        size: state.size,
        shape: state.shape,
        gemstone: state.gemstone,
        engraving: state.engraving,
        stoneSetting: state.stoneSetting,
        milGrain: state.milGrain,
      })
    }
  )
)