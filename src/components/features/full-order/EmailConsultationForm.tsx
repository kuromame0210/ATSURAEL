'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input, Textarea, Button, Loading } from '@/components/ui'

const consultationSchema = z.object({
  customerName: z.string().min(1, 'お名前を入力してください'),
  customerEmail: z.string().email('有効なメールアドレスを入力してください'),
  customerPhone: z.string().optional(),
  ringType: z.string().min(1, '指輪の種類を入力してください'),
  designImage: z.string().min(1, 'デザインイメージを入力してください'),
  preferredMaterial: z.string().min(1, 'ご希望の素材を入力してください'),
  preferredGemstone: z.string().optional(),
  budget: z.string().min(1, 'ご予算を入力してください'),
  completionDate: z.string().min(1, '完成希望時期を入力してください'),
  detailedRequirements: z.string().min(10, '詳細なご要望を10文字以上で入力してください'),
  questions: z.string().optional(),
  agreePolicy: z.boolean().refine(val => val === true, 'プライバシーポリシーに同意してください'),
})

type ConsultationFormData = z.infer<typeof consultationSchema> & {
  agreePolicy: boolean
}

interface EmailConsultationFormProps {
  onSubmitSuccess: () => void
  onCancel: () => void
}

const EmailConsultationForm: React.FC<EmailConsultationFormProps> = ({
  onSubmitSuccess,
  onCancel,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  })

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('送信に失敗しました')
      }

      reset()
      onSubmitSuccess()
    } catch (error) {
      console.error('送信エラー:', error)
      alert('送信に失敗しました。しばらく後にもう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto mobile-padding">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-primary-dark mb-4 md:mb-6 text-center">
          フルオーダー相談フォーム
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          {/* 基本情報 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-dark border-b border-gray-200 pb-2">
              基本情報
            </h3>
            
            <Input
              label="お名前"
              {...register('customerName')}
              error={errors.customerName?.message}
              placeholder="山田太郎"
              required
            />

            <Input
              label="メールアドレス"
              type="email"
              {...register('customerEmail')}
              error={errors.customerEmail?.message}
              placeholder="example@email.com"
              required
            />

            <Input
              label="電話番号（任意）"
              type="tel"
              {...register('customerPhone')}
              error={errors.customerPhone?.message}
              placeholder="090-1234-5678"
              helperText="緊急時の連絡先として"
            />
          </div>

          {/* ご希望内容 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-dark border-b border-gray-200 pb-2">
              ご希望内容
            </h3>

            <Input
              label="指輪の種類"
              {...register('ringType')}
              error={errors.ringType?.message}
              placeholder="例：婚約指輪、結婚指輪、ファッションリング"
              required
            />

            <Input
              label="デザインイメージ"
              {...register('designImage')}
              error={errors.designImage?.message}
              placeholder="例：シンプル、華やか、アンティーク調"
              required
            />

            <Input
              label="ご希望の素材"
              {...register('preferredMaterial')}
              error={errors.preferredMaterial?.message}
              placeholder="例：プラチナ、18Kゴールド、その他"
              required
            />

            <Input
              label="ご希望の宝石（任意）"
              {...register('preferredGemstone')}
              error={errors.preferredGemstone?.message}
              placeholder="例：ダイヤモンド、誕生石、なし"
            />
          </div>

          {/* ご予算・スケジュール */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-dark border-b border-gray-200 pb-2">
              ご予算・スケジュール
            </h3>

            <Input
              label="ご予算（概算）"
              {...register('budget')}
              error={errors.budget?.message}
              placeholder="例：30万円程度、50-100万円"
              required
            />

            <Input
              label="完成希望時期"
              {...register('completionDate')}
              error={errors.completionDate?.message}
              placeholder="例：3ヶ月以内、特に急がない"
              required
            />
          </div>

          {/* 詳細なご要望 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-dark border-b border-gray-200 pb-2">
              詳細なご要望
            </h3>

            <Textarea
              label="具体的なイメージやご要望"
              {...register('detailedRequirements')}
              error={errors.detailedRequirements?.message}
              placeholder="具体的なデザインのイメージ、参考にしたい商品、特別な要望などを詳しくお聞かせください"
              rows={6}
              required
            />

            <Textarea
              label="ご質問やご不明な点（任意）"
              {...register('questions')}
              error={errors.questions?.message}
              placeholder="制作について、料金について、その他ご質問があればお書きください"
              rows={4}
            />
          </div>

          {/* 同意チェック */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="agreePolicy"
              {...register('agreePolicy')}
              className="mt-1"
            />
            <label htmlFor="agreePolicy" className="text-sm text-text-secondary">
              <span className="text-red-500">*</span>
              プライバシーポリシーに同意します
            </label>
          </div>
          {errors.agreePolicy && (
            <p className="text-sm text-red-500">{errors.agreePolicy.message}</p>
          )}

          {/* 送信ボタン */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1 min-h-[48px]"
              disabled={isSubmitting}
            >
              戻る
            </Button>
            <Button
              type="submit"
              variant="default"
              className="flex-1 min-h-[48px] bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loading size="sm" text="送信中..." />
              ) : (
                'メールで送信する'
              )}
            </Button>
          </div>
        </form>

        {/* 注意事項 */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>※相談は無料です。</strong>
            押し売りは一切いたしません。
            <br />
            2-3営業日以内に専門スタッフからご返信いたします。
          </p>
        </div>
      </div>
    </div>
  )
}

export { EmailConsultationForm }