'use client'

import React, { useState } from 'react'
import { MainLayout } from '@/components/layout'
import { Section, Button, Input, Textarea } from '@/components/ui'

export default function FullOrderPage() {
  const [selectedMethod, setSelectedMethod] = useState<'line' | 'email' | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'フルオーダーについてのお問い合わせ',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'full-order-inquiry'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          subject: 'フルオーダーについてのお問い合わせ', 
          message: '' 
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLineContact = () => {
    // LINEの友達追加URLにリダイレクト
    window.open('https://line.me/R/ti/p/@your-line-id', '_blank')
  }

  return (
    <MainLayout>
      {/* ヘッダー */}
      <Section padding="sm">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-xl font-serif font-bold text-primary-dark mb-2">
            フルオーダー
          </h1>
          <p className="text-sm text-gray-700 mb-3">
            完全オーダーメイドでの指輪制作をご希望の方は、お問い合わせください
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
            <p className="text-xs text-gray-600 mb-2">
              お客様のご要望を一から形にする完全オーダーメイドサービス
            </p>
            <div className="text-xs text-gray-500">
              詳細なご相談は個別対応・料金期間はご要望により異なります
            </div>
          </div>
        </div>
      </Section>

      {/* お問い合わせ方法選択 */}
      <Section padding="sm">
        <div className="max-w-lg mx-auto">
          <h2 className="text-base font-bold text-center text-primary-dark mb-4">
            ご相談方法をお選びください
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            {/* LINE相談 */}
            <div 
              className={`relative bg-white border-2 rounded-lg p-3 cursor-pointer transition-all duration-300 ${
                selectedMethod === 'line' 
                  ? 'border-green-400 shadow-md bg-green-50 scale-105' 
                  : 'border-gray-200 hover:border-green-400 hover:shadow-md hover:scale-102'
              }`}
              onClick={() => setSelectedMethod('line')}
            >
              {/* 選択インジケーター */}
              {selectedMethod === 'line' && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
              
              <div className="text-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  selectedMethod === 'line' ? 'bg-green-600' : 'bg-green-500'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                </div>
                <h3 className={`text-sm font-bold mb-1 ${
                  selectedMethod === 'line' ? 'text-green-700' : 'text-gray-900'
                }`}>
                  LINEで相談
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  気軽にご相談
                </p>
                <div className="text-green-600 font-medium text-xs">
                  即座にやり取り・画像対応
                </div>
              </div>
            </div>

            {/* メールフォーム */}
            <div 
              className={`relative bg-white border-2 rounded-lg p-3 cursor-pointer transition-all duration-300 ${
                selectedMethod === 'email' 
                  ? 'border-blue-400 shadow-md bg-blue-50 scale-105' 
                  : 'border-gray-200 hover:border-blue-400 hover:shadow-md hover:scale-102'
              }`}
              onClick={() => setSelectedMethod('email')}
            >
              {/* 選択インジケーター */}
              {selectedMethod === 'email' && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
              
              <div className="text-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  selectedMethod === 'email' ? 'bg-blue-600' : 'bg-blue-500'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`text-sm font-bold mb-1 ${
                  selectedMethod === 'email' ? 'text-blue-700' : 'text-gray-900'
                }`}>
                  メールフォーム
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  詳細な相談内容
                </p>
                <div className="text-blue-600 font-medium text-xs">
                  詳細記載・24時間受付
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* LINE相談セクション */}
      {selectedMethod === 'line' && (
        <Section padding="sm">
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">LINEでフルオーダー相談</h3>
              <p className="text-sm text-gray-600 mb-4">
                ATSURAEL公式LINEを友達追加して、
                フルオーダーについてお気軽にメッセージをお送りください。
              </p>
              
              <Button 
                onClick={handleLineContact}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2"
              >
                LINE友達追加
              </Button>
              
              <div className="mt-4 text-xs text-gray-500">
                <p>営業時間：平日 9:00〜18:00（営業時間外は翌営業日返信）</p>
              </div>
            </div>
            
          </div>
        </Section>
      )}

      {/* メールフォームセクション */}
      {selectedMethod === 'email' && (
        <Section padding="sm">
          <div className="max-w-xl mx-auto">
            {submitStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">送信完了</h3>
                <p className="text-sm text-gray-600 mb-4">
                  フルオーダーのお問い合わせありがとうございます。
                  2営業日以内にご返信いたします。
                </p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="text-blue-600 hover:text-blue-700 underline text-sm"
                >
                  新しい相談をする
                </button>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">フルオーダー相談フォーム</h3>
                
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="山田太郎"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="090-1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ご希望やご相談内容 <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="例：結婚指輪のフルオーダーを検討しています。プラチナ素材で、シンプルなデザインを希望しています。予算は〇〇万円程度で考えています。"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                      送信に失敗しました。しばらく時間をおいて再度お試しください。
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? '送信中...' : '相談内容を送信'}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </Section>
      )}
    </MainLayout>
  )
}