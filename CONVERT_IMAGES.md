# Converting TIFF Images to Web Format

## Problem
TIFF files **don't work in web browsers**. Your images need to be converted to web-friendly formats like JPG, PNG, or WebP.

## Solution: Convert TIFF to JPG

### Option 1: Using ImageMagick (Command Line)

1. **Install ImageMagick** (if not already installed):
   ```bash
   brew install imagemagick
   ```

2. **Convert all TIFF files to JPG**:
   ```bash
   cd public/images/
   for file in *.tif *.tiff; do
     if [ -f "$file" ]; then
       output=$(echo "$file" | sed 's/\.tiff$/\.jpg/' | sed 's/\.tif$/\.jpg/' | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9._-]/_/g')
       echo "Converting: $file -> $output"
       convert "$file" -resize 2000x -quality 85 "$output"
     fi
   done
   ```

### Option 2: Using Preview (macOS)

1. Open each TIFF file in Preview
2. Go to **File → Export**
3. Choose **JPEG** format
4. Set quality to **85-90%**
5. Save with `.jpg` extension

### Option 3: Using Photoshop/Lightroom

1. Open your TIFF files
2. Export as JPEG with:
   - Quality: 85-90%
   - Max width: 2000px
   - Save as `.jpg`

### Option 4: Batch Convert with sips (macOS built-in)

```bash
cd public/images/
for file in *.tif *.tiff; do
  if [ -f "$file" ]; then
    output=$(echo "$file" | sed 's/\.tiff$/\.jpg/' | sed 's/\.tif$/\.jpg/')
    sips -s format jpeg -s formatOptions 85 --resampleWidth 2000 "$file" --out "$output"
  fi
done
```

## Recommended Settings

- **Format**: JPG (best compression for photos)
- **Quality**: 85-90% (good balance of quality and file size)
- **Max width**: 2000px (good for web display)
- **File naming**: Use lowercase, replace spaces with underscores

## After Converting

1. Your JPG files will be in `public/images/`
2. The `Home.tsx` file is already updated with your image paths
3. Just update the file extensions from `.tif` to `.jpg` in the paths
4. Refresh your browser to see the images!

## File Size Optimization

Your TIFF files are very large (43MB-304MB). After converting to JPG:
- Original TIFF: ~200MB
- Converted JPG: ~2-5MB (much better for web!)

This will make your site load much faster.

