document.addEventListener("DOMContentLoaded", function () {
  // Código do Menu Responsivo
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Função para inicializar o carrossel da seção "home"
  function initCarouselHome() {
    let currentIndexHome = 0;
    const carouselHomeImages = document.querySelectorAll("#home .carousel img");
    const totalImagesHome = carouselHomeImages.length;

    function showNextImageHome() {
      carouselHomeImages[currentIndexHome].classList.remove("active");
      currentIndexHome = (currentIndexHome + 1) % totalImagesHome;
      carouselHomeImages[currentIndexHome].classList.add("active");
    }

    setInterval(showNextImageHome, 2000); // Mudar de imagem a cada 2 segundos
  }

  // Função para inicializar o carrossel da seção "obras"
  function initCarouselObras() {
    let currentIndexObras = 0;
    const prevBtn = document.querySelector("#carousel-obras .prev-btn");
    const nextBtn = document.querySelector("#carousel-obras .next-btn");
    const carouselImages = document.querySelector(
      "#carousel-obras .carousel-images"
    );
    const images = document.querySelectorAll("#carousel-obras .static-image");
    const totalImagesObras = images.length;

    function updateCarouselObras() {
      carouselImages.style.transform = `translateX(-${
        currentIndexObras * 100
      }%)`;
    }

    prevBtn.addEventListener("click", () => {
      if (currentIndexObras > 0) {
        currentIndexObras--;
      } else {
        currentIndexObras = totalImagesObras - 1; // Voltar à última imagem
      }
      updateCarouselObras();
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndexObras < totalImagesObras - 1) {
        currentIndexObras++;
      } else {
        currentIndexObras = 0; // Voltar à primeira imagem
      }
      updateCarouselObras();
    });
  }

  // Inicializar os carrosséis
  initCarouselHome();
  initCarouselObras();
});
