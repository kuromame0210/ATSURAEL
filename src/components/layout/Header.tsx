'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sparkles } from 'lucide-react'
import { NAVIGATION_ITEMS, FOOTER_LINKS } from '@/lib/data'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setAnimationKey(prev => prev + 1) // アニメーションをリセット
    }
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-primary-light/30 shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* ブランドロゴ */}
          <Link 
            href="/" 
            className="flex items-center justify-center outline-none group"
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-accent-gold group-hover:rotate-12 transition-transform duration-300" />
              <div className={`font-serif font-bold text-primary-dark tracking-wider transition-all duration-300 ${
                scrolled ? 'text-xl' : 'text-2xl'
              } group-hover:text-primary-green`}>
                ATSURAEL
              </div>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {NAVIGATION_ITEMS.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group outline-none px-4 py-2"
                >
                  {/* テキスト */}
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                    active 
                      ? 'text-primary-green font-semibold' 
                      : 'text-gray-700 group-hover:text-primary-green'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* アンダーライン */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-gold to-primary-green transition-all duration-300 ease-out ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                  
                  {/* ホバー背景 */}
                  <div className={`absolute inset-0 bg-primary-light/10 rounded-lg transition-transform duration-200 ease-out ${
                    active ? 'scale-100' : 'scale-0 group-hover:scale-100'
                  }`}></div>
                  
                  {/* アクティブインジケーター */}
                  {active && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-gold rounded-full"></div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* 右側装飾（デスクトップ） */}
          <div className="hidden lg:flex items-center space-x-3 w-[120px] justify-end">
            <div className="w-1.5 h-1.5 bg-accent-gold rounded-full opacity-60"></div>
            <div className="w-1 h-1 bg-primary-green rounded-full opacity-40"></div>
            <div className="w-0.5 h-0.5 bg-primary-light rounded-full opacity-20"></div>
          </div>

          {/* モバイルメニューボタン - シンプル版 */}
          <button
            className="lg:hidden relative w-10 h-10 rounded-lg hover:bg-gray-50 transition-colors duration-200 ease-out group focus:outline-none focus:bg-gray-100"
            onClick={toggleMenu}
          >
            {/* ハンバーガー/Xアイコンのアニメーション */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-5 h-5">
                {/* 上のライン */}
                <div className={`absolute left-0 w-5 h-0.5 bg-gray-600 transition-all duration-250 ease-out ${
                  isMenuOpen 
                    ? 'top-1/2 -translate-y-0.5 rotate-45' 
                    : 'top-0.5'
                }`}></div>
                
                {/* 中央のライン */}
                <div className={`absolute top-1/2 left-0 h-0.5 bg-gray-600 transition-all duration-250 ease-out -translate-y-0.5 ${
                  isMenuOpen 
                    ? 'w-0 opacity-0' 
                    : 'w-5 opacity-100'
                }`}></div>
                
                {/* 下のライン */}
                <div className={`absolute left-0 w-5 h-0.5 bg-gray-600 transition-all duration-250 ease-out ${
                  isMenuOpen 
                    ? 'top-1/2 -translate-y-0.5 -rotate-45' 
                    : 'bottom-0.5'
                }`}></div>
              </div>
            </div>
            
            <span className="sr-only">メニューを{isMenuOpen ? '閉じる' : '開く'}</span>
          </button>
        </div>

        {/* モバイルナビゲーション - シンプル版 */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-250 ease-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} style={{ top: scrolled ? '64px' : '80px' }}>
          {/* 背景オーバーレイ */}
          <div 
            className="absolute inset-0 bg-black/20 transition-opacity duration-250"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* メニューパネル */}
          <div className={`relative bg-gradient-to-br from-primary-dark via-primary-green to-primary-dark shadow-xl border-b border-accent-gold/20 transition-transform duration-250 ease-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}>
            <nav className="px-6 py-6">
              <div className="space-y-1">
                {NAVIGATION_ITEMS.map((item, index) => {
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group relative block px-5 py-3 text-base font-medium transition-all duration-300 ease-out rounded-xl overflow-hidden ${
                        active 
                          ? 'text-accent-gold scale-[1.02]' 
                          : 'text-white hover:text-accent-gold'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ 
                        transform: isMenuOpen ? 'translateX(0) scale(1)' : 'translateX(-40px) scale(0.95)',
                        opacity: isMenuOpen ? 1 : 0,
                        transition: `all 0.3s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 50}ms`
                      }}
                    >
                      <span className={`relative z-10 transition-all duration-200 ${
                        active 
                          ? 'text-accent-gold font-semibold text-lg tracking-wide' 
                          : 'text-white group-hover:text-accent-gold group-hover:translate-x-1'
                      }`}>{item.label}</span>
                      
                      {/* 金色の下線 - アクティブ（文字の真下） */}
                      {active && (
                        <>
                          <div 
                            key={`underline-${animationKey}-${index}`}
                            className="absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-accent-gold via-accent-gold to-transparent opacity-0 animate-slideInFromLeft" 
                            style={{
                              animationDelay: `${index * 50 + 200}ms`,
                              animationFillMode: 'forwards'
                            }}
                          ></div>
                          <div className="absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-yellow-300 via-yellow-300 to-transparent animate-pulse opacity-30"></div>
                        </>
                      )}
                      
                      {/* 金色の下線 - ホバー（文字の真下） */}
                      <div className={`absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-accent-gold via-accent-gold to-transparent transition-all duration-100 ease-out ${
                        active ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                      }`}></div>
                      
                      {/* キラッとアニメーション */}
                      <div className={`absolute bottom-1 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ${
                        active ? 'animate-none' : ''
                      }`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-100 ease-out"></div>
                      </div>
                      
                      {/* アクティブインジケーター（左側） */}
                      {active && (
                        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-accent-gold to-yellow-400 rounded-full shadow-lg"></div>
                      )}
                      
                    </Link>
                  )
                })}
              </div>
              
              {/* 法的ページのセクション */}
              <div className="mt-6 pt-4 border-t border-accent-gold/30">
                <h4 className="text-sm font-medium text-accent-gold mb-3 px-5">ご利用ガイド</h4>
                <div className="space-y-1">
                  {FOOTER_LINKS.map((link, index) => {
                    const active = isActive(link.href)
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`group relative block px-5 py-2 text-sm transition-all duration-200 ease-out rounded-xl overflow-hidden ${
                          active 
                            ? 'text-accent-gold/90' 
                            : 'text-white hover:text-accent-gold'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ 
                          transform: isMenuOpen ? 'translateX(0) scale(1)' : 'translateX(-40px) scale(0.95)',
                          opacity: isMenuOpen ? 1 : 0,
                          transition: `all 0.3s cubic-bezier(0.25,0.46,0.45,0.94) ${(NAVIGATION_ITEMS.length + index) * 50}ms`
                        }}
                      >
                        <span className={`relative z-10 transition-all duration-200 ${
                          active 
                            ? 'text-accent-gold/90 font-medium' 
                            : 'text-white group-hover:text-accent-gold group-hover:translate-x-1'
                        }`}>{link.label}</span>
                        
                        {/* 小さな下線 */}
                        <div className={`absolute bottom-1 left-5 right-5 h-px bg-gradient-to-r from-accent-gold/50 via-accent-gold/50 to-transparent transition-all duration-100 ease-out ${
                          active ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                        }`}></div>
                      </Link>
                    )
                  })}
                </div>
              </div>
              
              {/* ブランド装飾 */}
              <div className="mt-6 pt-4 border-t border-accent-gold/30">
                <div className="text-center">
                  <div className="text-xs font-serif text-accent-gold tracking-widest">ATSURAEL</div>
                  <div className="text-xs text-white mt-1">月曜日〜金曜日　10:00〜18:00</div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }