'use client'

import React, { useState } from 'react'
import { useOrderStore } from '@/store/useOrderStore'
import { Button, PriceDisplay, Modal, PendingNotice } from '@/components/ui'
import { generateOrderId, encodeLineMessage } from '@/lib/utils'
import { MATERIALS, GEMSTONES, SHAPES } from '@/lib/data'

interface OrderSummaryProps {
  compact?: boolean
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ compact = false }) => {
  const { selections, priceInfo } = useOrderStore()
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  // 選択内容の表示名を取得
  const getMaterialName = () => MATERIALS.find(m => m.id === selections.material)?.name || ''
  const getGemstoneName = () => GEMSTONES.find(g => g.id === selections.gemstone)?.name || ''
  const getShapeName = () => SHAPES.find(s => s.id === selections.shape)?.name || ''

  const handleOrder = () => {
    if (priceInfo.paymentLink === 'LINE_CONSULTATION') {
      // 高額商品の場合はLINE相談へ
      alert('この価格帯の商品はLINEでのご相談が必要です。フルオーダーページからお問い合わせください。')
      return
    }
    if (priceInfo.paymentLink === 'CONTACT') {
      // 価格未定の場合はLINE相談へ
      alert('選択された素材または宝石の価格が未定のため、LINEでのお問い合わせが必要です。')
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
宝石: ${getGemstoneName()}
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

  if (compact) {
    return (
      <div className="space-y-3">
        {/* コンパクト価格表示 */}
        <div className="flex items-center justify-between">
          <div>
            {priceInfo.finalPrice !== null ? (
              <>
                <div className="text-lg font-semibold text-primary-dark">
                  ¥{priceInfo.finalPrice?.toLocaleString() || 'お問い合わせ'}
                </div>
                <div className="text-xs text-text-secondary">税込・概算価格</div>
              </>
            ) : (
              <div className="space-y-1">
                <PendingNotice type="price" message="価格未定" className="text-xs" />
                <div className="text-xs text-text-secondary">お問い合わせください</div>
              </div>
            )}
          </div>
          <Button
            onClick={handleOrder}
            disabled={!isOrderValid()}
            size="sm"
            className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white"
          >
            {priceInfo.finalPrice !== null ? '注文する' : 'お問い合わせ'}
          </Button>
        </div>
        
        {/* コンパクト選択内容 */}
        <div className="text-xs text-text-secondary grid grid-cols-2 gap-2">
          <div>素材: {getMaterialName()}</div>
          <div>サイズ: {selections.size}号</div>
          <div>形状: {getShapeName()}</div>
          <div>宝石: {getGemstoneName()}</div>
        </div>
        
        {!isOrderValid() && (
          <p className="text-xs text-red-500 text-center">
            素材とサイズを選択してください
          </p>
        )}
        
        {/* モーダルは共通 */}
        <Modal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          title="ご注文の確認"
          size="md"
        >
          <div className="p-6">
            <p className="text-text-secondary mb-6">
              {priceInfo.finalPrice !== null 
                ? '以下の内容でご注文を進めます。決済完了後、LINEでご連絡いたします。'
                : '選択された内容にて価格をお見積もりいたします。LINEでお問い合わせください。'
              }
            </p>
            
            <div className="bg-background-light p-4 rounded-lg mb-6">
              <div className="text-center mb-4">
                {priceInfo.finalPrice !== null ? (
                  <>
                    <div className="text-2xl font-mono font-bold text-primary-dark">
                      ¥{priceInfo.finalPrice?.toLocaleString() || 'お問い合わせ'}
                    </div>
                    <div className="text-sm text-text-secondary">(税込・概算価格)</div>
                  </>
                ) : (
                  <div className="space-y-2">
                    <PendingNotice type="price" message="価格未定のため要相談" />
                    <div className="text-sm text-text-secondary">LINEでお問い合わせください</div>
                  </div>
                )}
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
                {priceInfo.finalPrice !== null ? '決済ページへ' : 'LINEで相談'}
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {/* 価格表示 */}
      <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-accent-gold">
        <h3 className="text-lg font-semibold text-primary-dark mb-4 text-center">
          ご注文価格
        </h3>
        
        {priceInfo.finalPrice !== null ? (
          <>
            <PriceDisplay 
              price={priceInfo.finalPrice}
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
          </>
        ) : (
          <div className="text-center py-8">
            <PendingNotice type="price" message="選択された素材または宝石の価格が未定です" className="mb-4" />
            <p className="text-sm text-text-secondary mb-4">
              お見積もりをご希望の場合は、LINEでお問い合わせください
            </p>
            <div className="text-xs text-gray-500">
              ※ 確定価格は後日ご連絡いたします
            </div>
          </div>
        )}
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
            <span>{getGemstoneName()}</span>
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
{priceInfo.finalPrice !== null ? 'この内容で注文する' : 'この内容でお問い合わせ'}
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