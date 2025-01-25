document.addEventListener("DOMContentLoaded", function () {
  // Código do Menu Responsivo
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav ul");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Código do Carrossel
  let currentIndex = 0;
  const images = document.querySelectorAll(".carousel img");
  const totalImages = images.length;

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add("active");
  }

  setInterval(showNextImage, 2000); // Mudar de imagem a cada 2 segundos
});
