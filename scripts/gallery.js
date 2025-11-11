document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-candle-image');
    
    // Set first thumbnail as active by default
    setActiveThumbnail(thumbnails[0]);
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            
            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => {
                thumb.classList.remove('active');
            });
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image with zoom effect
            updateMainImage(imageSrc);
        });
        
        // Add hover effect
        thumbnail.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1.05)';
            }
        });
        
        thumbnail.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1)';
            }
        });
    });
    
    function updateMainImage(imageSrc) {
        // Add zoom-out effect before changing image
        mainImage.style.transform = 'scale(0.8)';
        mainImage.style.opacity = '0.7';
        
        setTimeout(() => {
            // Change image source
            mainImage.src = imageSrc;
            
            // Add zoom-in effect
            mainImage.style.transform = 'scale(1.25)';
            mainImage.style.opacity = '1';
            mainImage.classList.add('zoom-in');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                mainImage.classList.remove('zoom-in');
            }, 500);
            
        }, 150);
    }
    
    function setActiveThumbnail(thumbnail) {
        thumbnail.classList.add('active');
    }
});