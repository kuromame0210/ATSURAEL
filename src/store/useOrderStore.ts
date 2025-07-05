import { create } from 'zustand'
import { SemiOrderSelections, PriceInfo, Material, Gemstone, Shape, StoneSetting, EngravingFont } from '@/types'

// ステップの進捗状態管理
export interface StepProgress {
  currentStep: string
  completedSteps: string[]
  stepValidation: Record<string, boolean>
}

interface OrderStore {
  // セミオーダーの選択状態
  selections: SemiOrderSelections
  
  // 価格情報
  priceInfo: PriceInfo
  
  // ステップの進捗状態
  stepProgress: StepProgress
  
  // アクション
  updateMaterial: (material: Material) => void
  updateSize: (size: number) => void
  updateShape: (shape: Shape) => void
  updateGemstone: (gemstone: Gemstone) => void
  updateEngraving: (enabled: boolean, content?: string, font?: EngravingFont) => void
  updateStoneSetting: (setting: StoneSetting) => void
  updateMilGrain: (enabled: boolean) => void
  calculatePrice: () => void
  resetSelections: () => void
  
  // ステップ管理アクション
  setCurrentStep: (stepId: string) => void
  completeStep: (stepId: string) => void
  validateStep: (stepId: string) => boolean
  resetStepProgress: () => void
}

// 初期選択状態
const initialSelections: SemiOrderSelections = {
  material: 'sv925',
  size: 13, // デフォルトサイズ
  shape: 'oval',
  gemstone: 'none',
  engraving: false,
  engravingContent: '',
  engravingFont: 'classic',
  stoneSetting: 'top1',
  milGrain: false,
}

// 価格設定（仕様書より）
const PRICING = {
  basePrices: {
    sv925: 12000,
    k10yg: null, // 価格未定
    k10pg: null, // 価格未定
    k18yg: null, // 価格未定（要問合せ）
    k18pg: null, // 価格未定（要問合せ）
  },
  options: {
    engraving: 6000,
    stoneSetting: 3000,
    milGrain: 4000,
    gemstone: null, // 価格未定
  },
  sizeMultiplier: {
    small: 1.0,   // 5-10号
    medium: 1.1,  // 11-14号
    large: 1.2,   // 15-19号
    xlarge: 1.3,  // 20-23号
  }
}

// サイズカテゴリーを取得
function getSizeCategory(size: number): keyof typeof PRICING.sizeMultiplier {
  if (size <= 10) return 'small'
  if (size <= 14) return 'medium'
  if (size <= 19) return 'large'
  return 'xlarge'
}

// 決済リンクを決定
function determinePaymentLink(price: number): string {
  if (price <= 25000) return 'https://square.link/u/BASIC'
  if (price <= 45000) return 'https://square.link/u/STANDARD'
  if (price <= 70000) return 'https://square.link/u/PREMIUM'
  return 'LINE_CONSULTATION' // 高額商品は要相談
}

