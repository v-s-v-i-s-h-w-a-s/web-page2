// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Button click functionality
    const clickBtn = document.getElementById('clickBtn');
    const messageElement = document.getElementById('message');
    let clickCount = 0;
    
    clickBtn.addEventListener('click', function() {
        clickCount++;
        messageElement.textContent = `Button clicked ${clickCount} time(s)!`;
        
        // Add some visual feedback
        clickBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickBtn.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('messageText').value;
        
        // Simple validation
        if (name && email && message) {
            // Show success message
            alert(`Thank you, ${name}! Your message has been received.`);
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
    
    // Add some interactive effects
    const sections = document.querySelectorAll('section');
    
    // Fade in sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Set initial styles and observe sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add current time display
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        
        // Create time display if it doesn't exist
        let timeDisplay = document.getElementById('timeDisplay');
        if (!timeDisplay) {
            timeDisplay = document.createElement('div');
            timeDisplay.id = 'timeDisplay';
            timeDisplay.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: rgba(0,0,0,0.7);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 0.9rem;
                z-index: 1001;
            `;
            document.body.appendChild(timeDisplay);
        }
        
        timeDisplay.textContent = `Current time: ${timeString}`;
    }
    
    // Update time every second
    updateTime();
    setInterval(updateTime, 1000);
    
    // Console message for developers
    console.log('Simple Web Page loaded successfully!');
    console.log('This page demonstrates basic HTML, CSS, and JavaScript functionality.');
});