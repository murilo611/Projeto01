document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Arrange the slides next to one another
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
  });

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  // Automatic slideshow with continuous loop
  setInterval(() => {
    const currentSlide = track.querySelector(".current-slide") || slides[0];
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    moveToSlide(track, currentSlide, nextSlide);
  }, 3000); // Change slide every 3 seconds

  // Initialize the first slide as the current slide
  slides[0].classList.add("current-slide");
});
//segundo carrossel//
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carro-sel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".next-btn11");
  const prevButton = document.querySelector(".prev-btn");
  let currentSlideIndex = 0;

  const moveToSlide = (index) => {
    track.style.transform = `translateX(-${index * 50}vw)`;
    currentSlideIndex = index;
  };

  nextButton.addEventListener("click", () => {
    const nextIndex = (currentSlideIndex + 1) % 2; // Limita a navegação para 2 estados
    moveToSlide(nextIndex);
  });

  prevButton.addEventListener("click", () => {
    const prevIndex = (currentSlideIndex - 1 + 2) % 2; // Limita a navegação para 2 estados
    moveToSlide(prevIndex);
  });

  moveToSlide(currentSlideIndex); // Inicializa a posição do slide
});
