// Controla a navegação manual (via radio buttons)
let currentSlide = 0;
let slides = document.querySelectorAll('.slider');
let radios = document.querySelectorAll('input[name="radio-btn"]');
let totalSlides = slides.length;

// Função para mostrar o slide baseado no índice
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0; // Loop de volta ao primeiro slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Loop para o último slide
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? 'block' : 'none'; // Mostra o slide atual
    });

    // Atualiza o rádio (controle manual)
    radios[currentSlide].checked = true;
}

// Função para auto-mover o slider
function autoSlide() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides; // Incrementa e faz o loop
        showSlide(currentSlide);
    }, 15000); // 7 segundos de intervalo
}

// Inicializa o slide automaticamente
showSlide(currentSlide);
autoSlide();

// Adiciona evento de clique para os botões de rádio (controle manual)
radios.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Adiciona evento de clique para os botões de rádio (controle manual)
radios.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// 👇 NOVO: Clicando em qualquer lugar da caixa avança o slide
const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});