// 素材の種類
export type Material = 'sv925' | 'k10yg' | 'k10pg' | 'k18yg' | 'k18pg'

// 形状の種類
export type Shape = 'oval' | 'square' | 'shield' | 'heart'

// 宝石の種類（誕生石）
export type Gemstone = 
  | 'none'
  | 'garnet'      // 1月 ガーネット
  | 'amethyst'    // 2月 アメジスト
  | 'aquamarine'  // 3月 アクアマリン
  | 'diamond'     // 4月 ダイヤモンド
  | 'emerald'     // 5月 エメラルド
  | 'moonstone'   // 6月 ブルームーンストーン
  | 'ruby'        // 7月 ルビー
  | 'peridot'     // 8月 ペリドット
  | 'sapphire'    // 9月 サファイア
  | 'tourmaline'  // 10月 ピンクトルマリン
  | 'citrine'     // 11月 シトリン
  | 'tanzanite'   // 12月 タンザナイト

// 刻印フォントの種類
export type EngravingFont = 'classic' | 'modern'

// 石留めの種類
export type StoneSetting = 'top1' | 'top2' | 'top3' | 'side1' | 'side2' | 'side3'

// セミオーダーの選択内容
export interface SemiOrderSelections {
  material: Material
  size: number // 5-23号
  shape: Shape
  gemstone: Gemstone
  engraving: boolean
  engravingContent?: string
  engravingFont?: EngravingFont
  stoneSetting?: StoneSetting
  milGrain: boolean
}

// 価格情報
export interface PriceInfo {
  basePrice: number | null
  optionPrice: number | null
  finalPrice: number | null
  paymentLink?: string
}

// 素材の表示情報
export interface MaterialInfo {
  id: Material
  name: string
  basePrice: number | 'TBD' | 'CONTACT'
  description: string
  available: boolean
}

// 宝石の表示情報
export interface GemstoneInfo {
  id: Gemstone
  name: string
  month?: number
  color: string
  description: string
}

// 形状の表示情報
export interface ShapeInfo {
  id: Shape
  name: string
  description: string
}

// フルオーダー相談内容
export interface FullOrderConsultation {
  customerName: string
  customerEmail: string
  customerPhone?: string
  ringType: string
  designImage: string
  preferredMaterial: string
  preferredGemstone: string
  budget: string
  completionDate: string
  detailedRequirements: string
  questions?: string
}

// LINE連携用メッセージ
export interface LineMessage {
  orderId: string
  selections: SemiOrderSelections
  price: PriceInfo
  orderDate: Date
}

// お客様情報
export interface CustomerInfo {
  name: string
  email: string
  phone?: string
  lineId?: string
}

// 注文ステータス
export type OrderStatus = 
  | 'pending'      // 注文確認待ち
  | 'confirmed'    // 注文確認済み
  | 'production'   // 製作中
  | 'completed'    // 製作完了
  | 'shipped'      // 発送済み
  | 'delivered'    // 配送完了
  | 'cancelled'    // キャンセル

// 注文情報
export interface Order {
  id: string
  type: 'semi' | 'full'
  status: OrderStatus
  customer: CustomerInfo
  selections?: SemiOrderSelections
  consultation?: FullOrderConsultation
  price?: PriceInfo
  orderDate: Date
  estimatedCompletion?: Date
  notes?: string
}

// 決済リンクの設定
export interface PaymentLinkConfig {
  range: string
  link: string
  description: string
  minPrice: number
  maxPrice: number
}