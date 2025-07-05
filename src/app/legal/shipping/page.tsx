import { MainLayout } from '@/components/layout'
import { Section } from '@/components/ui'
import { Truck, Clock, Shield, MapPin } from 'lucide-react'

export default function ShippingPage() {
  return (
    <MainLayout>
      {/* ページヘッダー */}
      <Section padding="md" background="light">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-primary-dark mb-4">
            配送について
          </h1>
          <p className="text-lg text-text-secondary">
            大切な商品を安全・確実にお届けします
          </p>
        </div>
      </Section>

      {/* パンくずナビ */}
      <Section padding="sm">
        <nav className="text-sm text-text-secondary">
          <span>ホーム</span>
          <span className="mx-2">›</span>
          <span className="text-primary-dark">配送について</span>
        </nav>
      </Section>

      {/* メインコンテンツ */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* 配送概要 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-2">安全配送</h3>
              <p className="text-sm text-text-secondary">
                専用梱包で大切にお届け
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-2">迅速発送</h3>
              <p className="text-sm text-text-secondary">
                完成後すぐに発送手配
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-2">補償付き</h3>
              <p className="text-sm text-text-secondary">
                配送保険で万全の保障
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-2">全国対応</h3>
              <p className="text-sm text-text-secondary">
                全国どこでもお届け
              </p>
            </div>
          </div>

          {/* 配送料金 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              配送料金
            </h2>
            
            <div className="overflow-x-auto responsive-table">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-primary-dark font-semibold">配送方法</th>
                    <th className="text-left py-3 text-primary-dark font-semibold">料金</th>
                    <th className="text-left py-3 text-primary-dark font-semibold">お届け日数</th>
                    <th className="text-left py-3 text-primary-dark font-semibold">備考</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-gray-100">
                    <td className="py-3">宅配便（通常）</td>
                    <td className="py-3 font-mono">800円（税込）</td>
                    <td className="py-3">2-3日</td>
                    <td className="py-3">全国一律料金</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">代金引換</td>
                    <td className="py-3 font-mono">800円 + 330円（税込）</td>
                    <td className="py-3">2-3日</td>
                    <td className="py-3">手数料込み</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">速達便</td>
                    <td className="py-3 font-mono">1,500円（税込）</td>
                    <td className="py-3">翌日-2日</td>
                    <td className="py-3">お急ぎの場合</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                💡 商品代金が50,000円以上の場合、送料無料でお届けいたします。
              </p>
            </div>
          </div>

          {/* お届け地域・日数 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              お届け地域・日数
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary-dark mb-3">関東・中部・関西</h3>
                <p className="text-text-secondary text-sm mb-2">発送から1-2日でお届け</p>
                <ul className="text-xs text-text-secondary space-y-1">
                  <li>• 東京、神奈川、千葉、埼玉、群馬、栃木、茨城</li>
                  <li>• 愛知、岐阜、三重、静岡</li>
                  <li>• 大阪、京都、兵庫、奈良、和歌山、滋賀</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary-dark mb-3">その他地域</h3>
                <p className="text-text-secondary text-sm mb-2">発送から2-3日でお届け</p>
                <ul className="text-xs text-text-secondary space-y-1">
                  <li>• 北海道、東北、中国、四国、九州</li>
                  <li>• 沖縄、離島（追加料金が発生する場合があります）</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-700">
                ⚠️ 天候や交通事情により、お届けが遅れる場合があります。
                お急ぎの場合は事前にご相談ください。
              </p>
            </div>
          </div>

          {/* 梱包について */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              梱包について
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary-dark mb-2">専用ボックス</h3>
                <p className="text-text-secondary text-sm">
                  ATSURAELオリジナルのジュエリーボックスに丁寧に収納してお届けします。
                  そのままギフトとしてもお使いいただけます。
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary-dark mb-2">緩衝材・保護</h3>
                <p className="text-text-secondary text-sm">
                  商品を衝撃から守るため、適切な緩衝材を使用し、安全に梱包いたします。
                  配送中の破損を防ぐため、十分な保護を行います。
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary-dark mb-2">配送保険</h3>
                <p className="text-text-secondary text-sm">
                  すべての商品に配送保険を付帯しております。
                  万一の配送事故の際も、適切に対応いたします。
                </p>
              </div>
            </div>
          </div>

          {/* お届けの流れ */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              お届けの流れ
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">製作完了</h3>
                  <p className="text-sm text-text-secondary">
                    指輪の製作が完了次第、LINEまたはメールでご連絡いたします。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">発送準備</h3>
                  <p className="text-sm text-text-secondary">
                    専用ボックスに梱包し、発送の準備を行います。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">発送通知</h3>
                  <p className="text-sm text-text-secondary">
                    発送完了後、追跡番号をお知らせいたします。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">お届け</h3>
                  <p className="text-sm text-text-secondary">
                    ご指定の住所にお届けいたします。不在の場合は再配達をご利用ください。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="bg-background-light p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-primary-dark mb-4">
              配送に関する注意事項
            </h2>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>• 配送先住所は正確にご記入ください。誤った住所への配送による紛失・遅延の責任は負いかねます</p>
              <p>• 長期不在等により商品が返送された場合、再発送料をご負担いただきます</p>
              <p>• 配送時間の指定は承っておりますが、交通事情により前後する場合があります</p>
              <p>• 商品受取時は、必ず内容をご確認ください</p>
              <p>• 破損等がございましたら、すぐにご連絡ください</p>
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