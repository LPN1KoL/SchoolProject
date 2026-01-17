document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('.submit-btn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeBtn');

    // Store original button text
    const originalBtnText = submitBtn.textContent;

    // Handle submit button click
    submitBtn.addEventListener('click', function() {
        // Disable button
        submitBtn.disabled = true;

        // Replace text with spinner
        submitBtn.innerHTML = '<span class="spinner"></span>';

        // After 2 seconds, show modal
        setTimeout(function() {
            // Show modal with animation
            modalOverlay.classList.add('show');

            // Re-enable button and restore text
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }, 2000);
    });

    // Handle close button click
    closeBtn.addEventListener('click', function() {
        modalOverlay.classList.remove('show');
    });

    // Close modal when clicking outside of it
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('show');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
            modalOverlay.classList.remove('show');
        }
    });
});
