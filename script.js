// Church events data
const eventsData = [
    {
        id: 1,
        name: "Five Day Program",
        image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600&h=400&fit=crop",
        date: "Feb 15-19",
        location: "Main Sanctuary",
        description: "An intensive five-day spiritual journey featuring daily worship, Bible study, prayer sessions, and fellowship meals.",
        programs: ["Daily Worship", "Bible Study", "Fellowship", "Guest Speakers"]
    },
    {
        id: 2,
        name: "Community Evangelism",
        image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=400&fit=crop",
        date: "Every Saturday",
        location: "Community Outreach",
        description: "Join our evangelism team as we share God's love in our community through door-to-door visits and food distribution.",
        programs: ["Door-to-Door", "Food Drive", "Prayer", "Testimony"]
    },
    {
        id: 3,
        name: "Midweek Bible Study",
        image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&h=400&fit=crop",
        date: "Wednesday 7PM",
        location: "Fellowship Hall",
        description: "Deepen your understanding of God's word through interactive Bible study sessions and discussion.",
        programs: ["Scripture Study", "Discussion", "Prayer", "Fellowship"]
    }
];

// Register for events function
function registerEvent(eventName) {
    const event = eventsData.find(e => e.name === eventName);
    if (event) {
        alert(`Thank you for your interest in ${event.name}! We'll contact you soon with registration details. God bless!`);
    } else {
        alert(`Thank you for your interest! We'll contact you soon with more information about this event. God bless!`);
    }
}

fetch('events.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('events-container');
    container.className = 'hostels-grid'; 

    data.events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'hostel-card event-card';
      card.innerHTML = `
        <div class="hostel-image">
          <img src="${event.image}" alt="${event.title}">
          <div class="hostel-distance">${event.duration}</div>
        </div>
        <div class="hostel-content">
          <div class="hostel-header">
            <h3 class="hostel-name">${event.title}</h3>
            <div class="hostel-rating" style="color: #fff;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
              <span>${event.date}</span>
            </div>
          </div>
          <div class="hostel-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${event.location}</span>
          </div>
          <div class="event-description">
            <p>${event.description}</p>
          </div>
          <div class="hostel-amenities">
            ${event.tags.map(tag => `
              <div class="amenity-tag"><span>${tag}</span></div>
            `).join('')}
          </div>
          <div class="hostel-footer">
            <div class="hostel-price">
              Everyone<span> welcome</span>
            </div>
            <button class="apply-btn" onclick="window.location.href='contact.html'">Join Program</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading events:', error));




function handleContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault(); // prevent default submission

    const formData = new FormData(contactForm);

    try {
      const response = await fetch('https://formsubmit.co/adetorodavies@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert("✅ Message sent successfully! We'll get back to you soon.");
        contactForm.reset();
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Network error. Please check your connection.");
    }
  });
}

handleContactForm();


function toggleReadMore() {
    const content = document.querySelector('.read-more-content');
    const button = document.querySelector('.readmore-btn');
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "Show Less";
    } else {
        content.style.display = "none";
        button.textContent = "Read More";
    }
}


// FAQ functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Search functionality
function initializeSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    const searchSelect = document.querySelector('.search-select');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // For church website, this could be used for finding ministries or programs
            alert('Search functionality coming soon! For now, please contact us directly for information about our programs.');
        });
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Animation on scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate
    document.querySelectorAll('.hostel-card, .contact-card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}
 document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".history-para");
    const readMoreBtn = document.getElementById("readMoreBtn");
    let currentIndex = 1;

    readMoreBtn.addEventListener("click", () => {
      if (currentIndex < paragraphs.length) {
        paragraphs[currentIndex].hidden = false;
        currentIndex++;

        if (currentIndex === paragraphs.length) {
          readMoreBtn.textContent = "Show Less";
        }
      } else {
        // Reset view when reaching the end
        paragraphs.forEach((p, index) => {
          if (index > 0) p.hidden = true;
        });
        currentIndex = 1;
        readMoreBtn.textContent = "Read More";
      }
    });
  });
// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    handleContactForm();
    initializeFAQ();
    initializeSearch();
    initializeSmoothScrolling();
    initializeNavbarScroll();
    
    // Delay scroll animations slightly
    setTimeout(initializeScrollAnimations, 100);
    
    console.log('Church of Christ website initialized successfully!');
});

// Handle window resize
window.addEventListener('resize', function() {
    // Add any resize-specific logic here if needed
});
   document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });
});

