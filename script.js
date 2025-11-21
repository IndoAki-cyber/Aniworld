// ===================== SCROLL REVEAL ANIMATION ===================== //
// Unique anime-style reveal: elements float upward + glow on entry

const revealElements = document.querySelectorAll('.fade-in');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// ===================== FLOATING NEON ANIMATION ===================== //
// Random floating motion like hologram screens

function floatingEffect() {
  const cards = document.querySelectorAll('.character-card, .gallery-card, .about-box');

  cards.forEach((card) => {
    const randomX = (Math.random() - 0.5) * 4;
    const randomY = (Math.random() - 0.5) * 4;
    const glowIntensity = Math.random() * 15 + 5;

    card.style.transform = `translate(${randomX}px, ${randomY}px)`;
    card.style.boxShadow = `0 0 ${glowIntensity}px rgba(100, 150, 255, 0.5)`;
  });
}
setInterval(floatingEffect, 600);


// ===================== NEON PULSE ON HOVER ===================== //
// Makes items pulse like anime energy

const pulseTargets = document.querySelectorAll('button, .character-card, .gallery-img');

pulseTargets.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.transition = '0.25s';
    item.style.filter = 'brightness(1.4)';
    item.style.transform = 'scale(1.05)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.filter = 'brightness(1)';
    item.style.transform = 'scale(1)';
  });
});


// ===================== NAVBAR GLOW SCROLL ===================== //
// Navbar glows stronger while scrolling

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 0 25px rgba(100, 150, 255, 0.6)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});


// ===================== GALLERY CLICK ZOOM ===================== //
// Fullscreen image preview

const galleryImages = document.querySelectorAll('.gallery-img');

const previewContainer = document.createElement('div');
previewContainer.classList.add('preview-container');
previewContainer.style.cssText = `
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
`;
document.body.appendChild(previewContainer);

const previewImg = document.createElement('img');
previewImg.style.cssText = `
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 0 25px #7aa7ff;
  transition: 0.3s;
`;
previewContainer.appendChild(previewImg);

// Open preview
galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    previewImg.src = img.src;
    previewContainer.style.visibility = 'visible';
    previewContainer.style.opacity = '1';
  });
});

// Close preview
previewContainer.addEventListener('click', () => {
  previewContainer.style.opacity = '0';
  setTimeout(() => {
    previewContainer.style.visibility = 'hidden';
  }, 300);
});


// ===================== PARALLAX BACKGROUND EFFECT ===================== //
// Moves background like anime cinematics

document.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX / window.innerWidth - 0.5) * 10;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 10;

  document.body.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
});
