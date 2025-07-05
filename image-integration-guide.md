# ATSURAEL 画像統合ガイド

## 📸 参考サイト分析結果

参考サイト（KY9JM）の画像使用パターンを分析し、ATSURAELサイトに適用しました：

### 発見した画像パターン
1. **商品写真**: 高品質な正方形・横長の商品単体写真
2. **ライフスタイル画像**: モデル着用写真・使用シーン
3. **コレクション画像**: 複数商品をまとめた紹介画像
4. **ディテール写真**: 素材感・質感が分かるクローズアップ
5. **ブランド画像**: 工房・制作風景・職人の技術

## 🎨 実装した画像システム

### 1. 改良されたImagePlaceholder
```tsx
<ImagePlaceholder
  variant="product"     // product, gallery, hero, lifestyle, detail, collection
  imageType="product"   // product, model, process, studio, detail, lifestyle
  aspectRatio="square"  // square, portrait, landscape, video
  text="商品名"
/>
```

### 2. JewelryShowcase（画像ギャラリー）
```tsx
<JewelryShowcase
  title="人気コレクション"
  layout="featured"     // grid, masonry, featured, collection
  columns={3}           // 2, 3, 4
  items={showcaseItems}
/>
```

### 3. SmartImage（実画像対応）
```tsx
<SmartImage
  src={imageUrl}        // 画像URL（空の場合はプレースホルダー表示）
  alt="商品名"
  variant="product"
  imageType="product"
/>
```

## 🔧 画像を簡単に追加する方法

### Step 1: 画像URLを設定
`src/lib/images.ts` ファイルで画像URLを設定：
```typescript
export const IMAGES = {
  hero: {
    main: 'https://example.com/hero-image.jpg', // ← ここにURL追加
  },
  products: {
    semiOrderSample: 'https://example.com/semi-order.jpg',
  },
  // ...
}
```

### Step 2: コンポーネントで使用
```tsx
import { getImageUrl } from '@/lib/images'
import { SmartImage } from '@/components/ui'

const heroImage = getImageUrl('hero.main')
<SmartImage 
  src={heroImage} 
  alt="メインビジュアル" 
  variant="hero"
/>
```

## 📱 レスポンシブ対応

### アスペクト比
- **Square** (`aspect-square`): 商品写真、インスタ風
- **Portrait** (`aspect-[3/4]`): モデル写真
- **Landscape** (`aspect-[4/3]`): 工房風景、コレクション
- **Video** (`aspect-video`): ヒーロー画像

### レイアウト
- **Featured**: 大きなメイン画像 + 小さなサブ画像
- **Grid**: 均等な3-4カラムグリッド  
- **Masonry**: Pinterest風の段組みレイアウト
- **Collection**: 密度の高い商品一覧

## 🎯 推奨画像構成

### トップページ
1. **ヒーロー画像**: 美しい指輪のメイン写真（16:9）
2. **サービス紹介**: セミオーダー・フルオーダーサンプル（4:3）
3. **人気コレクション**: エンゲージ・マリッジリング（正方形）
4. **制作工程**: デザイン・素材・仕上げ工程（正方形）
5. **ライフスタイル**: 着用シーン・ギフトシーン（縦長・正方形）
6. **アトリエ風景**: 工房・職人・道具（4:3）

### セミオーダーページ
1. **商品プレビュー**: カスタマイズ結果の表示（正方形）
2. **素材サンプル**: ゴールド・プラチナ等の素材（正方形）
3. **完成例**: 過去の制作例（正方形）

### 画像品質ガイドライン
- **解像度**: 最小800px×800px（正方形）
- **形式**: WebP推奨（フォールバック: JPG）
- **容量**: 500KB以下を目安
- **色調**: 白・緑のブランドカラーに調和する色合い
- **背景**: クリーンで商品が際立つ背景

## 🚀 実装済み機能

### ✅ 完了
- 6種類の画像プレースホルダーバリアント
- 4種類のレイアウトパターン
- レスポンシブ対応
- ホバーエフェクト・トランジション
- 画像URL管理システム

### 🔄 簡単な画像追加手順
1. 画像をアップロード（CDN推奨）
2. `src/lib/images.ts`でURL設定
3. 自動でプレースホルダーから実画像に切り替わり

このシステムにより、実際の画像が準備でき次第、簡単に本格的なジュエリーECサイトとして完成させることができます。