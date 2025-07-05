import { MainLayout } from '@/components/layout'
import { Section } from '@/components/ui'
import { DUMMY_PRODUCTS } from '@/lib/data'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '商品紹介 | ATSURAEL',
  description: 'ATSURAELの上質なリングコレクション。エンゲージリング、マリッジリング、デイリーアクセサリーまで幅広くご紹介',
}

export default function ProductsPage() {
  return (
    <MainLayout>
      {/* ヘッダー */}
      <Section padding="sm" background="light">
        <div className="text-center">
          <h1 className="text-lg md:text-xl font-serif font-bold text-primary-dark mb-1">
            商品紹介
          </h1>
          <p className="text-xs md:text-sm text-text-secondary">
            ATSURAELの上質なリングコレクション
          </p>
        </div>
      </Section>

      {/* 商品一覧 */}
      <Section padding="md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {DUMMY_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                {/* 商品画像 */}
                <div className="aspect-square relative overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  {/* オーバーレイ */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-200 shadow-lg">
                        <span className="text-xs font-medium text-primary-dark">詳細を見る</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 商品情報 */}
                <div className="p-4">
                  <h3 className="font-medium text-primary-dark text-sm sm:text-base mb-2 truncate">
                    {product.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="text-accent-gold font-semibold text-sm sm:text-base">
                      {product.price}
                    </div>
                    
                    {/* カテゴリバッジ */}
                    <div className="flex justify-start">
                      <span className={`text-xs font-medium whitespace-nowrap ${{
                        'engagement': 'text-pink-600',
                        'marriage': 'text-blue-600',
                        'daily': 'text-green-600',
                        'special': 'text-purple-600',
                        'gift': 'text-yellow-600',
                      }[product.category] || 'text-gray-600'}`}>
                        {{
                          'engagement': 'エンゲージ',
                          'marriage': 'マリッジ',
                          'daily': 'デイリー',
                          'special': 'スペシャル',
                          'gift': 'ギフト',
                        }[product.category] || 'その他'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 説明文 */}
          <div className="mt-10 text-center">
            <div className="bg-gray-50 rounded-lg p-5 max-w-3xl mx-auto">
              <h2 className="text-base font-serif font-bold text-primary-dark mb-2">
                ATSURAELのこだわり
              </h2>
              <p className="text-sm text-text-secondary mb-4">
                すべての商品は熟練の職人が一つひとつ丁寧に制作いたします。
                お客様のご要望に合わせてセミオーダー・フルオーダーでのカスタマイズも可能です。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/semi-order"
                  className="bg-primary-green text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm"
                >
                  セミオーダーで注文
                </a>
                <a
                  href="/full-order"
                  className="bg-accent-gold text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-medium text-sm"
                >
                  フルオーダーで相談
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}