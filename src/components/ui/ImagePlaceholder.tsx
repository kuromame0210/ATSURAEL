import React from 'react'
import { Image as ImageIcon, Camera, Gem, Users, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  width?: string | number
  height?: string | number
  className?: string
  text?: string
  showIcon?: boolean
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape'
  variant?: 'default' | 'product' | 'gallery' | 'hero' | 'lifestyle' | 'detail' | 'collection'
  imageType?: 'product' | 'model' | 'process' | 'studio' | 'detail' | 'lifestyle'
  isPending?: boolean
  note?: string
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width,
  height,
  className,
  text = "画像",
  showIcon = true,
  aspectRatio,
  variant = 'default',
  imageType = 'product',
  isPending = true,
  note,
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  }

  const variantClasses = {
    default: isPending ? 'bg-yellow-50 border-2 border-dashed border-yellow-300' : 'bg-background-light border-2 border-dashed border-gray-300',
    product: isPending ? 'bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-lg' : 'bg-gradient-to-br from-gray-50 to-background-green border border-primary-light rounded-lg shadow-lg',
    gallery: isPending ? 'bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-md' : 'bg-gradient-to-b from-gray-100 to-gray-50 border border-gray-200 rounded-md shadow-sm',
    hero: isPending ? 'bg-yellow-50 border-2 border-dashed border-yellow-300' : 'bg-gradient-to-br from-primary-light via-background-green to-gray-50 border border-primary-green shadow-xl',
    lifestyle: isPending ? 'bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-lg' : 'bg-gradient-to-br from-background-green to-primary-light border border-primary-light rounded-lg shadow-md',
    detail: isPending ? 'bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-xl' : 'bg-gradient-to-br from-white to-background-green border-2 border-primary-light rounded-xl shadow-lg',
    collection: isPending ? 'bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-lg' : 'bg-gradient-to-b from-gray-50 to-background-light border border-gray-200 rounded-lg shadow-sm',
  }

  const textVariants = {
    default: isPending ? 'text-yellow-700' : 'text-text-secondary',
    product: isPending ? 'text-yellow-700 font-medium' : 'text-primary-green font-medium',
    gallery: isPending ? 'text-yellow-700' : 'text-gray-500',
    hero: isPending ? 'text-yellow-800 font-semibold' : 'text-primary-dark font-semibold',
    lifestyle: isPending ? 'text-yellow-700 font-medium' : 'text-primary-green font-medium',
    detail: isPending ? 'text-yellow-700 font-medium' : 'text-primary-dark font-medium',
    collection: isPending ? 'text-yellow-700' : 'text-text-secondary',
  }

  // 画像タイプに応じたアイコンを選択
  const getIcon = () => {
    switch (imageType) {
      case 'product':
        return <Gem className={cn('mb-2', variant === 'hero' ? 'w-8 h-8' : 'w-6 h-6', textVariants[variant])} />
      case 'model':
        return <Users className={cn('mb-2', variant === 'hero' ? 'w-8 h-8' : 'w-6 h-6', textVariants[variant])} />
      case 'process':
        return <Camera className={cn('mb-2', variant === 'hero' ? 'w-8 h-8' : 'w-6 h-6', textVariants[variant])} />
      case 'studio':
        return <Sparkles className={cn('mb-2', variant === 'hero' ? 'w-8 h-8' : 'w-6 h-6', textVariants[variant])} />
      case 'detail':
        return <Gem className={cn('mb-2', variant === 'hero' ? 'w-8 h-8' : 'w-6 h-6', textVariants[variant])} />
      case 'lifestyle':
        return <Users className={cn('mb-2', variant === 'hero' ? 'w-8 h-8' : 'w-6 h-6', textVariants[variant])} />
      default:
        return <ImageIcon className={cn('mb-2', variant === 'hero' ? 'w-8 h-8' : 'w-6 h-6', textVariants[variant])} />
    }
  }

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-4',
        aspectRatio && aspectRatioClasses[aspectRatio],
        variantClasses[variant],
        className
      )}
      style={style}
    >
      {showIcon && getIcon()}
      <span className={cn(
        'text-sm text-center',
        textVariants[variant]
      )}>
        {isPending ? `📷 ${text}` : text}
      </span>
      {isPending && (
        <div className="mt-1 text-xs text-yellow-600 text-center">
          ここに画像を入れる
          {note && <div className="mt-1">({note})</div>}
        </div>
      )}
    </div>
  )
}

export { ImagePlaceholder }
export type { ImagePlaceholderProps }