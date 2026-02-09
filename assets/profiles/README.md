# Profile Images

This directory contains profile photos for user profiles in the swipe view.

## Specifications

- **Format:** JPG or PNG
- **Recommended Size:** 400x600 pixels (portrait orientation)
- **Aspect Ratio:** 2:3 (portrait)
- **File Size:** Keep under 500KB for optimal performance
- **Quality:** High-quality, well-lit photos

## Naming Convention

Use descriptive names:
- `profile-1.jpg`
- `profile-2.jpg`
- `profile-3.jpg`
- etc.

## Current Usage

The app currently needs at least 3 profile images for the swipe feature. Add more images by:

1. Place your images in this directory
2. Update the profile data in `/js/app.js` (lines 6-35)
3. Reference them as `assets/profiles/your-image.jpg`

## Example

```javascript
{
    id: 1,
    name: 'Alex',
    age: 28,
    bio: 'Power napper 💤 Love afternoon naps in the park',
    sleepCred: 1250,
    preferences: ['Quiet Places', 'Nature', '20-30 min'],
    image: 'assets/profiles/profile-1.jpg'  // ← Update this path
}
```
