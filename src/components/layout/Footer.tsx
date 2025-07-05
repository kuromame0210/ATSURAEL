import React from 'react'
import Link from 'next/link'
import { COMPANY_INFO, FOOTER_LINKS } from '@/lib/data'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        {/* メインフッターコンテンツ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* ブランド情報 */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">{COMPANY_INFO.brandName}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              職人が一つひとつ丁寧に仕上げる、
              <br />
              あなただけの特別な指輪。
              <br />
              想いを形にするジュエリーブランド。
            </p>
          </div>

          {/* 会社情報 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">会社情報</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>{COMPANY_INFO.name}</p>
              <p>代表者: {COMPANY_INFO.representative}</p>
              <p>{COMPANY_INFO.address}</p>
              <p>TEL: {COMPANY_INFO.phone}</p>
              <p>Email: {COMPANY_INFO.email}</p>
              <p>営業時間: {COMPANY_INFO.businessHours}</p>
            </div>
          </div>

          {/* 製作期間・お客様情報 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">製作期間</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>セミオーダー: {COMPANY_INFO.productionPeriod.semi}</p>
              <p>フルオーダー: {COMPANY_INFO.productionPeriod.full}</p>
              <p className="text-xs mt-4">
                ※ご注文内容や時期により変動する場合があります
              </p>
            </div>
          </div>
        </div>

        {/* 法的リンク */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <p className="text-sm text-gray-300">
              © {currentYear} {COMPANY_INFO.name}. すべての権利を保有しています。
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }