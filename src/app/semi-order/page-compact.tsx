import { MainLayout } from '@/components/layout'
import { Section } from '@/components/ui'
import { DynamicProductPreview, CompactSelectors, OrderSummary } from '@/components/features/semi-order'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'セミオーダー | ATSURAEL',
  description: '基本デザインから素材・宝石・刻印などをお選びいただけるカスタマイズサービス',
}

export default function SemiOrderPageOptimized() {
  return (
    <MainLayout>
      {/* コンパクトヘッダー */}
      <Section padding="sm" background="light">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary-dark mb-2">
            セミオーダー
          </h1>
          <p className="text-sm text-text-secondary">
            お好みの素材や宝石を選んであなただけの指輪をお作りします
          </p>
        </div>
      </Section>

      {/* メインコンテンツ - 1画面に最適化 */}
      <Section padding="md">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
            
            {/* 左側: 商品プレビュー + 価格表示 */}
            <div className="lg:col-span-4 space-y-4">
              {/* 商品プレビュー */}
              <div className="sticky top-20">
                <DynamicProductPreview />
              </div>
              
              {/* デスクトップ用価格表示 */}
              <div className="hidden lg:block">
                <OrderSummary compact={false} />
              </div>
            </div>

            {/* 右側: カスタマイズ選択肢 */}
            <div className="lg:col-span-8">
              <CompactSelectors />
            </div>
          </div>
        </div>
      </Section>

      {/* モバイル用固定価格表示 */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="p-3">
          <OrderSummary compact={true} />
        </div>
      </div>

      {/* 簡潔な製作の流れ - 必要最小限 */}
      <Section background="light" padding="sm" className="border-t">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2 text-sm">1</div>
              <h3 className="text-xs font-semibold text-primary-dark mb-1">選択</h3>
              <p className="text-xs text-text-secondary">素材・宝石選択</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2 text-sm">2</div>
              <h3 className="text-xs font-semibold text-primary-dark mb-1">決済</h3>
              <p className="text-xs text-text-secondary">Square決済</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2 text-sm">3</div>
              <h3 className="text-xs font-semibold text-primary-dark mb-1">確認</h3>
              <p className="text-xs text-text-secondary">LINE詳細確認</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2 text-sm">4</div>
              <h3 className="text-xs font-semibold text-primary-dark mb-1">完成</h3>
              <p className="text-xs text-text-secondary">2-4週間</p>
            </div>
          </div>
          
          {/* 重要注意事項 - コンパクト */}
          <div className="mt-4 bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center justify-between text-xs">
              <span className="text-blue-700">
                💡 製作期間: 2-4週間 | 価格: 税込概算 | LINE連絡: 製作開始・完成時
              </span>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}