document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no rodapé
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Lógica para o botão de troca de idioma (se for usado no futuro)
    const langSwitcher = document.getElementById('lang-switcher');
    // Supondo que você teria um 'index_en.html' no mesmo diretório.
    // Esta é uma lógica SIMPLES de redirecionamento.
    // Uma abordagem SPA (Single Page Application) seria mais complexa para trocar conteúdo dinamicamente.
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function() {
            // Verifica qual página está ativa para decidir para onde redirecionar
            if (window.location.pathname.includes('index_pt.html') || window.location.pathname === '/') {
                // Se está na PT ou na raiz (assumindo PT como padrão), vai para EN
                window.location.href = 'index_en.html'; // Crie este arquivo para a versão em inglês
            } else if (window.location.pathname.includes('index_en.html')) {
                // Se está na EN, vai para PT
                window.location.href = 'index_pt.html';
            }
            // Adicione mais lógica se necessário, como guardar a preferência em localStorage.
        });

        // Atualiza o texto do botão com base na página atual (exemplo simples)
        // Isso precisaria de mais lógica se você quiser que o botão sempre mostre a "outra" língua
        if (window.location.pathname.includes('index_en.html')) {
            langSwitcher.textContent = 'Versão em Português';
        } else {
            langSwitcher.textContent = 'English Version';
        }
        // Para o caso atual, onde só temos PT e o botão está display:none, esta parte do JS não terá efeito visual.
    }


    // Smooth scrolling para links da navbar
    document.querySelectorAll('#main-header .nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // Remove o 'fixed' temporariamente para cálculo correto do offset
            // Isso é um workaround se o header fixo estiver causando problemas no cálculo do scroll.
            // Pode não ser necessário dependendo do seu CSS exato.
            // const header = document.getElementById('main-header');
            // header.style.position = 'static'; 

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula a posição do elemento alvo
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                // Pega a altura do header fixo
                const headerOffset = document.getElementById('main-header').offsetHeight;
                // Calcula a posição final do scroll, subtraindo a altura do header e um pequeno padding
                const offsetPosition = elementPosition - headerOffset - 15; // 15px de padding extra

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            // header.style.position = 'fixed'; // Restaura a posição do header
        });
    });
});