// Start Animation Script

document.addEventListener('DOMContentLoaded', () => {
    const startOverlay = document.getElementById('startOverlay');
    const startBtn = document.getElementById('startBtn');
    const audio = document.getElementById('birthdayAudio');
    const audioControlBtn = document.getElementById('audioControlBtn');
    
    // Elements to show
    const cakeContainer = document.getElementById('cakeContainer');
    const candleElement = document.getElementById('candleElement');
    const titleElement = document.getElementById('titleElement');
    const subtitleElement = document.getElementById('subtitleElement');
    const messageContainer = document.getElementById('messageContainer');
    const balloonsContainer = document.getElementById('balloonsContainer');
    const starsContainer = document.getElementById('starsContainer');
    const showGalleryBtn = document.getElementById('showGalleryBtn');
    
    // Start button click handler
    startBtn.addEventListener('click', () => {
        // Play audio
        audio.play()
            .then(() => {
                console.log('Audio started playing');
            })
            .catch(error => {
                console.log('Audio play failed:', error);
            });
        
        // Hide start overlay with fade out
        startOverlay.style.animation = 'fadeOut 0.5s ease-out forwards';
        
        setTimeout(() => {
            startOverlay.style.display = 'none';
            
            // Show all elements with animations
            showElements();
        }, 500);
    });
    
    function showElements() {
        // Show cake first
        setTimeout(() => {
            cakeContainer.classList.remove('hidden-content');
            cakeContainer.style.animation = 'cakeAppear 1s ease-out forwards';
        }, 200);
        
        // Show candle with delay
        setTimeout(() => {
            candleElement.style.animation = 'candleAppear 0.8s ease-out forwards';
        }, 800);
        
        // Show title
        setTimeout(() => {
            titleElement.classList.remove('hidden-content');
            titleElement.style.animation = 'titleAppear 1s ease-out forwards';
        }, 1200);
        
        // Show subtitle
        setTimeout(() => {
            subtitleElement.classList.remove('hidden-content');
            subtitleElement.style.animation = 'subtitleAppear 0.8s ease-out forwards';
        }, 1800);
        
        // Show message
        setTimeout(() => {
            messageContainer.classList.remove('hidden-content');
            messageContainer.style.animation = 'messageAppear 1s ease-out forwards';
        }, 2400);
        
        // Show balloons
        setTimeout(() => {
            balloonsContainer.classList.remove('hidden-content');
            balloonsContainer.style.animation = 'fadeIn 1s ease-out forwards';
        }, 3000);
        
        // Show stars
        setTimeout(() => {
            starsContainer.classList.remove('hidden-content');
            starsContainer.style.animation = 'fadeIn 1s ease-out forwards';
        }, 3200);
        
        // Show gallery button
        setTimeout(() => {
            showGalleryBtn.classList.remove('hidden-content');
            showGalleryBtn.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }, 3800);
        
        // Show audio control button
        setTimeout(() => {
            audioControlBtn.classList.remove('hidden-content');
            audioControlBtn.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }, 4000);
    }
});

