import { MainLayout } from '@/components/layout'
import { Section } from '@/components/ui'
import { COMPANY_INFO } from '@/lib/data'

export default function PrivacyPage() {
  return (
    <MainLayout>
      {/* ページヘッダー */}
      <Section padding="md" background="light">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-primary-dark mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-lg text-text-secondary">
            個人情報の取り扱いについて
          </p>
        </div>
      </Section>

      {/* パンくずナビ */}
      <Section padding="sm">
        <nav className="text-sm text-text-secondary">
          <span>ホーム</span>
          <span className="mx-2">›</span>
          <span className="text-primary-dark">プライバシーポリシー</span>
        </nav>
      </Section>

      {/* メインコンテンツ */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="space-y-8">
              {/* 基本方針 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  基本方針
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {COMPANY_INFO.name}（以下「当社」といいます）は、
                  当社が提供するサービス（以下「本サービス」といいます）における、
                  ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
                </p>
              </div>

              {/* 取得する個人情報 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  取得する個人情報
                </h2>
                <p className="text-text-secondary mb-4">
                  当社は、ユーザーから以下の個人情報を取得いたします。
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">1. 基本情報</h3>
                    <ul className="text-sm text-text-secondary space-y-1 ml-4">
                      <li>• 氏名</li>
                      <li>• メールアドレス</li>
                      <li>• 電話番号</li>
                      <li>• 住所</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">2. 注文情報</h3>
                    <ul className="text-sm text-text-secondary space-y-1 ml-4">
                      <li>• 商品の注文内容</li>
                      <li>• カスタマイズ仕様</li>
                      <li>• 決済情報（クレジットカード情報は決済代行業者が管理）</li>
                      <li>• 配送先情報</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">3. 相談・問い合わせ情報</h3>
                    <ul className="text-sm text-text-secondary space-y-1 ml-4">
                      <li>• 相談内容・要望事項</li>
                      <li>• LINEでのやり取り履歴</li>
                      <li>• 問い合わせ履歴</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">4. アクセス情報</h3>
                    <ul className="text-sm text-text-secondary space-y-1 ml-4">
                      <li>• IPアドレス</li>
                      <li>• ブラウザ情報</li>
                      <li>• アクセス日時</li>
                      <li>• アクセスページ</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 個人情報の利用目的 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  個人情報の利用目的
                </h2>
                <p className="text-text-secondary mb-4">
                  当社は、取得した個人情報を以下の目的で利用いたします。
                </p>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>1. 商品の製作・発送・アフターサービスの提供</p>
                  <p>2. お客様からのお問い合わせ・相談への対応</p>
                  <p>3. 製作進捗状況のご連絡</p>
                  <p>4. 決済処理および決済に関する連絡</p>
                  <p>5. 配送業務およびそれに付随する連絡</p>
                  <p>6. カスタマーサポート・メンテナンスサービスの提供</p>
                  <p>7. 新商品・サービスのご案内（同意いただいた場合のみ）</p>
                  <p>8. 市場調査・統計分析（個人を特定しない形で）</p>
                  <p>9. 法令に基づく対応</p>
                  <p>10. その他、本サービスの提供・改善</p>
                </div>
              </div>

              {/* 個人情報の第三者提供 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  個人情報の第三者提供
                </h2>
                <p className="text-text-secondary mb-4">
                  当社は、以下の場合を除いて、あらかじめユーザーの同意を得ることなく、
                  第三者に個人情報を提供することはありません。
                </p>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>1. 法令に基づく場合</p>
                  <p>2. 人の生命、身体または財産の保護のために必要がある場合</p>
                  <p>3. 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</p>
                  <p>4. 国の機関もしくは地方公共団体等が法令の定める事務を遂行することに対して協力する必要がある場合</p>
                </div>
                
                <h3 className="font-medium text-primary-dark mt-4 mb-2">業務委託先への提供</h3>
                <p className="text-sm text-text-secondary">
                  当社は、利用目的の達成に必要な範囲内において、以下の業務委託先に個人情報を提供する場合があります。
                </p>
                <div className="space-y-1 text-sm text-text-secondary ml-4 mt-2">
                  <p>• 配送業者（商品の配送のため）</p>
                  <p>• 決済代行業者（決済処理のため）</p>
                  <p>• クラウドサービス提供者（データ保管のため）</p>
                </div>
                <p className="text-xs text-text-secondary mt-2">
                  ※これらの委託先には、適切な監督を行い、個人情報保護に関する契約を締結しています。
                </p>
              </div>

              {/* 個人情報の保存期間 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  個人情報の保存期間
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">注文・顧客情報</h3>
                    <p className="text-sm text-text-secondary">
                      最終取引から5年間保存いたします。アフターサービス・メンテナンスのために必要です。
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">相談・問い合わせ情報</h3>
                    <p className="text-sm text-text-secondary">
                      お問い合わせから3年間保存いたします。過去の相談履歴を参照するために必要です。
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">アクセスログ</h3>
                    <p className="text-sm text-text-secondary">
                      取得から1年間保存いたします。セキュリティ対策・システム改善のために必要です。
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookieについて */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  Cookie（クッキー）について
                </h2>
                <div className="space-y-3">
                  <p className="text-text-secondary">
                    当社のウェブサイトでは、サービス向上のためにCookieを使用しています。
                  </p>
                  
                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">使用目的</h3>
                    <ul className="text-sm text-text-secondary space-y-1 ml-4">
                      <li>• ウェブサイトの利用状況の分析</li>
                      <li>• ユーザーの利便性向上</li>
                      <li>• セキュリティの確保</li>
                      <li>• 広告の最適化</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-text-secondary">
                    Cookieの使用を望まない場合は、ブラウザの設定でCookieを無効にすることができます。
                    ただし、一部の機能が制限される場合があります。
                  </p>
                </div>
              </div>

              {/* 個人情報の開示・訂正・削除 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  個人情報の開示・訂正・削除
                </h2>
                <p className="text-text-secondary mb-4">
                  ユーザーは、当社の保有する自己の個人情報について、以下の権利を有します。
                </p>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>1. 開示を求める権利</p>
                  <p>2. 訂正・追加・削除を求める権利</p>
                  <p>3. 利用の停止を求める権利</p>
                  <p>4. 第三者への提供の停止を求める権利</p>
                </div>
                <p className="text-sm text-text-secondary mt-4">
                  これらの権利を行使される場合は、下記の連絡先までお問い合わせください。
                  本人確認を行った上で、合理的な期間内に対応いたします。
                </p>
              </div>

              {/* セキュリティ対策 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  セキュリティ対策
                </h2>
                <p className="text-text-secondary mb-4">
                  当社は、個人情報の漏えい、滅失、毀損等を防止するため、以下の対策を講じています。
                </p>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>• SSL/TLS暗号化通信の実装</p>
                  <p>• アクセス制御・認証システムの導入</p>
                  <p>• 定期的なセキュリティ監査の実施</p>
                  <p>• 従業員への個人情報保護教育の実施</p>
                  <p>• 物理的セキュリティ対策の実施</p>
                  <p>• システムの定期的なアップデート</p>
                </div>
              </div>

              {/* プライバシーポリシーの変更 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  プライバシーポリシーの変更
                </h2>
                <p className="text-text-secondary">
                  当社は、必要に応じて本ポリシーを変更する場合があります。
                  重要な変更の場合は、ウェブサイト上で事前にお知らせいたします。
                  変更後のプライバシーポリシーは、ウェブサイトに掲載された時点で効力を生じるものとします。
                </p>
              </div>

              {/* お問い合わせ窓口 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  お問い合わせ窓口
                </h2>
                <p className="text-text-secondary mb-4">
                  個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
                </p>
                <div className="bg-background-light p-4 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <p><strong>事業者名:</strong> {COMPANY_INFO.name}</p>
                    <p><strong>代表者:</strong> {COMPANY_INFO.representative}</p>
                    <p><strong>住所:</strong> {COMPANY_INFO.address}</p>
                    <p><strong>電話:</strong> {COMPANY_INFO.phone}</p>
                    <p><strong>メール:</strong> {COMPANY_INFO.email}</p>
                    <p><strong>受付時間:</strong> {COMPANY_INFO.businessHours}</p>
                  </div>
                </div>
              </div>

              {/* 制定・改定履歴 */}
              <div className="text-center pt-8 border-t border-gray-200">
                <div className="space-y-1 text-sm text-text-secondary">
                  <p>制定日: 2025年1月15日</p>
                  <p>最終更新日: 2025年1月15日</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}