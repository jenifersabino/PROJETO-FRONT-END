// js/carousel.js

export function initCarousel() {
    
    const slide = document.querySelector('.carousel-slide');
    if (!slide) return;

    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let currentIndex = 0;
    const totalImages = images.length;
    let slideWidth = images.length > 0 ? images[0].clientWidth : 0; // Largura de uma imagem
    let autoPlayInterval;

    // --- Funções de Ajuda ---

    // 1. Atualiza a posição do carrossel
    const updateSlidePosition = () => {
        if (!slideWidth) slideWidth = images[0].clientWidth; // Garante a largura
        slide.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        updateIndicators();
    };

    // 2. Cria os indicadores (pontos)
    const createIndicators = () => {
        indicatorsContainer.innerHTML = ''; 
        images.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (index === 0) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateSlidePosition();
                resetAutoPlay();
            });
            indicatorsContainer.appendChild(indicator);
        });
    };

    // 3. Atualiza qual indicador está ativo
    const updateIndicators = () => {
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });
    };

    // --- Funções de Navegação e Autoplay ---

    const goToNext = () => {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateSlidePosition();
    };

    const goToPrev = () => {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateSlidePosition();
    };

    const startAutoPlay = () => {
        autoPlayInterval = setInterval(goToNext, 3000);
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    // --- Inicialização ---

    
    window.addEventListener('resize', () => {
        slideWidth = images[0].clientWidth;
        updateSlidePosition(); // Reposiciona o slide após o redimensionamento
    });

    // Eventos dos Botões
    nextBtn.addEventListener('click', () => {
        goToNext();
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        goToPrev();
        resetAutoPlay();
    });

    // Inicia o carrossel (se houver imagens)
    if (totalImages > 0) {
        createIndicators();
        startAutoPlay();
        console.log("Carrossel inicializado com sucesso.");
    }
}
