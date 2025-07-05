import { MainLayout } from '@/components/layout'
import { Section } from '@/components/ui'
import { COMPANY_INFO } from '@/lib/data'

export default function TokushoPage() {
  return (
    <MainLayout>
      {/* ページヘッダー */}
      <Section padding="md" background="light">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-primary-dark mb-4">
            特定商取引法に基づく表記
          </h1>
        </div>
      </Section>

      {/* パンくずナビ */}
      <Section padding="sm">
        <nav className="text-sm text-text-secondary">
          <span>ホーム</span>
          <span className="mx-2">›</span>
          <span className="text-primary-dark">特定商取引法に基づく表記</span>
        </nav>
      </Section>

      {/* メインコンテンツ */}
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="space-y-8">
              {/* 販売業者 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  販売業者
                </h2>
                <p className="text-text-secondary">{COMPANY_INFO.name}</p>
              </div>

              {/* 運営責任者 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  運営責任者
                </h2>
                <p className="text-text-secondary">{COMPANY_INFO.representative}</p>
              </div>

              {/* 所在地 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  所在地
                </h2>
                <p className="text-text-secondary">{COMPANY_INFO.address}</p>
              </div>

              {/* 連絡先 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  連絡先
                </h2>
                <div className="space-y-2 text-text-secondary">
                  <p>電話番号: {COMPANY_INFO.phone}</p>
                  <p>メールアドレス: {COMPANY_INFO.email}</p>
                  <p>営業時間: {COMPANY_INFO.businessHours}</p>
                </div>
              </div>

              {/* 商品代金以外の必要料金 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  商品代金以外の必要料金
                </h2>
                <div className="space-y-2 text-text-secondary">
                  <p>・送料: 全国一律 800円（税込）</p>
                  <p>・代金引換手数料: 330円（税込）</p>
                  <p>・銀行振込手数料: お客様負担</p>
                  <p>・消費税: 商品代金に含む</p>
                </div>
              </div>

              {/* 支払方法 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  支払方法
                </h2>
                <div className="space-y-2 text-text-secondary">
                  <p>・Square決済（クレジットカード）</p>
                  <p>・銀行振込（前払い）</p>
                  <p>・代金引換</p>
                </div>
              </div>

              {/* 支払時期 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  支払時期
                </h2>
                <div className="space-y-2 text-text-secondary">
                  <p>・Square決済: 注文時</p>
                  <p>・銀行振込: 注文後7日以内</p>
                  <p>・代金引換: 商品お届け時</p>
                </div>
              </div>

              {/* 商品の引渡時期 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  商品の引渡時期
                </h2>
                <div className="space-y-2 text-text-secondary">
                  <p>・セミオーダー: {COMPANY_INFO.productionPeriod.semi}</p>
                  <p>・フルオーダー: {COMPANY_INFO.productionPeriod.full}</p>
                  <p>※ご注文内容や時期により変動する場合があります</p>
                  <p>※詳細な納期は注文確認時にお知らせいたします</p>
                </div>
              </div>

              {/* 返品・交換について */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  返品・交換について
                </h2>
                <div className="space-y-3 text-text-secondary">
                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">不良品・配送事故の場合</h3>
                    <p>商品到着後3日以内にご連絡をお願いいたします。配送料弊社負担にて修理もしくは交換を行わせていただきます。</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">お客様都合による返品</h3>
                    <p>商品の性質上、原則として返品はお受けできません。やむをえない事情と弊社が判断した場合には、キャンセル・返品を受けさせていただく場合があります。</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-primary-dark mb-2">キャンセル費用</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>注文から7日以上経過した場合: 代金の50％</li>
                      <li>商品完成後: 代金の100％</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 免責事項 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  免責事項
                </h2>
                <div className="space-y-2 text-text-secondary text-sm">
                  <p>・天然石を使用した商品は、色味や内包物に個体差があります</p>
                  <p>・手作り商品のため、サイズや仕上がりに若干の誤差が生じる場合があります</p>
                  <p>・お使いのモニターにより、実際の色味と異なって見える場合があります</p>
                  <p>・商品画像はイメージです。実際の商品とは異なる場合があります</p>
                </div>
              </div>

              {/* 個人情報について */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  個人情報について
                </h2>
                <p className="text-text-secondary">
                  お客様からお預かりした個人情報は、商品の発送とご連絡以外には一切使用いたしません。
                  第三者に譲渡・提供することもございません。
                  詳しくは「プライバシーポリシー」をご確認ください。
                </p>
              </div>

              {/* その他 */}
              <div>
                <h2 className="text-xl font-semibold text-primary-dark mb-4 border-b border-gray-200 pb-2">
                  その他
                </h2>
                <div className="space-y-2 text-text-secondary text-sm">
                  <p>・商品に関するお問い合わせは、上記連絡先までお願いいたします</p>
                  <p>・営業時間外のお問い合わせは、翌営業日以降の対応となります</p>
                  <p>・価格は予告なく変更する場合があります</p>
                  <p>・本表記は、特定商取引法に基づいて作成しております</p>
                </div>
              </div>

              {/* 最終更新日 */}
              <div className="text-center pt-8 border-t border-gray-200">
                <p className="text-sm text-text-secondary">
                  最終更新日: 2025年1月15日
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}