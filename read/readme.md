# **ATSURAEL セミオーダー指輪ECサイト 完全仕様書**

**Version:** 1.0  
**作成日:** 2025年1月15日  
**最終更新:** 2025年1月15日  

---

## **目次**

1. [プロジェクト概要](#1-プロジェクト概要)
2. [技術仕様・制約条件](#2-技術仕様制約条件)
3. [ブランド戦略・デザイン方針](#3-ブランド戦略デザイン方針)
4. [サイト構造・画面構成](#4-サイト構造画面構成)
5. [セミオーダー機能詳細](#5-セミオーダー機能詳細)
6. [フルオーダー相談機能](#6-フルオーダー相談機能)
7. [LINE連携システム](#7-line連携システム)
8. [価格設定・決済システム](#8-価格設定決済システム)
9. [実装優先順位・開発計画](#9-実装優先順位開発計画)
10. [運用・保守](#10-運用保守)

---

## **1. プロジェクト概要**

### **1.1 基本情報**

| 項目 | 内容 |
|------|------|
| **プロジェクト名** | ATSURAEL セミオーダー指輪ECサイト |
| **ブランド名** | ATSURAEL |
| **事業者** | 株式会社町田製作所 |
| **代表者** | 町田明生 |
| **所在地** | 〒125-0053 東京都葛飾区鎌倉4-29-22 |
| **連絡先** | 080-1084-7198 / machida_factory.ina@icloud.com |
| **制作期間** | 2ヶ月 |
| **予算** | 10万円（税込） |
| **支払い条件** | サイト完成・納品後、内容確認・ご納得後にお支払い |

### **1.2 プロジェクト目標**

**主目標:**
- セミオーダー指輪のオンライン販売システム構築
- 高級感とクラシック感を表現するブランドサイト制作
- モバイルファーストでの顧客体験最適化

**副目標:**
- フルオーダー顧客の獲得・育成システム
- LINE公式アカウントを活用した顧客管理
- 段階的な機能拡張が可能な基盤構築

**ターゲット:**
- **セミオーダー:** 20代半ば〜40代男性（将来的にレディース展開）
- **フルオーダー:** 30代〜60代男女（結婚祝い・出産祝い等も含む）

---

## **2. 技術仕様・制約条件**

### **2.1 技術構成**

```javascript
const TECH_STACK = {
  frontend: "Next.js (React)",
  styling: "CSS Modules / Tailwind CSS",
  deployment: "Vercel / Netlify",
  payment: "Square決済リンク連携",
  communication: "LINE公式アカウント連携",
  email: "Next.js API Routes + Nodemailer",
  analytics: "Google Analytics 4"
};
```

### **2.2 重要な制約条件**

**技術的制約:**
- Square決済リンクは静的商品のみ対応（動的カスタマイズ情報の直接連携不可）
- 顧客情報はサイト側で管理せず、Square決済時とLINE/メール経由で取得
- 在庫管理は固定値での運用
- LINE友だち登録状況をWebサイトから直接判定することは不可能

**予算制約:**
- 高度な3D表示、リアルタイムAR、複雑なアニメーションは対象外
- 全カスタマイズ組み合わせの画像準備は困難
- 段階的な開発・拡張を前提とした設計

**素材制約:**
- 商品画像：制作開始時点で未確定（撮影次第共有）
- ブランドロゴ：7月中旬予定
- 価格設定：一部未確定要素あり（10K・18Kゴールド価格、宝石価格等）

---

## **3. ブランド戦略・デザイン方針**

### **3.1 ブランドアイデンティティ**

```css
/* カラーパレット */
:root {
  --primary-dark: #1a1a1a;      /* メインダーク */
  --accent-gold: #b8860b;       /* アクセントゴールド */
  --accent-silver: #c0c0c0;     /* アクセントシルバー */
  --background-light: #f8f8f8;  /* 背景ライト */
  --text-primary: #333333;      /* メインテキスト */
  --text-secondary: #666666;    /* サブテキスト */
}
```

### **3.2 デザイン原則**

- **モバイルファースト:** スマートフォン表示を最優先
- **ミニマリズム:** 十分な余白で高級感を演出
- **一貫性:** 全ページで統一されたUI要素
- **アクセシビリティ:** タッチ操作対応（最小44px×44px）

### **3.3 タイポグラフィ・文言規定**

**フォント設定:**
- **見出し:** セリフ体（Noto Serif JP）で高級感を演出
- **本文:** サンセリフ体（Noto Sans JP）で可読性を確保
- **価格表示:** 等幅フォント（Roboto Mono）で数値の視認性向上

**文言規定:**
```javascript
// 禁止表現
const PROHIBITED_WORDS = [
  "激安", "格安", "お得", "セール", 
  "限定", "今だけ", "急げ"
];

// 推奨表現
const RECOMMENDED_WORDS = [
  "特別な", "唯一の", "職人の技", 
  "想いを込めて", "丁寧に", "こだわり"
];
```

---

## **4. サイト構造・画面構成**

### **4.1 サイト構造**

```
ATSURAELサイト
├── 【TOP】トップページ
├── 【SEMI】セミオーダーページ（メイン収益機能）
├── 【FULL】フルオーダー案内ページ
├── 【ABOUT】ブランドについて
├── 【FLOW】制作の流れ
└── 【LEGAL】法的ページ群
    ├── 特定商取引法に基づく表記
    ├── 配送について
    ├── 返品・交換について
    └── プライバシーポリシー
```

### **4.2 画面遷移フロー**

#### **セミオーダー購入フロー:**
```
[トップページ]
    │
    └─→ [セミオーダーページ]
            │
            ├─→ [カスタマイズ選択]
            │       │
            │       └─→ [Square決済ページ]
            │               │
            │               └─→ [LINE連携画面]
            │
            └─→ [LINE個別やり取り]
```

#### **フルオーダー相談フロー:**
```
[フルオーダー案内ページ]
    │
    └─→ [相談方法選択モーダル]
            │
            ├─→ [LINE相談フロー]
            └─→ [メール相談フォーム]
                    │
                    └─→ [送信完了ページ]
```

### **4.3 セミオーダーページ詳細レイアウト**

```
┌─────────────────────────────────┐
│ ヘッダー + パンくずナビ              │
├─────────────────────────────────┤
│ カスタマイズメインエリア            │
│ ┌─────────────┬─────────────┐ │
│ │ 商品プレビュー  │ オプション選択  │ │
│ │ - メイン画像    │ ■価格変動要素  │ │
│ │ - 画像ギャラリー│ ・素材選択      │ │
│ │                 │ ・サイズ選択    │ │
│ │                 │ ・宝石選択      │ │
│ │                 │ ・刻印有無      │ │
│ │                 │ ・石留め選択    │ │
│ │                 │ ・ミル打ち      │ │
│ │                 │                 │ │
│ │                 │ ■表示のみ要素  │ │
│ │                 │ ・形状選択      │ │
│ │                 │ ・色選択        │ │
│ │                 │ ・刻印内容入力  │ │
│ │                 │ ・フォント選択  │ │
│ └─────────────┴─────────────┘ │
├─────────────────────────────────┤
│ 価格表示・注文エリア                │
│ ┌─────────────────────────────┐ │
│ │ リアルタイム価格: ¥XX,XXX       │ │
│ │ （税込・概算価格）              │ │
│ │ [この内容で注文する]            │ │
│ │ ※決済後、LINEで詳細確認        │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│ 製作期間・注意事項                  │
│ ・製作期間：2-4週間                │
│ ・概算価格について                  │
│ ・返品・交換ポリシー                │
└─────────────────────────────────┘
```

---

## **5. セミオーダー機能詳細**

### **5.1 カスタマイズ可能項目**

#### **価格に影響する要素（Square決済リンク対応）:**

```javascript
const PRICING_ELEMENTS = {
  // 基本価格（素材別）
  materials: {
    sv925: { name: "シルバー925", basePrice: 12000 },
    k10yg: { name: "K10イエローゴールド", basePrice: "未定" },
    k10pg: { name: "K10ピンクゴールド", basePrice: "未定" },
    k18yg: { name: "K18イエローゴールド", basePrice: "要問合せ" },
    k18pg: { name: "K18ピンクゴールド", basePrice: "要問合せ" }
  },
  
  // サイズ展開
  sizes: "5号〜23号（サイズ別価格設定の可能性あり）",
  
  // オプション料金
  options: {
    engraving: 6000,      // 刻印
    stoneSetting: 3000,   // 石留め
    milGrain: 4000,       // ミル打ち
    gemstone: "未定"      // 宝石（統一価格 vs 個別価格検討中）
  }
};
```

#### **価格に影響しない要素（表示・選択のみ）:**

- **型の形状:** 楕円、四角、盾、ハート
- **ゴールドの色:** 10K・18Kのイエロー/ピンクは同価格
- **宝石の種類:** 誕生石12種類（ガーネット〜タンザナイト）
- **刻印内容:** アルファベットA〜Z、数字4桁（西暦）
- **刻印フォント:** 2種類
- **石留めデザイン:** 指輪トップ部分3種類、サイド部分3種類

### **5.2 価格計算ロジック**

```javascript
// リアルタイム価格計算
const calculatePrice = (selections) => {
  // 基本価格取得
  let basePrice = PRICING_STRUCTURE.basePrices[selections.material];
  
  // サイズ補正
  const sizeCategory = getSizeCategory(selections.size);
  const sizeMultiplier = PRICING_STRUCTURE.sizeMultiplier[sizeCategory];
  
  // オプション料金計算
  let optionPrice = 0;
  if (selections.engraving) optionPrice += 6000;
  if (selections.stoneSetting) optionPrice += 3000;
  if (selections.milGrain) optionPrice += 4000;
  if (selections.gemstone !== 'none') optionPrice += 8000; // 仮設定
  
  // 最終価格計算
  const finalPrice = Math.floor((basePrice * sizeMultiplier) + optionPrice);
  
  return {
    basePrice,
    optionPrice, 
    finalPrice,
    paymentLink: determinePaymentLink(finalPrice)
  };
};
```

### **5.3 組み合わせ数の現実的管理**

**理論上の組み合わせ数:**
$$5素材 \times 19サイズ \times 12宝石 \times 2刻印 \times 6石留め \times 2ミル打ち = 27,360通り$$

**現実的な対応策:**
- 価格帯別Square決済リンク（3-5個程度）
- 詳細なカスタマイズ情報はLINE連携で補完
- 段階的な選択UIで複雑さを軽減

---

## **6. フルオーダー相談機能**

### **6.1 相談方法選択システム**

#### **選択肢の設計:**

```javascript
const CONSULTATION_OPTIONS = {
  line: {
    title: "LINEで相談（推奨）",
    description: "既にATSURAEL公式LINEを友だち追加済みの方",
    benefits: ["すぐに相談開始", "リアルタイムでやり取り", "画像共有も簡単"],
    requirement: "LINE友だち登録済み"
  },
  
  email: {
    title: "メールで相談",
    description: "LINEを使わない方・メールアドレス必須",
    benefits: ["じっくり相談内容を記入", "確実に情報をお届け", "記録として残る"],
    requirement: "メールアドレス必須"
  }
};
```

### **6.2 相談内容テンプレート**

```javascript
const CONSULTATION_TEMPLATE = `
【ATSURAELフルオーダー相談】
相談日時: ${new Date().toLocaleString()}

■基本情報
お名前（ニックネーム可）：
ご連絡先（メールまたは電話）：

■ご希望内容
指輪の種類：（例：婚約指輪、結婚指輪、ファッションリング）
デザインイメージ：（例：シンプル、華やか、アンティーク調）
ご希望の素材：（例：プラチナ、18Kゴールド、その他）
ご希望の宝石：（例：ダイヤモンド、誕生石、なし）

■ご予算・スケジュール
ご予算（概算）：円程度
完成希望時期：（例：3ヶ月以内、特に急がない）

■詳細なご要望
具体的なイメージやご要望：

■その他
ご質問やご不明な点：

※相談は無料です。押し売りは一切いたしません。
`;
```

### **6.3 メール相談フォーム仕様**

```html
<form id="consultationEmailForm">
  <div class="form-group required">
    <label for="customerEmail">メールアドレス <span class="required">*</span></label>
    <input type="email" id="customerEmail" name="email" required>
  </div>
  
  <div class="form-group required">
    <label for="customerName">お名前 <span class="required">*</span></label>
    <input type="text" id="customerName" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="customerPhone">電話番号（任意）</label>
    <input type="tel" id="customerPhone" name="phone">
  </div>
  
  <div class="form-group required">
    <label for="consultationContent">相談内容 <span class="required">*</span></label>
    <textarea id="consultationContent" name="content" rows="10" required></textarea>
  </div>
  
  <div class="form-group">
    <label class="checkbox-label">
      <input type="checkbox" id="agreePolicy" required>
      プライバシーポリシーに同意します
    </label>
  </div>
  
  <button type="submit">メールで送信する</button>
</form>
```

---

## **7. LINE連携システム**

### **7.1 セミオーダー決済後のLINE連携**

#### **注文完了メッセージ生成:**

```javascript
const generateSemiOrderMessage = (selections, price, orderId) => {
  const orderSummary = `
【ATSURAELセミオーダー注文完了】
注文ID: ${orderId}
注文日時: ${new Date().toLocaleString()}
決済完了: ¥${price.finalPrice.toLocaleString()}（Square決済）

■ご注文内容
素材: ${getMaterialDisplayName(selections.material)}
サイズ: ${selections.size}号
形状: ${getShapeDisplayName(selections.shape)}
宝石: ${getGemstoneDisplayName(selections.gemstone)}
刻印: ${selections.engraving || 'なし'}
石留め: ${getStoneSettingDisplayName(selections.stoneSetting)}
ミル打ち: ${selections.milGrain ? 'あり' : 'なし'}

■製作について
製作期間: 2-4週間予定
進捗連絡: 製作開始時・完成時にご連絡

上記内容で製作を開始してもよろしいでしょうか？
ご質問やご変更があればお聞かせください。
  `;
  
  return encodeURIComponent(orderSummary);
};
```

### **7.2 LINE公式アカウント設定**

#### **自動応答メッセージ:**

```javascript
const LINE_OFFICIAL_SETTINGS = {
  // あいさつメッセージ（友だち追加時）
  greeting: `
🎉 ATSURAELの公式LINEへようこそ！

【フルオーダーご相談の方】
ご準備いただいた相談内容をそのまま送信してください。
2-3営業日以内に専門スタッフがご返信いたします。

【セミオーダーご注文の方】
注文完了のご連絡をお待ちしております。

営業時間：月〜金 10:00-18:00
※営業時間外のメッセージは翌営業日にご返信いたします。
  `,
  
  // 営業時間外の自動応答
  outsideHours: `
現在は営業時間外です。
いただいたメッセージは翌営業日に確認し、ご返信いたします。
営業時間：月〜金 10:00-18:00
  `
};
```

### **7.3 実際のやり取り例**

#### **セミオーダー決済後の流れ:**

```
🤖 自動送信（サイトから）
【ATSURAELセミオーダー注文完了】
注文ID: SO-20250115-001
（詳細な注文内容）

👨‍💼 スタッフ（24時間以内）
ご注文ありがとうございます！
内容を確認いたします。刻印の位置はどちらをご希望ですか？

👤 お客様
内側でお願いします。完成はいつ頃になりますか？

👨‍💼 スタッフ
承知いたしました。内側に「Forever」を刻印いたします。
完成予定は約3週間後の2月5日頃を予定しております。
製作開始時と完成時にこちらでご連絡いたします。
```

#### **フルオーダー相談の流れ:**

```
👤 お客様（相談内容送信）
婚約指輪のフルオーダーを検討しています。
予算は30万円程度で、一粒ダイヤ、華奢なデザインを希望します。

👨‍💼 スタッフ（2-3営業日以内）
ご相談ありがとうございます！
詳しくお聞かせください：
1. 彼女様の指のサイズはご存知でしょうか？
2. ダイヤモンドのサイズはどの程度をお考えですか？

👤 お客様
1. サイズは9号です
2. 0.3〜0.5カラットを考えています

👨‍💼 スタッフ
承知いたしました！
デザインスケッチをお作りしますので、
明日の午後にはお見せできると思います。
```

---

## **8. 価格設定・決済システム**

### **8.1 現在の価格設定状況**

#### **確定済み価格:**
- **シルバー925:** ¥12,000 + tax
- **刻印:** ¥6,000 + tax
- **石留め:** ¥3,000 + tax（宝石価格と統合の可能性あり）
- **ミル打ち:** ¥4,000 + tax

#### **未確定価格:**
- **10Kゴールド:** サイズ別価格未定
- **18Kゴールド:** 要問合せ
- **宝石:** 統一価格 vs 個別価格検討中

### **8.2 Square決済リンク戦略**

#### **価格帯別リンク設計:**

```javascript
const PAYMENT_LINKS = {
  basic: {
    range: "〜25,000円",
    link: "https://square.link/u/BASIC",
    description: "シルバーベース商品"
  },
  standard: {
    range: "25,001〜45,000円",
    link: "https://square.link/u/STANDARD", 
    description: "10Kゴールドベース商品"
  },
  premium: {
    range: "45,001〜70,000円",
    link: "https://square.link/u/PREMIUM",
    description: "18Kゴールドベース商品"
  },
  consultation: {
    range: "70,001円〜",
    link: "LINE誘導",
    description: "高額カスタマイズ（要相談）"
  }
};
```

### **8.3 価格表示仕様**

```html
<!-- 価格表示例 -->
<div class="price-display">
  <span class="price-amount">¥32,000</span>
  <span class="price-note">（税込・概算価格）</span>
  <p class="price-disclaimer">
    ※表示価格は概算です。最終価格はご注文確認時に決定いたします。
  </p>
</div>
```

---

## **9. 実装優先順位・開発計画**

### **9.1 フェーズ1（予算10万円・2ヶ月）**

#### **Week 1-2: 環境構築・基本設計**
- Next.js環境セットアップ
- 基本レイアウト・ページ構成
- デザインシステム構築

#### **Week 3-5: コア機能開発**
- セミオーダーページ実装
- カスタマイズUI構築
- 価格計算

