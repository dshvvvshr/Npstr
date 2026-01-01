# napster

**Live at: www.napsterworld.info**

A dating app for casual nappers. Meet and nap.

## About

napster is a unique dating application centered around finding the perfect nap partner. It's Tinder for naps - swipe to find people to take naps with, discover amazing nap spots, and build your reputation through the Sleep Cred system.

**Optimized for mobile:** This app is specifically designed for iPhone and Android devices with full touch gesture support, PWA capabilities, and native-like experience.

## Features

### 🛏️ Swipe to Match
- Tinder-style swipe interface to find compatible nap partners
- View profiles with nap preferences, bio, and Sleep Cred score
- Instant matching when both users like each other
- Touch gesture support with visual feedback

### 🗺️ Interactive Map
- Discover nap spots near you
- Share location with matched users
- Submit your own favorite nap locations with photos
- View and review community-submitted nap spots
- See ratings and reviews from other nappers

### 👥 Social Features
- Create posts about your nap experiences
- Share photos from your nap dates
- Like, comment, and share posts from the community
- Follow other nappers and build your network
- Review nap spots and nap dates

### 🏆 Sleep Cred System
- Earn points for nap dates and activities
- Post your favorite or most adventurous nap dates
- Complete challenges to earn Sleep Cred points
- Create custom challenges for other users
- Compete on the leaderboard

### 💤 Challenge System
- Take on nap challenges (Urban Napper, Adventure Napper, etc.)
- Create challenges for the community
- Track progress on active challenges
- Earn rewards and boost your Sleep Cred

## Mobile Features

### iPhone Optimization
- Safe area support for notch and Dynamic Island
- iOS status bar styling
- Add to home screen support
- Haptic feedback on interactions
- Optimized touch targets (44x44px minimum)

### Android Optimization
- PWA manifest for installation
- Theme color integration
- Offline support via service worker
- Material Design-inspired interactions
- Optimized for various screen sizes

## Tech Stack

- HTML5
- CSS3 (Custom styling with CSS variables)
- Vanilla JavaScript
- PWA (Progressive Web App)
- Service Worker for offline support
- Responsive design for mobile and desktop

## Getting Started

### Prerequisites
- Python 3 (for local development server)
- Modern web browser

### Installation

1. Clone the repository
```bash
git clone https://github.com/dshvvvshr/Npstr.git
cd Npstr
```

2. Start the development server
```bash
npm start
# or
python3 -m http.server 8000
```

3. Open your browser and navigate to
```
http://localhost:8000
```

### Testing on Mobile

**iOS (iPhone/iPad):**
1. Open Safari and navigate to your local IP address
2. Tap the Share button
3. Select "Add to Home Screen"
4. The app will launch like a native app

**Android:**
1. Open Chrome and navigate to your local IP address
2. Tap the menu button (three dots)
3. Select "Add to Home Screen" or "Install App"
4. The app will install as a PWA

## Project Structure

```
napster/
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest for Android
├── sw.js              # Service worker for offline support
├── assets/             # Images, icons, and logos
│   ├── icon.svg       # App icon
│   └── logo.svg       # App logo
├── styles/
│   └── main.css       # Main stylesheet
├── js/
│   └── app.js         # Application JavaScript
├── package.json       # Project metadata
└── README.md          # This file
```

## Features Breakdown

### User Profiles
- Bio and personal information
- Nap preferences (duration, location type, environment)
- Sleep Cred score
- Activity history
- Favorite nap spots

### Matching System
- Swipe right to like
- Swipe left to pass
- Visual feedback during swipe
- Instant notifications on matches
- Chat with matched users

### Location & Maps
- GPS-based location sharing
- Pin favorite nap spots
- Upload photos of locations
- Rate and review spots
- Filter by amenities (quiet, shaded, indoor, outdoor, etc.)

### Social Feed
- Post updates and photos
- Share nap date stories
- Community engagement (likes, comments, shares)
- Discover trending nap spots

### Gamification
- Sleep Cred point system
- Achievement badges
- Challenge completion
- Leaderboards
- Special titles and ranks

## Roadmap

- [ ] Backend API integration
- [ ] Real-time chat functionality
- [ ] Push notifications
- [ ] Advanced map features with actual geolocation
- [ ] User authentication and profiles
- [ ] Photo upload functionality
- [ ] In-app messaging
- [ ] Premium features
- [ ] Native mobile apps (iOS/Android)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Domain

**Official Website:** www.napsterworld.info

## Contact

For questions or support, please open an issue on GitHub. 
