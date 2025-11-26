// Audio Player Script

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('birthdayAudio');
    const audioControlBtn = document.getElementById('audioControlBtn');
    const audioIcon = document.getElementById('audioIcon');
    
    let isPlaying = false;
    
    // Try to play audio automatically when page loads
    // Note: Most browsers require user interaction before playing audio
    // So we'll try to play, but if it fails, user needs to click the button
    const tryAutoPlay = () => {
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Audio started playing
                    isPlaying = true;
                    updateButtonState();
                })
                .catch(error => {
                    // Auto-play was prevented
                    console.log('Auto-play prevented. User interaction required.');
                    isPlaying = false;
                    updateButtonState();
                });
        }
    };
    
    // Update button appearance based on playing state
    function updateButtonState() {
        if (isPlaying) {
            audioIcon.textContent = '🔊';
            audioControlBtn.classList.add('playing');
        } else {
            audioIcon.textContent = '🔇';
            audioControlBtn.classList.remove('playing');
        }
    }
    
    // Toggle play/pause
    audioControlBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play()
                .then(() => {
                    isPlaying = true;
                })
                .catch(error => {
                    console.error('Error playing audio:', error);
                });
        }
        updateButtonState();
    });
    
    // Update state when audio ends (shouldn't happen with loop, but just in case)
    audio.addEventListener('ended', () => {
        isPlaying = false;
        updateButtonState();
    });
    
    // Update state when audio is paused
    audio.addEventListener('pause', () => {
        isPlaying = false;
        updateButtonState();
    });
    
    // Update state when audio starts playing
    audio.addEventListener('play', () => {
        isPlaying = true;
        updateButtonState();
    });
    
    // Don't auto-play - wait for start button click
    // Audio will be played when start button is clicked
    
    // Set initial volume (0.7 = 70% volume, adjust as needed)
    audio.volume = 0.7;
});

