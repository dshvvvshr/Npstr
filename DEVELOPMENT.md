# napster Development Guide

## Overview
napster is a dating application centered around finding compatible nap partners. The application provides a Tinder-style interface combined with social features, location-based nap spot discovery, and a gamified reputation system.

## Domain
**Live URL:** www.napsterworld.info

## Architecture

### Frontend
- **Technology Stack:**
  - HTML5 for structure
  - CSS3 with custom properties for styling
  - Vanilla JavaScript for interactivity
  - No external dependencies or frameworks

### File Structure
```
napster/
├── index.html          # Main application file with all views
├── assets/             # Static assets
│   ├── icon.svg       # Application icon (SVG)
│   ├── icon.png       # Icon symlink
│   ├── logo.svg       # Application logo (SVG)
│   └── logo.png       # Logo symlink
├── styles/
│   └── main.css       # Complete styling for all views
├── js/
│   └── app.js         # Application logic and interactivity
├── package.json       # Project metadata
├── .gitignore         # Git ignore rules
└── README.md          # User-facing documentation
```

## Features Implementation

### 1. Swipe Interface (Tinder-like Matching)
- **Location:** `#swipe-view` in index.html
- **JavaScript:** `initializeSwipeCards()` in app.js
- **Features:**
  - Card-based profile display
  - Accept (♥), Reject (✗), and Info (ℹ️) buttons
  - Touch swipe support for mobile devices
  - Animated card transitions
  - Match notifications

### 2. Map & Location Features
- **Location:** `#map-view` in index.html
- **Features:**
  - Placeholder for interactive map integration
  - Nap spot submissions
  - Spot reviews and ratings
  - Location filtering

**Future Integration:**
- Google Maps API or Mapbox for real mapping
- Geolocation API for user location
- Backend API for storing spot data

### 3. Social Feed
- **Location:** `#social-view` in index.html
- **Features:**
  - Post creation and sharing
  - Like, comment, and share functionality
  - User engagement tracking
  - Photo uploads (UI ready, backend needed)

### 4. Sleep Cred System
- **Location:** Integrated throughout, primary view in `#challenges-view`
- **Components:**
  - Point-based reputation system
  - Challenge completion rewards
  - Activity tracking
  - Leaderboard potential

### 5. Challenges
- **Location:** `#challenges-view` in index.html
- **Features:**
  - Active challenges display
  - Progress tracking with visual progress bars
  - Challenge creation interface
  - Community voting system for adventurous naps
  - Nap date sharing

### 6. User Profiles
- **Location:** `#profile-view` in index.html
- **Features:**
  - Profile statistics (Sleep Cred, Nap Dates, Posts)
  - Nap preferences customization
  - Activity history
  - Profile editing (UI ready)

## Styling System

### Color Palette
```css
--primary-color: #6B5B95    /* Purple - main brand color */
--secondary-color: #88B04B  /* Green - success/accept */
--accent-color: #F7CAC9     /* Pink - highlights */
--dark-bg: #2C2C2C          /* Dark backgrounds */
--light-bg: #F5F5F5         /* Light backgrounds */
--card-bg: #FFFFFF          /* Card backgrounds */
--text-primary: #333333     /* Main text */
--text-secondary: #666666   /* Secondary text */
```

### Design Principles
- Clean, modern interface
- Generous use of whitespace
- Consistent border-radius (8px, 12px, 16px)
- Smooth transitions and animations
- Mobile-first responsive design

## JavaScript Architecture

### State Management
```javascript
const state = {
    currentView: 'swipe',
    profiles: [...],
    currentProfileIndex: 0
}
```

### Key Functions
- `switchView(viewName)` - Navigation between views
- `loadProfile(index)` - Load profile cards
- `handleAccept()` / `handleReject()` - Swipe actions
- `showNotification(message)` - User feedback
- Modal management functions

### Event Handling
- Navigation button clicks
- Card action buttons
- Touch/swipe gestures for mobile
- Modal interactions

## Development Setup

### Local Development
```bash
# Clone repository
git clone https://github.com/dshvvvshr/Npstr.git
cd Npstr

# Start development server
python3 -m http.server 8000

# Open browser
open http://localhost:8000
```

### Testing Locally
1. Start the server
2. Open browser to localhost:8000
3. Test each view:
   - Swipe through profiles
   - Navigate all views
   - Test responsive design
   - Verify modal interactions

## Future Backend Integration

### API Endpoints Needed
```
POST /api/auth/login
POST /api/auth/register
GET  /api/profiles
POST /api/profiles/swipe
GET  /api/spots
POST /api/spots
GET  /api/feed
POST /api/posts
GET  /api/challenges
POST /api/challenges/progress
```

### Database Schema
**Users**
- id, name, age, bio, preferences, sleep_cred

**NapSpots**
- id, name, location, photos, ratings, reviews

**Posts**
- id, user_id, content, photo, likes, comments, shares

**Challenges**
- id, name, description, reward, participants

**Matches**
- id, user1_id, user2_id, matched_at

## Responsive Design

### Breakpoints
- Desktop: > 768px
- Mobile: ≤ 768px

### Mobile Optimizations
- Vertical navigation menu
- Icon-only navigation labels
- Stacked layouts
- Touch-friendly button sizes
- Swipe gestures enabled

## Performance Considerations

### Current Implementation
- No external dependencies (fast loading)
- Inline SVG for logo/icon
- CSS animations (GPU accelerated)
- Minimal JavaScript overhead

### Optimization Opportunities
- Image lazy loading
- Code splitting for views
- Service worker for offline support
- CDN for static assets

## Deployment

### Static Hosting Options
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

### Domain Configuration
- Domain: www.napsterworld.info
- SSL/TLS certificate required
- DNS configuration to point to hosting

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast ratios
- Focus indicators

## Security Considerations
- Input sanitization needed for user content
- XSS prevention in post content
- CSRF protection for API calls
- Authentication token management
- Secure password hashing (backend)

## Contributing
1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## License
MIT License

## Support
For issues or questions, please open a GitHub issue at:
https://github.com/dshvvvshr/Npstr/issues
