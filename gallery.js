// Gallery Lightbox
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const imageCount = document.getElementById('image-count');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    // Sample gallery data (in a real app, this would come from your backend)
    const galleryData = [
        {
            title: "Youth Day Celebration 2023",
            description: "Annual celebration with performances and awards",
            category: "events"
        },
        {
            title: "Digital Skills Class",
            description: "Students learning computer basics",
            category: "programs"
        },
        {
            title: "Park Clean-up",
            description: "Volunteers beautifying the community",
            category: "community"
        },
        {
            title: "Graduation Ceremony",
            description: "Celebrating our skills program graduates",
            category: "achievements"
        },
        {
            title: "Public Speaking Contest",
            description: "Youth showcasing their communication skills",
            category: "events"
        },
        {
            title: "Vocational Training",
            description: "Hands-on carpentry workshop",
            category: "programs"
        },
        {
            title: "Community Garden",
            description: "Youth maintaining the urban farm",
            category: "community"
        },
        {
            title: "University Acceptances",
            description: "Celebrating students heading to tertiary education",
            category: "achievements"
        }
    ];
    
    let currentImageIndex = 0;
    
    // Open lightbox when clicking on a gallery item
    viewButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = index;
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside content
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Navigation
    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
        updateLightbox();
    });
    
    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryData.length;
        updateLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
            updateLightbox();
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % galleryData.length;
            updateLightbox();
        }
    });
    
    // Update lightbox content
    function updateLightbox() {
        const currentImage = galleryData[currentImageIndex];
        lightboxTitle.textContent = currentImage.title;
        lightboxDescription.textContent = currentImage.description;
        imageCount.textContent = `${currentImageIndex + 1} of ${galleryData.length}`;
        
        // In a real app, you would set the actual image source here
        // lightboxImage.innerHTML = `<img src="${currentImage.src}" alt="${currentImage.title}">`;
    }
    
    // Load more gallery items
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // In a real app, this would load more items from your backend
            alert('In a real implementation, this would load more gallery items.');
        });
    }
});