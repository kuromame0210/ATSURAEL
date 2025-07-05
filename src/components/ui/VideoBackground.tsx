import React from 'react'

interface VideoBackgroundProps {
  videoSrc?: string
  posterSrc?: string
  className?: string
  children?: React.ReactNode
  overlay?: boolean
  overlayOpacity?: number
  isPending?: boolean
  note?: string
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  posterSrc,
  className = '',
  children,
  overlay = true,
  overlayOpacity = 0.3,
  isPending = true,
  note
}) => {
  if (isPending || !videoSrc) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* プレースホルダー背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background-green to-gray-50">
          <div className="absolute inset-0 bg-yellow-50/80 border-4 border-dashed border-yellow-300">
            <div className="flex flex-col items-center justify-center h-full text-yellow-700">
              <div className="text-6xl mb-4">🎬</div>
              <div className="text-lg font-medium mb-2">動画背景エリア</div>
              <div className="text-sm opacity-75">ここに動画を入れる</div>
              {note && (
                <div className="text-xs mt-2 text-center max-w-xs">
                  ({note})
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* コンテンツ */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 動画背景 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* オーバーレイ */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {/* コンテンツ */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export { VideoBackground }