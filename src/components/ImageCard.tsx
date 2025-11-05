import { useState } from 'react'

interface ImageCardProps {
  image: {
    id: number
    title: string
    description: string
    imageUrl: string
    category: string
  }
  index?: number
}

const ImageCard = ({ image }: ImageCardProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  // All cards use universal black background for consistency

  return (
    <div
      className="card-animate flex flex-col w-full hover:scale-105 transition-all duration-300 hover:shadow-3xl group animate-in rounded-3xl shadow-2xl overflow-hidden bg-zinc-900"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px',
      }}
    >
      {/* Image Section - Full image, no cropping, no overlay */}
      <div className="relative w-full">
        {image.imageUrl && (
          <img
            key={image.imageUrl}
            src={image.imageUrl}
            alt={image.title}
            className={`w-full h-auto block transition-opacity duration-500 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
            onLoad={() => {
              setIsLoading(false)
              setImageError(false)
            }}
            onError={(e) => {
              console.error(`Failed to load image: ${image.imageUrl}`, e)
              setImageError(true)
              setIsLoading(false)
            }}
          />
        )}
        
        {/* Error state - show placeholder */}
        {imageError && (
          <div className="w-full h-64 bg-zinc-800 flex items-center justify-center text-zinc-500">
            <div className="text-center">
              <p className="text-sm font-geist">Image failed to load</p>
              <p className="text-xs mt-2 font-geist opacity-75">{image.imageUrl}</p>
            </div>
          </div>
        )}
        
        {/* Category Badge - Top Right Corner */}
        <div className="absolute top-4 right-4">
          <span className="text-xs px-3 py-1.5 rounded-full font-geist backdrop-blur-sm bg-emerald-500/30 text-emerald-300 border border-emerald-400/30">
            {image.category}
          </span>
        </div>
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      
      {/* Content Section - Universal black background below image */}
      <div className="p-6 sm:p-8 space-y-4 bg-zinc-900 text-white">
        {/* Title */}
        <div>
          <h3 className="text-2xl sm:text-3xl tracking-tight font-geist font-semibold text-white">
            {image.title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-sm sm:text-base leading-relaxed font-geist text-zinc-400">
          {image.description}
        </p>
      </div>
    </div>
  )
}

export default ImageCard

