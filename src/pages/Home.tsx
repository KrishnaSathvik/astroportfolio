import { useState } from 'react'
import ImageCard from '../components/ImageCard'

// Your astrophotography images
// NOTE: TIFF files don't work in browsers - convert them to JPG/PNG first!
// After converting, update the imageUrl paths below
const astroImages = [
  {
    id: 1,
    title: 'Artist\'s Palette',
    description: 'The colorful Artist Palette with the Milky Way arching overhead.',
    imageUrl: '/images/artistpallet_milkyway.jpg',
    category: 'Vertical',
    location: 'Artist Palette, Death Valley National Park',
  },
  {
    id: 8,
    title: 'Heart of Light',
    description: 'Creative light painting under the stars.',
    imageUrl: '/images/lightpainting.jpg',
    category: 'Vertical',
    location: 'Natural Bridge Trail, Death Valley National Park',
  },
  {
    id: 25,
    title: 'Silhouette Beneath the Stars',
    description: 'Rock formation silhouetted against the night sky.',
    imageUrl: '/images/rock_silhouette.jpg',
    category: 'Vertical',
    location: 'Balanced Rock, Big Bend National Park',
  },
  {
    id: 19,
    title: 'Desert Starlight',
    description: 'Sand dunes at night with the Milky Way.',
    imageUrl: '/images/dunes.jpg',
    category: 'Vertical',
    location: 'Mesquite Flat Sand Dunes, Death Valley National Park',
  },
  {
    id: 17,
    title: 'Desert Glow',
    description: 'Light pollution effects captured at Badwater Basin.',
    imageUrl: '/images/badwaterlightpollution.jpg',
    category: 'Vertical',
    location: 'Badwater Basin, Death Valley National Park',
  },
  {
    id: 32,
    title: 'Starlit Dunes',
    description: 'Sand dunes at night under the stars.',
    imageUrl: '/images/dunes1.jpg',
    category: 'Vertical',
    location: 'Mesquite Flat Sand Dunes, Death Valley National Park',
  },
  {
    id: 13,
    title: 'Ripples of the Night Sky',
    description: 'Sand dunes silhouetted against the Milky Way.',
    imageUrl: '/images/sanddunes_milkyway.jpg',
    category: 'Vertical',
    location: 'Mesquite Flat Sand Dunes, Death Valley National Park',
  },
  {
    id: 14,
    title: 'Badwater Reflections',
    description: 'Meteor captured over Badwater Basin.',
    imageUrl: '/images/badwatermeteor.jpg',
    category: 'Vertical',
    location: 'Badwater Basin, Death Valley National Park',
  },
  {
    id: 15,
    title: 'Badwater Glow',
    description: 'Light painting at Badwater Basin under the stars.',
    imageUrl: '/images/badwaterlightpainting.jpg',
    category: 'Vertical',
    location: 'Badwater Basin, Death Valley National Park',
  },
  {
    id: 16,
    title: 'Milky Way Over Badwater',
    description: 'Milky Way over Badwater Basin.',
    imageUrl: '/images/badwatermilkyway.jpg',
    category: 'Vertical',
    location: 'Badwater Basin, Death Valley National Park',
  },
  {
    id: 31,
    title: 'Infinite Starscape',
    description: 'A starry night sky captured in detail.',
    imageUrl: '/images/stars.jpg',
    category: 'Vertical',
    location: 'Mosaic Canyon, Death Valley National Park',
  },
  {
    id: 22,
    title: 'Circles of Time',
    description: 'Long exposure capturing star trails showing Earth\'s rotation.',
    imageUrl: '/images/startrail.jpg',
    category: 'Vertical',
    location: 'Mosaic Canyon, Death Valley National Park',
  },
  {
    id: 11,
    title: 'Galactic Core',
    description: 'Detailed capture of the Milky Way galactic center.',
    imageUrl: '/images/milkywaycore.jpg',
    category: 'Horizontal',
    location: 'Big Bend National Park',
  },
  {
    id: 9,
    title: 'Yellowstone Meteor',
    description: 'Perseid meteor captured with the Milky Way during the meteor shower.',
    imageUrl: '/images/meteor_milkyway.jpg',
    category: 'Horizontal',
    location: 'Near Grand Geyser, Yellowstone National Park',
  },
  {
    id: 10,
    title: 'Sea of Stars',
    description: 'The Milky Way core with surrounding stars.',
    imageUrl: '/images/milkyway_stars.jpg',
    category: 'Horizontal',
    location: 'Big Bend National Park',
  },
  {
    id: 21,
    title: 'Zabriskie Dawn',
    description: 'Zabriskie Point at night with the Milky Way.',
    imageUrl: '/images/zabriskipoint.jpg',
    category: 'Horizontal',
    location: 'Zabriskie Point, Death Valley National Park',
  },
  {
    id: 26,
    title: 'Celestial Path I',
    description: 'Milky Way captured in stunning detail.',
    imageUrl: '/images/milkyway1.jpg',
    category: 'Horizontal',
    location: 'Big Bend National Park',
  },
  {
    id: 2,
    title: 'Northern Lights',
    description: 'Northern lights dancing across the night sky in vibrant colors.',
    imageUrl: '/images/aurora.jpg',
    category: 'Horizontal',
    location: 'Great Fountain Geyser, Yellowstone National Park',
  },
  
  {
    id: 5,
    title: 'Yellowstone Geyser Night',
    description: 'Geyser activity captured with the Milky Way overhead.',
    imageUrl: '/images/geyser_milkyway.jpg',
    category: 'Vertical',
    location: 'White Dome Geyser, Yellowstone National Park',
  },
  {
    id: 3,
    title: 'Cabin Under the Stars',
    description: 'A rustic cabin silhouetted against the Milky Way.',
    imageUrl: '/images/cabin_milkyway.jpg',
    category: 'Vertical',
    location: 'The Summit, Big Bend',
  },
  {
    id: 4,
    title: 'Desert Dome Nights',
    description: 'Geological dome formation with the Milky Way in the background.',
    imageUrl: '/images/dome_milkyway.jpg',
    category: 'Horizontal',
    location: 'The Summit, Big Bend',
  },
  {
    id: 20,
    title: 'Light Within the Night',
    description: 'Light painting at the cabin location.',
    imageUrl: '/images/cabinlightpainting.jpg',
    category: 'Light Paint',
    location: '29.3773917,-104.10665, Big Bend National Park',
  },
  {
    id: 28,
    title: 'Celestial Path III',
    description: 'The Milky Way arching across the night sky.',
    imageUrl: '/images/milkyway3.jpg',
    category: 'Vertical',
    location: 'Big Bend National Park',
  },
  {
    id: 18,
    title: 'Twin Auroras',
    description: 'Rare double aurora display captured in the night sky.',
    imageUrl: '/images/doubleaurora.jpg',
    category: 'Horizontal',
    location: 'Great Fountain Geyser, Yellowstone National Park',
  },
  {
    id: 12,
    title: 'Old Faithful Nightsky',
    description: 'Old Faithful geyser at night with the Milky Way.',
    imageUrl: '/images/oldfaithful_night.jpg',
    category: 'Horizontal',
    location: 'Old Faithful, Yellowstone National Park',
  }, 
  {
    id: 29,
    title: 'Celestial Path IV',
    description: 'Capturing the Milky Way\'s grandeur.',
    imageUrl: '/images/milkyway4.jpg',
    category: 'Vertical',
    location: 'Big Bend National Park',
  },
  {
    id: 30,
    title: 'Under the Domes',
    description: 'Domes with the Milky Way in the background.',
    imageUrl: '/images/milkywaydomes.jpg',
    category: 'Horizontal',
    location: 'The Summit, Big Bend',
  },
]

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const imagesPerPage = 6
  
  const categories = ['All', ...Array.from(new Set(astroImages.map(img => img.category)))]

  const filteredImages =
    selectedCategory === 'All'
      ? astroImages
      : astroImages.filter(img => img.category === selectedCategory)

  // Calculate pagination
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage)
  const startIndex = (currentPage - 1) * imagesPerPage
  const endIndex = startIndex + imagesPerPage
  const currentImages = filteredImages.slice(startIndex, endIndex)

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <main className="flex-1 w-full px-4 pb-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="title-animate text-center mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-zinc-900 tracking-tight mb-6 font-geist font-semibold">
            Astrophotography Portfolio
          </h1>
          <p className="text-zinc-600 text-xl max-w-2xl mx-auto font-geist">
            Capturing the cosmos through the lens of astrophotography
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 font-geist ${
                selectedCategory === category
                  ? 'bg-zinc-900 text-white shadow-lg'
                  : 'bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-12">
          {currentImages.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-12 px-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-2 sm:px-4 py-2 rounded-lg font-geist text-sm sm:text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 disabled:hover:bg-white border border-zinc-200 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>
            
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full scrollbar-hide">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                const showPage = 
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 1 && page <= currentPage + 1) ||
                  (currentPage <= 3 && page <= 5) ||
                  (currentPage >= totalPages - 2 && page >= totalPages - 4)
                
                const showEllipsis = 
                  (page === currentPage - 2 && currentPage > 4) ||
                  (page === currentPage + 2 && currentPage < totalPages - 3)
                
                if (showEllipsis) {
                  return (
                    <span key={`ellipsis-${page}`} className="text-zinc-500 px-1">
                      ...
                    </span>
                  )
                }
                
                if (!showPage) return null
                
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-geist text-xs sm:text-base transition-all duration-200 flex-shrink-0 ${
                      currentPage === page
                        ? 'bg-zinc-900 text-white shadow-lg'
                        : 'bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200'
                    }`}
                  >
                    {page}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-2 sm:px-4 py-2 rounded-lg font-geist text-sm sm:text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 disabled:hover:bg-white border border-zinc-200 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
            </button>
          </div>
        )}

        {/* Page Info */}
        {filteredImages.length > 0 && (
          <div className="text-center mt-6 text-zinc-600 font-geist text-sm">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredImages.length)} of {filteredImages.length} images
          </div>
        )}
      </div>
    </main>
  )
}

export default Home

