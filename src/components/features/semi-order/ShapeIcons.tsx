import React from 'react'

interface ShapeIconProps {
  className?: string
  fill?: string
  stroke?: string
}

// 楕円形アイコン
export const OvalIcon: React.FC<ShapeIconProps> = ({ 
  className = "w-8 h-8", 
  fill = "currentColor", 
  stroke = "none" 
}) => (
  <svg className={className} viewBox="0 0 32 32" fill={fill} stroke={stroke}>
    <ellipse cx="16" cy="16" rx="12" ry="8" strokeWidth="1.5" opacity="0.8" />
    <ellipse cx="16" cy="16" rx="10" ry="6" strokeWidth="1" opacity="0.6" />
    <ellipse cx="16" cy="16" rx="8" ry="4" strokeWidth="0.5" opacity="0.4" />
  </svg>
)

// 四角形アイコン
export const SquareIcon: React.FC<ShapeIconProps> = ({ 
  className = "w-8 h-8", 
  fill = "currentColor", 
  stroke = "none" 
}) => (
  <svg className={className} viewBox="0 0 32 32" fill={fill} stroke={stroke}>
    <rect x="6" y="6" width="20" height="20" rx="2" strokeWidth="1.5" opacity="0.8" />
    <rect x="8" y="8" width="16" height="16" rx="1" strokeWidth="1" opacity="0.6" />
    <rect x="10" y="10" width="12" height="12" rx="0.5" strokeWidth="0.5" opacity="0.4" />
  </svg>
)

// 盾形アイコン
export const ShieldIcon: React.FC<ShapeIconProps> = ({ 
  className = "w-8 h-8", 
  fill = "currentColor", 
  stroke = "none" 
}) => (
  <svg className={className} viewBox="0 0 32 32" fill={fill} stroke={stroke}>
    <path 
      d="M16 4 L26 8 L26 18 Q26 26 16 28 Q6 26 6 18 L6 8 Z" 
      strokeWidth="1.5" 
      opacity="0.8" 
    />
    <path 
      d="M16 6 L24 9 L24 17 Q24 24 16 26 Q8 24 8 17 L8 9 Z" 
      strokeWidth="1" 
      opacity="0.6" 
    />
    <path 
      d="M16 8 L22 10 L22 16 Q22 22 16 24 Q10 22 10 16 L10 10 Z" 
      strokeWidth="0.5" 
      opacity="0.4" 
    />
  </svg>
)

// ハート形アイコン
export const HeartIcon: React.FC<ShapeIconProps> = ({ 
  className = "w-8 h-8", 
  fill = "currentColor", 
  stroke = "none" 
}) => (
  <svg className={className} viewBox="0 0 32 32" fill={fill} stroke={stroke}>
    <path 
      d="M16 28 C16 28 4 18 4 11 C4 7 7 4 11 4 C13 4 15 5 16 7 C17 5 19 4 21 4 C25 4 28 7 28 11 C28 18 16 28 16 28 Z" 
      strokeWidth="1.5" 
      opacity="0.8" 
    />
    <path 
      d="M16 26 C16 26 6 17 6 11.5 C6 8.5 8.5 6 11.5 6 C13 6 14.5 6.8 16 8.5 C17.5 6.8 19 6 20.5 6 C23.5 6 26 8.5 26 11.5 C26 17 16 26 16 26 Z" 
      strokeWidth="1" 
      opacity="0.6" 
    />
    <path 
      d="M16 24 C16 24 8 16 8 12 C8 9.5 10 8 12 8 C13.5 8 15 8.5 16 10 C17 8.5 18.5 8 20 8 C22 8 24 9.5 24 12 C24 16 16 24 16 24 Z" 
      strokeWidth="0.5" 
      opacity="0.4" 
    />
  </svg>
)

// 形状IDに基づいてアイコンを返すヘルパー関数
export const getShapeIcon = (shapeId: string, props?: ShapeIconProps) => {
  switch (shapeId) {
    case 'oval':
      return <OvalIcon {...props} />
    case 'square':
      return <SquareIcon {...props} />
    case 'shield':
      return <ShieldIcon {...props} />
    case 'heart':
      return <HeartIcon {...props} />
    default:
      return <OvalIcon {...props} />
  }
}