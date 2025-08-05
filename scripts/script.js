/*
    Código JavaScript do Portfólio de Davi Castro (davicjc).
    Este código foi originalmente desenvolvido por Davi Castro.
    Editado e comentado por IA (GitHub Copilot) para facilitar o entendimento de terceiros.
*/

// Executa o código quando o DOM (Document Object Model) está completamente carregado e parseado.
// Associado a: Inicialização de scripts após carregamento da página.
document.addEventListener('DOMContentLoaded', function() {

    // Bloco para atualizar o ano no rodapé dinamicamente.
    // Associado a: <span id="year"> no rodapé (footer).
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear(); // Define o texto do span para o ano atual.
    }

    // Bloco para a lógica do botão de troca de idioma.
    // Associado a: <button id="lang-switcher">.
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        // Adiciona um ouvinte de evento de clique ao botão.
        langSwitcher.addEventListener('click', function() {
            const currentPath = window.location.pathname; // Pega o caminho atual da URL.
            const isEnglishVersion = currentPath.endsWith('index_en.html'); // Verifica se está na versão em inglês.

            // Alterna para a página oposta.
            if (isEnglishVersion) {
                window.location.href = '../index.html'; // Se inglês, vai para português.
            } else {
                // Se português (ou raiz no GitHub Pages), vai para inglês.
                // Considera que 'index.html' ou '/' (raiz) são a versão em português.
                window.location.href = 'paginas/index_en.html';
            }
        });

        // Atualiza o texto do botão com base na página atual ao carregar.
        const currentPathOnLoad = window.location.pathname;
        if (currentPathOnLoad.endsWith('index_en.html')) {
            langSwitcher.textContent = 'Versão em Português'; // Se na página em inglês, botão oferece ir para português.
        } else {
            langSwitcher.textContent = 'English Version'; // Se na página em português, botão oferece ir para inglês.
        }
    }

    // Bloco para smooth scrolling (rolagem suave) para links da barra de navegação.
    // Associado a: Links <a> dentro de #main-header .nav-links que começam com '#'.

    document.querySelectorAll('#main-header .nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão de clique do link (salto brusco).
            const targetId = this.getAttribute('href'); // Obtém o ID do alvo (ex: '#sobre-mim').
            const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo.

            if (targetElement) {
                // Calcula a posição do elemento alvo, considerando o deslocamento do cabeçalho fixo.
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const headerOffset = document.getElementById('main-header').offsetHeight; // Altura do cabeçalho.
                const offsetPosition = elementPosition - headerOffset - 15; // Posição final com ajuste de 15px.

                // Executa a rolagem suave para a posição calculada.
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Bloco para animação de partículas no canvas de fundo.
    // Associado a: <canvas id="particle-canvas">.
    (function() {
        const canvas = document.getElementById('particle-canvas');
        if (!canvas) {
            console.warn('Particle canvas (#particle-canvas) not found.'); // Avisa se o canvas não for encontrado.
            return;
        }
        const ctx = canvas.getContext('2d'); // Contexto 2D para desenhar no canvas.
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;   // Define a largura do canvas igual à da janela.
        canvas.height = height; // Define a altura do canvas igual à da janela.

        const PARTICLE_COUNT = 50; // Número de partículas a serem criadas.
        const particles = []; // Array para armazenar as partículas.

        // Cores azul claro para as partículas, com variação de opacidade.
        const lightBlueColors = [
            'rgba(173, 216, 230, 0.6)', // LightBlue
            'rgba(135, 206, 250, 0.7)', // LightSkyBlue
            'rgba(0, 191, 255, 0.5)',   // DeepSkyBlue
            'rgba(100, 149, 237, 0.6)', // CornflowerBlue
            'rgba(224, 255, 255, 0.7)'  // LightCyan
        ];

        // Função para obter uma cor aleatória da lista de azuis claros.
        function getRandomColor() {
            return lightBlueColors[Math.floor(Math.random() * lightBlueColors.length)];
        }

        // Classe para definir a estrutura e comportamento de uma partícula.
        class Particle {
            constructor() {
                this.x = Math.random() * width; // Posição X inicial aleatória.
                this.y = Math.random() * height; // Posição Y inicial aleatória.
                this.size = Math.random() * 2.5 + 1; // Tamanho aleatório entre 1 e 3.5.
                this.speedX = (Math.random() - 0.5) * 0.8; // Velocidade horizontal aleatória e lenta.
                this.speedY = (Math.random() - 0.5) * 0.8; // Velocidade vertical aleatória e lenta.
                this.color = getRandomColor(); // Cor aleatória da lista.
                this.opacity = Math.random() * 0.5 + 0.3; // Opacidade aleatória entre 0.3 e 0.8.
                this.phase = Math.random() * Math.PI * 2; // Fase para animação de pulsação da opacidade.
            }

            // Método para atualizar a posição da partícula.
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Lógica para fazer a partícula reaparecer do lado oposto quando sai da tela (efeito de loop).
                if (this.x < -this.size) this.x = width + this.size;
                if (this.x > width + this.size) this.x = -this.size;
                if (this.y < -this.size) this.y = height + this.size;
                if (this.y > height + this.size) this.y = -this.size;
            }

            // Método para desenhar a partícula no canvas.
            draw() {
                ctx.save(); // Salva o estado atual do contexto do canvas.
                // Calcula a opacidade atual com um efeito de pulsação.
                const currentOpacity = this.opacity * (0.7 + 0.3 * Math.sin(Date.now() / 700 + this.phase));
                ctx.globalAlpha = currentOpacity < 0 ? 0 : currentOpacity; // Garante que a opacidade não seja negativa.

                ctx.fillStyle = this.color; // Define a cor de preenchimento.
                ctx.beginPath(); // Inicia um novo caminho de desenho.
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Desenha um círculo.
                ctx.fill(); // Preenche o círculo.
                ctx.restore(); // Restaura o estado anterior do contexto.
            }
        }

        // Função para inicializar (ou reiniciar) as partículas.
        function initParticles() {
            particles.length = 0; // Limpa o array de partículas existente.
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(new Particle()); // Cria e adiciona novas partículas.
            }
        }

        // Função principal de animação, chamada recursivamente via requestAnimationFrame.
        function animateParticles() {
            ctx.clearRect(0, 0, width, height); // Limpa o canvas em cada frame.
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(); // Atualiza a posição de cada partícula.
                particles[i].draw();   // Desenha cada partícula.
            }
            requestAnimationFrame(animateParticles); // Solicita o próximo frame de animação.
        }

        // Adiciona um ouvinte para o evento de redimensionamento da janela.
        window.addEventListener('resize', () => {
            width = window.innerWidth;    // Atualiza a largura.
            height = window.innerHeight;  // Atualiza a altura.
            canvas.width = width;         // Redefine a largura do canvas.
            canvas.height = height;       // Redefine a altura do canvas.
            initParticles();              // Reinicializa as partículas para o novo tamanho.
        });

        initParticles();    // Inicializa as partículas quando o script é carregado.
        animateParticles(); // Inicia o loop de animação.
    })(); // Função auto-executável (IIFE) para encapsular o escopo das partículas.

    // Sistema de Liquid Glass com interação realista do mouse
    (function() {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let targetX = mouseX;
        let targetY = mouseY;
        let isMouseMoving = false;
        let mouseTimeout;

        // Smooth mouse tracking com easing
        function updateMousePosition() {
            const ease = 0.1;
            mouseX += (targetX - mouseX) * ease;
            mouseY += (targetY - mouseY) * ease;
            
            // Atualiza CSS variables para o efeito liquid glass
            document.documentElement.style.setProperty('--mouseX', mouseX + 'px');
            document.documentElement.style.setProperty('--mouseY', mouseY + 'px');
            document.documentElement.style.setProperty('--mouseMoving', isMouseMoving ? '1' : '0');
            
            requestAnimationFrame(updateMousePosition);
        }

        // Mouse move listener
        document.addEventListener('mousemove', function(e) {
            targetX = e.clientX;
            targetY = e.clientY;
            isMouseMoving = true;
            
            // Reset timeout para detectar quando o mouse para
            clearTimeout(mouseTimeout);
            mouseTimeout = setTimeout(() => {
                isMouseMoving = false;
            }, 100);
        });

        // Inicia o sistema de tracking
        updateMousePosition();

        // Adiciona efeito de ripple ao clicar
        document.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'liquid-ripple';
            ripple.style.left = e.clientX + 'px';
            ripple.style.top = e.clientY + 'px';
            document.body.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });

        // Hover effects para elementos interativos
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category, .timeline-content');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.setProperty('--hover-intensity', '1');
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.setProperty('--hover-intensity', '0');
            });
        });
    })();
});