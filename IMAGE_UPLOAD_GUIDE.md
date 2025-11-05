# How to Upload and Display Your Images

## Step 1: Add Your Images to the Project

1. **Create images folder** (already created):
   ```
   public/images/
   ```

2. **Add your astrophotography images** to the `public/images/` folder
   - Recommended formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended size: 1200-2000px width for best quality
   - Name your files descriptively: `orion-nebula.jpg`, `milky-way.jpg`, etc.

## Step 2: Update Home.tsx with Your Images

Open `src/pages/Home.tsx` and replace the `astroImages` array with your actual images:

```typescript
const astroImages = [
  {
    id: 1,
    title: 'Your Image Title',
    description: 'Your description of the image',
    imageUrl: '/images/your-image-name.jpg',  // Path to your image
    category: 'Deep Space',  // Category: Deep Space, Wide Field, Planetary, Lunar, Aurora, Time-Lapse
  },
  {
    id: 2,
    title: 'Another Image Title',
    description: 'Another description',
    imageUrl: '/images/another-image.jpg',
    category: 'Wide Field',
  },
  // Add more images...
]
```

## Step 3: Image Paths

- **Local images**: Use `/images/your-image.jpg` (images should be in `public/images/`)
- **External URLs**: Use full URLs like `https://example.com/image.jpg`
- **CDN/Cloud Storage**: Use your CDN URLs (e.g., Cloudinary, Imgur, etc.)

## Example Structure

```
public/
  images/
    orion-nebula.jpg
    milky-way.jpg
    aurora-borealis.jpg
    saturn-rings.jpg
    ...
```

## Categories Available

- Deep Space
- Wide Field
- Planetary
- Lunar
- Aurora
- Time-Lapse

You can add new categories or modify existing ones as needed.

