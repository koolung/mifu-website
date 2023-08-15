const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

function goToNewPage()
{
    var url = document.getElementById("option").value;
    window.location = url;
}

/*  counter */
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }

  function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    slideNumber(input);
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
      slideNumber(input);
    }
  }

  /*  end counter */
  
  function slideNumber(input) {
    input.classList.add('slide-up');
  
    setTimeout(function() {
      input.classList.remove('slide-up');
    }, 300);
  
    setTimeout(function() {
      input.classList.add('slide-down');
    }, 300);
  
    setTimeout(function() {
      input.classList.remove('slide-down');
    }, 600);
  }
  

  function toggle(source) {
    checkboxes = document.getElementsByName('unit');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }


  /* blind image carousel */
  const carousel = document.querySelector('.blind-carousel');
  const hoverContainer = document.querySelector('.hover-container');
  const images = carousel.querySelectorAll('img');
  const radioButtons = hoverContainer.querySelectorAll('input[type="radio"]');

  let currentIndex = 0;
  let intervalId;

  function startCarousel() {
    intervalId = setInterval(() => {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      if(screen.width <= 425) {
        carousel.style.transform = `translateX(-${currentIndex * screen.width}px)`;
      } else {
        carousel.style.transform = `translateX(-${currentIndex * 750}px)`;
      }
      radioButtons[currentIndex].checked = true;
    }, 5000); // Image display duration: 5 seconds
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  function setupCarousel() {
    carousel.innerHTML = '';
    images.forEach((image) => {
      const imgContainer = document.createElement('div');
      imgContainer.appendChild(image);
      carousel.appendChild(imgContainer);
    });
    if(screen.width <= 425) {
      carousel.style.width = `${images.length * screen.width}px`;
    } else{
      carousel.style.width = `${images.length * 750}px`;
    }
  }

  hoverContainer.style.display = 'flex';
  setupCarousel();
  startCarousel();

  // Pause carousel on hover
  carousel.addEventListener('mouseover', stopCarousel);
  carousel.addEventListener('mouseout', startCarousel);

  // Control carousel via radio buttons
  radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      currentIndex = index;
      if(screen.width <= 425) {
        carousel.style.transform = `translateX(-${currentIndex * screen.width}px)`;
      } else {
        carousel.style.transform = `translateX(-${currentIndex * 750}px)`;
      }
      stopCarousel();
      startCarousel();
    });
  });


  /* End blind image carousel */