import { MainLayout } from '@/components/layout'
import { Section } from '@/components/ui'
import { DynamicProductPreview, MobileOptimizedSelectors, OrderSummary } from '@/components/features/semi-order'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'セミオーダー | ATSURAEL',
  description: '基本デザインから素材・宝石・刻印などをお選びいただけるカスタマイズサービス',
}

export default function SemiOrderPage() {
  return (
    <MainLayout>
      {/* 極小ヘッダー */}
      <Section padding="sm" background="light">
        <div className="text-center">
          <h1 className="text-lg md:text-xl font-serif font-bold text-primary-dark mb-1">
            セミオーダー
          </h1>
          <p className="text-xs md:text-sm text-text-secondary">
            お好みを選んであなただけの指輪を
          </p>
        </div>
      </Section>

      {/* コンパクトなメインコンテンツ */}
      <Section padding="md">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* レスポンシブレイアウト: 左画像、右選択肢 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
            
            {/* 商品プレビュー（左側） */}
            <div className="col-span-1 lg:col-span-4">
              <div className="sticky top-16">
                <DynamicProductPreview />
              </div>
            </div>

            {/* カスタマイズ選択肢（右側） */}
            <div className="col-span-1 lg:col-span-5">
              <MobileOptimizedSelectors />
            </div>

            {/* 価格・注文（デスクトップのみ、最右） */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-16">
                <OrderSummary compact={false} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* モバイル用固定価格表示 */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="p-2">
          <OrderSummary compact={true} />
        </div>
      </div>

      {/* 超コンパクトな製作の流れ */}
      <Section background="light" padding="sm" className="border-t lg:block hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center space-x-6 text-center">
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
              <span className="text-xs text-gray-600">選択</span>
            </div>
            <div className="w-4 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
              <span className="text-xs text-gray-600">決済</span>
            </div>
            <div className="w-4 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
              <span className="text-xs text-gray-600">確認</span>
            </div>
            <div className="w-4 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold text-xs">4</div>
              <span className="text-xs text-gray-600">完成(2-4週間)</span>
            </div>
          </div>
        </div>
      </Section>

      {/* モバイル用注意事項 */}
      <div className="lg:hidden bg-blue-50 mx-4 mb-20 rounded-lg p-4">
        <p className="text-xs text-blue-700 text-center">
          💡 製作期間2-4週間 | 決済後LINE連絡 | 価格は税込概算
        </p>
      </div>
    </MainLayout>
  )
}