// app.js - Centralized JavaScript for Circle Spring Academy
// Updated to use Decap CMS (static file-based content)

// YAML frontmatter parser (uses js-yaml when available for nested structures)
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content: content };
  }
  
  const yamlContent = match[1];
  const markdownContent = match[2];
  let data = {};
  
  try {
    const yamlLib = typeof jsyaml !== 'undefined' ? jsyaml : (typeof yaml !== 'undefined' ? yaml : null);
    if (yamlLib && yamlLib.load) {
      data = yamlLib.load(yamlContent) || {};
    } else {
      // Fallback: simple parser for flat YAML only
      yamlContent.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0 && !line.match(/^\s/)) {
          const key = line.substring(0, colonIndex).trim();
          let value = line.substring(colonIndex + 1).trim();
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          data[key] = value;
        }
      });
    }
  } catch (e) {
    console.warn('YAML parse warning:', e);
  }
  
  return { data, content: markdownContent };
}

// Fetch and parse content file (no cache so CMS edits appear immediately)
async function fetchContent(type) {
  try {
    const response = await fetch(`/content/${type}/index.md`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${type} content`);
    }
    const text = await response.text();
    return parseFrontmatter(text);
  } catch (error) {
    console.error(`Error loading ${type} content:`, error);
    return null;
  }
}

// Initialize Alpine.js store
document.addEventListener('alpine:init', () => {
    Alpine.store('app', {
        mobileMenuOpen: false,
        language: 'en',
        languageDropdownOpen: false,
        activeSection: 'home'
    });

    // Carousel functionality
    Alpine.data('carousel', () => ({
        activeSlide: 0,
        slides: [
            { src: 'src/imgs/hero.webp', alt: 'Modern school facilities' },
            { src: 'src/imgs/hero2.webp', alt: 'Students engaging in activities' },
            { src: 'src/imgs/hero3.webp', alt: 'Academic excellence' }
        ],
        heroIntervalMs: 5000,
        totalSlides: 3,
        interval: null,
        
        init() {
            // Load carousel config from Sanity.
            this.loadConfig();
            this.loadText();
            this.start();
        },

        async loadConfig() {
            try {
                const bannerData = await fetchContent('banner');
                if (bannerData?.data?.images && Array.isArray(bannerData.data.images)) {
                    this.slides = bannerData.data.images.map(img => ({
                        src: img.image || img.src || '',
                        alt: img.alt || 'Banner image'
                    }));
                    this.totalSlides = this.slides.length;
                    if (this.activeSlide >= this.totalSlides) {
                        this.activeSlide = 0;
                    }
                    this.start(true);
                }
            } catch (error) {
                console.error('Failed to load banner config:', error);
            }
        },

        async loadText() {
            try {
                const bannerData = await fetchContent('banner');
                if (bannerData?.data) {
                    const titleEl = document.getElementById('hero-title');
                    const subtitleEl = document.getElementById('hero-subtitle');
                    if (titleEl && bannerData.data.title) {
                        titleEl.textContent = bannerData.data.title;
                    }
                    if (subtitleEl && bannerData.data.subtitle) {
                        subtitleEl.textContent = bannerData.data.subtitle;
                    }
                }
            } catch (error) {
                console.error('Failed to load banner text:', error);
            }
        },

        start(forceRestart = false) {
            if (this.interval && !forceRestart) return;
            if (this.interval) clearInterval(this.interval);

            this.totalSlides = this.slides.length;
            if (this.totalSlides <= 1) return;

            this.interval = setInterval(() => {
                this.next();
            }, this.heroIntervalMs);
        },

        stop() {
            if (this.interval) clearInterval(this.interval);
            this.interval = null;
        },
        
        next() {
            if (!this.totalSlides) this.totalSlides = this.slides.length;
            this.activeSlide = (this.activeSlide + 1) % this.totalSlides;
        },
        
        prev() {
            if (!this.totalSlides) this.totalSlides = this.slides.length;
            this.activeSlide = (this.activeSlide - 1 + this.totalSlides) % this.totalSlides;
        },
        
        goToSlide(index) {
            this.activeSlide = index;
            this.start(true);
        }
    }));

    // FAQ functionality
    Alpine.data('faq', () => ({
        openCategory: null,
        openFaq: null
    }));

    // Page content loaders
    const loadAboutContent = async () => {
        try {
            const aboutData = await fetchContent('about');
            if (aboutData?.data) {
                const data = aboutData.data;
                if (data.heroSection) {
                    const titleEl = document.getElementById('hero-title');
                    const subtitleEl = document.getElementById('hero-subtitle');
                    if (titleEl && data.heroSection.title) titleEl.textContent = data.heroSection.title;
                    if (subtitleEl && data.heroSection.subtitle) subtitleEl.textContent = data.heroSection.subtitle;
                }
                if (data.storySection) {
                    const paras = data.storySection.paragraphs;
                    if (Array.isArray(paras)) {
                        [1, 2, 3].forEach((i, idx) => {
                            const el = document.getElementById(`story-para${i}`);
                            if (el && paras[idx]) el.textContent = paras[idx];
                        });
                    }
                    const imgEl = document.getElementById('story-image');
                    if (imgEl && data.storySection.image) {
                        imgEl.src = data.storySection.image;
                        if (data.storySection.title) imgEl.alt = data.storySection.title;
                    }
                }
                if (data.stats && Array.isArray(data.stats)) {
                    data.stats.forEach((stat, i) => {
                        const valEl = document.getElementById(`stat-${i}-value`);
                        const lblEl = document.getElementById(`stat-${i}-label`);
                        if (valEl && stat.value) valEl.textContent = stat.value;
                        if (lblEl && stat.label) lblEl.textContent = stat.label;
                    });
                }
                const missionEl = document.getElementById('mission-statement');
                if (missionEl && data.missionStatement) missionEl.textContent = data.missionStatement;
                const visionEl = document.getElementById('vision-statement');
                if (visionEl && data.visionStatement) visionEl.textContent = data.visionStatement;
            }
        } catch (error) {
            console.error('Failed to load about content:', error);
        }
    };

    const loadAcademicsContent = async () => {
        try {
            const academicsData = await fetchContent('academics');
            if (academicsData?.data) {
                const data = academicsData.data;
                if (data.heroSection) {
                    const titleEl = document.getElementById('hero-title');
                    const subtitleEl = document.getElementById('hero-subtitle');
                    if (titleEl && data.heroSection.title) {
                        titleEl.textContent = data.heroSection.title;
                    }
                    if (subtitleEl && data.heroSection.subtitle) {
                        subtitleEl.textContent = data.heroSection.subtitle;
                    }
                }
            }
        } catch (error) {
            console.error('Failed to load academics content:', error);
        }
    };

    const loadActivitiesContent = async () => {
        try {
            const activitiesData = await fetchContent('activities');
            if (activitiesData?.data) {
                const data = activitiesData.data;
                if (data.heroSection) {
                    const titleEl = document.getElementById('hero-title');
                    const subtitleEl = document.getElementById('hero-subtitle');
                    if (titleEl && data.heroSection.title) {
                        titleEl.textContent = data.heroSection.title;
                    }
                    if (subtitleEl && data.heroSection.subtitle) {
                        subtitleEl.textContent = data.heroSection.subtitle;
                    }
                }
            }
        } catch (error) {
            console.error('Failed to load activities content:', error);
        }
    };

    const loadContactContent = async () => {
        try {
            const contactData = await fetchContent('contact');
            if (contactData?.data) {
                const data = contactData.data;
                if (data.heroSection) {
                    const titleEl = document.getElementById('hero-title');
                    const subtitleEl = document.getElementById('hero-subtitle');
                    if (titleEl && data.heroSection.title) titleEl.textContent = data.heroSection.title;
                    if (subtitleEl && data.heroSection.subtitle) subtitleEl.textContent = data.heroSection.subtitle;
                }
                if (data.contactInformation) {
                    const ci = data.contactInformation;
                    const emailLink = document.getElementById('contact-email-link');
                    if (emailLink && ci.email) {
                        emailLink.href = `mailto:${ci.email}?subject=Inquiry%20from%20Website`;
                        emailLink.textContent = ci.email;
                    }
                    const phoneLink = document.getElementById('contact-phone-link');
                    if (phoneLink && ci.phone) {
                        phoneLink.href = `tel:${ci.phone.replace(/\s/g, '')}`;
                        phoneLink.textContent = ci.phone;
                    }
                    const addrEl = document.getElementById('contact-address');
                    if (addrEl && ci.address) addrEl.textContent = ci.address;
                    const hoursEl = document.getElementById('contact-office-hours');
                    if (hoursEl && ci.officeHours) hoursEl.textContent = ci.officeHours;
                }
            }
        } catch (error) {
            console.error('Failed to load contact content:', error);
        }
    };

    // Load page content from static files
    const loadPageContent = async () => {
        const path = window.location.pathname;
        if (path.includes('about')) {
            await loadAboutContent();
        } else if (path.includes('academics')) {
            await loadAcademicsContent();
        } else if (path.includes('activities')) {
            await loadActivitiesContent();
        } else if (path.includes('contact')) {
            await loadContactContent();
        }
        // Add more as needed
    };

    loadPageContent();
});

// Common initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCurrentYear();
    initializeBackToTop();
    initializeSmoothScrolling();
    initializeScrollTracking();
});

// Set current year in footer
function initializeCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#currentYear');
    
    yearElements.forEach(element => {
        if (element) {
            element.textContent = currentYear;
        }
    });
    
    // Fallback for footer copyright
    const footerParagraphs = document.querySelectorAll('footer p');
    footerParagraphs.forEach(p => {
        if (p.textContent.includes('©') && !p.textContent.includes(currentYear)) {
            p.innerHTML = p.innerHTML.replace('©', `© ${currentYear}`);
        }
    });
}

// Back to top button functionality
function initializeBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) {
        // Create back to top button if it doesn't exist
        const backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'backToTop';
        backToTopBtn.className = 'fixed bottom-8 right-8 bg-deep-carmine hover:bg-vivid-burgundy text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition duration-300 opacity-0 invisible z-40';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(backToTopBtn);
        
        setupBackToTopListener(backToTopBtn);
    } else {
        setupBackToTopListener(backToTop);
    }
}

function setupBackToTopListener(button) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.classList.remove('opacity-0', 'invisible');
            button.classList.add('opacity-100', 'visible');
        } else {
            button.classList.remove('opacity-100', 'visible');
            button.classList.add('opacity-0', 'invisible');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (Alpine && Alpine.store('app')) {
                    Alpine.store('app').mobileMenuOpen = false;
                }
            }
        });
    });
}

// Scroll tracking for navigation
function initializeScrollTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeSection = entry.target.getAttribute('id');
                if (Alpine && Alpine.store('app')) {
                    Alpine.store('app').activeSection = activeSection;
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Utility function for lazy loading images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}