import React from 'react'
import { ImagePlaceholder } from './ImagePlaceholder'
import { cn } from '@/lib/utils'

interface ShowcaseItem {
  id: string
  title: string
  subtitle?: string
  price?: string
  imageType: 'product' | 'model' | 'process' | 'studio' | 'detail' | 'lifestyle'
  aspectRatio?: 'square' | 'portrait' | 'landscape'
  image?: string
}

interface JewelryShowcaseProps {
  title?: string
  subtitle?: string
  items: ShowcaseItem[]
  layout?: 'grid' | 'masonry' | 'featured' | 'collection'
  columns?: 2 | 3 | 4
  className?: string
}

const JewelryShowcase: React.FC<JewelryShowcaseProps> = ({
  title,
  subtitle,
  items,
  layout = 'grid',
  columns = 3,
  className,
}) => {
  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid':
        return `grid gap-4 sm:gap-6 ${columns === 2 ? 'grid-cols-2 md:grid-cols-2' : columns === 3 ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4'}`
      case 'masonry':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      case 'featured':
        return 'grid grid-cols-1 lg:grid-cols-2 gap-8'
      case 'collection':
        return 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'
      default:
        return 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'
    }
  }

  const getItemVariant = (index: number) => {
    if (layout === 'featured' && index === 0) return 'hero'
    if (layout === 'masonry') return index % 3 === 0 ? 'detail' : 'product'
    return 'product'
  }

  return (
    <div className={cn('w-full', className)}>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className={getLayoutClasses()}>
        {items.map((item, index) => (
          <div key={item.id} className="group cursor-pointer">
            <div className={cn(
              "relative overflow-hidden rounded-lg",
              item.aspectRatio === 'portrait' ? 'aspect-[3/4]' :
              item.aspectRatio === 'landscape' ? 'aspect-[4/3]' : 'aspect-square'
            )}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <ImagePlaceholder
                  variant={getItemVariant(index)}
                  aspectRatio={item.aspectRatio || (layout === 'featured' && index === 0 ? 'landscape' : 'square')}
                  imageType={item.imageType}
                  text={item.title}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
              )}
              
              {/* オーバーレイ情報 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  )}
                  {item.price && (
                    <p className="text-lg font-semibold mt-2">{item.price}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* カード情報 */}
            <div className="pt-4">
              <h3 className="font-medium text-primary-dark group-hover:text-primary-green transition-colors">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-text-secondary mt-1">{item.subtitle}</p>
              )}
              {item.price && (
                <p className="text-lg font-semibold text-primary-green mt-2">{item.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { JewelryShowcase }
export type { JewelryShowcaseProps, ShowcaseItem }