# Image Integration Guide

This guide explains how to add your custom images (profile photos, logos, spot images) to the napster app.

## 📁 Directory Structure

```
assets/
├── icons/          # App logo and icon
│   ├── logo.png    # Navigation bar logo
│   ├── icon.jpg    # PWA/favicon icon
│   └── README.md
├── profiles/       # User profile photos for swipe view
│   └── README.md
├── spots/          # Nap spot location images
│   └── README.md
└── posts/          # Social feed post images
    └── README.md
```

## 🖼️ Image Specifications

### Profile Photos (Swipe Cards)
- **Location:** `assets/profiles/`
- **Format:** JPG or PNG
- **Size:** 400x600 pixels (portrait)
- **Aspect Ratio:** 2:3
- **File Size:** < 500KB
- **Quantity Needed:** At least 3 profiles
- **Examples:** `profile-1.jpg`, `profile-2.jpg`, `profile-3.jpg`

### App Logo
- **Location:** `assets/icons/logo.png`
- **Format:** PNG (transparent background preferred)
- **Display Size:** 40px height (auto-width)
- **Recommended:** Square or wide rectangular
- **File Size:** < 200KB

### App Icon
- **Location:** `assets/icons/icon.jpg`
- **Format:** JPG or PNG
- **Size:** 512x512 pixels (minimum)
- **Aspect Ratio:** Square (1:1)
- **File Size:** < 100KB
- **Usage:** PWA icon, favicon, touch icon

### Nap Spot Images
- **Location:** `assets/spots/`
- **Format:** JPG or PNG
- **Size:** 80x80 pixels (thumbnails)
- **Aspect Ratio:** Square (1:1)
- **File Size:** < 100KB

### Social Post Images
- **Location:** `assets/posts/`
- **Format:** JPG or PNG
- **Size:** 600x400 pixels (landscape)
- **Aspect Ratio:** 3:2
- **File Size:** < 500KB

## 🔧 How to Add Your Images

### Step 1: Prepare Your Images

Organize your images by type:
- Profile photos → `assets/profiles/`
- Nap spot images → `assets/spots/`
- Social post images → `assets/posts/`
- Logo and icon → `assets/icons/`

### Step 2: Update Profile Images

1. Add your profile photos to `assets/profiles/`
2. Edit `/js/app.js` (lines 6-35) to update image paths:

```javascript
const state = {
    currentView: 'swipe',
    profiles: [
        {
            id: 1,
            name: 'Alex',
            age: 28,
            bio: 'Power napper 💤 Love afternoon naps in the park',
            sleepCred: 1250,
            preferences: ['Quiet Places', 'Nature', '20-30 min'],
            image: 'assets/profiles/profile-1.jpg'  // ← Update this
        },
        {
            id: 2,
            name: 'Jordan',
            age: 25,
            bio: 'Looking for cozy nap spots and chill vibes ☁️',
            sleepCred: 980,
            preferences: ['Indoor', 'Music', '15-20 min'],
            image: 'assets/profiles/profile-2.jpg'  // ← Update this
        },
        {
            id: 3,
            name: 'Sam',
            age: 30,
            bio: 'Adventure napper! Let\'s find the most unique spots 🏔️',
            sleepCred: 2100,
            preferences: ['Outdoor', 'Adventure', '30-60 min'],
            image: 'assets/profiles/profile-3.jpg'  // ← Update this
        }
    ],
    currentProfileIndex: 0
};
```

### Step 3: Update Logo and Icon

1. Replace `assets/icons/logo.png` with your logo
2. Replace `assets/icons/icon.jpg` with your icon
3. Update `/index.html`:
   - Line 12: `<link rel="apple-touch-icon" href="assets/icons/icon.jpg">`
   - Line 22: `<link rel="icon" type="image/jpeg" href="assets/icons/icon.jpg">`
   - Line 30: `<img src="assets/icons/logo.png" alt="napster Logo" class="logo-img">`

4. Update `/manifest.json` (lines 10-16):
```json
"icons": [
    {
        "src": "assets/icons/icon.jpg",
        "sizes": "192x192",
        "type": "image/jpeg"
    },
    {
        "src": "assets/icons/icon.jpg",
        "sizes": "512x512",
        "type": "image/jpeg"
    }
]
```

### Step 4: Update Other Images in HTML

Edit `/index.html` to replace placeholder URLs:

**Map View Spot Image** (line 110):
```html
<img src="assets/spots/central-park.jpg" alt="Spot">
```

**Social Feed Avatar** (line 136):
```html
<img src="assets/profiles/user-avatar.jpg" alt="User" class="user-avatar">
```

**Social Feed Post Image** (line 144):
```html
<img src="assets/posts/botanical-garden.jpg" alt="Post" class="post-image">
```

**Challenge Nap Date Image** (line 219):
```html
<img src="assets/posts/nap-date-1.jpg" alt="Nap Date">
```

**Profile Avatar** (line 240):
```html
<img src="assets/profiles/your-avatar.jpg" alt="Profile" class="profile-avatar">
```

### Step 5: Update Service Worker Cache (Optional)

Edit `/sw.js` to include your new image paths in the cache (lines 3-12):

```javascript
const CACHE_NAME = 'napster-v3';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles/main.css',
    '/js/app.js',
    '/assets/icons/logo.png',
    '/assets/icons/icon.jpg',
    '/assets/profiles/profile-1.jpg',  // Add your images
    '/assets/profiles/profile-2.jpg',
    '/assets/profiles/profile-3.jpg',
    // Add more as needed
];
```

## 📋 Quick Checklist

- [ ] Add profile photos to `assets/profiles/`
- [ ] Update profile image paths in `js/app.js`
- [ ] Replace logo at `assets/icons/logo.png`
- [ ] Replace icon at `assets/icons/icon.jpg`
- [ ] Update HTML references in `index.html`
- [ ] Update manifest.json icon paths
- [ ] Add spot images to `assets/spots/`
- [ ] Add post images to `assets/posts/`
- [ ] Update service worker cache (optional)
- [ ] Test all images load correctly
- [ ] Clear browser cache and test PWA

## 🎨 Design Tips

- Use consistent style/theme across images
- Ensure good lighting and quality
- Profile photos should show people in relaxing/napping contexts
- Spot images should look inviting and peaceful
- Keep file sizes optimized for web
- Use appropriate image compression

## 🚀 Testing

After adding your images:

1. **Local Testing:**
   ```bash
   python3 -m http.server 8000
   # Open http://localhost:8000
   ```

2. **Check:**
   - Logo appears in navigation bar
   - Icon appears in browser tab
   - Profile cards show your images
   - Map spots show correct images
   - Social feed posts display properly

3. **PWA Testing:**
   - Clear browser cache
   - Unregister old service worker
   - Reinstall PWA on mobile device

## 📞 Need Help?

- Check each `assets/*/README.md` for specific requirements
- Verify file paths are correct (case-sensitive)
- Ensure images are in correct format and size
- Check browser console for loading errors

## 📝 Notes

- All paths are relative to the project root
- Image file names are case-sensitive
- Keep original aspect ratios for best display
- Consider using WebP format for better compression (optional)
- Always keep backup copies of your original images
