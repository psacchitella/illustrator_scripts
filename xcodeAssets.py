import os
import shutil
import json

# Re-define base paths after kernel reset
script_dir = os.path.dirname(os.path.abspath(__file__))  # path to script
source_folder = os.path.join(script_dir, "exported_assets")  # subfolder
xcassets_root = os.path.join(os.getcwd(), "Assets.xcassets")
appicon_path = os.path.join(xcassets_root, "AppIcon.appiconset")
launchimage_path = os.path.join(xcassets_root, "LaunchImage.launchimage")

os.makedirs(appicon_path, exist_ok=True)
os.makedirs(launchimage_path, exist_ok=True)

# Define mappings for App Icons and Launch Images
app_icons = [
    {"idiom": "iphone", "size": "20x20", "scale": "1x", "filename": "Icon-20@1x.png"},
    {"idiom": "iphone", "size": "20x20", "scale": "2x", "filename": "Icon-20@2x.png"},
    {"idiom": "iphone", "size": "20x20", "scale": "3x", "filename": "Icon-20@3x.png"},
    {"idiom": "iphone", "size": "29x29", "scale": "1x", "filename": "Icon-29@1x.png"},
    {"idiom": "iphone", "size": "29x29", "scale": "2x", "filename": "Icon-29@2x.png"},
    {"idiom": "iphone", "size": "29x29", "scale": "3x", "filename": "Icon-29@3x.png"},
    {"idiom": "iphone", "size": "40x40", "scale": "1x", "filename": "Icon-40@1x.png"},
    {"idiom": "iphone", "size": "40x40", "scale": "2x", "filename": "Icon-40@2x.png"},
    {"idiom": "iphone", "size": "40x40", "scale": "3x", "filename": "Icon-40@3x.png"},
    {"idiom": "iphone", "size": "60x60", "scale": "2x", "filename": "Icon-60@2x.png"},
    {"idiom": "iphone", "size": "60x60", "scale": "3x", "filename": "Icon-60@3x.png"},
    {"idiom": "ipad", "size": "76x76", "scale": "1x", "filename": "Icon-76@1x.png"},
    {"idiom": "ipad", "size": "76x76", "scale": "2x", "filename": "Icon-76@2x.png"},
    {"idiom": "ipad", "size": "83.5x83.5", "scale": "2x", "filename": "Icon-83.5@2x.png"},
    {"idiom": "ios-marketing", "size": "1024x1024", "scale": "1x", "filename": "Icon-1024.png"}
]

launch_images = [
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-320x568.png", "minimum-system-version": "7.0", "orientation": "portrait", "scale": "2x"},
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-375x667.png", "minimum-system-version": "8.0", "orientation": "portrait", "scale": "2x"},
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-414x736.png", "minimum-system-version": "9.0", "orientation": "portrait", "scale": "3x"},
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-375x812.png", "minimum-system-version": "11.0", "orientation": "portrait", "scale": "3x"},
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-390x844.png", "minimum-system-version": "14.0", "orientation": "portrait", "scale": "3x"},
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-393x852.png", "minimum-system-version": "14.0", "orientation": "portrait", "scale": "3x"},
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-402x874.png", "minimum-system-version": "16.0", "orientation": "portrait", "scale": "3x"},
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-414x896.png", "minimum-system-version": "12.0", "orientation": "portrait", "scale": "3x"},
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-428x926.png", "minimum-system-version": "14.0", "orientation": "portrait", "scale": "3x"},
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-430x932.png", "minimum-system-version": "15.0", "orientation": "portrait", "scale": "3x"},
    {"extent": "full-screen", "idiom": "iphone", "filename": "LaunchImage-440x956.png", "minimum-system-version": "16.0", "orientation": "portrait", "scale": "3x"},

    {"extent": "full-screen", "idiom": "ipad", "filename": "LaunchImage-768x1024.png", "minimum-system-version": "7.0", "orientation": "portrait", "scale": "2x"},
    {"extent": "full-screen", "idiom": "ipad", "filename": "LaunchImage-810x1080.png", "minimum-system-version": "13.0", "orientation": "portrait", "scale": "2x"},
    {"extent": "full-screen", "idiom": "ipad", "filename": "LaunchImage-834x1112.png", "minimum-system-version": "10.0", "orientation": "portrait", "scale": "2x"},
    {"extent": "full-screen", "idiom": "ipad", "filename": "LaunchImage-744x1133.png", "minimum-system-version": "14.0", "orientation": "portrait", "scale": "2x"},
    {"extent": "full-screen", "idiom": "ipad", "filename": "LaunchImage-820x1180.png", "minimum-system-version": "14.0", "orientation": "portrait", "scale": "2x"},
    {"extent": "full-screen", "idiom": "ipad", "filename": "LaunchImage-834x1194.png", "minimum-system-version": "11.0", "orientation": "portrait", "scale": "2x"},
    {"extent": "full-screen", "idiom": "ipad", "filename": "LaunchImage-1024x1366.png", "minimum-system-version": "9.0", "orientation": "portrait", "scale": "2x"}
]

# Function to simulate copying files by creating empty PNGs
# def create_placeholder_png(destination_path):
#     with open(destination_path, "wb") as f:
#         f.write(b"\x89PNG\r\n\x1a\n")  # Minimal valid PNG file header

# Generate App Icon files and Contents.json
for icon in app_icons:
    source = os.path.join(source_folder, icon["filename"])
    dest = os.path.join(appicon_path, icon["filename"])
    if os.path.exists(source):
        shutil.copy(source, dest)
    else:
        print(f"⚠️ Missing icon file: {source}")

with open(os.path.join(appicon_path, "Contents.json"), "w") as f:
    json.dump({"images": app_icons, "info": {"version": 1, "author": "xcode"}}, f, indent=2)

# Generate Launch Image files and Contents.json
for image in launch_images:
    source = os.path.join(source_folder, image["filename"])
    dest = os.path.join(launchimage_path, image["filename"])
    if os.path.exists(source):
        shutil.copy(source, dest)
    else:
        print(f"⚠️ Missing splash file: {source}")

with open(os.path.join(launchimage_path, "Contents.json"), "w") as f:
    json.dump({"images": launch_images, "info": {"version": 1, "author": "xcode"}}, f, indent=2)

xcassets_root
