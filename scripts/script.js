/*
    Código JavaScript do Portfólio de Davi Castro (davicjc).
    Este código foi originalmente desenvolvido por Davi Castro.
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

        // Bloco para carregar certificados dinamicamente
    // Associado a: .certification-list
    function loadCertifications() {
        // Verifica se a configuração está disponível
        if (typeof CERTIFICATIONS_CONFIG === 'undefined') {
            console.warn('CERTIFICATIONS_CONFIG não encontrado. Carregue certifications-config.js primeiro.');
            return;
        }

        // Determina o idioma atual
        const isEnglish = window.location.pathname.includes('index_en.html');
        const isSpanish = window.location.pathname.includes('index_es.html');
        const language = isSpanish ? 'es' : (isEnglish ? 'en' : 'pt');
        
        // Determina o caminho base para os certificados
        const basePath = (isEnglish || isSpanish) ? '../documentos/certificados/' : 'documentos/certificados/';

        // Encontra a lista de certificações no DOM (suporta diferentes estruturas)
        let certificationList = document.querySelector('.certification-list');
        if (!certificationList) {
            // Tenta encontrar pela ID se a classe não existir (versão nova)
            certificationList = document.querySelector('#certifications-list');
        }
        if (!certificationList) {
            console.warn('Certification list not found');
            return;
        }

        // Limpa a lista existente
        certificationList.innerHTML = '';

        // Converte o objeto de configuração em array e ordena
        const certifications = Object.entries(CERTIFICATIONS_CONFIG)
            .map(([filename, config]) => ({ filename, ...config }))
            .sort((a, b) => {
                // Ordena por campo 'order' se existir, senão por data, senão alfabeticamente
                if (a.order !== undefined && b.order !== undefined) {
                    return a.order - b.order;
                }
                if (a.date && b.date) {
                    return b.date.localeCompare(a.date); // Mais recente primeiro
                }
                return a[language].localeCompare(b[language]);
            });

        // Adiciona cada certificação dinamicamente
        certifications.forEach(cert => {
            // Verifica se é a nova estrutura (grid) ou a antiga (lista)
            const isGridStructure = certificationList.classList.contains('certifications-grid');
            
            if (isGridStructure) {
                // Nova estrutura com cards
                const certCard = document.createElement('div');
                certCard.className = 'certification-card';
                
                const link = document.createElement('a');
                link.href = basePath + cert.filename;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.className = 'certification-link';
                link.textContent = cert[language];
                
                certCard.appendChild(link);
                certificationList.appendChild(certCard);
            } else {
                // Estrutura antiga com lista
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                
                link.href = basePath + cert.filename;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = cert[language];
                
                listItem.appendChild(link);
                certificationList.appendChild(listItem);
            }
        });

        // Adiciona seção "Em Progresso" se existir configuração
        if (typeof IN_PROGRESS_CERTIFICATIONS !== 'undefined' && IN_PROGRESS_CERTIFICATIONS[language]) {
            // Tenta encontrar container específico para progresso
            let progressContainer = document.querySelector('#certifications-progress-list');
            
            if (progressContainer) {
                // Versão nova com container específico
                progressContainer.innerHTML = '';
                
                IN_PROGRESS_CERTIFICATIONS[language].forEach(cert => {
                    const listItem = document.createElement('div');
                    listItem.className = 'progress-item';
                    listItem.style.color = '#ffd700';
                    listItem.style.padding = '8px 0';
                    listItem.textContent = cert;
                    progressContainer.appendChild(listItem);
                });
            } else {
                // Versão antiga - adiciona após a lista principal
                const progressTitle = document.createElement('h4');
                progressTitle.style.cssText = 'color: var(--accent-color); margin-top: 30px; margin-bottom: 15px;';
                
                // Define o título baseado no idioma
                let titleText = 'Em Progresso';
                if (language === 'en') titleText = 'In Progress';
                if (language === 'es') titleText = 'En Progreso';
                progressTitle.textContent = titleText;
                
                const progressList = document.createElement('ul');
                progressList.className = 'certification-list';
                
                IN_PROGRESS_CERTIFICATIONS[language].forEach(cert => {
                    const listItem = document.createElement('li');
                    listItem.style.color = '#ffd700';
                    listItem.textContent = cert;
                    progressList.appendChild(listItem);
                });

                // Adiciona após a lista principal
                const wrapper = certificationList.parentElement;
                wrapper.appendChild(progressTitle);
                wrapper.appendChild(progressList);
            }
        }

        console.log(`✅ ${certifications.length} certificados carregados automaticamente!`);
    }

    // Carrega as certificações quando a página estiver pronta
    loadCertifications();

    // Controle de Efeitos Visuais
    function initEffectsControl() {
        const enableBtn = document.getElementById('enableEffects');
        const disableBtn = document.getElementById('disableEffects');
        const body = document.body;

        // Carrega o estado salvo ou usa o padrão (ativado)
        const savedState = localStorage.getItem('effectsEnabled');
        const effectsEnabled = savedState !== null ? savedState === 'true' : true;

        function updateEffectsState(enabled) {
            if (enabled) {
                body.classList.remove('effects-disabled');
                enableBtn.classList.add('active');
                disableBtn.classList.remove('active');
                localStorage.setItem('effectsEnabled', 'true');
            } else {
                body.classList.add('effects-disabled');
                enableBtn.classList.remove('active');
                disableBtn.classList.add('active');
                localStorage.setItem('effectsEnabled', 'false');
            }
        }

        // Aplica o estado inicial
        updateEffectsState(effectsEnabled);

        // Event listeners para os botões
        if (enableBtn) {
            enableBtn.addEventListener('click', () => updateEffectsState(true));
        }

        if (disableBtn) {
            disableBtn.addEventListener('click', () => updateEffectsState(false));
        }
    }

    // Inicializa o controle de efeitos
    initEffectsControl();

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

    // Inicialização do modal de imagens
    initImageModal();
    
    // Correção forçada do letter-spacing
    fixLetterSpacing();
    
    // ===== INICIALIZAÇÃO DA NOTIFICAÇÃO =====
    // Notificação aparece sempre ao entrar no site
    const notification = document.getElementById('newVersionNotification');
    if (notification) {
        notification.style.display = 'flex';
        console.log('✅ Notificação exibida!');
    }
    })();
});

// Funções do Modal de Imagens
function initImageModal() {
    // Adiciona event listeners para todas as imagens de projetos (incluindo galeria)
    const projectImages = document.querySelectorAll('.project-image, .project-gallery-grid img');
    projectImages.forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
        // Adiciona estilo de cursor pointer para indicar que é clicável
        img.style.cursor = 'pointer';
    });

    // Event listener para fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });

    // Event listener para fechar modal clicando no fundo
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeImageModal();
            }
        });
    }
}

function openImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modal && modalImage && modalCaption) {
        modalImage.src = imageSrc;
        modalImage.alt = imageAlt;
        modalCaption.textContent = imageAlt;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Previne scroll do body
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaura scroll do body
        
        // Limpa a imagem após animação
        setTimeout(() => {
            const modalImage = document.getElementById('modalImage');
            const modalCaption = document.getElementById('modalCaption');
            if (modalImage && modalCaption) {
                modalImage.src = '';
                modalImage.alt = '';
                modalCaption.textContent = '';
            }
        }, 300);
    }

    // Correção forçada para letter-spacing dos títulos
    fixLetterSpacing();
}

// Função para corrigir letter-spacing via JavaScript
function fixLetterSpacing() {
    // Seleciona todos os h3 de projetos
    const projectTitles = document.querySelectorAll('.project-timeline-item h3, .project-side-by-side h3, .project-timeline-content h3');
    
    projectTitles.forEach(title => {
        title.style.letterSpacing = '0px';
        title.style.wordSpacing = '0px';
        title.style.fontFamily = 'Montserrat, sans-serif';
        title.style.fontVariant = 'normal';
        title.style.textRendering = 'auto';
        title.style.fontKerning = 'auto';
    });
    
    console.log('Letter-spacing corrigido para', projectTitles.length, 'títulos');
}

// ===== FUNÇÕES DA NOTIFICAÇÃO NOVA VERSÃO =====

// Função para fechar a notificação
function closeNotification() {
    const notification = document.getElementById('newVersionNotification');
    if (notification) {
        notification.style.display = 'none';
    }
}

// Função para ir ao protótipo
function goToPrototype() {
    // Abre o protótipo em nova aba
    window.open('prototipo.html', '_blank');
    // Fecha a notificação
    closeNotification();
}

// Função para lembrar depois
function remindLater() {
    closeNotification();
}