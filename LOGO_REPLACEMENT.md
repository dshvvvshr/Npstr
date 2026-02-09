# How to Add Your Custom Images

The napster app is ready for your custom images! Follow this guide to add your profile photos, logos, and other images.

## 📋 Quick Start

**See the comprehensive [IMAGE_GUIDE.md](IMAGE_GUIDE.md) for detailed instructions.**

## 🖼️ Image Types Needed

### 1. Profile Photos (Required)
- **Location:** `assets/profiles/`
- **Quantity:** At least 3 photos
- **Size:** 400x600 pixels (portrait)
- **Format:** JPG or PNG
- **Purpose:** User profile cards in swipe view

### 2. App Logo (Required)
- **Location:** `assets/icons/logo.png`
- **Size:** Flexible (displays at 40px height)
- **Format:** PNG preferred
- **Purpose:** Navigation bar

### 3. App Icon (Required)
- **Location:** `assets/icons/icon.jpg`
- **Size:** 512x512 pixels (square)
- **Format:** JPG or PNG
- **Purpose:** PWA icon, favicon

### 4. Nap Spot Images (Optional)
- **Location:** `assets/spots/`
- **Size:** 80x80 pixels (square)
- **Purpose:** Map view locations

### 5. Social Post Images (Optional)
- **Location:** `assets/posts/`
- **Size:** 600x400 pixels (landscape)
- **Purpose:** Social feed posts

## 🚀 Adding Your Images

### Step 1: Add Profile Photos

1. Place your photos in `assets/profiles/` directory:
   ```
   assets/profiles/profile-1.jpg
   assets/profiles/profile-2.jpg
   assets/profiles/profile-3.jpg
   ```

2. Update `js/app.js` (lines 6-35) to reference your images:
   ```javascript
   image: 'assets/profiles/profile-1.jpg'
   ```

### Step 2: Replace Logo and Icon

1. Replace the existing files:
   - `assets/icons/logo.png` - Your logo
   - `assets/icons/icon.jpg` - Your app icon

2. That's it! The app already references these paths.

### Step 3: Add Additional Images

For spots, posts, and other images, see detailed instructions in [IMAGE_GUIDE.md](IMAGE_GUIDE.md).

## 📁 Current Directory Structure

```
assets/
├── icons/          # Logo and app icon
│   ├── logo.png    # ← Replace with your logo
│   ├── icon.jpg    # ← Replace with your icon
│   └── README.md
├── profiles/       # User profile photos
│   └── README.md   # ← Add your photos here
├── spots/          # Nap location images
│   └── README.md
└── posts/          # Social feed images
    └── README.md
```

## ✅ Files Already Updated

The following files have been updated to use the new asset structure:
- ✅ `index.html` - Logo and icon paths
- ✅ `manifest.json` - PWA icon path
- ✅ `sw.js` - Service worker cache

You just need to add your image files!

## 🎨 Image Requirements Summary

| Type | Location | Size | Format | Quantity |
|------|----------|------|--------|----------|
| Profile Photos | `assets/profiles/` | 400x600px | JPG/PNG | 3+ |
| Logo | `assets/icons/logo.png` | Flexible | PNG | 1 |
| Icon | `assets/icons/icon.jpg` | 512x512px | JPG/PNG | 1 |
| Spot Images | `assets/spots/` | 80x80px | JPG/PNG | As needed |
| Post Images | `assets/posts/` | 600x400px | JPG/PNG | As needed |

## 📖 Additional Resources

- **[IMAGE_GUIDE.md](IMAGE_GUIDE.md)** - Complete guide with examples
- **[assets/profiles/README.md](assets/profiles/README.md)** - Profile photo specs
- **[assets/icons/README.md](assets/icons/README.md)** - Logo and icon specs
- **[assets/spots/README.md](assets/spots/README.md)** - Spot image specs
- **[assets/posts/README.md](assets/posts/README.md)** - Post image specs

## 🧪 Testing

After adding your images:

1. Start local server:
   ```bash
   python3 -m http.server 8000
   ```

2. Open http://localhost:8000 in your browser

3. Check that:
   - Logo appears in navigation bar
   - Icon shows in browser tab
   - Profile cards display your photos
   - All images load without errors

## 💡 Tips

- Keep file sizes reasonable (< 500KB for profiles)
- Use descriptive file names
- Maintain consistent image quality
- Test on mobile devices
- Consider image compression for better performance

## ❓ Need Help?

If you have questions or need clarification:
1. Check the [IMAGE_GUIDE.md](IMAGE_GUIDE.md) for detailed instructions
2. Review the README files in each asset directory
3. Ensure file paths match exactly (case-sensitive)
4. Check browser console for any loading errors

