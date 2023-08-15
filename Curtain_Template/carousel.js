const carousel = document.querySelector('.carousel');
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
let cardWidth = carousel.clientWidth * 0.4; // Adjust based on the updated card width percentage

// Update card width for smaller screen sizes
if (window.innerWidth <= 768 ) {
  cardWidth = carousel.clientWidth * 0.5; // Adjust based on the desired card width percentage for smaller screens
}

let currentIndex = 0;
let isPaused = false;

function cloneCards() {
  for (let i = 0; i < cards.length; i++) {
    const clone = cards[i].cloneNode(true);
    cardContainer.appendChild(clone);
  }
}

function slideCarousel() {
  if (!isPaused) {
    currentIndex++;
    if (currentIndex === cards.length) {
      currentIndex = 0;
    }
    cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px`;
  }

  setTimeout(slideCarousel, 4000); // Pause for 4 seconds before sliding again
}

function slideToIndex(index) {
  currentIndex = index;
  cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px`;
}

function setupManualSlide() {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = cards.length - 1;
    }
    slideToIndex(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex === cards.length) {
      currentIndex = 0;
    }
    slideToIndex(currentIndex);
  });

  // Add touch swipe support for touch devices
  let touchStartX = 0;
  carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDiff = touchEndX - touchStartX;

    if (touchDiff > 0) {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = cards.length - 1;
      }
      slideToIndex(currentIndex);
    } else if (touchDiff < 0) {
      currentIndex++;
      if (currentIndex === cards.length) {
        currentIndex = 0;
      }
      slideToIndex(currentIndex);
    }
  });
}

carousel.addEventListener('mouseenter', () => {
  isPaused = true;
});

carousel.addEventListener('mouseleave', () => {
  isPaused = false;
});

cloneCards();
slideCarousel();
setupManualSlide();
