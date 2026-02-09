# App Icons and Logos

This directory contains the app logo and icon files.

## Current Files

- **logo.png** - Main app logo displayed in navigation bar (182KB)
- **icon.jpg** - App icon for PWA and favicon (90KB)

## Logo Specifications

- **Format:** PNG (with transparent background preferred)
- **Size:** Currently auto-sized to 40px height
- **Aspect Ratio:** Any (will maintain aspect ratio)
- **File Name:** `logo.png`
- **Usage:** Navigation bar top-left

## Icon Specifications

- **Format:** JPG or PNG
- **Size:** 512x512 pixels (minimum)
- **Aspect Ratio:** Square (1:1)
- **File Name:** `icon.jpg`
- **Usage:** 
  - Browser favicon
  - PWA app icon
  - Apple touch icon
  - Android home screen

## How to Replace

### Replace Logo

1. Place your new logo in this directory as `logo.png`
2. Update reference in `index.html` (line 30):
   ```html
   <img src="assets/icons/logo.png" alt="napster Logo" class="logo-img">
   ```

### Replace Icon

1. Place your new icon in this directory as `icon.jpg` (or `icon.png`)
2. Update references in:
   - `index.html` line 12: `<link rel="apple-touch-icon" href="assets/icons/icon.jpg">`
   - `index.html` line 22: `<link rel="icon" type="image/jpeg" href="assets/icons/icon.jpg">`
   - `manifest.json` line 12: Update the `src` path

## Design Recommendations

- Logo should be simple and recognizable
- Works on both light and dark backgrounds
- Icon should be clear at small sizes (16x16px)
- Use brand colors: Pink (#FE3C72), Teal (#00D4A1)
