const navbar = document.querySelector('.navbar');

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

const updateNavbarBackground = () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
};

updateNavbarBackground();
window.addEventListener('scroll', updateNavbarBackground);

const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.mobile-menu-btn');
const navOverlay = document.querySelector('.nav-overlay');
const NAV_FOCUSABLE = 'a[href], button:not([disabled])';

const setNavState = (isOpen) => {
  if (!navMenu || !navToggle) return;

  const toggleVisible = window.getComputedStyle(navToggle).display !== 'none';

  navMenu.classList.toggle('active', isOpen);
  navMenu.dataset.visible = String(isOpen);
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('nav-open', isOpen);

  if (navOverlay) {
    if (isOpen) {
      navOverlay.removeAttribute('hidden');
    } else {
      navOverlay.setAttribute('hidden', '');
    }
  }

  if (isOpen && toggleVisible) {
    const firstFocusable = navMenu.querySelector(NAV_FOCUSABLE);
    if (firstFocusable instanceof HTMLElement) {
      firstFocusable.focus();
    }
  } else if (!isOpen && toggleVisible) {
    navToggle.focus();

    if (window.matchMedia('(max-width: 768px)').matches) {
      navToggle.blur();
    }
  }
};

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('active');
    setNavState(!isOpen);
  });

  navMenu.querySelectorAll('.nav-link, .nav-button').forEach((item) => {
    item.addEventListener('click', () => setNavState(false));
  });
}

if (navOverlay) {
  navOverlay.addEventListener('click', () => setNavState(false));
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setNavState(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    setNavState(false);
  }
});

function animateFloatingElements() {
  const floatingElements = document.querySelectorAll('.floating-avatar, .floating-icon');

  floatingElements.forEach((element, index) => {
    const delay = index * 0.3;
    const duration = 4 + (index % 3);
    const direction = index % 2 === 0 ? 'normal' : 'reverse';

    element.style.animation = `fadeIn 1s ease-out ${delay}s forwards, float ${duration}s ease-in-out ${
      delay + 1
    }s infinite ${direction}`;

    element.addEventListener('mouseenter', function () {
      this.style.animationPlayState = 'paused';
      this.style.transform = 'scale(1.1) rotate(5deg)';
      this.style.filter = 'brightness(1.2)';
    });

    element.addEventListener('mouseleave', function () {
      this.style.animationPlayState = 'running';
      this.style.transform = '';
      this.style.filter = '';
    });
  });
}

const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-15px) rotate(1deg);
    }
    50% {
      transform: translateY(-10px) rotate(0deg);
    }
    75% {
      transform: translateY(-5px) rotate(-1deg);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  .shimmer-effect {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }
`;
document.head.appendChild(style);

animateFloatingElements();

document.querySelectorAll('.tab-button').forEach((button) => {
  button.addEventListener('click', function () {
    document.querySelectorAll('.tab-button').forEach((tab) => {
      tab.classList.remove('active');
    });

    this.classList.add('active');
  });
});

document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', function () {
    const codeText = this.parentElement.querySelector('span').textContent;
    const code = codeText.replace('Code: ', '');

    navigator.clipboard
      .writeText(code)
      .then(() => {
        const originalImg = this.querySelector('img');

        this.style.background = '#4CAF50';
        this.style.borderRadius = '50%';
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'all 0.3s ease';

        this.innerHTML = '✓';
        this.style.color = 'white';
        this.style.fontSize = '14px';
        this.style.fontWeight = 'bold';

        const tooltip = document.createElement('div');
        tooltip.textContent = 'Copied!';
        tooltip.style.cssText = `
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        background: #4CAF50;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1000;
        animation: fadeInOut 2s ease-out;
      `;

        this.style.position = 'relative';
        this.appendChild(tooltip);

        setTimeout(() => {
          this.style.background = 'transparent';
          this.style.borderRadius = '0';
          this.style.transform = 'scale(1)';
          this.innerHTML = `<img src="${originalImg.src}" style="width: 14px; height: 14px;">`;
          tooltip.remove();
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);

        this.style.background = '#f44336';
        this.style.borderRadius = '50%';
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
          this.style.background = 'transparent';
          this.style.borderRadius = '0';
          this.style.transform = 'scale(1)';
        }, 1000);
      });
  });
});

const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = `
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateX(-50%) translateY(5px); }
    20%, 80% { opacity: 1; transform: translateX(-50%) translateY(0); }
    100% { opacity: 0; transform: translateX(-50%) translateY(-5px); }
  }
