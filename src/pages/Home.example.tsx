import { useState } from 'react'
import ImageCard from '../components/ImageCard'

// Example: How to add your images
// Replace this array with your actual astrophotography images
const astroImages = [
  {
    id: 1,
    title: 'Orion Nebula',
    description: 'A stunning deep space capture of the Orion Nebula showcasing stellar nurseries and cosmic dust clouds.',
    imageUrl: '/images/orion-nebula.jpg',  // ← Put your image in public/images/ folder
    category: 'Deep Space',
  },
  {
    id: 2,
    title: 'Milky Way Galaxy',
    description: 'The majestic spiral arms of our home galaxy captured in wide field astrophotography.',
    imageUrl: '/images/milky-way.jpg',  // ← Local image path
    category: 'Wide Field',
  },
  {
    id: 3,
    title: 'Aurora Borealis',
    description: 'Northern lights dancing across the night sky in vibrant colors.',
    imageUrl: '/images/aurora.jpg',  // ← Local image path
    category: 'Aurora',
  },
  // Add more images here...
  // {
  //   id: 4,
  //   title: 'Your Image Title',
  //   description: 'Your description',
  //   imageUrl: '/images/your-image.jpg',
  //   category: 'Deep Space',  // or 'Wide Field', 'Planetary', 'Lunar', 'Aurora', 'Time-Lapse'
  // },
]

// ... rest of the component code ...

