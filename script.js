// Script untuk mengatur slider pesan

let currentSlide = 0;
let slideInterval = null;

// Fungsi untuk membuat slider
function initMessageSlider() {
    const slider = document.getElementById('messageSlider');
    const dotsContainer = document.getElementById('sliderDots');
    
    if (!slider || !dotsContainer || !birthdayMessages || birthdayMessages.length === 0) {
        return;
    }
    
    // Clear existing content
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Buat slide untuk setiap pesan
    birthdayMessages.forEach((message, index) => {
        // Buat slide
        const slide = document.createElement('div');
        slide.className = 'message-slide';
        if (index === 0) slide.classList.add('active');
        
        // Buat container untuk setiap baris pesan
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        
        message.lines.forEach(line => {
            const p = document.createElement('p');
            p.textContent = line;
            messageDiv.appendChild(p);
        });
        
        slide.appendChild(messageDiv);
        slider.appendChild(slide);
        
        // Buat dot indicator
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Start auto slide jika diaktifkan
    if (sliderSettings.autoSlide) {
        startAutoSlide();
    }
}

// Fungsi untuk pindah ke slide tertentu
function goToSlide(index) {
    const slides = document.querySelectorAll('.message-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (index < 0 || index >= slides.length) return;
    
    // Remove active class dari semua slide dan dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class ke slide dan dot yang dipilih
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
    
    // Restart auto slide
    if (sliderSettings.autoSlide) {
        stopAutoSlide();
        startAutoSlide();
    }
}

// Fungsi untuk slide berikutnya
function nextSlide() {
    const totalSlides = birthdayMessages.length;
    const next = (currentSlide + 1) % totalSlides;
    goToSlide(next);
}

// Fungsi untuk slide sebelumnya
function prevSlide() {
    const totalSlides = birthdayMessages.length;
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prev);
}

// Fungsi untuk memulai auto slide
function startAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    
    slideInterval = setInterval(() => {
        nextSlide();
    }, sliderSettings.slideInterval);
}

// Fungsi untuk menghentikan auto slide
function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

// Initialize slider ketika halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    initMessageSlider();
    
    // Optional: Tambahkan keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Pause auto slide saat hover (optional)
    const sliderContainer = document.querySelector('.message-slider-container');
    if (sliderContainer && sliderSettings.autoSlide) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }
});

