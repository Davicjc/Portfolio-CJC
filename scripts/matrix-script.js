/*
 * MATRIX PORTFOLIO - DAVI CASTRO
 * JavaScript com efeitos cyberpunk espetaculares
 */

// Execução quando DOM está carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MATRIX RAIN EFFECT =====
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');

    // Configuração do canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Caracteres Matrix
    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Array de gotas
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Função de animação da chuva Matrix
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    // Iniciar animação Matrix
    setInterval(drawMatrix, 35);

    // ===== NAVIGATION FUNCTIONALITY =====
    const nav = document.querySelector('.cyber-nav');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect para navigation
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        // Adicionar backdrop blur quando rolar
        if (currentScrollY > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling para links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Fechar menu mobile
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ===== TYPING ANIMATION =====
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');

    function typeWriter(element, text, speed = 50) {
        return new Promise((resolve) => {
            element.innerHTML = '';
            let i = 0;
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            
            type();
        });
    }

    // Iniciar sequência de typing
    async function startTypingSequence() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await typeWriter(heroTitle, 'DAVI CASTRO JORGE DA COSTA', 80);
        await new Promise(resolve => setTimeout(resolve, 500));
        await typeWriter(heroSubtitle, 'DESENVOLVEDOR FULL-STACK', 60);
        await new Promise(resolve => setTimeout(resolve, 500));
        await typeWriter(heroDescription, 'Especialista em criar soluções digitais inovadoras\nTransformando código em experiências extraordinárias', 30);
    }

    startTypingSequence();

    // ===== COUNTER ANIMATION =====
    const statNumbers = document.querySelectorAll('.stat-number');

    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    // Intersection Observer para animar contadores quando visíveis
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });

    // ===== SKILL BARS ANIMATION =====
    const skillItems = document.querySelectorAll('.skill-item');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const width = progressBar.dataset.width;
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
                
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillItems.forEach(skill => {
        skillObserver.observe(skill);
    });

    // ===== GLITCH EFFECTS =====
    function createGlitchEffect(element, duration = 3000) {
        const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
        const originalText = element.textContent;
        let isGlitching = false;

        function glitch() {
            if (isGlitching) return;
            isGlitching = true;

            const glitchDuration = 150;
            const glitchInterval = 50;
            let glitchTime = 0;

            const glitchTimer = setInterval(() => {
                let glitchedText = '';
                for (let i = 0; i < originalText.length; i++) {
                    if (Math.random() < 0.1) {
                        glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    } else {
                        glitchedText += originalText[i];
                    }
                }
                element.textContent = glitchedText;

                glitchTime += glitchInterval;
                if (glitchTime >= glitchDuration) {
                    clearInterval(glitchTimer);
                    element.textContent = originalText;
                    isGlitching = false;
                }
            }, glitchInterval);
        }

        // Glitch aleatório
        setInterval(glitch, duration + Math.random() * 2000);
    }

    // Aplicar efeito glitch no logo
    const logo = document.querySelector('.logo');
    if (logo) {
        createGlitchEffect(logo, 5000);
    }

    // ===== PARTICLE SYSTEM =====
    function createFloatingParticles() {
        const particleContainer = document.querySelector('.code-particles');
        const particles = particleContainer.querySelectorAll('.particle');

        particles.forEach((particle, index) => {
            const randomX = Math.random() * 100;
            const randomDelay = Math.random() * 20;
            const randomDuration = 15 + Math.random() * 10;

            particle.style.left = randomX + '%';
            particle.style.animationDelay = randomDelay + 's';
            particle.style.animationDuration = randomDuration + 's';
        });
    }

    createFloatingParticles();

    // ===== CURSOR EFFECTS =====
    const cursor = document.createElement('div');
    cursor.classList.add('cyber-cursor');
    document.body.appendChild(cursor);

    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cursor-trail');
    document.body.appendChild(cursorTrail);

    // Adicionar CSS para cursor customizado
    const cursorStyles = `
        .cyber-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid #00ff41;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        }
        
        .cursor-trail {
            width: 8px;
            height: 8px;
            background: #00ff41;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            transition: all 0.15s ease;
            box-shadow: 0 0 10px #00ff41;
        }
        
        .cyber-cursor.hover {
            transform: scale(1.5);
            border-color: #4eff00;
        }
        
        .cursor-trail.hover {
            background: #4eff00;
            transform: scale(1.2);
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = cursorStyles;
    document.head.appendChild(styleSheet);

    // Movimento do cursor
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        
        setTimeout(() => {
            cursorTrail.style.left = e.clientX - 4 + 'px';
            cursorTrail.style.top = e.clientY - 4 + 'px';
        }, 50);
    });

    // Efeitos de hover
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .nav-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorTrail.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorTrail.classList.remove('hover');
        });
    });

    // ===== SCROLL ANIMATIONS =====
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .section-header');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Adicionar delay para múltiplos elementos
                const children = entry.target.querySelectorAll('.skill-item, .project-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        scrollObserver.observe(element);
    });

    // ===== TERMINAL COMMANDS =====
    const terminalLines = document.querySelectorAll('.terminal-line');
    
    terminalLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.classList.add('fade-in');
        }, index * 500);
    });

    // ===== FORM HANDLING =====
    const form = document.querySelector('.cyber-form');
    const submitBtn = document.querySelector('.submit-btn');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Efeito de loading
            submitBtn.innerHTML = '<span>ENVIANDO...</span>';
            submitBtn.disabled = true;
            
            // Simular envio
            setTimeout(() => {
                submitBtn.innerHTML = '<span>MENSAGEM ENVIADA!</span>';
                submitBtn.style.background = '#00ff41';
                submitBtn.style.color = '#000';
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<span>ENVIAR MENSAGEM</span>';
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'transparent';
                    submitBtn.style.color = '#00ff41';
                    form.reset();
                }, 2000);
            }, 2000);
        });
    }

    // ===== PROJECT CARD EFFECTS =====
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Efeito de tilt 3D
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // ===== AUDIO EFFECTS =====
    function createAudioContext() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            function playBeep(frequency = 440, duration = 100, volume = 0.1) {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = 'square';
                
                gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration / 1000);
            }
            
            // Adicionar sons aos elementos interativos
            document.querySelectorAll('.nav-link, .project-link, .submit-btn').forEach(element => {
                element.addEventListener('mouseenter', () => {
                    playBeep(800, 50, 0.05);
                });
                
                element.addEventListener('click', () => {
                    playBeep(1200, 100, 0.08);
                });
            });
            
        } catch (error) {
            console.log('Audio Context não suportado:', error);
        }
    }

    // Ativar audio apenas com interação do usuário
    document.addEventListener('click', createAudioContext, { once: true });

    // ===== MATRIX BACKGROUND PATTERNS =====
    function createMatrixPatterns() {
        const patterns = ['&lt;/&gt;', '{ }', '[ ]', '( )', '&amp;&amp;', '||', '==', '!=', '++', '--'];
        const body = document.body;

        setInterval(() => {
            const pattern = document.createElement('div');
            pattern.textContent = patterns[Math.floor(Math.random() * patterns.length)];
            pattern.style.position = 'fixed';
            pattern.style.color = '#00ff41';
            pattern.style.fontSize = '12px';
            pattern.style.fontFamily = 'monospace';
            pattern.style.opacity = '0.1';
            pattern.style.pointerEvents = 'none';
            pattern.style.zIndex = '-1';
            pattern.style.left = Math.random() * 100 + '%';
            pattern.style.top = '-20px';
            pattern.style.animation = 'float 10s linear forwards';
            
            body.appendChild(pattern);
            
            setTimeout(() => {
                pattern.remove();
            }, 10000);
        }, 2000);
    }

    createMatrixPatterns();

    // ===== PROJECT MODAL FUNCTIONALITY =====
    const projectData = {
        'hub-audicom': {
            title: 'Hub Audicom',
            image: 'imagens/Audicom-projetos/Hub.jpg',
            description: `
                <p>Plataforma empresarial centralizada que unifica todos os sistemas operacionais essenciais da empresa em uma interface moderna e responsiva. Desenvolvida com JavaScript ES6+, Python e API REST, a solução transformou processos fragmentados em um ecossistema integrado.</p>
                <p>O sistema implementa funcionalidades avançadas como sistema de tickets com categorização automática, gestão completa de roteadores, controle de inventário em tempo real, scripts de atendimento padronizados, assistente de IA disponível 24/7 e sistema de documentação com busca avançada.</p>
            `,
            tech: ['JavaScript ES6+', 'Python', 'API REST', 'WebSocket', 'Node.js', 'MongoDB'],
            features: [
                'Sistema de tickets com categorização automática',
                'Gestão completa de roteadores e equipamentos',
                'Controle de inventário em tempo real',
                'Scripts de atendimento padronizados',
                'Assistente de IA 24/7 integrado',
                'Sistema de documentação com busca avançada',
                'Dashboard executivo com métricas',
                'Notificações automáticas por email'
            ],
            metrics: [
                { value: '60%', label: 'Redução Tempo Resolução' },
                { value: '100%', label: 'Integração Sistemas' },
                { value: '24/7', label: 'Disponibilidade' },
                { value: '5 min', label: 'Tempo Médio Resposta' }
            ]
        },
        'ia-audinha': {
            title: 'IA Audinha',
            image: 'imagens/Audicom-projetos/Audinha.jpg',
            description: `
                <p>Assistente virtual especializado em suporte técnico para telecomunicações, desenvolvido com Python, Machine Learning, NLP e TensorFlow. O sistema autônomo fornece diagnósticos automáticos com 95% de precisão e integra uma base de conhecimento técnico abrangente.</p>
                <p>A IA oferece resolução guiada personalizada por equipamento, realiza análise automática de logs, fornece suporte multilíngue em português, inglês e espanhol, e mantém conexão direta com sistemas de ticketing via API.</p>
            `,
            tech: ['Python', 'Machine Learning', 'NLP', 'TensorFlow', 'FastAPI', 'Neural Networks'],
            features: [
                'Diagnósticos automáticos com 95% de precisão',
                'Base de conhecimento técnico integrada',
                'Resolução guiada personalizada por equipamento',
                'Análise automática de logs e relatórios',
                'Suporte multilíngue (PT, EN, ES)',
                'Conexão direta com sistemas de ticketing',
                'Aprendizado contínuo baseado em feedback',
                'Interface conversacional natural'
            ],
            metrics: [
                { value: '95%', label: 'Precisão Diagnósticos' },
                { value: '2s', label: 'Tempo Médio Resposta' },
                { value: '80%', label: 'Casos Resolvidos Automaticamente' },
                { value: '3', label: 'Idiomas Suportados' }
            ]
        },
        'scripts-atendimento': {
            title: 'Scripts de Atendimento com IA',
            image: 'imagens/Audicom-projetos/Scripts.jpg',
            description: `
                <p>Sistema inteligente de padronização de comunicação corporativa desenvolvido com JavaScript ES6+, NLP e API REST. A plataforma implementa correção linguística automática para garantir gramática e tom profissional em todas as comunicações.</p>
                <p>Utiliza scripts padronizados com templates para cenários técnicos recorrentes, oferece campos dinâmicos com validação automática e possui workflow integrado para criação, correção e aprovação de comunicações empresariais.</p>
            `,
            tech: ['JavaScript ES6+', 'NLP', 'API REST', 'Workflow Engine', 'Node.js', 'Express'],
            features: [
                'Correção linguística automática com IA',
                'Templates padronizados para cenários técnicos',
                'Campos dinâmicos com validação automática',
                'Workflow integrado de criação e aprovação',
                'Controle de qualidade com análise de conformidade',
                'Histórico completo para rastreabilidade',
                'Interface intuitiva de arrastar e soltar',
                'Biblioteca de respostas pré-aprovadas'
            ],
            metrics: [
                { value: '90%', label: 'Redução Erros Comunicação' },
                { value: '100%', label: 'Padronização Atendimento' },
                { value: '50%', label: 'Redução Tempo Criação' },
                { value: '99%', label: 'Conformidade Corporativa' }
            ]
        },
        'sistema-chamados': {
            title: 'Sistema de Chamados',
            image: 'imagens/Audicom-projetos/Sistema-de-Chamados.jpg',
            description: `
                <p>Sistema completo de gestão de tickets e solicitações técnicas desenvolvido com JavaScript ES6+, Node.js e WebSocket. A plataforma centraliza todas as demandas operacionais em interface unificada com categorização inteligente automática.</p>
                <p>Implementa workflow customizado baseado em regras de negócio, dashboard executivo com métricas de SLA e performance em tempo real, histórico detalhado com rastreabilidade completa e relatórios analíticos com insights de produtividade.</p>
            `,
            tech: ['JavaScript ES6+', 'Node.js', 'WebSocket', 'MongoDB', 'Chart.js', 'JWT'],
            features: [
                'Categorização inteligente automática por prioridade',
                'Workflow customizado baseado em regras de negócio',
                'Dashboard executivo com métricas SLA em tempo real',
                'Histórico detalhado com rastreabilidade completa',
                'Notificações automáticas por email e SMS',
                'Relatórios analíticos com insights de produtividade',
                'Escalação automática baseada em tempo',
                'Interface mobile responsiva'
            ],
            metrics: [
                { value: '65%', label: 'Redução Tempo Resolução' },
                { value: 'Real-time', label: 'Métricas SLA' },
                { value: '99.9%', label: 'Uptime Sistema' },
                { value: '500+', label: 'Tickets/Dia Processados' }
            ]
        },
        'gestao-documental': {
            title: 'Sistema de Gestão Documental',
            image: 'imagens/Audicom-projetos/Notas.jpg',
            description: `
                <p>Plataforma enterprise de gestão documental desenvolvida com JavaScript ES6+, Web Crypto API, IndexedDB e PWA que centraliza todo o conhecimento técnico organizacional em ambiente altamente seguro.</p>
                <p>O sistema implementa criptografia AES-256 de nível financeiro, controle de acesso hierárquico com segregação de documentos corporativos e pessoais, motor de busca inteligente com indexação full-text e versionamento automático com auditoria completa.</p>
            `,
            tech: ['JavaScript ES6+', 'Web Crypto API', 'IndexedDB', 'PWA', 'Service Workers', 'AES-256'],
            features: [
                'Criptografia AES-256 de nível financeiro',
                'Controle de acesso hierárquico avançado',
                'Motor de busca inteligente com indexação full-text',
                'Versionamento automático com auditoria completa',
                'Categorização automática por IA baseada em contexto',
                'Backup redundante com sincronização em tempo real',
                'Interface offline-first com PWA',
                'Segregação de documentos corporativos e pessoais'
            ],
            metrics: [
                { value: '85%', label: 'Redução Tempo Busca' },
                { value: 'AES-256', label: 'Nível Criptografia' },
                { value: '100%', label: 'Centralização Conhecimento' },
                { value: '99.99%', label: 'Disponibilidade Documentos' }
            ]
        },
        'sites-personalizado': {
            title: 'Sites Personalizado - Showcase',
            image: 'https://davicjc.github.io/SitesPersonalizado/preview.jpg',
            description: `
                <p>Plataforma completa de apresentação de serviços de criação de sites personalizados, incluindo 6 exemplos funcionais de diferentes tipos de negócios. Cada exemplo demonstra funcionalidades específicas como sistemas de pedidos, carrinho de compras, agendamentos e formulários de contato.</p>
                <p>Desenvolvido com foco em conversão e experiência do usuário, o projeto showcases diferentes nichos de mercado: pizzaria, e-commerce, site corporativo, salão de beleza, portfólio pessoal e academia fitness.</p>
            `,
            tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design', 'UX/UI Design', 'GitHub Pages'],
            features: [
                '6 exemplos funcionais de sites completos',
                'Sistemas de pedidos online para pizzaria',
                'E-commerce com carrinho de compras',
                'Site corporativo com formulários de contato',
                'Sistema de agendamento para salão de beleza',
                'Portfólio pessoal responsivo',
                'Site de academia com calculadora IMC',
                'Design responsivo para todos os dispositivos'
            ],
            metrics: [
                { value: '6', label: 'Exemplos Funcionais' },
                { value: '100%', label: 'Responsivo' },
                { value: 'Online', label: 'Status' },
                { value: '95%', label: 'Performance Score' }
            ]
        },
        'reconhecimento-facial': {
            title: 'Software de Reconhecimento Facial',
            image: 'https://github.com/Davicjc/Face-Safety/blob/main/Fotos/1-Lobby.jpg?raw=true',
            description: `
                <p>Software de reconhecimento facial desenvolvido em Python para controle de acesso e segurança empresarial. O sistema permite cadastrar, remover e identificar pessoas através de imagens capturadas pela câmera, tornando o controle de acesso mais eficiente e seguro.</p>
                <p>Projeto acadêmico desenvolvido na Universidade de Uberaba que foi classificado em 1º lugar entre 60 projetos acadêmicos, demonstrando excelência técnica e inovação na aplicação de visão computacional.</p>
            `,
            tech: ['Python', 'OpenCV', 'Machine Learning', 'Tkinter', 'Computer Vision', 'SQLite'],
            features: [
                'Cadastramento de pessoas via câmera',
                'Reconhecimento facial em tempo real',
                'Sistema de remoção de usuários',
                'Interface gráfica intuitiva com Tkinter',
                'Banco de dados local para armazenamento',
                'Algoritmos de detecção facial otimizados',
                'Sistema de logs e auditoria',
                'Controle de acesso automatizado'
            ],
            metrics: [
                { value: '1º', label: 'Lugar (60 projetos)' },
                { value: '95%', label: 'Precisão Reconhecimento' },
                { value: 'Real-time', label: 'Processamento' },
                { value: 'OpenCV', label: 'Tecnologia Base' }
            ]
        },
        'portfolio-interativo': {
            title: 'Portfólio Interativo Liquid Glass',
            image: 'imagens/profile-pic.jpg',
            description: `
                <p>Portfólio web moderno e interativo desenvolvido com HTML5, CSS3 e JavaScript vanilla. Implementa efeitos visuais avançados de "liquid glass" com morphismo de vidro, sistema de partículas animadas e cursor interativo com ripple effects.</p>
                <p>O projeto demonstra competências em desenvolvimento front-end moderno, animações CSS avançadas, manipulação de Canvas API e técnicas de UX/UI contemporâneas, servindo como showcase das habilidades técnicas e criativas do desenvolvedor.</p>
            `,
            tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Canvas API', 'CSS Grid/Flexbox', 'Git', 'GitHub Pages'],
            features: [
                'Efeitos liquid glass com morphismo de vidro',
                'Sistema de partículas animadas com Canvas',
                'Cursor interativo com ripple effects',
                'Design responsivo para todos os dispositivos',
                'Animações CSS avançadas e transições suaves',
                'Timeline interativa de experiências',
                'Galeria de projetos com modal expansion',
                'Performance otimizada e carregamento rápido'
            ],
            metrics: [
                { value: 'Glass', label: 'Morphism Effects' },
                { value: '100%', label: 'Interativo' },
                { value: 'Canvas', label: 'Tecnologia Visual' },
                { value: '98%', label: 'Performance Score' }
            ]
        }
    };

    // Função para abrir modal do projeto
    window.openProjectModal = function(projectId) {
        const modal = document.getElementById('projectModal');
        const data = projectData[projectId];
        
        if (!data) return;
        
        // Preencher dados do modal
        document.getElementById('projectModalTitle').textContent = data.title;
        document.getElementById('projectModalImage').src = data.image;
        document.getElementById('projectModalImage').alt = data.title;
        document.getElementById('projectModalDescription').innerHTML = data.description;
        
        // Preencher tecnologias
        const techContainer = document.getElementById('projectModalTech');
        techContainer.innerHTML = data.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        // Preencher funcionalidades
        const featuresContainer = document.getElementById('projectModalFeatures');
        featuresContainer.innerHTML = `
            <h4>Principais Funcionalidades:</h4>
            <ul>
                ${data.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        
        // Preencher métricas
        const metricsContainer = document.getElementById('projectModalMetrics');
        metricsContainer.innerHTML = data.metrics.map(metric => `
            <div class="modal-metric">
                <span class="modal-metric-value">${metric.value}</span>
                <span class="modal-metric-label">${metric.label}</span>
            </div>
        `).join('');
        
        // Mostrar modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Função para fechar modal do projeto
    window.closeProjectModal = function() {
        const modal = document.getElementById('projectModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // Fechar modal ao clicar fora
    document.addEventListener('click', (e) => {
        const modal = document.getElementById('projectModal');
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });

    // ===== CONSOLE MESSAGES =====
    console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║                    MATRIX PORTFOLIO ATIVO                    ║
    ║                                                              ║
    ║  Desenvolvido por: Davi Castro Jorge da Costa                ║
    ║  Tema: Cyberpunk/Matrix Professional                         ║
    ║  Status: Sistemas Online ✓                                   ║
    ║                                                              ║
    ║  Efeitos Ativos:                                             ║
    ║  • Matrix Rain Background ✓                                  ║
    ║  • Typing Animation ✓                                        ║
    ║  • Glitch Effects ✓                                          ║
    ║  • Particle System ✓                                         ║
    ║  • Scroll Animations ✓                                       ║
    ║  • 3D Card Effects ✓                                         ║
    ║  • Custom Cursor ✓                                           ║
    ║  • Audio Feedback ✓                                          ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
    `);

    console.log('%cWelcome to the Matrix...', 'color: #00ff41; font-size: 16px; font-weight: bold;');
    console.log('%cPortfolio carregado com sucesso!', 'color: #00ff41; font-size: 12px;');

    // ===== EASTER EGGS =====
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join(',') === konamiSequence.join(',')) {
            // Easter egg ativado!
            document.body.style.filter = 'hue-rotate(180deg)';
            alert('🎉 Código Konami ativado! Modo Matrix Alternativo! 🎉');
            
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 5000);
        }
    });

    // Mensagem especial para desenvolvedores
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) { // Ctrl+Shift+I
            setTimeout(() => {
                console.log('%cOlá, desenvolvedor! 👨‍💻', 'color: #00ff41; font-size: 20px; font-weight: bold;');
                console.log('%cVejo que você está investigando o código...', 'color: #4eff00; font-size: 14px;');
                console.log('%cEste portfólio foi criado com muito ❤️ e ☕', 'color: #00ff41; font-size: 12px;');
                console.log('%cGostou do código? Entre em contato! 🚀', 'color: #39ff14; font-size: 12px;');
            }, 1000);
        }
    });

    // ===== PERFORMANCE MONITORING =====
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`%cPortfolio carregado em ${Math.round(loadTime)}ms`, 'color: #00ff41; font-size: 12px;');
        
        // Preload de imagens críticas
        const criticalImages = [
            // Adicionar URLs de imagens importantes aqui se houver
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    });

    // ===== SERVICE WORKER REGISTRATION =====
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('%cSW registered: ', 'color: #00ff41;', registration);
                })
                .catch(registrationError => {
                    console.log('%cSW registration failed: ', 'color: #ff0040;', registrationError);
                });
        });
    }

}); // End of DOMContentLoaded