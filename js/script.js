document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const percent = card.dataset.percent;
    const circle = card.querySelector(".progress-circle");
    const value = card.querySelector(".progress-value");

    card.addEventListener("mouseenter", () => {
      let current = 0;

      // reset
      circle.style.background =
        "conic-gradient(yellow 0deg, #e0e0e0 0deg)";
      value.textContent = "0%";

      // force reflow (important)
      circle.offsetWidth;

      const interval = setInterval(() => {
        if (current >= percent) {
          clearInterval(interval);
        } else {
          current++;
          value.textContent = current + "%";
          circle.style.background =
            `conic-gradient(
              yellow ${current * 3.6}deg,
              #e0e0e0 0deg
            )`;
        }
      }, 15);
    });
  });
});


const boxes = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3
});

boxes.forEach(box => {
    observer.observe(box);
});
// about animation
const classNames = ['h1About', 'who-i-am', 'my-experience', 'experience-item'];

const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Visible');
        }
    });
}, {
    threshold: 0.3
});

// Loop through each class name and observe all matching elements
classNames.forEach(className => {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(el => obs.observe(el));
});

// ====FOR NAVBAR HIDE ON SCROLL==== //
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.nav-container');
const hoverZone = document.querySelector('.hover-zone');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.add('hidden'); // scrolling down
    } else {
        navbar.classList.remove('hidden'); // scrolling up
    }
    lastScrollY = window.scrollY;
});

document.querySelectorAll(".card").forEach((card) => {
  let isAnimating = false;

  const startAnimation = () => {
    if (isAnimating) return;
    isAnimating = true;

    const percent = parseInt(card.dataset.percent, 10);
    const circle = card.querySelector(".progress-circle");
    const valueEl = circle.querySelector(".progress-value");

    let current = 0;

    // Reset
    circle.style.background = `conic-gradient(#00c6ff 0deg, #e0e0e0 0deg)`;
    valueEl.textContent = `0%`;

    const animate = () => {
      if (current <= percent) {
        const angle = current * 3.6;
        circle.style.background =
          `conic-gradient(#00c6ff ${angle}deg, #e0e0e0 ${angle}deg)`;
        valueEl.textContent = `${current}%`;
        current++;
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  // Desktop hover
  card.addEventListener("mouseenter", startAnimation);

  // Mobile / touch support
  card.addEventListener("click", startAnimation);
});


// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
});

nav.addEventListener("click", (e) =>{e.stopPropagation});

// Close menu when clicking outside
document.addEventListener("click", () => {
    nav.classList.remove("active");
});
window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        nav.classList.remove("active");
    }
});

// SLIDER
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');

    let currentSlide = 0;
    const slideCount = slides.length;

    // Function to update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Next slide
    nextBtn.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    });

    // Previous slide
    prevBtn.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    });

    // Click on indicator
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            currentSlide = index;
            updateSlider();
        });
    });
});

