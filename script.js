// ===== MOBILE NAVIGATION =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Close menu when clicking nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// ===== ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
}

window.addEventListener('scroll', scrollActive);

// ===== CHANGE HEADER BACKGROUND ON SCROLL =====
function scrollHeader() {
  const header = document.getElementById('header');
  if (window.scrollY >= 80) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
  }
}

window.addEventListener('scroll', scrollHeader);

// ===== SCROLL TO TOP BUTTON =====
const scrollTop = document.getElementById('scroll-top');

function toggleScrollTop() {
  if (window.scrollY >= 560) {
    scrollTop.classList.add('show');
  } else {
    scrollTop.classList.remove('show');
  }
}

window.addEventListener('scroll', toggleScrollTop);

if (scrollTop) {
  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60 FPS
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      animateCounter(entry.target, target);
      entry.target.classList.add('counted');
    }
  });
}, {
  threshold: 0.5
});

// Observe all counter elements
const counters = document.querySelectorAll('.stat-number, .counter');
counters.forEach(counter => {
  counterObserver.observe(counter);
});

// ===== SCROLL REVEAL ANIMATION =====
const scrollRevealElements = document.querySelectorAll(
  '.service-card, .achievement-item, .partner-logo, .feature-item'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-animate', 'active');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

scrollRevealElements.forEach(element => {
  element.classList.add('scroll-animate');
  revealObserver.observe(element);
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Don't prevent default for empty hash
    if (href === '#') return;

    e.preventDefault();
    const targetId = href.substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Show success message (in a real application, you would send this to a server)
    showFormMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');

    // Reset form
    contactForm.reset();

    // Log data for demonstration (remove in production)
    console.log('Form data:', data);
  });
}

function showFormMessage(message, type) {
  // Create message element
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message form-message--${type}`;
  messageDiv.textContent = message;

  // Style the message
  messageDiv.style.cssText = `
    padding: 1rem 1.5rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-weight: 600;
    text-align: center;
    animation: slideDown 0.3s ease;
    ${type === 'success'
      ? 'background: #d4edda; color: #155724; border: 2px solid #c3e6cb;'
      : 'background: #f8d7da; color: #721c24; border: 2px solid #f5c6cb;'
    }
  `;

  // Insert before form
  contactForm.parentNode.insertBefore(messageDiv, contactForm);

  // Remove after 5 seconds
  setTimeout(() => {
    messageDiv.style.animation = 'slideUp 0.3s ease';
    setTimeout(() => messageDiv.remove(), 300);
  }, 5000);
}

// Add animation styles for form message
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;
document.head.appendChild(style);

// ===== PARALLAX EFFECT ON HERO ===== (Disabled for better compatibility)
// Effect removed to prevent overlap with other sections

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== TYPING EFFECT FOR HERO TITLE (OPTIONAL) =====
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Uncomment to enable typing effect
// const heroTitle = document.querySelector('.hero__title');
// if (heroTitle) {
//   const originalText = heroTitle.textContent;
//   typeWriter(heroTitle, originalText, 50);
// }

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function to limit how often a function is called
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
  scrollActive();
  scrollHeader();
  toggleScrollTop();
}, 10), { passive: true });

// ===== PRELOADER (OPTIONAL) =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');

  // Add stagger animation to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Pular para o conteúdo principal';
skipLink.style.cssText = `
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary-color);
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
`;
skipLink.addEventListener('focus', () => {
  skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
  skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
    navMenu.classList.remove('show-menu');
    navToggle.focus();
  }
});

// ===== ANALYTICS TRACKING (PLACEHOLDER) =====
function trackEvent(category, action, label) {
  // Placeholder for analytics tracking
  console.log('Event tracked:', { category, action, label });

  // Example for Google Analytics (uncomment when ready):
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', action, {
  //     'event_category': category,
  //     'event_label': label
  //   });
  // }
}

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    trackEvent('Button', 'Click', button.textContent.trim());
  });
});

// Track service card interactions
document.querySelectorAll('.service-link').forEach(link => {
  link.addEventListener('click', () => {
    const serviceName = link.closest('.service-card').querySelector('.service-title').textContent;
    trackEvent('Service', 'View', serviceName);
  });
});

console.log('%c🏗️ Bomibra Website Loaded Successfully!', 'color: #4a6741; font-size: 16px; font-weight: bold;');
console.log('%cConstruindo o Brasil do Futuro', 'color: #666; font-size: 12px;');