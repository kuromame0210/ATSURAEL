import React from 'react'

interface TextPlaceholderProps {
  children: React.ReactNode
  type?: 'content' | 'title' | 'description' | 'price'
  className?: string
  isPending?: boolean
  note?: string
}

const TextPlaceholder: React.FC<TextPlaceholderProps> = ({ 
  children, 
  type = 'content',
  className = '',
  isPending = true,
  note
}) => {
  if (!isPending) {
    return <>{children}</>
  }

  const getPlaceholderStyle = () => {
    switch (type) {
      case 'title':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      case 'description':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      case 'price':
        return 'bg-orange-50 border-orange-200 text-orange-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700'
    }
  }

  const getPlaceholderIcon = () => {
    switch (type) {
      case 'title':
        return '📝'
      case 'description':
        return '📄'
      case 'price':
        return '💰'
      default:
        return '📋'
    }
  }

  const getPlaceholderLabel = () => {
    switch (type) {
      case 'title':
        return 'タイトル未決定'
      case 'description':
        return '説明文未決定'
      case 'price':
        return '価格未決定'
      default:
        return 'コンテンツ未決定'
    }
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`border-2 border-dashed rounded-md px-3 py-2 ${getPlaceholderStyle()}`}>
        <div className="flex items-center gap-2">
          <span className="text-sm">{getPlaceholderIcon()}</span>
          <span className="text-sm font-medium">{getPlaceholderLabel()}</span>
          {note && (
            <span className="text-xs opacity-75">({note})</span>
          )}
        </div>
        <div className="mt-1 text-xs opacity-60">
          ここに{type === 'title' ? 'タイトル' : type === 'description' ? '説明文' : type === 'price' ? '価格' : 'テキスト'}を入れる
        </div>
      </div>
    </div>
  )
}

export { TextPlaceholder }