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

  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".next-btn");
    const prevButton = document.querySelector(".prev-btn");
    let currentIndex = 0;

    // Definir a largura exata de cada slide
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Função para posicionar os slides um ao lado do outro
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);

    // Função para mover o carrossel
    const moveToSlide = (currentIndex) => {
      const amountToMove = slideWidth * currentIndex;
      track.style.transform = "translateX(-" + amountToMove + "px)";
    };

    // Evento para o botão "Próximo"
    nextButton.addEventListener("click", () => {
      if (currentIndex < slides.length - 2.5) {
        currentIndex += 1;
        moveToSlide(currentIndex);
      }
    });

    // Evento para o botão "Anterior"
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        moveToSlide(currentIndex);
      }
    });
  });

  // Inicializar os carrosséis
  initCarouselHome();
  initCarouselObras();
});

document.addEventListener("DOMContentLoaded", function () {
  const imagem = document.querySelector(".imagem-central");
  const texto = document.querySelector(".texto-sobre-imagem");

  const options = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        imagem.classList.add("aparecer");
        texto.classList.add("aparecer");
        observer.unobserve(entry.target); // Para parar de observar após a animação
      }
    });
  }, options);

  observer.observe(imagem);
});
