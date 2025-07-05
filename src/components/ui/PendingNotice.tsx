import React from 'react'
import { Clock } from 'lucide-react'

interface PendingNoticeProps {
  type?: 'price' | 'content' | 'service' | 'general'
  message?: string
  className?: string
}

export function PendingNotice({ 
  type = 'general', 
  message,
  className = '' 
}: PendingNoticeProps) {
  const getDefaultMessage = () => {
    switch (type) {
      case 'price':
        return '価格は今後決定いたします'
      case 'content':
        return '内容は今後決定いたします'
      case 'service':
        return 'サービス詳細は今後決定いたします'
      default:
        return '詳細は今後決定いたします'
    }
  }

  const displayMessage = message || getDefaultMessage()

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-medium ${className}`}>
      <Clock className="w-3 h-3" />
      <span>{displayMessage}</span>
    </div>
  )
}