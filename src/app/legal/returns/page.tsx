import { MainLayout } from '@/components/layout'
import { Section } from '@/components/ui'
import { AlertTriangle, Phone, Mail } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/data'

export default function ReturnsPage() {
  return (
    <MainLayout>
      {/* ページヘッダー */}
      <Section padding="md" background="light">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-primary-dark mb-4">
            返品・交換について
          </h1>
          <p className="text-lg text-text-secondary">
            商品に関する返品・交換のご案内
          </p>
        </div>
      </Section>

      {/* パンくずナビ */}
      <Section padding="sm">
        <nav className="text-sm text-text-secondary">
          <span>ホーム</span>
          <span className="mx-2">›</span>
          <span className="text-primary-dark">返品・交換について</span>
        </nav>
      </Section>

      {/* メインコンテンツ */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* 重要なお知らせ */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-semibold text-yellow-800 mb-2">
                  重要：オーダーメイド商品について
                </h2>
                <p className="text-yellow-700 text-sm">
                  当店の商品はすべてオーダーメイド商品のため、原則として返品・交換はお受けできません。
                  ただし、下記の場合は例外として対応いたします。
                </p>
              </div>
            </div>
          </div>

          {/* 返品・交換対応ケース */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              返品・交換対応について
            </h2>

            <div className="space-y-6">
              {/* 弊社責任による場合 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-primary-dark mb-3">
                  ✅ 返品・交換対応いたします
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-primary-dark mb-1">配送途中の破損・損傷</h4>
                    <p className="text-sm text-text-secondary">
                      配送中の事故により商品が破損・損傷した場合
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary-dark mb-1">商品の不具合・欠陥</h4>
                    <p className="text-sm text-text-secondary">
                      製作上の不具合や品質に問題がある場合
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary-dark mb-1">注文内容と異なる商品</h4>
                    <p className="text-sm text-text-secondary">
                      ご注文いただいた仕様と明らかに異なる商品をお届けした場合
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary-dark mb-1">サイズ不適合（弊社責任の場合）</h4>
                    <p className="text-sm text-text-secondary">
                      指定されたサイズと明らかに異なるサイズで製作した場合
                    </p>
                  </div>
                </div>
              </div>

              {/* お客様都合による場合 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-primary-dark mb-3">
                  ❌ 返品・交換できません
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-primary-dark mb-1">イメージと違う</h4>
                    <p className="text-sm text-text-secondary">
                      お客様の想像していたイメージと異なる場合
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary-dark mb-1">サイズが合わない（お客様都合）</h4>
                    <p className="text-sm text-text-secondary">
                      お客様が指定されたサイズが合わない場合
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary-dark mb-1">お客様による破損</h4>
                    <p className="text-sm text-text-secondary">
                      お客様の取り扱いにより破損・損傷した場合
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary-dark mb-1">使用後の商品</h4>
                    <p className="text-sm text-text-secondary">
                      着用・使用された商品（試着を除く）
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 返品・交換の流れ */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              返品・交換の流れ
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">
                    商品到着後すぐにご確認
                  </h3>
                  <p className="text-sm text-text-secondary">
                    商品がお手元に届きましたら、すぐに商品の状態をご確認ください。
                    破損等がございましたら、写真を撮影しておいてください。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">
                    3日以内にご連絡
                  </h3>
                  <p className="text-sm text-text-secondary">
                    商品到着後3日以内に、電話またはメールでご連絡ください。
                    ご連絡が遅れますと対応できない場合があります。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">
                    状況確認・検討
                  </h3>
                  <p className="text-sm text-text-secondary">
                    お客様からお聞きした状況を確認し、返品・交換の可否を検討いたします。
                    場合により商品の写真をお送りいただくことがあります。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">
                    商品返送・対応実施
                  </h3>
                  <p className="text-sm text-text-secondary">
                    返品・交換が決定した場合、商品をご返送いただき、
                    修理・交換・返金のいずれかで対応いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* キャンセルポリシー */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              キャンセルについて
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">
                  ⚠️ キャンセル費用について
                </h3>
                <p className="text-red-700 text-sm mb-3">
                  オーダーメイド商品の性質上、製作開始後のキャンセルには費用が発生いたします。
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-red-200 pb-1">
                    <span className="text-red-700">注文から7日未満:</span>
                    <span className="font-semibold text-red-800">無料</span>
                  </div>
                  <div className="flex justify-between border-b border-red-200 pb-1">
                    <span className="text-red-700">注文から7日以上経過:</span>
                    <span className="font-semibold text-red-800">代金の50％</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-700">商品完成後:</span>
                    <span className="font-semibold text-red-800">代金の100％</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-primary-dark mb-2">
                  やむを得ない事情による特例
                </h3>
                <p className="text-sm text-text-secondary">
                  お客様の事情により、弊社が特別にやむを得ないと判断した場合には、
                  上記に関わらずキャンセルをお受けする場合があります。まずはご相談ください。
                </p>
              </div>
            </div>
          </div>

          {/* 受取拒否について */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              商品の受取拒否について
            </h2>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2">
                ⚠️ 受取拒否による費用請求
              </h3>
              <p className="text-orange-700 text-sm mb-3">
                弊社が特別に認めた場合を除き、受け取り拒否により商品が返送されてきた場合、
                下記の実損額を請求いたします。
              </p>
              
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• 往復の正規運賃</li>
                <li>• 代引き手数料</li>
                <li>• 請求書郵送料</li>
                <li>• 弊社の認めた費用の実費</li>
              </ul>
              
              <p className="text-xs text-orange-600 mt-3">
                この請求を無視した場合、当店所在地を管轄する簡易裁判所にて法的手続きを行います。
              </p>
            </div>
          </div>

          {/* お問い合わせ */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              返品・交換に関するお問い合わせ
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">電話でのお問い合わせ</h3>
                  <p className="text-lg font-mono text-accent-gold mb-1">{COMPANY_INFO.phone}</p>
                  <p className="text-sm text-text-secondary">
                    営業時間: {COMPANY_INFO.businessHours}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">メールでのお問い合わせ</h3>
                  <p className="text-lg text-accent-gold mb-1">{COMPANY_INFO.email}</p>
                  <p className="text-sm text-text-secondary">
                    24時間受付（返信は営業時間内）
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                💡 返品・交換をご希望の場合は、必ず事前にご連絡ください。
                無断で商品をご返送いただいても対応できません。
              </p>
            </div>
          </div>

          {/* 最終更新日 */}
          <div className="text-center">
            <p className="text-sm text-text-secondary">
              最終更新日: 2025年1月15日
            </p>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}