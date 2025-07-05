import React from 'react'
import { Check, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui'
import Link from 'next/link'

interface SubmissionSuccessProps {
  onReset: () => void
}

const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({ onReset }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        {/* 成功アイコン */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>

        <h2 className="text-2xl font-serif font-bold text-primary-dark mb-4">
          相談内容を送信しました
        </h2>

        <p className="text-lg text-text-secondary mb-6">
          フルオーダーのご相談をお送りいただき、ありがとうございます。
        </p>

        <div className="bg-background-light p-6 rounded-lg mb-6 text-left">
          <h3 className="font-semibold text-primary-dark mb-4">今後の流れ</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent-gold text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                1
              </div>
              <div>
                <p className="font-medium text-primary-dark">内容確認</p>
                <p className="text-sm text-text-secondary">専門スタッフがご相談内容を確認いたします</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent-gold text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                2
              </div>
              <div>
                <p className="font-medium text-primary-dark">ご返信</p>
                <p className="text-sm text-text-secondary">2-3営業日以内にメールでご返信いたします</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent-gold text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                3
              </div>
              <div>
                <p className="font-medium text-primary-dark">詳細相談</p>
                <p className="text-sm text-text-secondary">デザインや仕様について詳しくご相談</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent-gold text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                4
              </div>
              <div>
                <p className="font-medium text-primary-dark">製作開始</p>
                <p className="text-sm text-text-secondary">ご納得いただけましたら製作開始</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-blue-700">
            <strong>営業時間：</strong>月〜金 10:00-18:00
            <br />
            <strong>連絡先：</strong>080-1084-7198 / machida_factory.ina@icloud.com
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-text-secondary">
            より詳しいご相談をご希望の場合は、LINEでのやり取りも可能です。
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={onReset}
              className="flex-1"
            >
              新しい相談を送る
            </Button>
            
            <Button
              asChild
              variant="default"
              className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white"
            >
              <Link href="/">
                <MessageCircle className="w-4 h-4 mr-2" />
                ホームに戻る
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-text-secondary">
            ご不明な点がございましたら、お気軽にお問い合わせください。
            <br />
            相談は無料です。押し売りは一切いたしません。
          </p>
        </div>
      </div>
    </div>
  )
}

export { SubmissionSuccess }