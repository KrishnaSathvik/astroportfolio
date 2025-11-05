import { useState } from 'react'
import ImageCard from '../components/ImageCard'

// Your astrophotography images
// NOTE: TIFF files don't work in browsers - convert them to JPG/PNG first!
// After converting, update the imageUrl paths below
const astroImages = [
  {
    id: 1,
    title: 'Artist Palette + Milky Way',
    description: 'The colorful Artist Palette with the Milky Way arching overhead.',
    imageUrl: '/images/artistpallet_milkyway.jpg',
    category: 'Vertical',
  },
  {
    id: 8,
    title: 'Light Painting',
    description: 'Creative light painting under the stars.',
    imageUrl: '/images/lightpainting.jpg',
    category: 'Vertical',
  },
  {
    id: 25,
    title: 'Rock Silhouette',
    description: 'Rock formation silhouetted against the night sky.',
    imageUrl: '/images/rock_silhouette.jpg',
    category: 'Vertical',
  },
  {
    id: 19,
    title: 'Dunes',
    description: 'Sand dunes at night with the Milky Way.',
    imageUrl: '/images/dunes.jpg',
    category: 'Vertical',
  },
  {
    id: 17,
    title: 'Badwater Light Pollution',
    description: 'Light pollution effects captured at Badwater Basin.',
    imageUrl: '/images/badwaterlightpollution.jpg',
    category: 'Vertical',
  },
  {
    id: 32,
    title: 'Dunes 1',
    description: 'Sand dunes at night under the stars.',
    imageUrl: '/images/dunes1.jpg',
    category: 'Vertical',
  },
  {
    id: 13,
    title: 'Sand Dunes + Milky Way',
    description: 'Sand dunes silhouetted against the Milky Way.',
    imageUrl: '/images/sanddunes_milkyway.jpg',
    category: 'Vertical',
  },
  {
    id: 14,
    title: 'Badwater Meteor',
    description: 'Meteor captured over Badwater Basin.',
    imageUrl: '/images/badwatermeteor.jpg',
    category: 'Vertical',
  },
  {
    id: 15,
    title: 'Badwater Light Painting',
    description: 'Light painting at Badwater Basin under the stars.',
    imageUrl: '/images/badwaterlightpainting.jpg',
    category: 'Vertical',
  },
  {
    id: 16,
    title: 'Badwater Milky Way',
    description: 'Milky Way over Badwater Basin.',
    imageUrl: '/images/badwatermilkyway.jpg',
    category: 'Vertical',
  },
  {
    id: 31,
    title: 'Stars',
    description: 'A starry night sky captured in detail.',
    imageUrl: '/images/stars.jpg',
    category: 'Vertical',
  },
  {
    id: 22,
    title: 'Star Trails',
    description: 'Long exposure capturing star trails showing Earth\'s rotation.',
    imageUrl: '/images/startrail.jpg',
    category: 'Vertical',
  },
  {
    id: 11,
    title: 'Milky Way Core',
    description: 'Detailed capture of the Milky Way galactic center.',
    imageUrl: '/images/milkywaycore.jpg',
    category: 'Horizontal',
  },
  {
    id: 9,
    title: 'Meteor + Milky Way',
    description: 'Perseid meteor captured with the Milky Way during the meteor shower.',
    imageUrl: '/images/meteor_milkyway.jpg',
    category: 'Horizontal',
  },
  {
    id: 10,
    title: 'Milky Way + Stars',
    description: 'The Milky Way core with surrounding stars.',
    imageUrl: '/images/milkyway_stars.jpg',
    category: 'Horizontal',
  },
  {
    id: 21,
    title: 'Zabriskie Point',
    description: 'Zabriskie Point at night with the Milky Way.',
    imageUrl: '/images/zabriskipoint.jpg',
    category: 'Horizontal',
  },
  {
    id: 26,
    title: 'Milky Way 1',
    description: 'Milky Way captured in stunning detail.',
    imageUrl: '/images/milkyway1.jpg',
    category: 'Horizontal',
  },
  {
    id: 2,
    title: 'Aurora',
    description: 'Northern lights dancing across the night sky in vibrant colors.',
    imageUrl: '/images/aurora.jpg',
    category: 'Horizontal',
  },
  
  {
    id: 5,
    title: 'Geyser + Milky Way',
    description: 'Geyser activity captured with the Milky Way overhead.',
    imageUrl: '/images/geyser_milkyway.jpg',
    category: 'Vertical',
  },
  {
    id: 3,
    title: 'Cabin + Milky Way',
    description: 'A rustic cabin silhouetted against the Milky Way.',
    imageUrl: '/images/cabin_milkyway.jpg',
    category: 'Vertical',
  },
  {
    id: 4,
    title: 'Dome + Milky Way',
    description: 'Geological dome formation with the Milky Way in the background.',
    imageUrl: '/images/dome_milkyway.jpg',
    category: 'Horizontal',
  },
  {
    id: 20,
    title: 'Cabin Light Painting',
    description: 'Light painting at the cabin location.',
    imageUrl: '/images/cabinlightpainting.jpg',
    category: 'Light Paint',
  },
  {
    id: 28,
    title: 'Milky Way 3',
    description: 'The Milky Way arching across the night sky.',
    imageUrl: '/images/milkyway3.jpg',
    category: 'Vertical',
  },
  {
    id: 18,
    title: 'Double Aurora',
    description: 'Rare double aurora display captured in the night sky.',
    imageUrl: '/images/doubleaurora.jpg',
    category: 'Horizontal',
  },
  {
    id: 12,
    title: 'Old Faithful Night',
    description: 'Old Faithful geyser at night with the Milky Way.',
    imageUrl: '/images/oldfaithful_night.jpg',
    category: 'Horizontal',
  }, 
  {
    id: 29,
    title: 'Milky Way 4',
    description: 'Capturing the Milky Way\'s grandeur.',
    imageUrl: '/images/milkyway4.jpg',
    category: 'Vertical',
  },
  {
    id: 30,
    title: 'Milky Way Domes',
    description: 'Domes with the Milky Way in the background.',
    imageUrl: '/images/milkywaydomes.jpg',
    category: 'Horizontal',
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
          {currentImages.map((image, index) => (
            <ImageCard key={image.id} image={image} index={startIndex + index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg font-geist transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 disabled:hover:bg-white border border-zinc-200"
            >
              Previous
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-geist transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-zinc-900 text-white shadow-lg'
                      : 'bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg font-geist transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 disabled:hover:bg-white border border-zinc-200"
            >
              Next
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

