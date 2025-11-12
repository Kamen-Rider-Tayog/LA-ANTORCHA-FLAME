//back to top button script
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

//heart hover animation
document.addEventListener("DOMContentLoaded", function () {
    const heartIcon = document.querySelector(".heart-icon");

    if (heartIcon) {
    heartIcon.addEventListener("mouseenter", function () {
        this.classList.replace("fa-regular", "fa-solid");
    });

    heartIcon.addEventListener("mouseleave", function () {
        this.classList.replace("fa-solid", "fa-regular");
    });
    }
});