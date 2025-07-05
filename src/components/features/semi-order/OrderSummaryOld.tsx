'use client'

import React, { useState } from 'react'
import { useOrderStore } from '@/store/useOrderStore'
import { Button, PriceDisplay, Modal } from '@/components/ui'
import { generateOrderId, encodeLineMessage } from '@/lib/utils'
import { MATERIALS, GEMSTONES, SHAPES } from '@/lib/data'

const OrderSummary: React.FC = () => {
  const { selections, priceInfo } = useOrderStore()
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  // 選択内容の表示名を取得
  const getMaterialName = () => MATERIALS.find(m => m.id === selections.material)?.name || ''
  const getGemstونeName = () => GEMSTONES.find(g => g.id === selections.gemstone)?.name || ''
  const getShapeName = () => SHAPES.find(s => s.id === selections.shape)?.name || ''

  const handleOrder = () => {
    if (priceInfo.paymentLink === 'LINE_CONSULTATION') {
      // 高額商品の場合はLINE相談へ
      alert('この価格帯の商品はLINEでのご相談が必要です。フルオーダーページからお問い合わせください。')
      return
    }
    setIsConfirmModalOpen(true)
  }

  const handleConfirmOrder = () => {
    // 注文IDを生成
    const orderId = generateOrderId('semi')
    
    // LINE連携用メッセージを生成
    const orderMessage = `
【ATSURAELセミオーダー注文完了】
注文ID: ${orderId}
注文日時: ${new Date().toLocaleString()}
決済完了: ¥${priceInfo.finalPrice?.toLocaleString() || 'お問い合わせ'}（Square決済）

■ご注文内容
素材: ${getMaterialName()}
サイズ: ${selections.size}号
形状: ${getShapeName()}
宝石: ${getGemstونeName()}
刻印: ${selections.engraving ? `あり（${selections.engravingContent}）` : 'なし'}
ミル打ち: ${selections.milGrain ? 'あり' : 'なし'}

■製作について
製作期間: 2-4週間予定
進捗連絡: 製作開始時・完成時にご連絡

上記内容で製作を開始してもよろしいでしょうか？
ご質問やご変更があればお聞かせください。
    `.trim()

    const encodedMessage = encodeLineMessage(orderMessage)
    
    // Square決済ページを開く
    window.open(priceInfo.paymentLink, '_blank')
    
    // 決済後のLINE連携案内
    setTimeout(() => {
      const lineUrl = `https://line.me/R/msg/text/?${encodedMessage}`
      window.open(lineUrl, '_blank')
    }, 1000)
    
    setIsConfirmModalOpen(false)
  }

  const isOrderValid = () => {
    return selections.material && selections.size >= 5 && selections.size <= 23
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {/* 価格表示 */}
      <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-accent-gold">
        <h3 className="text-lg font-semibold text-primary-dark mb-4 text-center">
          ご注文価格
        </h3>
        
        <PriceDisplay 
          price={priceInfo.finalPrice || 0}
          size="lg"
          showTax={true}
          showEstimate={true}
        />

        {/* 価格内訳 */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">基本価格</span>
              <span className="font-mono">¥{priceInfo.basePrice?.toLocaleString() || 'お問い合わせ'}</span>
            </div>
            {priceInfo.optionPrice && priceInfo.optionPrice > 0 && (
              <div className="flex justify-between">
                <span className="text-text-secondary">オプション</span>
                <span className="font-mono">¥{priceInfo.optionPrice?.toLocaleString() || '0'}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold pt-2 border-t">
              <span>合計</span>
              <span className="font-mono">¥{priceInfo.finalPrice?.toLocaleString() || 'お問い合わせ'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 注文確認 */}
      <div className="bg-background-light p-4 md:p-6 rounded-lg">
        <h4 className="font-semibold text-primary-dark mb-3">ご注文内容</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">素材:</span>
            <span>{getMaterialName()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">サイズ:</span>
            <span>{selections.size}号</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">形状:</span>
            <span>{getShapeName()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">宝石:</span>
            <span>{getGemstونeName()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">刻印:</span>
            <span>{selections.engraving ? `あり（${selections.engravingContent}）` : 'なし'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">ミル打ち:</span>
            <span>{selections.milGrain ? 'あり' : 'なし'}</span>
          </div>
        </div>
      </div>

      {/* 注文ボタン */}
      <Button
        onClick={handleOrder}
        disabled={!isOrderValid()}
        size="lg"
        className="w-full min-h-[52px] bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white"
        variant="default"
      >
        この内容で注文する
      </Button>

      {!isOrderValid() && (
        <p className="text-sm text-red-500 text-center">
          素材とサイズを選択してください
        </p>
      )}

      {/* 注意事項 */}
      <div className="text-xs text-text-secondary space-y-1">
        <p>• 決済後、LINEで詳細確認のご連絡をいたします</p>
        <p>• 製作期間：2-4週間（ご注文内容により変動）</p>
        <p>• 表示価格は概算です。最終価格は注文確認時に決定</p>
      </div>

      {/* 確認モーダル */}
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        title="ご注文の確認"
        size="md"
      >
        <div className="p-6">
          <p className="text-text-secondary mb-6">
            以下の内容でご注文を進めます。決済完了後、LINEでご連絡いたします。
          </p>
          
          <div className="bg-background-light p-4 rounded-lg mb-6">
            <div className="text-center mb-4">
              <div className="text-2xl font-mono font-bold text-primary-dark">
                ¥{priceInfo.finalPrice?.toLocaleString() || 'お問い合わせ'}
              </div>
              <div className="text-sm text-text-secondary">（税込・概算価格）</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Button
              variant="outline"
              onClick={() => setIsConfirmModalOpen(false)}
              className="flex-1 min-h-[48px]"
            >
              キャンセル
            </Button>
            <Button
              variant="default"
              onClick={handleConfirmOrder}
              className="flex-1 min-h-[48px] bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white"
            >
              決済ページへ
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export { OrderSummary }