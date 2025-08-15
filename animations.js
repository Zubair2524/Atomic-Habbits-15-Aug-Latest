// Animation functions for fireworks and balloons

function createFireworks() {
    const container = document.getElementById('fireworks-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.top = Math.random() * window.innerHeight + 'px';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            container.appendChild(firework);
            
            setTimeout(() => {
                container.removeChild(firework);
            }, 1000);
        }, i * 200);
    }
}

function createBalloons() {
    const container = document.getElementById('balloons-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = Math.random() * window.innerWidth + 'px';
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(balloon);
            
            setTimeout(() => {
                if (container.contains(balloon)) {
                    container.removeChild(balloon);
                }
            }, 6000);
        }, i * 300);
    }
}

function showWelcomeAnimation() {
    createFireworks();
    setTimeout(createBalloons, 500);
    
    // Clear animations after 10 seconds
    setTimeout(() => {
        const fireworksContainer = document.getElementById('fireworks-container');
        const balloonsContainer = document.getElementById('balloons-container');
        fireworksContainer.innerHTML = '';
        balloonsContainer.innerHTML = '';
    }, 10000);
}

// Smooth scrolling function
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Loading animation
function showLoading() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

// Fade in animation for sections
function fadeInSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.opacity = '0';
    section.style.display = 'block';
    
    setTimeout(() => {
        section.style.transition = 'opacity 0.5s ease-in-out';
        section.style.opacity = '1';
    }, 50);
}

// Typewriter effect for text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Confetti animation for completion
function createConfetti() {
    const container = document.getElementById('fireworks-container');
    const colors = ['#f43f5e', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = 'fall 3s linear forwards';
            
            container.appendChild(confetti);
            
            setTimeout(() => {
                if (container.contains(confetti)) {
                    container.removeChild(confetti);
                }
            }, 3000);
        }, i * 50);
    }
}

// Add CSS for falling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Make functions globally available
window.createFireworks = createFireworks;
window.createBalloons = createBalloons;
window.showWelcomeAnimation = showWelcomeAnimation;
window.smoothScrollTo = smoothScrollTo;
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.fadeInSection = fadeInSection;
window.typeWriter = typeWriter;
window.createConfetti = createConfetti;