`;
document.head.appendChild(tooltipStyle);

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';

      const siblings = Array.from(element.parentElement.children);
      const index = siblings.indexOf(element);
      element.style.transitionDelay = `${index * 0.1}s`;

      if (element.classList.contains('problem-card')) {
        element.classList.add('animate-slide-left');
      } else if (element.classList.contains('app-card')) {
        element.classList.add('animate-scale-in');
      } else if (element.classList.contains('partner-logo')) {
        element.classList.add('animate-bounce-in');
      }

      observer.unobserve(element);
    }
  });
}, observerOptions);

document.querySelectorAll('.problem-card, .app-card, .partner-logo').forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  el.classList.add(`stagger-${(index % 6) + 1}`);
  observer.observe(el);
});

const heroButton = document.querySelector('.hero-button');
if (heroButton) {
  heroButton.addEventListener('mouseenter', function () {
    this.style.boxShadow = '0 15px 35px rgba(168, 114, 248, 0.5)';
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });

  heroButton.addEventListener('mouseleave', function () {
    this.style.boxShadow = '0 0 0 0 rgba(168, 114, 248, 0.7)';
    this.style.transform = 'translateY(0) scale(1)';
  });

  heroButton.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;

    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('mouseenter', function () {
    this.style.boxShadow = '0 10px 30px rgba(83, 16, 180, 0.4)';
  });

  ctaButton.addEventListener('mouseleave', function () {
    this.style.boxShadow = 'none';
  });
}

const initSolutionsCarousel = () => {
  const solutionsContainer = document.querySelector('.solutions-container');
  const solutionsContents = document.querySelectorAll('.solutions-content');
  const prevButton = document.querySelector('.nav-arrow.prev');
  const nextButton = document.querySelector('.nav-arrow.next');

  let currentIndex = 0;
  const totalSlides = solutionsContents.length;

  updateSlideVisibility();
  updateNavigationButtons();

  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);

  function showPreviousSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlideVisibility();
      updateNavigationButtons();
    }
  }

  function showNextSlide() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlideVisibility();
      updateNavigationButtons();
    }
  }

  function updateSlideVisibility() {
    solutionsContents.forEach((content, index) => {
      if (index === currentIndex) {
        content.style.display = 'grid';
        content.style.animation = 'fadeIn 0.5s ease-in-out forwards';
      } else {
        content.style.display = 'none';
      }
    });
  }

  function updateNavigationButtons() {
    if (currentIndex === 0) {
      prevButton.classList.remove('active');
      prevButton.disabled = true;
    } else {
      prevButton.classList.add('active');
      prevButton.disabled = false;
    }

    if (currentIndex === totalSlides - 1) {
      nextButton.classList.remove('active');
      nextButton.disabled = true;
    } else {
      nextButton.classList.add('active');
      nextButton.disabled = false;
    }
  }

  // Add touch support for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;

  solutionsContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  solutionsContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const swipeLength = touchEndX - touchStartX;

    if (Math.abs(swipeLength) > swipeThreshold) {
      if (swipeLength > 0 && currentIndex > 0) {
        showPreviousSlide();
      } else if (swipeLength < 0 && currentIndex < totalSlides - 1) {
        showNextSlide();
      }
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      showPreviousSlide();
    } else if (e.key === 'ArrowRight' && currentIndex < totalSlides - 1) {
      showNextSlide();
    }
  });
};

document.addEventListener('DOMContentLoaded', initSolutionsCarousel);

let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-bg-image');
  const heroGradient = document.querySelector('.hero-gradient');
  const floatingElements = document.querySelectorAll('.floating-avatar, .floating-icon');

  if (heroBackground) {
    heroBackground.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.5}px) rotate(${
      scrolled * 0.05
    }deg)`;
  }

  if (heroGradient) {
    heroGradient.style.transform = `translateX(-50%) translateY(${scrolled * 0.3}px)`;
  }

  floatingElements.forEach((element, index) => {
    const speed = 0.2 + (index % 3) * 0.1;
    const yPos = scrolled * speed;
    element.style.transform = `translateY(${yPos}px)`;
  });

  ticking = false;
}

window.addEventListener('scroll', function () {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target;
        section.classList.add('revealed');

        if (section.classList.contains('problems')) {
          section.classList.add('animate-slide-left');
        } else if (section.classList.contains('solutions')) {
          section.classList.add('animate-slide-right');
        } else if (section.classList.contains('apps')) {
          section.classList.add('animate-scale-in');
        } else if (section.classList.contains('partners')) {
          section.classList.add('animate-bounce-in');
        }

        revealObserver.unobserve(section);
      }
    });
  },
  { threshold: 0.1 }
);

revealSections.forEach((section) => {
  revealObserver.observe(section);
});

const revealStyle = document.createElement('style');
revealStyle.textContent = `
  section {
    opacity: 0;
    transform: translateY(60px);
    transition: opacity 1s ease, transform 1s ease;
  }
  
  section.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  .hero {
    opacity: 1;
    transform: none;
  }
  
  /* Loading spinner for images */
  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(168, 114, 248, 0.3);
    border-top: 4px solid #A872F8;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 20px auto;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(revealStyle);

let mouseTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', function (e) {
  mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

  if (mouseTrail.length > trailLength) {
    mouseTrail.shift();
  }

  if (Math.random() < 0.1) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: linear-gradient(45deg, #A872F8, #692EBE);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      animation: fadeOut 1s ease-out forwards;
    `;

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }
});

const trailStyle = document.createElement('style');
trailStyle.textContent = `
  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }
`;
document.head.appendChild(trailStyle);

const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #A872F8, #692EBE);
  z-index: 9999;
  transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', function () {
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = scrollPercent + '%';
});

console.log('🚀 BFCM 2025 Landing Page with Enhanced Animations loaded successfully!');
