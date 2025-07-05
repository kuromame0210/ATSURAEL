import { MainLayout } from '@/components/layout'
import { Section } from '@/components/ui'
import { COMPANY_INFO } from '@/lib/data'

export default function AboutPage() {
  return (
    <MainLayout>
      {/* ヘッダー */}
      <Section padding="sm" background="light">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-serif font-bold text-primary-dark mb-1">
            ブランドについて
          </h1>
          <p className="text-xs md:text-sm text-gray-600">
            ATSURAELの想いと職人技術について
          </p>
        </div>
      </Section>

      {/* メインコンテンツ */}
      <Section padding="md">
        <div className="max-w-3xl mx-auto px-4">
          
          {/* ブランドストーリー */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-primary-dark mb-6 text-center">ブランドストーリー</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary-dark mb-3">想いを形にする</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  ATSURAELは、「あなただけの特別な瞬間を永遠に残したい」という想いから生まれました。
                  結婚の誓い、愛の証、大切な記念日...人生の特別な瞬間には、その想いにふさわしい特別な指輪が必要だと私たちは考えています。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark mb-3">職人の技術へのこだわり</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  代表である町田明生は、長年にわたってジュエリー制作に携わってきた職人です。
                  伝統的な技法を大切にしながらも、現代のライフスタイルに合わせたデザインを追求し、お客様一人ひとりのご要望にお応えしています。
                </p>
              </div>
            </div>
          </div>

          {/* ATSURAELの特徴 */}
          <div className="border-t pt-8 mb-8">
            <h2 className="text-lg font-bold text-primary-dark mb-6 text-center">ATSURAELの特徴</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary-dark mb-2">想いを込めた制作</h3>
                <p className="text-sm text-gray-600">お客様の想いをお聞きし、その想いを形にするため、一つひとつ心を込めて制作しています。</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark mb-2">職人の高い技術</h3>
                <p className="text-sm text-gray-600">長年の経験を積んだ職人が、伝統的な技法と最新の技術を駆使して制作いたします。</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark mb-2">お客様との対話</h3>
                <p className="text-sm text-gray-600">制作前から完成後まで、お客様との密なコミュニケーションを大切にしています。</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark mb-2">長期サポート</h3>
                <p className="text-sm text-gray-600">完成後もメンテナンス・アフターケアを通じて、長くお付き合いいただけます。</p>
              </div>
            </div>
          </div>

          {/* 会社情報 */}
          <div className="border-t pt-8">
            <h2 className="text-lg font-bold text-primary-dark mb-6 text-center">会社情報</h2>
            <div className="responsive-table mb-6">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 bg-gray-50 w-32">会社名</td>
                    <td className="px-6 py-4 text-sm text-primary-dark font-semibold">{COMPANY_INFO.name}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 bg-gray-50">代表者</td>
                    <td className="px-6 py-4 text-sm text-primary-dark font-semibold">{COMPANY_INFO.representative}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 bg-gray-50">電話番号</td>
                    <td className="px-6 py-4 text-sm text-primary-dark font-semibold">{COMPANY_INFO.phone}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 bg-gray-50">営業時間</td>
                    <td className="px-6 py-4 text-sm text-primary-dark font-semibold">{COMPANY_INFO.businessHours}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center pt-6 border-t">
              <p className="text-sm text-gray-600 mb-3">
                私たちATSURAELは、お客様の大切な想いや記憶を形にすることを使命としています。<br />
                人生の大切な瞬間に寄り添う指輪作りを心がけています。
              </p>
              <p className="text-sm font-semibold text-primary-dark">
                代表　{COMPANY_INFO.representative}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}