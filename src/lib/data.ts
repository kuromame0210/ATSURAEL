import { MaterialInfo, GemstoneInfo, ShapeInfo, PaymentLinkConfig } from '@/types'

// 素材データ
export const MATERIALS: MaterialInfo[] = [
  {
    id: 'sv925',
    name: 'シルバー925',
    basePrice: 12000,
    description: '上質なシルバー925を使用。永く愛用いただける品質です。',
    available: true,
  },
  {
    id: 'k10yg',
    name: '10Kイエローゴールド',
    basePrice: 'TBD',
    description: '上品な輝きを放つ10Kイエローゴールド。',
    available: true, // テスト用に選択可能に変更
  },
  {
    id: 'k10pg',
    name: '10Kピンクゴールド',
    basePrice: 'TBD',
    description: '温かみのある色合いの10Kピンクゴールド。',
    available: true, // テスト用に選択可能に変更
  },
  {
    id: 'k18yg',
    name: '18Kイエローゴールド',
    basePrice: 'CONTACT',
    description: '最高級の18Kイエローゴールド。要お問い合わせ。',
    available: true, // テスト用に選択可能に変更
  },
  {
    id: 'k18pg',
    name: '18Kピンクゴールド',
    basePrice: 'CONTACT',
    description: '最高級の18Kピンクゴールド。要お問い合わせ。',
    available: true, // テスト用に選択可能に変更
  },
]

// 宝石データ（誕生石）
export const GEMSTONES: GemstoneInfo[] = [
  { id: 'none', name: '宝石なし', color: 'transparent', description: 'シンプルな仕上がりをお求めの方に' },
  { id: 'garnet', name: 'ガーネット', month: 1, color: '#8B0000', description: '1月の誕生石。深い赤色が特徴的' },
  { id: 'amethyst', name: 'アメジスト', month: 2, color: '#9966CC', description: '2月の誕生石。神秘的な紫色' },
  { id: 'aquamarine', name: 'アクアマリン', month: 3, color: '#7FFFD4', description: '3月の誕生石。清らかな水色' },
  { id: 'diamond', name: 'ダイヤモンド', month: 4, color: '#F8F8FF', description: '4月の誕生石。永遠の輝き' },
  { id: 'emerald', name: 'エメラルド', month: 5, color: '#50C878', description: '5月の誕生石。鮮やかな緑色' },
  { id: 'moonstone', name: 'ブルームーンストーン', month: 6, color: '#87CEEB', description: '6月の誕生石。神秘的な青い輝き' },
  { id: 'ruby', name: 'ルビー', month: 7, color: '#E0115F', description: '7月の誕生石。情熱的な赤色' },
  { id: 'peridot', name: 'ペリドット', month: 8, color: '#9ACD32', description: '8月の誕生石。爽やかな黄緑色' },
  { id: 'sapphire', name: 'サファイア', month: 9, color: '#0F52BA', description: '9月の誕生石。高貴な青色' },
  { id: 'tourmaline', name: 'ピンクトルマリン', month: 10, color: '#FF69B4', description: '10月の誕生石。優雅なピンク色' },
  { id: 'citrine', name: 'シトリン', month: 11, color: '#FFD700', description: '11月の誕生石。温かみのある黄色' },
  { id: 'tanzanite', name: 'タンザナイト', month: 12, color: '#4169E1', description: '12月の誕生石。神秘的な青紫色' },
]

// 形状データ
export const SHAPES: ShapeInfo[] = [
  {
    id: 'oval',
    name: '楕円',
    description: 'クラシックで上品な楕円形。どなたにも似合う定番の形状です。',
  },
  {
    id: 'square',
    name: '四角',
    description: 'モダンでスタイリッシュな四角形。個性的な印象を与えます。',
  },
  {
    id: 'shield',
    name: '盾',
    description: '力強さと気品を兼ね備えた盾形。特別な存在感があります。',
  },
  {
    id: 'heart',
    name: 'ハート',
    description: '愛らしさと特別感を演出するハート形。贈り物にも最適です。',
  },
]

// 刻印フォント
export const ENGRAVING_FONTS = [
  { id: 'classic', name: 'クラシック体', description: '伝統的で読みやすいフォント' },
  { id: 'modern', name: 'モダン体', description: 'スタイリッシュで現代的なフォント' },
]