// 初期ステップ進捗状態
const initialStepProgress: StepProgress = {
  currentStep: 'basic',
  completedSteps: [],
  stepValidation: {
    basic: false,
    customize: false,
    finish: false,
  }
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  selections: initialSelections,
  priceInfo: {
    basePrice: PRICING.basePrices.sv925,
    optionPrice: 0,
    finalPrice: PRICING.basePrices.sv925,
    paymentLink: determinePaymentLink(PRICING.basePrices.sv925),
  },
  stepProgress: initialStepProgress,

  updateMaterial: (material) => {
    set((state) => ({
      selections: { ...state.selections, material }
    }))
    get().calculatePrice()
  },

  updateSize: (size) => {
    set((state) => ({
      selections: { ...state.selections, size }
    }))
    get().calculatePrice()
  },

  updateShape: (shape) => {
    set((state) => ({
      selections: { ...state.selections, shape }
    }))
    // 形状変更は価格に影響しないため、価格計算は不要
  },

  updateGemstone: (gemstone) => {
    set((state) => ({
      selections: { ...state.selections, gemstone }
    }))
    get().calculatePrice()
  },

  updateEngraving: (enabled, content, font) => {
    set((state) => ({
      selections: {
        ...state.selections,
        engraving: enabled,
        engravingContent: enabled ? (content || state.selections.engravingContent) : '',
        engravingFont: font || state.selections.engravingFont,
      }
    }))
    get().calculatePrice()
  },

  updateStoneSetting: (setting) => {
    set((state) => ({
      selections: { ...state.selections, stoneSetting: setting }
    }))
    // 石留めの種類変更は価格に影響しないため、価格計算は不要
  },

  updateMilGrain: (enabled) => {
    set((state) => ({
      selections: { ...state.selections, milGrain: enabled }
    }))
    get().calculatePrice()
  },

  calculatePrice: () => {
    const { selections } = get()
    
    // 基本価格取得
    const basePrice = PRICING.basePrices[selections.material]
    
    // 価格が未定の場合
    if (basePrice === null) {
      set(() => ({
        priceInfo: {
          basePrice: null,
          optionPrice: null,
          finalPrice: null,
          paymentLink: 'CONTACT',
        }
      }))
      return
    }
    
    // サイズ補正
    const sizeCategory = getSizeCategory(selections.size)
    const sizeMultiplier = PRICING.sizeMultiplier[sizeCategory]
    const adjustedBasePrice = Math.floor(basePrice * sizeMultiplier)
    
    // オプション料金計算
    let optionPrice = 0
    if (selections.engraving) optionPrice += PRICING.options.engraving
    if (selections.gemstone !== 'none') {
      // 宝石価格が未定の場合
      if (PRICING.options.gemstone === null) {
        set(() => ({
          priceInfo: {
            basePrice: null,
            optionPrice: null,
            finalPrice: null,
            paymentLink: 'CONTACT',
          }
        }))
        return
      }
      optionPrice += PRICING.options.gemstone
      optionPrice += PRICING.options.stoneSetting // 宝石選択時は石留め料金も含む
    }
    if (selections.milGrain) optionPrice += PRICING.options.milGrain
    
    // 最終価格計算
    const finalPrice = adjustedBasePrice + optionPrice
    
    // 決済リンク決定
    const paymentLink = determinePaymentLink(finalPrice)
    
    set({
      priceInfo: {
        basePrice: adjustedBasePrice,
        optionPrice,
        finalPrice,
        paymentLink,
      }
    })
  },

  resetSelections: () => {
    set({
      selections: initialSelections,
      priceInfo: {
        basePrice: PRICING.basePrices.sv925,
        optionPrice: 0,
        finalPrice: PRICING.basePrices.sv925,
        paymentLink: determinePaymentLink(PRICING.basePrices.sv925),
      }
    })
  },

  // ステップ管理アクション
  setCurrentStep: (stepId) => {
    set((state) => ({
      stepProgress: {
        ...state.stepProgress,
        currentStep: stepId
      }
    }))
  },

  completeStep: (stepId) => {
    set((state) => ({
      stepProgress: {
        ...state.stepProgress,
        completedSteps: state.stepProgress.completedSteps.includes(stepId) 
          ? state.stepProgress.completedSteps 
          : [...state.stepProgress.completedSteps, stepId],
        stepValidation: {
          ...state.stepProgress.stepValidation,
          [stepId]: true
        }
      }
    }))
  },

  validateStep: (stepId) => {
    const { selections } = get()
    
    switch (stepId) {
      case 'basic':
        // 基本設定：素材、形状、サイズが選択済み
        return !!(selections.material && selections.shape && selections.size)
      
      case 'customize':
        // カスタマイズ：任意項目なので常にtrue
        return true
      
      case 'finish':
        // 仕上げ：刻印有効時はコンテンツが必要
        return selections.engraving ? !!selections.engravingContent : true
      
      default:
        return false
    }
  },

  resetStepProgress: () => {
    set({
      stepProgress: initialStepProgress
    })
  },
}))