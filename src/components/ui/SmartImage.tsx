import React from 'react'
import Image from 'next/image'
import { ImagePlaceholder } from './ImagePlaceholder'
import { cn } from '@/lib/utils'

interface SmartImageProps {
  src?: string
  alt: string
  width?: number
  height?: number
  className?: string
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape'
  variant?: 'default' | 'product' | 'gallery' | 'hero' | 'lifestyle' | 'detail' | 'collection'
  imageType?: 'product' | 'model' | 'process' | 'studio' | 'detail' | 'lifestyle'
  placeholderText?: string
  priority?: boolean
  fill?: boolean
}

const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  aspectRatio = 'square',
  variant = 'product',
  imageType = 'product',
  placeholderText,
  priority = false,
  fill = false,
}) => {
  // 実際の画像がある場合は画像を表示、ない場合はプレースホルダーを表示
  if (src) {
    return (
      <div className={cn('relative overflow-hidden', className)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          fill={fill}
          className={cn(
            'object-cover transition-transform duration-300 hover:scale-105',
            aspectRatio === 'square' && 'aspect-square',
            aspectRatio === 'video' && 'aspect-video',
            aspectRatio === 'portrait' && 'aspect-[3/4]',
            aspectRatio === 'landscape' && 'aspect-[4/3]'
          )}
        />
      </div>
    )
  }

  // プレースホルダーを表示
  return (
    <ImagePlaceholder
      variant={variant}
      aspectRatio={aspectRatio}
      imageType={imageType}
      text={placeholderText || alt}
      className={className}
    />
  )
}

export { SmartImage }
export type { SmartImageProps }