// 石留めの種類
export const STONE_SETTINGS = [
  { id: 'top1', name: 'トップ爪留め', position: 'top', description: '指輪の上部に宝石を配置' },
  { id: 'top2', name: 'トップベゼル留め', position: 'top', description: '指輪の上部に宝石を囲み留め' },
  { id: 'top3', name: 'トップフラッシュ留め', position: 'top', description: '指輪の上部に宝石を埋め込み' },
  { id: 'side1', name: 'サイド爪留め', position: 'side', description: '指輪の側面に宝石を配置' },
  { id: 'side2', name: 'サイドベゼル留め', position: 'side', description: '指輪の側面に宝石を囲み留め' },
  { id: 'side3', name: 'サイドライン留め', position: 'side', description: '指輪の側面に宝石を一列配置' },
]

// ミル打ちオプション
export const MIL_GRAIN_OPTIONS = [
  { id: 'none', name: 'なし', price: 0, description: 'シンプルな仕上がり' },
  { id: 'basic', name: 'ベーシック', price: 4000, description: '繊細なミル打ち装飾' },
]

// 価格計算用設定
export const PRICING_CONFIG = {
  basePrices: {
    sv925: 12000,
    k10yg: null, // 未定
    k10pg: null, // 未定
    k18yg: null, // 要問合せ
    k18pg: null, // 要問合せ
  },
  options: {
    engraving: 6000,
    stoneSetting: 3000,
    milGrain: 4000,
    gemstone: 8000, // 仮設定
  },
  sizeMultiplier: {
    small: 1.0,   // 5-10号
    medium: 1.1,  // 11-14号 
    large: 1.2,   // 15-19号
    xlarge: 1.3,  // 20-23号
  }
}

// 決済リンク設定
export const PAYMENT_LINKS: PaymentLinkConfig[] = [
  {
    range: '〜25,000円',
    link: 'https://square.link/u/BASIC',
    description: 'シルバーベース商品',
    minPrice: 0,
    maxPrice: 25000,
  },
  {
    range: '25,001〜45,000円',
    link: 'https://square.link/u/STANDARD',
    description: '10Kゴールドベース商品',
    minPrice: 25001,
    maxPrice: 45000,
  },
  {
    range: '45,001〜70,000円',
    link: 'https://square.link/u/PREMIUM',
    description: '18Kゴールドベース商品',
    minPrice: 45001,
    maxPrice: 70000,
  },
  {
    range: '70,001円〜',
    link: 'LINE_CONSULTATION',
    description: '高額カスタマイズ（要相談）',
    minPrice: 70001,
    maxPrice: Infinity,
  },
]

// サイズ一覧（5号〜23号）
export const RING_SIZES = Array.from({ length: 19 }, (_, i) => i + 5)

// 会社情報
export const COMPANY_INFO = {
  name: '株式会社町田製作所',
  brandName: 'ATSURAEL',
  representative: '町田明生',
  address: '〒125-0053 東京都葛飾区鎌倉4-29-22',
  phone: '080-1084-7198',
  email: 'machida_factory.ina@icloud.com',
  businessHours: '月曜日〜金曜日　10:00〜18:00',
  productionPeriod: {
    semi: '2週間〜4週間',
    full: '3週間〜8週間',
  },
}

// ナビゲーションメニュー
export const NAVIGATION_ITEMS = [
  { href: '/', label: 'ホーム' },
  { href: '/products', label: '商品紹介' },
  { href: '/semi-order', label: 'セミオーダー' },
  { href: '/full-order', label: 'フルオーダー' },
  { href: '/about', label: 'ブランドについて' },
]

// フッターリンク
export const FOOTER_LINKS = [
  { href: '/legal/tokusho', label: '特定商取引法に基づく表記' },
  { href: '/legal/shipping', label: '配送について' },
  { href: '/legal/returns', label: '返品・交換について' },
  { href: '/legal/privacy', label: 'プライバシーポリシー' },
]

