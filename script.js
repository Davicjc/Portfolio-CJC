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
            const href = window.location.href;
            if (href.includes('index_en.html')) {
                window.location.href = 'index.html';
            } else {
                window.location.href = 'index_en.html';
            }
        });

        // Atualiza o texto do botão com base na página atual
        if (window.location.href.includes('index_en.html')) {
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