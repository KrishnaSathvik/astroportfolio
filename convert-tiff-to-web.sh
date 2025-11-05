#!/bin/bash
# Convert TIFF images to web-friendly JPG format
# Run this script in the public/images/ directory

echo "Converting TIFF images to JPG..."
echo "Make sure you have ImageMagick installed: brew install imagemagick"

cd public/images/

for file in *.tif *.tiff; do
    if [ -f "$file" ]; then
        # Convert to lowercase and replace spaces/weird chars
        output=$(echo "$file" | tr '[:upper:]' '[:lower:]' | sed 's/\.tiff$/\.jpg/' | sed 's/\.tif$/\.jpg/' | sed 's/[^a-z0-9._-]/_/g')
        echo "Converting: $file -> $output"
        # Resize to max 2000px width and convert to JPG with quality 85
        convert "$file" -resize 2000x -quality 85 "$output"
    fi
done

echo "Conversion complete!"