// テスト用商品データ（ProductSlider用）
export const TEST_PRODUCTS = [
  {
    id: 'test-1',
    title: 'ゴールド・シルバーカスタムリング',
    description: '上質な素材を使用したカスタマイズ可能なリング。お客様のご要望に合わせて制作いたします。',
    subtitle: 'セミオーダーコレクション',
    price: '¥15,000〜',
    category: 'semi' as const,
    image: '/testImage/ゴールド・シルバーカスタムリング.jpg'
  },
  {
    id: 'test-2', 
    title: '高級感のあるカスタマイズ指輪',
    description: '職人の技術と現代デザインが融合した特別な一品。完全オーダーメイドでお作りします。',
    subtitle: 'フルオーダーコレクション',
    price: '要相談',
    category: 'full' as const,
    image: '/testImage/高級感のあるカスタマイズ指輪.jpeg'
  },
  {
    id: 'test-3',
    title: 'ミニマリストリングコレクション', 
    description: 'シンプルで洗練されたデザイン。日常使いにも特別な日にも映える上品な仕上がり。',
    subtitle: 'ライフスタイルコレクション',
    price: '¥12,000〜',
    category: 'semi' as const,
    image: '/testImage/ミニマリストリングコレクション.webp'
  },
  {
    id: 'test-4',
    title: '18Kゴールドシグネットリング',
    description: '伝統的な技法で制作される18Kゴールドの特別なシグネットリング。世代を超えて愛用できる品質。',
    subtitle: 'プレミアムコレクション', 
    price: '要相談',
    category: 'full' as const,
    image: '/testImage/18Kゴールドシグネットリング制作プロセス .jpg'
  }
]

// 商品一覧ページ用のダミー商品データ
export const DUMMY_PRODUCTS = [
  {
    id: 'product-1',
    name: 'クラシックエンゲージリング',
    price: '¥98,000〜',
    image: '/testImage/ゴールド・シルバーカスタムリング.jpg',
    category: 'engagement'
  },
  {
    id: 'product-2',
    name: 'モダンマリッジリング',
    price: '¥65,000〜',
    image: '/testImage/高級感のあるカスタマイズ指輪.jpeg',
    category: 'marriage'
  },
  {
    id: 'product-3',
    name: 'シンプルデイリーリング',
    price: '¥12,000〜',
    image: '/testImage/ミニマリストリングコレクション.webp',
    category: 'daily'
  },
  {
    id: 'product-4',
    name: 'プレミアムシグネット',
    price: '要相談',
    image: '/testImage/18Kゴールドシグネットリング制作プロセス .jpg',
    category: 'special'
  },
  {
    id: 'product-5',
    name: 'エタニティリング',
    price: '¥150,000〜',
    image: '/testImage/ゴールド・シルバーカスタムリング.jpg',
    category: 'engagement'
  },
  {
    id: 'product-6',
    name: 'ペアリングセット',
    price: '¥45,000〜',
    image: '/testImage/高級感のあるカスタマイズ指輪.jpeg',
    category: 'marriage'
  },
  {
    id: 'product-7',
    name: 'バンドリング',
    price: '¥18,000〜',
    image: '/testImage/ミニマリストリングコレクション.webp',
    category: 'daily'
  },
  {
    id: 'product-8',
    name: 'アニバーサリーリング',
    price: '¥80,000〜',
    image: '/testImage/18Kゴールドシグネットリング制作プロセス .jpg',
    category: 'special'
  },
  {
    id: 'product-9',
    name: 'ギフトリング',
    price: '¥25,000〜',
    image: '/testImage/ゴールド・シルバーカスタムリング.jpg',
    category: 'gift'
  },
  {
    id: 'product-10',
    name: 'ヴィンテージスタイル',
    price: '¥120,000〜',
    image: '/testImage/高級感のあるカスタマイズ指輪.jpeg',
    category: 'special'
  },
  {
    id: 'product-11',
    name: 'スタッキングリング',
    price: '¥8,000〜',
    image: '/testImage/ミニマリストリングコレクション.webp',
    category: 'daily'
  },
  {
    id: 'product-12',
    name: 'カスタムギフト',
    price: '¥35,000〜',
    image: '/testImage/18Kゴールドシグネットリング制作プロセス .jpg',
    category: 'gift'
  }
]