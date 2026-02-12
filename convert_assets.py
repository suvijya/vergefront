
import os
from PIL import Image

# Directory containing images
asset_dir = 'asset'

# List of files to convert (excluding 'earth.png', 'fullearth.png', 'verge logo final.png')
files_to_convert = [
    'mercury.png', 'venus.png', 'mars.png', 'jupiter.png', 'saturn.png',
    'uranus.png', 'neptune.png', 'pluto.png', 'moon.png', 'sun.png',
    'dathomir.png', 'kashyk.png', 'genosis.png', 'naboo.png', 'corell.png',
    'tatoon.png', 'chandrila.png', 'ryloth.png'
]

print(f"Starting conversion of {len(files_to_convert)} images in '{asset_dir}'...")

for filename in files_to_convert:
    file_path = os.path.join(asset_dir, filename)
    if os.path.exists(file_path):
        name, ext = os.path.splitext(filename)
        output_path = os.path.join(asset_dir, f"{name}.webp")
        
        try:
            with Image.open(file_path) as img:
                print(f"Converting {filename} to WebP...")
                img.save(output_path, 'WEBP', quality=85)
                print(f"Saved {output_path}")
        except Exception as e:
            print(f"Error converting {filename}: {e}")
    else:
        print(f"File not found: {filename}")

print("Conversion complete.")
