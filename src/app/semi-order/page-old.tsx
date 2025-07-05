import { MainLayout } from '@/components/layout'
import { Section } from '@/components/ui'
import {
  MaterialSelector,
  SizeSelector,
  ShapeSelector,
  GemstoneSelector,
  EngravingSelector,
  MillGrainSelector,
  OrderSummary,
  ProductPreview
} from '@/components/features/semi-order'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'セミオーダー | ATSURAEL',
  description: '基本デザインから素材・宝石・刻印などをお選びいただけるカスタマイズサービス',
}

export default function SemiOrderPage() {
  return (
    <MainLayout>
      {/* ページヘッダー */}
      <Section padding="md" background="light">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-primary-dark mb-2 md:mb-4">
            セミオーダー
          </h1>
          <p className="text-sm md:text-lg text-text-secondary max-w-2xl mx-auto hidden md:block">
            基本デザインから素材・宝石・刻印などをお選びいただけるカスタマイズサービス。
            お好みに合わせてあなただけの特別な指輪をお作りします。
          </p>
          <p className="text-xs text-text-secondary block md:hidden px-4">
            お好みの素材や宝石を選んであなただけの指輪をお作りします。
          </p>
        </div>
      </Section>

      {/* パンくずナビ - スマホでは非表示 */}
      <Section padding="sm" className="hidden md:block">
        <nav className="text-sm text-text-secondary">
          <span>ホーム</span>
          <span className="mx-2">›</span>
          <span className="text-primary-dark">セミオーダー</span>
        </nav>
      </Section>

      {/* カスタマイズメインエリア */}
      <Section padding="lg">
        <div className="relative">
          {/* メインコンテンツエリア */}
          <div className="grid lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 pb-20 lg:pb-0">
            {/* 商品プレビューエリア - スマホでは非表示 */}
            <div className="lg:col-span-1 order-1 lg:order-1 hidden lg:block">
              <div className="sticky top-20 md:top-24">
                <ProductPreview />
              </div>
            </div>

            {/* カスタマイズオプションエリア */}
            <div className="lg:col-span-2 order-2 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6">
                  <MaterialSelector />
                  <SizeSelector />
                  <ShapeSelector />
                </div>
                <div className="space-y-4 md:space-y-6">
                  <GemstoneSelector />
                  <EngravingSelector />
                  <MillGrainSelector />
                </div>
              </div>
            </div>
          </div>

          {/* 固定価格表示エリア (モバイルのみ) */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
            <div className="p-3">
              <OrderSummary compact={true} />
            </div>
          </div>

          {/* デスクトップ用固定価格表示 */}
          <div className="hidden lg:block fixed top-1/2 right-4 transform -translate-y-1/2 z-40">
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80">
              <OrderSummary compact={true} />
            </div>
          </div>
        </div>
      </Section>

      {/* 製作の流れ・注意事項 - スマホでは簡略表示 */}
      <Section background="light" padding="lg" className="hidden md:block">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-primary-dark mb-6 md:mb-8 text-center">
            ご注文から完成まで
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3 md:mb-4">
                1
              </div>
              <h3 className="font-semibold text-primary-dark mb-1 md:mb-2 text-sm md:text-base">カスタマイズ</h3>
              <p className="text-xs md:text-sm text-text-secondary">お好みの素材や宝石を選択</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3 md:mb-4">
                2
              </div>
              <h3 className="font-semibold text-primary-dark mb-1 md:mb-2 text-sm md:text-base">決済</h3>
              <p className="text-xs md:text-sm text-text-secondary">Square決済で安全にお支払い</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3 md:mb-4">
                3
              </div>
              <h3 className="font-semibold text-primary-dark mb-1 md:mb-2 text-sm md:text-base">LINE確認</h3>
              <p className="text-xs md:text-sm text-text-secondary">詳細をLINEで確認・調整</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3 md:mb-4">
                4
              </div>
              <h3 className="font-semibold text-primary-dark mb-1 md:mb-2 text-sm md:text-base">製作・完成</h3>
              <p className="text-xs md:text-sm text-text-secondary">2-4週間で丁寧に製作</p>
            </div>
          </div>

          {/* 重要事項 - スマホでは非表示 */}
          <div className="mt-8 md:mt-12 bg-white p-4 md:p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-primary-dark mb-3 md:mb-4 text-sm md:text-base">ご注文前にご確認ください</h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 text-xs md:text-sm text-text-secondary">
              <div>
                <h4 className="font-medium text-primary-dark mb-1 md:mb-2 text-xs md:text-sm">製作期間について</h4>
                <ul className="space-y-1">
                  <li>• 通常2〜4週間（ご注文内容により変動）</li>
                  <li>• 詳細な完成予定日は注文確認時にご案内</li>
                  <li>• 製作開始時と完成時にLINEでご連絡</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-primary-dark mb-1 md:mb-2 text-xs md:text-sm">価格について</h4>
                <ul className="space-y-1">
                  <li>• 表示価格は税込み概算価格です</li>
                  <li>• 最終価格は注文確認時に決定</li>
                  <li>• 追加オプションは別途料金が発生</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}