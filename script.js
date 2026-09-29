const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('active');
    nav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// HERO SLIDESHOW
const slideshow = document.getElementById('heroSlideshow');
if (slideshow) {
  const slides = slideshow.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('slideshowDots');
  let current = 0;

  // create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('.dot');

  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function nextSlide() {
    goToSlide((current + 1) % slides.length);
  }

  setInterval(nextSlide, 4000);
}
