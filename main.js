// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    mobileMenuBtn.innerHTML = navbar.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Program Filtering
const programFilterButtons = document.querySelectorAll('.category-btn');
const programCards = document.querySelectorAll('.program-card');

programFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        programFilterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-category');
        
        programCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Gallery Filtering
const galleryFilterButtons = document.querySelectorAll('.gallery-filter .filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        galleryFilterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Events Filtering
const eventFilterButtons = document.querySelectorAll('.events-filter .filter-btn');
const eventCategories = document.querySelectorAll('.event-category');

eventFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        eventFilterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        if (filterValue === 'all') {
            eventCategories.forEach(category => {
                category.style.display = 'block';
            });
        } else {
            eventCategories.forEach(category => {
                category.style.display = 'none';
            });
            
            if (filterValue === 'upcoming') {
                document.querySelector('.event-category:nth-child(1)').style.display = 'block';
            } else if (filterValue === 'past') {
                document.querySelector('.event-category:nth-child(2)').style.display = 'block';
            }
            // Add more conditions for other filters if needed
        }
    });
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your server
        // For demonstration, we'll just show an alert
        alert(`Thank you for subscribing with ${email}! You'll hear from us soon.`);
        this.reset();
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: this.querySelector('#name').value,
            email: this.querySelector('#email').value,
            phone: this.querySelector('#phone').value,
            subject: this.querySelector('#subject').value,
            message: this.querySelector('#message').value
        };
        
        // Here you would typically send the form data to your server
        // For demonstration, we'll just show an alert
        alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
        this.reset();
    });
}

// Initialize calendar
function initializeCalendar() {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;

    const currentMonthEl = document.getElementById('current-month');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function renderCalendar() {
        // Set month and year in header
        currentMonthEl.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { 
            month: 'long', 
            year: 'numeric' 
        });

        // Get first day of month and total days in month
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Clear previous calendar
        calendarEl.innerHTML = '';

        // Add day headers
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        days.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            calendarEl.appendChild(dayHeader);
        });

        // Add empty cells for days before first day of month
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarEl.appendChild(emptyDay);
        }

        // Add days of month
        for (let i = 1; i <= daysInMonth; i++) {
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day';
            
            const dayNumber = document.createElement('div');
            dayNumber.className = 'calendar-day-number';
            dayNumber.textContent = i;
            dayEl.appendChild(dayNumber);

            // Add sample events (in a real app, these would come from your data)
            if (i === 15) {
                const event = document.createElement('div');
                event.className = 'calendar-event';
                event.textContent = 'Career Workshop';
                dayEl.appendChild(event);
            }
            
            if (i === 22) {
                const event = document.createElement('div');
                event.className = 'calendar-event';
                event.textContent = 'Clean-up Day';
                dayEl.appendChild(event);
            }
            
            if (i === 30) {
                const event = document.createElement('div');
                event.className = 'calendar-event';
                event.textContent = 'Entrepreneurship';
                dayEl.appendChild(event);
            }

            calendarEl.appendChild(dayEl);
        }
    }

    // Event listeners for prev/next month buttons
    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    // Initial render
    renderCalendar();
}

// Initialize calendar on page load
document.addEventListener('DOMContentLoaded', initializeCalendar);