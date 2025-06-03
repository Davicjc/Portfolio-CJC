document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no rodapé
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Lógica para o botão de troca de idioma
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function() {
            // Sempre alterna entre os arquivos, independente da URL
            if (window.location.pathname.endsWith('index_en.html')) {
                window.location.href = 'index.html';
            } else {
                window.location.href = 'index_en.html';
            }
        });

        // Atualiza o texto do botão com base na página atual
        if (window.location.pathname.endsWith('index_en.html')) {
            langSwitcher.textContent = 'Versão em Português';
        } else {
            langSwitcher.textContent = 'English Version';
        }
    }

    // Smooth scrolling para links da navbar
    document.querySelectorAll('#main-header .nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const headerOffset = document.getElementById('main-header').offsetHeight;
                const offsetPosition = elementPosition - headerOffset - 15;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Script para partículas animadas
(function() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) {
        console.warn('Particle canvas not found');
        return;
    }
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = 50; // Número de partículas
    const particles = [];

    // Cores azul claro para as partículas
    const lightBlueColors = [
        'rgba(173, 216, 230, 0.6)', // LightBlue com opacidade
        'rgba(135, 206, 250, 0.7)', // LightSkyBlue com opacidade
        'rgba(0, 191, 255, 0.5)',   // DeepSkyBlue com opacidade
        'rgba(100, 149, 237, 0.6)', // CornflowerBlue com opacidade
        'rgba(224, 255, 255, 0.7)'  // LightCyan com opacidade
    ];

    function getRandomColor() {
        return lightBlueColors[Math.floor(Math.random() * lightBlueColors.length)];
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2.5 + 1; // Tamanho entre 1 e 3.5
            this.speedX = (Math.random() - 0.5) * 0.8; // Velocidade horizontal lenta
            this.speedY = (Math.random() - 0.5) * 0.8; // Velocidade vertical lenta
            this.color = getRandomColor();
            this.opacity = Math.random() * 0.5 + 0.3; // Opacidade entre 0.3 e 0.8
            this.phase = Math.random() * Math.PI * 2; // Para animação de pulsação
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Mantém as partículas dentro da tela (efeito de loop)
            if (this.x < -this.size) this.x = width + this.size;
            if (this.x > width + this.size) this.x = -this.size;
            if (this.y < -this.size) this.y = height + this.size;
            if (this.y > height + this.size) this.y = -this.size;
        }

        draw() {
            ctx.save();
            // Efeito de pulsação sutil na opacidade
            const currentOpacity = this.opacity * (0.7 + 0.3 * Math.sin(Date.now() / 700 + this.phase));
            ctx.globalAlpha = currentOpacity < 0 ? 0 : currentOpacity;

            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function initParticles() {
        particles.length = 0; // Limpa o array antes de recriar
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles(); // Recria as partículas para o novo tamanho
    });

    initParticles();
    animateParticles();
})();