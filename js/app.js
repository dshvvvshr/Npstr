// napster - Nap Dating App JavaScript

// State management
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
            image: 'https://via.placeholder.com/400x500/6B5B95/FFFFFF?text=Profile+1'
        },
        {
            id: 2,
            name: 'Jordan',
            age: 25,
            bio: 'Looking for cozy nap spots and chill vibes ☁️',
            sleepCred: 980,
            preferences: ['Indoor', 'Music', '15-20 min'],
            image: 'https://via.placeholder.com/400x500/88B04B/FFFFFF?text=Profile+2'
        },
        {
            id: 3,
            name: 'Sam',
            age: 30,
            bio: 'Adventure napper! Let\'s find the most unique spots 🏔️',
            sleepCred: 2100,
            preferences: ['Outdoor', 'Adventure', '30-60 min'],
            image: 'https://via.placeholder.com/400x500/F7CAC9/FFFFFF?text=Profile+3'
        }
    ],
    currentProfileIndex: 0
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeSwipeCards();
    initializeModals();
    console.log('napster app initialized');
});

// Navigation
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            switchView(view);
            
            // Update active state
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function switchView(viewName) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.classList.remove('active'));
    
    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.classList.add('active');
        state.currentView = viewName;
    }
}

// Swipe functionality
function initializeSwipeCards() {
    const cardStack = document.querySelector('.card-stack');
    if (!cardStack) return;
    
    // Load first profile
    loadProfile(state.currentProfileIndex);
    
    // Add swipe event listeners
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('reject') || e.target.closest('.reject')) {
            handleReject();
        } else if (e.target.classList.contains('accept') || e.target.closest('.accept')) {
            handleAccept();
        } else if (e.target.classList.contains('info') || e.target.closest('.info')) {
            handleInfo();
        }
    });
    
    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    const card = document.querySelector('.profile-card');
    
    if (card) {
        card.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        card.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            handleReject();
        }
        if (touchEndX > touchStartX + 50) {
            handleAccept();
        }
    }
}

function loadProfile(index) {
    if (index >= state.profiles.length) {
        // No more profiles
        const cardStack = document.querySelector('.card-stack');
        if (cardStack) {
            cardStack.innerHTML = `
                <div class="profile-card">
                    <div class="card-info" style="padding: 3rem; text-align: center;">
                        <h2>No more profiles!</h2>
                        <p>Check back later for more nap matches 😴</p>
                    </div>
                </div>
            `;
        }
        return;
    }
    
    const profile = state.profiles[index];
    const cardStack = document.querySelector('.card-stack');
    
    if (cardStack) {
        cardStack.innerHTML = `
            <div class="profile-card" data-profile-id="${profile.id}">
                <div class="card-image">
                    <img src="${profile.image}" alt="Profile">
                </div>
                <div class="card-info">
                    <h2>${profile.name} <span class="age">${profile.age}</span></h2>
                    <p class="bio">${profile.bio}</p>
                    <div class="sleep-cred">
                        <span class="cred-badge">⭐ Sleep Cred: ${profile.sleepCred}</span>
                    </div>
                    <div class="nap-preferences">
                        ${profile.preferences.map(pref => `<span class="tag">${pref}</span>`).join('')}
                    </div>
                </div>
                <div class="card-actions">
                    <button class="action-btn reject">✗</button>
                    <button class="action-btn info">ℹ️</button>
                    <button class="action-btn accept">♥</button>
                </div>
            </div>
        `;
    }
}

function handleReject() {
    console.log('Rejected profile:', state.profiles[state.currentProfileIndex]);
    animateCardOut('left');
    state.currentProfileIndex++;
    setTimeout(() => {
        loadProfile(state.currentProfileIndex);
    }, 300);
}

function handleAccept() {
    console.log('Accepted profile:', state.profiles[state.currentProfileIndex]);
    showNotification('It\'s a match! 💤');
    animateCardOut('right');
    state.currentProfileIndex++;
    setTimeout(() => {
        loadProfile(state.currentProfileIndex);
    }, 300);
}

function handleInfo() {
    const profile = state.profiles[state.currentProfileIndex];
    alert(`More about ${profile.name}:\n\nSleep Cred: ${profile.sleepCred}\nPreferences: ${profile.preferences.join(', ')}\n\nThis would show a detailed profile view.`);
}

function animateCardOut(direction) {
    const card = document.querySelector('.profile-card');
    if (card) {
        const translateX = direction === 'left' ? '-150%' : '150%';
        card.style.transform = `translateX(${translateX}) rotate(${direction === 'left' ? '-' : ''}20deg)`;
        card.style.opacity = '0';
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #6B5B95, #88B04B);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        animation: slideDown 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Modal functionality
function initializeModals() {
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

function showCreatePost() {
    const modal = document.getElementById('create-post-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function showSubmitSpot() {
    const modal = document.getElementById('submit-spot-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Social features
function likePost(postId) {
    console.log('Liked post:', postId);
    showNotification('Post liked! ❤️');
}

function commentPost(postId) {
    console.log('Comment on post:', postId);
    // Would open comment modal
}

function sharePost(postId) {
    console.log('Shared post:', postId);
    showNotification('Post shared! ↗️');
}

// Challenge features
function acceptChallenge(challengeId) {
    console.log('Accepted challenge:', challengeId);
    showNotification('Challenge accepted! 🏆');
}

function submitProgress(challengeId) {
    console.log('Submit progress for challenge:', challengeId);
    // Would open progress submission modal
}

// Map features
function viewNapSpot(spotId) {
    console.log('View nap spot:', spotId);
    // Would show detailed spot information
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Make functions globally available
window.showCreatePost = showCreatePost;
window.showSubmitSpot = showSubmitSpot;
window.closeModal = closeModal;
window.likePost = likePost;
window.commentPost = commentPost;
window.sharePost = sharePost;
window.acceptChallenge = acceptChallenge;
window.submitProgress = submitProgress;
window.viewNapSpot = viewNapSpot;
