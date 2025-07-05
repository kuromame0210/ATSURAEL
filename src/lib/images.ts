// 画像URL設定ファイル
// 実際の画像を追加する際は、このファイルのURLを更新するだけで簡単に画像を表示できます

export const IMAGES = {
  // ヒーローセクション
  hero: {
    main: '', // メインビジュアル画像のURL
  },

  // 商品画像
  products: {
    semiOrderSample: '', // セミオーダーサンプル画像
    fullOrderSample: '', // フルオーダーサンプル画像
    engagementRing: '', // エンゲージリング
    marriageRing: '', // マリッジリング
  },

  // コレクション画像
  collections: {
    engagement: '', // エンゲージリングコレクション
    marriage: '', // マリッジリングコレクション
    daily: '', // デイリーウェア
    special: '', // スペシャルオケージョン
    gift: '', // ギフトコレクション
  },

  // 制作工程
  process: {
    design: '', // デザイン設計
    material: '', // 素材選定
    crafting: '', // 手作業仕上げ
  },

  // ライフスタイル
  lifestyle: {
    daily: '', // 普段使い
    special: '', // 特別な日
    couple: '', // カップル
  },

  // アトリエ・工房
  atelier: {
    workspace: '', // 工房の様子
    tools: '', // 職人の道具
    craftsman: '', // 職人の技術
    collection: '', // 完成したコレクション
  },

  // ロゴ・ブランド
  brand: {
    logo: '', // ブランドロゴ
    logoDark: '', // ダークバージョンロゴ
    logoWhite: '', // 白バージョンロゴ
  },
}

// 画像が設定されているかチェックする関数
export const hasImage = (imagePath: string): boolean => {
  const keys = imagePath.split('.')
  let current: Record<string, unknown> = IMAGES
  
  for (const key of keys) {
    if (current[key] === undefined) return false
    current = current[key] as Record<string, unknown>
  }
  
  return typeof current === 'string' && (current as string).length > 0
}

// 画像URLを取得する関数
export const getImageUrl = (imagePath: string): string | undefined => {
  const keys = imagePath.split('.')
  let current: Record<string, unknown> = IMAGES
  
  for (const key of keys) {
    if (current[key] === undefined) return undefined
    current = current[key] as Record<string, unknown>
  }
  
  return typeof current === 'string' && (current as string).length > 0 ? (current as string) : undefined
}

// 使用例:
// import { getImageUrl } from '@/lib/images'
// const heroImage = getImageUrl('hero.main')
// <SmartImage src={heroImage} alt="メインビジュアル" />

export type ImagePaths = 
  | 'hero.main'
  | 'products.semiOrderSample'
  | 'products.fullOrderSample'
  | 'collections.engagement'
  | 'collections.marriage'
  | 'process.design'
  | 'process.material'
  | 'process.crafting'
  | 'lifestyle.daily'
  | 'lifestyle.special'
  | 'atelier.workspace'
  | 'atelier.craftsman'
  | 'brand.logo'