// Modal functionality
function showComingSoon() {
    const modal = document.getElementById('comingSoonModal');
    modal.style.display = 'block';
    
    // Add body scroll lock
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('comingSoonModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('comingSoonModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Bottom navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Show coming soon modal for non-home items
            if (!this.querySelector('span').textContent.includes('Homepage')) {
                showComingSoon();
            }
        });
    });
    
    // Header icon functionality
    const iconButtons = document.querySelectorAll('.icon-button');
    
    iconButtons.forEach(button => {
        button.addEventListener('click', function() {
            showComingSoon();
        });
    });
});

// Add smooth animations for better UX
function addSmoothAnimations() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.animation = 'fadeInUp 0.6s ease forwards';
    });
}

// Add CSS animation for card entrance
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .card {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Initialize animations when page loads
window.addEventListener('load', addSmoothAnimations); 