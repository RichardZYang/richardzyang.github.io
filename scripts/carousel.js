(() => {
  let currentSlide = 0;
  let slides = [];
  let totalSlides = 0;
  let carouselReady = false;

  function buildDots() {
    const dotsContainer = document.getElementById('dots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => window.goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function normalizeSlides() {
    slides.forEach((slide, idx) => {
      slide.classList.remove(
        'slide-in-right',
        'slide-in-left',
        'slide-out-left',
        'slide-out-right'
      );
      if (idx === 0) {
        slide.classList.add('active');
        slide.classList.remove('carousel-initial-left', 'carousel-initial-right');
      } else {
        slide.classList.remove('active');
        if (!slide.classList.contains('carousel-initial-left') && !slide.classList.contains('carousel-initial-right')) {
          slide.classList.add('carousel-initial-right');
        }
      }
    });
  }

  function showSlide(newSlideIndex, direction = 1) {
    if (!carouselReady) return;

    if (newSlideIndex >= totalSlides) newSlideIndex = 0;
    if (newSlideIndex < 0) newSlideIndex = totalSlides - 1;

    const prevSlide = slides[currentSlide];
    const nextSlide = slides[newSlideIndex];

    if (prevSlide) {
      prevSlide.classList.remove('active');
      prevSlide.classList.add(direction > 0 ? 'slide-out-left' : 'slide-out-right');
    }

    if (nextSlide) {
      nextSlide.classList.remove(
        'slide-out-left',
        'slide-out-right',
        'carousel-initial-right',
        'carousel-initial-left'
      );
      nextSlide.classList.add('active', direction > 0 ? 'slide-in-right' : 'slide-in-left');
    }

    currentSlide = newSlideIndex;

    document.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  window.changeSlide = function (n) {
    if (!carouselReady) initCarousel();
    if (!carouselReady) return;
    const direction = n > 0 ? 1 : -1;
    const newSlideIndex = currentSlide + n;
    showSlide(newSlideIndex, direction);
  };

  window.goToSlide = function (n) {
    if (!carouselReady) initCarousel();
    if (!carouselReady) return;
    const direction = n > currentSlide ? 1 : -1;
    showSlide(n, direction);
  };

  function bindControls() {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => window.changeSlide(-1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => window.changeSlide(1));
    }
  }

  function initCarousel() {
    slides = Array.from(document.querySelectorAll('.carousel-slide'));
    totalSlides = slides.length;
    currentSlide = 0;
    carouselReady = totalSlides > 0;
    if (!carouselReady) return;

    normalizeSlides();
    buildDots();
    showSlide(0, 1);
  }

  function init() {
    initCarousel();
    bindControls();
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('hy-push-state-load', init);
})();
