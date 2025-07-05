'use client'

import React, { useState } from 'react'
import { Check, ArrowRight, Clock, Star, Users } from 'lucide-react'
import { Button } from './Button'
import Link from 'next/link'

interface OrderTypeSelectorProps {
  className?: string
}

const OrderTypeSelector: React.FC<OrderTypeSelectorProps> = ({ className = '' }) => {
  const [selectedType, setSelectedType] = useState<'semi' | 'full' | null>(null)

  const orderTypes = [
    {
      id: 'semi',
      title: 'セミオーダー',
      subtitle: '簡単＆カスタマイズ',
      description: 'ベースデザインから選んで、素材、宝石、刻印をカスタマイズ',
      features: [
        'ベースリングの形状を選択',
        '素材を選択（シルバー、ゴールド）',
        '誕生石や宝石を追加',
        '刻印でパーソナライズ',
        'オンライン注文可能'
      ],
      timeline: '2～4週間',
      priceRange: '¥12,000～',
      icon: <Clock className="w-6 h-6" />,
      recommended: true,
      ctaText: 'カスタマイズを始める',
      ctaLink: '/semi-order'
    },
    {
      id: 'full',
      title: 'フルオーダー',
      subtitle: '完全オーダーメイド',
      description: 'マスター職人と協力して、一から世界に一つだけの作品を制作',
      features: [
        '完全カスタムデザイン',
        '個人コンサルティング',
        'プレミアム素材対応',
        '独創的な芸術作品',
        '専任職人のサポート'
      ],
      timeline: '3～8週間',
      priceRange: '要相談',
      icon: <Star className="w-6 h-6" />,
      recommended: false,
      ctaText: '相談を予約',
      ctaLink: '/full-order'
    }
  ]

  return (
    <div className={`${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
          あなたにぴったりの選択を
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          簡単カスタマイズから完全オーダーメイドまで、あなたに最適な方法をご用意しています
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {orderTypes.map((type) => (
          <div
            key={type.id}
            className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 cursor-pointer ${
              selectedType === type.id
                ? 'border-primary-green scale-105 shadow-2xl'
                : 'border-gray-200 hover:border-primary-light hover:shadow-xl'
            }`}
            onClick={() => setSelectedType(type.id as 'semi' | 'full')}
          >
            {/* 推奨バッジ */}
            {type.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-primary-green text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Users className="w-4 h-4" />
人気No.1
                </div>
              </div>
            )}

            {/* ヘッダー */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-lg ${
                selectedType === type.id ? 'bg-primary-green text-white' : 'bg-primary-light text-primary-green'
              }`}>
                {type.icon}
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary-dark">
                  {type.title}
                </h3>
                <p className="text-primary-green font-medium">
                  {type.subtitle}
                </p>
              </div>
            </div>

            {/* 説明 */}
            <p className="text-text-secondary mb-6 leading-relaxed">
              {type.description}
            </p>

            {/* 特徴リスト */}
            <ul className="space-y-3 mb-8">
              {type.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                    selectedType === type.id ? 'bg-primary-green' : 'bg-primary-light'
                  }`}>
                    <Check className={`w-3 h-3 ${
                      selectedType === type.id ? 'text-white' : 'text-primary-green'
                    }`} />
                  </div>
                  <span className="text-sm text-text-secondary">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* 詳細情報 */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-background-light rounded-lg">
              <div>
                <p className="text-xs text-text-secondary mb-1">制作期間</p>
                <p className="font-medium text-primary-dark">{type.timeline}</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary mb-1">価格帯</p>
                <p className="font-medium text-primary-dark">{type.priceRange}</p>
              </div>
            </div>

            {/* CTA ボタン */}
            <Button
              asChild
              variant={type.recommended ? 'green' : 'outline'}
              size="lg"
              className={`w-full group ${
                selectedType === type.id ? 'scale-105 shadow-lg' : ''
              }`}
            >
              <Link href={type.ctaLink} className="flex items-center justify-center gap-2">
                {type.ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        ))}
      </div>

      {/* 比較ヘルプ */}
      <div className="mt-12 text-center">
        <p className="text-text-secondary mb-4">
          どちらがあなたに適しているか迷っていますか？
        </p>
        <Button variant="ghost" asChild>
          <Link href="/comparison" className="flex items-center gap-2 mx-auto">
            <Users className="w-4 h-4" />
選択肢を比較する
          </Link>
        </Button>
      </div>
    </div>
  )
}

export { OrderTypeSelector }