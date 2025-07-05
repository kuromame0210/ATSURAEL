'use client'

import React from 'react'
import { MessageCircle, Mail, Check } from 'lucide-react'
import { Button, Modal } from '@/components/ui'
import { cn } from '@/lib/utils'

interface ConsultationMethodSelectorProps {
  isOpen: boolean
  onClose: () => void
  onSelectLine: () => void
  onSelectEmail: () => void
}

const ConsultationMethodSelector: React.FC<ConsultationMethodSelectorProps> = ({
  isOpen,
  onClose,
  onSelectLine,
  onSelectEmail,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="相談方法を選択してください"
      size="md"
    >
      <div className="p-6 space-y-6">
        <p className="text-text-secondary text-center">
          フルオーダーのご相談方法をお選びください。
          どちらの方法でも専門スタッフが丁寧にサポートいたします。
        </p>

        <div className="space-y-4">
          {/* LINE相談 */}
          <button
            onClick={onSelectLine}
            className={cn(
              'w-full p-6 rounded-lg border-2 border-gray-200 hover:border-accent-gold',
              'transition-all text-left focus:outline-none focus:ring-2 focus:ring-accent-gold',
              'hover:shadow-md'
            )}
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary-dark mb-2">
                  LINEで相談（推奨）
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  既にATSURAEL公式LINEを友だち追加済みの方
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-text-secondary">すぐに相談開始</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-text-secondary">リアルタイムでやり取り</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-text-secondary">画像共有も簡単</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-green-600 font-medium">
                  ※LINE友だち登録済みの方におすすめ
                </div>
              </div>
            </div>
          </button>

          {/* メール相談 */}
          <button
            onClick={onSelectEmail}
            className={cn(
              'w-full p-6 rounded-lg border-2 border-gray-200 hover:border-accent-gold',
              'transition-all text-left focus:outline-none focus:ring-2 focus:ring-accent-gold',
              'hover:shadow-md'
            )}
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary-dark mb-2">
                  メールで相談
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  LINEを使わない方・メールアドレスをお持ちの方
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-text-secondary">じっくり相談内容を記入</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-text-secondary">確実に情報をお届け</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-text-secondary">記録として残る</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-blue-600 font-medium">
                  ※メールアドレス必須
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="bg-background-light p-4 rounded-lg">
          <p className="text-sm text-text-secondary">
            <strong className="text-primary-dark">営業時間：</strong>
            月〜金 10:00-18:00
            <br />
            営業時間外のメッセージは翌営業日にご返信いたします。
          </p>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" onClick={onClose}>
            戻る
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export { ConsultationMethodSelector }