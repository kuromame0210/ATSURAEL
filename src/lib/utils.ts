import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 価格をフォーマットする関数
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  }).format(price)
}

// 価格を3桁区切りで表示する関数
export function formatPriceNumber(price: number): string {
  return price.toLocaleString('ja-JP')
}

// URLエンコードされたメッセージを生成（LINE連携用）
export function encodeLineMessage(message: string): string {
  return encodeURIComponent(message)
}

// サイズを号数から内径（mm）に変換
export function sizeToInnerDiameter(size: number): number {
  // 号数から内径への変換式: 内径(mm) = (号数 - 1) × 0.8 + 13
  return (size - 1) * 0.8 + 13
}

// 内径（mm）から号数に変換
export function innerDiameterToSize(diameter: number): number {
  // 内径から号数への変換式: 号数 = (内径(mm) - 13) / 0.8 + 1
  return Math.round((diameter - 13) / 0.8 + 1)
}

// 日付をフォーマット
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

// 製作期間を計算（営業日ベース）
export function calculateProductionDays(startDate: Date, businessDays: number): Date {
  const result = new Date(startDate)
  let addedDays = 0
  
  while (addedDays < businessDays) {
    result.setDate(result.getDate() + 1)
    // 平日のみカウント（土曜日:6, 日曜日:0を除く）
    if (result.getDay() !== 0 && result.getDay() !== 6) {
      addedDays++
    }
  }
  
  return result
}

// バリデーション用関数
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^[\d\-\(\)\+\s]{10,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// オーダーIDの生成
export function generateOrderId(type: 'semi' | 'full' = 'semi'): string {
  const prefix = type === 'semi' ? 'SO' : 'FO'
  const date = new Date()
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '')
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  
  return `${prefix}-${dateStr}-${random}`
}