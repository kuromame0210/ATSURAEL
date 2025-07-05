import { MainLayout } from '@/components/layout'
import { Section, Button, TextPlaceholder, OrderTypeSelector, AnimatedSection } from '@/components/ui'
import Link from 'next/link'

export default function Home() {
  return (
    <MainLayout>
      {/* ヒーローセクション - 動画背景 */}
      <div className="relative min-h-screen overflow-hidden">
        {/* 背景レイヤーコンテナ */}
        <div className="absolute inset-0 w-full h-full bg-gray-900">
          
          {/* 1. フォールバック画像 */}
          <img
            src="/testImage/アトリエ・工房風景.avif"
            alt="ATSURAEL アトリエ風景"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
          />
          
          {/* 2. YouTube動画 */}
          <iframe
            className="absolute w-full h-full"
            src="https://www.youtube.com/embed/x1KmZIMKsSg?autoplay=1&mute=1&loop=1&playlist=x1KmZIMKsSg&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&cc_load_policy=0&enablejsapi=1&origin=http://localhost:3000"
            title="ATSURAEL Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            loading="lazy"
            style={{ 
              zIndex: 2,
              top: '50%',
              left: '50%',
              width: '177.77vh',
              height: '56.25vw',
              minWidth: '100%',
              minHeight: '100%',
              transform: 'translate(-50%, -50%)'
            }}
          />
          
          {/* 3. オーバーレイ */}
          <div 
            className="absolute inset-0 bg-black/20"
            style={{ zIndex: 3 }}
          ></div>
          
        </div>
        
        <Section padding="xl" background="transparent" className="relative text-center min-h-screen flex items-center z-10">
          <div className="max-w-4xl mx-auto text-white">
            <div className="space-y-6">
              <AnimatedSection animation="fadeInScale" delay={100}>
                <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wider">
                  ATSURAEL
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={200}>
                <TextPlaceholder type="description" note="キャッチコピー準備中">
                  <p className="text-xl md:text-2xl font-light">
                    職人の手で創られる、
                    <br className="hidden sm:block" />
                    あなただけの特別な指輪
                  </p>
                </TextPlaceholder>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={300}>
                <TextPlaceholder type="description" note="サブキャッチ準備中">
                  <p className="text-base md:text-lg opacity-90">
                    あなたの物語を永遠のジュエリーに
                  </p>
                </TextPlaceholder>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                  <Button asChild variant="green" size="lg" className="w-full sm:w-auto px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                    <Link href="/semi-order">
                      セミオーダーを始める
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary-dark transition-all duration-300 hover:scale-105">
                    <Link href="/full-order">
                      フルオーダー相談
                    </Link>
                  </Button>
                  {/* デバッグ用ボタン - リリース時に削除 */}
                  <Button asChild variant="ghost" size="sm" className="text-xs text-white/70 hover:text-white">
                    <Link href="/debug">
                      🐛 Debug
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Section>
      </div>



      {/* おすすめコレクション */}
      <Section padding="xl">
        <div className="text-center mb-12">
          <AnimatedSection animation="fadeInUp" delay={50}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-dark mb-3">
              おすすめコレクション
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={100}>
            <p className="text-base text-text-secondary max-w-2xl mx-auto">
              日常から特別な日まで、あなたのライフスタイルに寄り添う指輪
            </p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatedSection animation="fadeInUp" delay={150}>
            <div className="group relative overflow-hidden rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/testImage/高級感のあるカスタマイズ指輪.jpeg"
                  alt="エンゲージリング コレクション" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-primary-dark mb-1">エンゲージリング コレクション</h3>
                <p className="text-sm text-text-secondary mb-2">プロポーズに最適な婚約指輪</p>
                <p className="text-accent-gold font-semibold">¥98,000〜</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="group relative overflow-hidden rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/testImage/ゴールド・シルバーカスタムリング.jpg"
                  alt="マリッジリング ペア" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-primary-dark mb-1">マリッジリング ペア</h3>
                <p className="text-sm text-text-secondary mb-2">結婚指輪セット</p>
                <p className="text-accent-gold font-semibold">¥156,000〜</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={250}>
            <div className="group relative overflow-hidden rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/testImage/ミニマリストリングコレクション.webp"
                  alt="デイリーウェア" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-primary-dark mb-1">デイリーウェア</h3>
                <p className="text-sm text-text-secondary mb-2">普段使いに最適な指輪</p>
                <p className="text-accent-gold font-semibold">¥18,000〜</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={300}>
            <div className="group relative overflow-hidden rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/testImage/モデル着用画像.avif"
                  alt="スペシャルオケージョン" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-primary-dark mb-1">スペシャルオケージョン</h3>
                <p className="text-sm text-text-secondary mb-2">特別な日のために</p>
                <p className="text-accent-gold font-semibold">¥89,000〜</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={350}>
            <div className="group relative overflow-hidden rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/testImage/パッケージング画像.avif"
                  alt="ギフトコレクション" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-primary-dark mb-1">ギフトコレクション</h3>
                <p className="text-sm text-text-secondary mb-2">大切な人への贈り物</p>
                <p className="text-accent-gold font-semibold">¥45,000〜</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="group relative overflow-hidden rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/testImage/職人の手作り工程.jpg"
                  alt="職人の技術" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-primary-dark mb-1">職人の技術</h3>
                <p className="text-sm text-text-secondary">伝統技法による制作</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>


      {/* サービス紹介セクション */}
      <Section background="light" padding="xl">
        <div className="text-center mb-12">
          <AnimatedSection animation="fadeInUp" delay={100}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-dark mb-3">
              プロダクト
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={200}>
            <TextPlaceholder type="description" note="サービス説明文準備中">
              <p className="text-base text-text-secondary max-w-2xl mx-auto">
                ATSURAELでは、お客様のご要望に合わせて2つのサービスをご提供しています
              </p>
            </TextPlaceholder>
          </AnimatedSection>
        </div>

        {/* 商品カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatedSection animation="fadeInUp" delay={300}>
            <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/testImage/ミニマリストリングコレクション.webp"
                  alt="クラシックセミオーダーリング" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary-green text-white px-2 py-1 text-xs rounded-full">セミオーダー</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-primary-dark mb-2">クラシックセミオーダーリング</h3>
                <p className="text-sm text-text-secondary mb-3">素材、宝石、刻印をカスタマイズして、あなただけの理想の指輪を作りましょう</p>
                <p className="text-accent-gold font-semibold">¥12,000～</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/testImage/高級感のあるカスタマイズ指輪.jpeg"
                  alt="フルオーダービスポークリング" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent-gold text-white px-2 py-1 text-xs rounded-full">フルオーダー</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-primary-dark mb-2">フルオーダービスポークリング</h3>
                <p className="text-sm text-text-secondary mb-3">マスター職人があなたのビジョンから完全カスタムデザインで制作</p>
                <p className="text-accent-gold font-semibold">要相談</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={500}>
            <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/testImage/ゴールド・シルバーカスタムリング.jpg"
                  alt="誕生石コレクション" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary-green text-white px-2 py-1 text-xs rounded-full">セミオーダー</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-primary-dark mb-2">誕生石コレクション</h3>
                <p className="text-sm text-text-secondary mb-3">あなたの誕生石をエレガントなセッティングで飾ったセミオーダーリング</p>
                <p className="text-accent-gold font-semibold">¥18,000～</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* オーダータイプ選択 */}
      <Section padding="xl">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <OrderTypeSelector />
        </AnimatedSection>
      </Section>

      {/* ブランドについて - モダンレイアウト */}
      <Section padding="none" className="py-0 relative overflow-hidden">
        <div className="relative min-h-screen">
          {/* 背景画像 */}
          <div className="absolute inset-0">
            <img
              src="/testImage/職人の手作り工程.jpg"
              alt="職人の制作風景 - アトリエでの手作業"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
          </div>
          
          {/* オーバーレイテキスト */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-2xl">
                <div className="mb-6">
                  <AnimatedSection animation="slideInFromLeft" delay={200}>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-gold to-yellow-600 rounded-full mb-6"></div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={400}>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6 tracking-wide">
                      ブランドについて
                    </h2>
                  </AnimatedSection>
                </div>
                
                <div className="space-y-6">
                  <AnimatedSection animation="fadeInUp" delay={600}>
                    <TextPlaceholder type="description" note="ブランド説明文準備中">
                      <p className="text-lg lg:text-xl text-white/90 font-light">
                        伝統的な職人技術と現代的なデザインが融合。一つひとつの指輪を細部まで丁寧に手作りしています。
                      </p>
                    </TextPlaceholder>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fadeInUp" delay={800}>
                    <TextPlaceholder type="description" note="こだわりポイント準備中">
                      <p className="text-base text-white/80">
                        特別な日から日常使いまで、一生大切にしていただける指輪をお作りしています。
                      </p>
                    </TextPlaceholder>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="fadeInUp" delay={1000}>
                    <div className="pt-6">
                      <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary-dark backdrop-blur-sm bg-white/10 px-8 py-4 text-lg font-medium">
                        <Link href="/about">
                          詳しく見る
                        </Link>
                      </Button>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
          
          {/* 装飾要素 */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-accent-gold/10 to-yellow-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-40 w-24 h-24 bg-gradient-to-br from-primary-green/10 to-accent-emerald/10 rounded-full blur-2xl"></div>
        </div>
      </Section>

    </MainLayout>
  )
}