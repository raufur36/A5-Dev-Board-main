document.addEventListener('DOMContentLoaded', function() {
    // Feature container click event
    const featureContainer = document.getElementById('feautre-container');
    const backButton = document.getElementById('back-btn');
    
    if (featureContainer) {
        featureContainer.addEventListener('click', function() {
            window.location.href = 'blog.html';
        });
    }

    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
