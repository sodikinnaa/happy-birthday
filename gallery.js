// Gallery Lightbox Script

let currentImageIndex = 0;
const images = [
    'images/cute_2.jpeg',
    'images/pisss.jpeg',
    'images/coll.jpeg',
    'images/with_my_love.jpeg',
    'images/miror_selvi.jpeg',
    'images/smile.jpeg',
    'images/cute.jpeg'
];

// ============================================
// PESAN UNTUK SETIAP GAMBAR
// ============================================
// Edit pesan di bawah ini sesuai dengan gambar masing-masing
const imageMessages = [
    {
        title: "Momen Indah",
        message: "Setiap momen bersamamu adalah kenangan terindah yang selalu ingin kuingat selamanya. 💕"
    },
    {
        title: "Kebahagiaan",
        message: "Kamu adalah sumber kebahagiaanku. Senyummu membuat hari-hariku lebih cerah. ✨"
    },
    {
        title: "Bersama",
        message: "Bersama kamu, setiap detik terasa begitu berharga dan penuh makna. 🌟"
    },
    {
        title: "Cinta",
        message: "Dengan cinta, kita menciptakan cerita indah yang akan selalu dikenang. 💖"
    },
    {
        title: "Kenangan",
        message: "Kenangan indah ini akan selalu ada di hatiku, seperti kamu yang selalu ada di hatiku. 💝"
    },
    {
        title: "Senyuman",
        message: "Senyumanmu adalah hadiah terindah yang membuat hidupku lebih berarti. 😊"
    },
    {
        title: "Spesial",
        message: "Kamu adalah orang yang paling spesial dalam hidupku. Terima kasih sudah menjadi bagian dari ceritaku. 🎉"
    }
];

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
    const showGalleryBtn = document.getElementById('showGalleryBtn');
    const gallerySection = document.getElementById('gallerySection');
    const photoItems = document.querySelectorAll('.photo-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxMessage = document.getElementById('lightboxMessage');
    const lightboxMessageTitle = document.getElementById('lightboxMessageTitle');

    // Show gallery when button is clicked
    showGalleryBtn.addEventListener('click', () => {
        gallerySection.classList.remove('hidden');
        // Use setTimeout to ensure display is set before adding show class
        setTimeout(() => {
            gallerySection.classList.add('show');
            // Smooth scroll to gallery
            gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Hide button after showing gallery
            showGalleryBtn.style.display = 'none';
        }, 10);
    });

    // Add click event to each photo
    photoItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-overlay')) {
            closeLightbox();
        }
    });

    // Navigation buttons
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });

    // Prevent body scroll when lightbox is open
    function preventScroll() {
        document.body.style.overflow = 'hidden';
    }

    function allowScroll() {
        document.body.style.overflow = '';
    }

    // Open lightbox function
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        preventScroll();
    }

    // Close lightbox function
    function closeLightbox() {
        lightbox.classList.remove('active');
        allowScroll();
    }

    // Update lightbox image
    function updateLightboxImage() {
        lightboxImage.src = images[currentImageIndex];
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
        
        // Update message
        if (imageMessages[currentImageIndex]) {
            lightboxMessageTitle.textContent = imageMessages[currentImageIndex].title;
            lightboxMessage.textContent = imageMessages[currentImageIndex].message;
            
            // Fade in message
            lightboxMessageTitle.style.opacity = '0';
            lightboxMessage.style.opacity = '0';
            setTimeout(() => {
                lightboxMessageTitle.style.opacity = '1';
                lightboxMessage.style.opacity = '1';
            }, 300);
        }
        
        // Add fade effect
        lightboxImage.style.opacity = '0';
        setTimeout(() => {
            lightboxImage.style.opacity = '1';
        }, 50);
    }

    // Previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    // Next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Smooth image transition
    lightboxImage.addEventListener('load', () => {
        lightboxImage.style.transition = 'opacity 0.3s ease';
    });
});

