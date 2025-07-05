'use client'

import React from 'react'
import { ImagePlaceholder } from './ImagePlaceholder'
import { Button } from './Button'

interface ProductSliderProps {
  products: {
    id: string
    title: string
    subtitle?: string
    price?: string
    image?: string
    category: 'semi' | 'full'
  }[]
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
  className?: string
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  className = ''
}) => {

  if (products.length === 0) {
    return (
      <div className={`relative ${className}`}>
        <ImagePlaceholder
          variant="product"
          aspectRatio="landscape"
          text="商品画像"
          note="商品撮影待ち"
        />
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      {/* カードグリッドレイアウト */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            {/* 画像部分 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-white via-gray-50 to-amber-50/30 shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <ImagePlaceholder
                  variant="product"
                  text={`${product.title}\nサンプル画像`}
                  className="w-full h-full"
                  note={`${product.category === 'semi' ? 'セミオーダー' : 'フルオーダー'}商品撮影待ち`}
                />
              )}
              
              {/* カテゴリバッジ */}
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm shadow-lg border ${
                  product.category === 'semi' 
                    ? 'bg-gradient-to-r from-primary-green/90 to-emerald-600/90 text-white border-emerald-400/30' 
                    : 'bg-gradient-to-r from-accent-gold/90 to-yellow-600/90 text-white border-yellow-400/30'
                }`}>
                  <div className="w-1 h-1 bg-white rounded-full mr-1.5"></div>
                  {product.category === 'semi' ? 'セミオーダー' : 'フルオーダー'}
                </span>
              </div>
            </div>
            
            {/* コンテンツ部分 */}
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-primary-dark mb-2">
                  {product.title}
                </h3>
                {product.subtitle && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.subtitle}
                  </p>
                )}
              </div>
              
              {product.price && (
                <p className="text-lg font-mono font-semibold text-primary-green">
                  {product.price}
                </p>
              )}
              
              <Button
                variant={product.category === 'semi' ? 'green' : 'outline'}
                size="sm"
                className="w-full group-hover:scale-105 transition-transform duration-200"
              >
                {product.category === 'semi' ? 'カスタマイズする' : '相談する'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { ProductSlider }