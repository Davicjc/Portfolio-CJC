/*
    Configuração de Certificados - Portfolio Davi Castro
    
    Para adicionar um novo certificado:
    1. Adicione o arquivo PDF na pasta 'documentos/certificados/'
    2. Adicione uma entrada neste arquivo seguindo o padrão abaixo
    3. Recarregue a página - o certificado aparecerá automaticamente
    
    Formato:
    'nome-do-arquivo.pdf': {
        pt: 'Nome em Português',
        en: 'Name in English',
        date: 'YYYY-MM' (opcional),
        order: número (opcional, para ordenação)
    }
*/

const CERTIFICATIONS_CONFIG = {
    // Certificados atuais (ordenados por data, mais recente primeiro)
    'prompt-windows-alura.pdf': {
        pt: 'Prompt do Windows - Alura (Março 2022)',
        en: 'Windows Prompt - Alura (March 2022)',
        es: 'Prompt de Windows - Alura (Marzo 2022)',
        date: '2022-03',
        order: 1
    },
    'python-alura.pdf': {
        pt: 'Python - Alura (Dezembro 2021)',
        en: 'Python - Alura (December 2021)',
        es: 'Python - Alura (Diciembre 2021)',
        date: '2021-12',
        order: 2
    },
    'ingles-alura.pdf': {
        pt: 'Inglês - Alura (Junho 2021)',
        en: 'English - Alura (June 2021)',
        es: 'Inglés - Alura (Junio 2021)',
        date: '2021-06',
        order: 3
    },
    'ingles-wizard.pdf': {
        pt: 'Inglês - Wizard by Pearson (Dezembro 2019)',
        en: 'English - Wizard by Pearson (December 2019)',
        es: 'Inglés - Wizard by Pearson (Diciembre 2019)',
        date: '2019-12',
        order: 4
    },
    'seguranca-hacker-rangers.pdf': {
        pt: 'Segurança da Informação - Hacker Rangers Brasil',
        en: 'Information Security - Hacker Rangers Brasil',
        es: 'Seguridad de la Información - Hacker Rangers Brasil',
        order: 5
    },
    'codigo-conduta-algar.pdf': {
        pt: 'Código de Conduta - Algar Telecom',
        en: 'Code of Conduct - Algar Telecom',
        es: 'Código de Conducta - Algar Telecom',
        order: 6
    },
    'lgpd-algar.pdf': {
        pt: 'LGPD - Algar Telecom',
        en: 'LGPD - Algar Telecom',
        es: 'LGPD - Algar Telecom',
        order: 7
    }
    
    /*
    EXEMPLO: Para adicionar um novo certificado, adicione uma entrada como esta:
    
    'novo-certificado.pdf': {
        pt: 'Nome do Certificado em Português',
        en: 'Certificate Name in English',
        date: '2025-08',  // opcional
        order: 0  // opcional - números menores aparecem primeiro
    },
    
    */
};

// Configurações de certificados em progresso
const IN_PROGRESS_CERTIFICATIONS = {
    pt: [
        'Java - Udemy (Previsão: Final de 2025)',
        'Inglês - Duolingo (Hobby e apoio linguístico) ∞',
        'AWS - Amazon Web Services (Previsão: Final de 2025)'
    ],
    en: [
        'Java - Udemy (Expected: End of 2025)',
        'English - Duolingo (Hobby and linguistic support) ∞',
        'AWS - Amazon Web Services (Expected: End of 2025)'
    ],
    es: [
        'Java - Udemy (Previsto: Final de 2025)',
        'Inglés - Duolingo (Hobby y apoyo lingüístico) ∞',
        'AWS - Amazon Web Services (Previsto: Final de 2025)'
    ]
};

// Exporta as configurações para uso no script principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CERTIFICATIONS_CONFIG, IN_PROGRESS_CERTIFICATIONS };
}
