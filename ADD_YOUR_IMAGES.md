# 📸 Ready for Your Images!

The napster app is now organized and ready to receive your custom images. Here's what you need to know:

## 📁 Where to Put Your Images

### 1. Profile Photos (REQUIRED)
**📂 Location:** `assets/profiles/`

Add at least 3 profile photos:
- `profile-1.jpg` (or .png)
- `profile-2.jpg`
- `profile-3.jpg`

**Specs:** 400x600 pixels (portrait), under 500KB each

**Then update:** `js/app.js` lines 6-35 to reference your images

### 2. App Logo (REQUIRED)
**📂 Location:** `assets/icons/logo.png`

Simply replace the existing `logo.png` file with yours!

**Specs:** PNG format, displays at 40px height, flexible width

### 3. App Icon (REQUIRED)
**📂 Location:** `assets/icons/icon.jpg`

Simply replace the existing `icon.jpg` file with yours!

**Specs:** 512x512 pixels (square), JPG or PNG

### 4. Nap Spot Images (OPTIONAL)
**📂 Location:** `assets/spots/`

Add images of nap locations for the map view.

**Specs:** 80x80 pixels (square thumbnails)

### 5. Social Post Images (OPTIONAL)
**📂 Location:** `assets/posts/`

Add images for the social feed posts.

**Specs:** 600x400 pixels (landscape)

## 🚀 Quick Start Steps

1. **Add your images** to the appropriate folders above
2. **For profile photos:** Update image paths in `js/app.js`
3. **For logo/icon:** Just replace the existing files
4. **Test:** Run `python3 -m http.server 8000` and open http://localhost:8000

## 📖 Complete Documentation

- **[IMAGE_GUIDE.md](IMAGE_GUIDE.md)** - Full guide with examples and all details
- **[LOGO_REPLACEMENT.md](LOGO_REPLACEMENT.md)** - Updated quick reference
- **[assets/profiles/README.md](assets/profiles/README.md)** - Profile photo details
- **[assets/icons/README.md](assets/icons/README.md)** - Logo and icon details
- **[assets/spots/README.md](assets/spots/README.md)** - Spot image details
- **[assets/posts/README.md](assets/posts/README.md)** - Post image details

## 📋 Image Size Reference

| Image Type | Folder | Size | Format |
|-----------|--------|------|--------|
| Profile Photos | `profiles/` | 400x600px | JPG/PNG |
| Logo | `icons/logo.png` | Flexible | PNG |
| Icon | `icons/icon.jpg` | 512x512px | JPG/PNG |
| Nap Spots | `spots/` | 80x80px | JPG/PNG |
| Posts | `posts/` | 600x400px | JPG/PNG |

## ✨ What's Already Done

✅ All folders created and organized
✅ All code updated to use new paths
✅ Documentation written with exact specifications
✅ Logo and icon paths working
✅ Service worker updated
✅ PWA manifest updated

## 💡 Tips

- Keep image file sizes reasonable for web performance
- Use descriptive file names (e.g., `beach-sunset.jpg`)
- Profile photos should show people in relaxing/nap contexts
- Maintain consistent quality across all images
- Test after adding images to ensure they load correctly

## 🎯 Next Steps

1. Gather your images (photos, logos, etc.)
2. Resize/optimize them to match specifications
3. Drop them into the appropriate folders
4. Update `js/app.js` for profile photo paths
5. Test locally to confirm everything looks good
6. Deploy!

**Questions?** Check [IMAGE_GUIDE.md](IMAGE_GUIDE.md) for detailed instructions with code examples.
