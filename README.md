# Portfolio de Davi Castro

Um portfólio web moderno e responsivo desenvolvido com HTML, CSS e JavaScript, apresentando um design futurístico com efeitos Glass Morphism e animações interativas.

## 📜 Licença de Uso

**📌 IMPORTANTE**: Este projeto pode ser usado livremente por outras pessoas, mas é **OBRIGATÓRIO** manter os créditos visíveis!

---

## ⚖️ DIREITOS E CONDIÇÕES DE USO

### ✅ Permitido:
- ✅ Usar o código como base para seu próprio portfólio
- ✅ Modificar cores, textos, imagens e conteúdo
- ✅ Adaptar o design para suas necessidades
- ✅ Usar comercialmente

### 🚨 OBRIGATÓRIO:
- **Créditos DEVEM estar visíveis** no site final
- **NÃO pode** ser um Easter Egg ou tooltip escondido
- **NÃO pode** aparecer apenas no hover ou clique
- **DEVE** ser texto simples e visível permanentemente

### ❌ PROIBIDO:
- **JAMAIS usar os documentos pessoais DO AUTOR ORIGINAL** (currículo, certificados, foto de perfil do Davi Castro)
- **NÃO copiar os textos pessoais DO AUTOR** (experiências do Davi, formação dele, projetos específicos dele)
- **NÃO usar as informações de contato DO AUTOR ORIGINAL** (email, telefone, LinkedIn do Davi Castro)

---

## 📝 COMO DAR CRÉDITO

### Exemplo de Crédito Obrigatório:
```html
<!-- No rodapé ou em local visível -->
<p>Design baseado no portfólio de <a href="https://github.com/Davicjc">Davi Castro</a></p>
```

**⚠️ Não seguir estas regras viola os direitos autorais!**

---

## 🌟 Características Principais

- **Design Glass Morphism**: Interface moderna com efeitos de vidro fosco e transparências
- **Controles de Efeitos**: Botões para alternar entre modo HD (🌟) e Potato (🥔) para performance
- **Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- **Animações Interativas**: Efeitos de partículas, cursor dinâmico e transições suaves
- **Trilíngue**: Versões em Português, Inglês e Espanhol
- **Performance Otimizada**: CSS otimizado com variáveis personalizadas e modo ultra-leve
- **Acessibilidade**: Estrutura semântica, navegação por teclado e compatibilidade com dispositivos antigos

## 🎨 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno com Glass Morphism, Grid Layout e Flexbox
- **JavaScript (ES6+)**: Animações, interatividade e efeitos dinâmicos

### Fontes
- **Audiowide**: Fonte futurística para títulos e elementos de destaque
- **Montserrat**: Fonte principal para textos e navegação

### Recursos Visuais
- Gradientes dinâmicos com paleta de cores moderna
- Efeitos de backdrop-filter para Glass Morphism
- Animações CSS3 com keyframes
- Canvas para animações de partículas

## 📁 Estrutura do Projeto

```
Portfolio-CJC/
├── 📄 index.html                    # Página principal (Português)
├── 📄 README.md                     # Documentação do projeto
├── 📁 paginas/                      # Páginas adicionais
│   ├── 📄 index_en.html            # Página principal (Inglês)
│   └── 📄 index_es.html            # Página principal (Espanhol)
├── 📁 estilos/                      # Arquivos de estilo
│   └── 📄 style.css                # CSS principal com Glass Morphism
├── 📁 scripts/                      # Arquivos JavaScript
│   ├── 📄 script.js                # JavaScript principal
│   ├── 📄 certifications-config.js # Configuração de certificados
│   └── 📄 README-Certificados.md   # Guia para adicionar certificados
├── 📁 imagens/                      # Recursos visuais
│   └── 📷 profile-pic.jpg          # Foto de perfil
└── 📁 documentos/                   # Documentos e certificados
    ├── 📄 curriculo.pdf            # Currículo em PDF
    ├── 📁 certificados/            # Certificações
    │   ├── 📄 prompt-windows-alura.pdf
    │   ├── 📄 python-alura.pdf
    │   ├── 📄 seguranca-hacker-rangers.pdf
    │   ├── 📄 ingles-alura.pdf
    │   ├── 📄 ingles-wizard.pdf
    │   ├── 📄 codigo-conduta-algar.pdf
    │   └── 📄 lgpd-algar.pdf
```

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Davicjc/Portfolio-CJC.git
   ```

2. **Navegue até a pasta do projeto**:
   ```bash
   cd Portfolio-CJC
   ```

3. **Abra o arquivo index.html** em seu navegador favorito ou use um servidor local:
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # Usando Node.js (http-server)
   npx http-server
   
   # Usando PHP
   php -S localhost:8000
   ```

4. **Acesse no navegador**:
   - Página principal (PT): `http://localhost:8000/index.html`
   - Página em inglês: `http://localhost:8000/paginas/index_en.html`
   - Página em espanhol: `http://localhost:8000/paginas/index_es.html`

## 🌐 Funcionalidades

### Navegação
- **Barra de navegação fixa**: Sempre visível durante a rolagem
- **Smooth scrolling**: Rolagem suave entre seções
- **Troca de idioma**: Botões para alternar entre PT/EN/ES
- **Links responsivos**: Navegação adaptada para mobile

### Controles de Efeitos Visuais
- **Modo HD (🌟)**: Todos os efeitos visuais habilitados para melhor experiência
- **Modo Potato (🥔)**: Ultra-otimização para dispositivos com menor capacidade
- **Persistência**: Preferências salvas automaticamente no localStorage
- **Posicionamento discreto**: Botões no canto superior direito
- **Acessibilidade**: Alternativa para dispositivos antigos ou conexões lentas

### Certificações Dinâmicas
- **Sistema automatizado**: Certificados carregados dinamicamente
- **Trilíngue**: Nomes em português, inglês e espanhol
- **Fácil adição**: Apenas adicione o PDF e configure o nome
- **Ordenação inteligente**: Por data, ordem personalizada ou alfabética

📖 **Guia completo de certificados**: [scripts/README-Certificados.md](scripts/README-Certificados.md)

### Seções
- **Hero**: Apresentação com foto de perfil e call-to-action
- **Sobre Mim**: Descrição pessoal e profissional
- **Experiência**: Timeline com histórico profissional
- **Projetos**: Grid responsivo com projetos destacados
- **Habilidades**: Categorização de competências técnicas
- **Formação**: Histórico acadêmico
- **Certificações**: Lista dinâmica de cursos e certificados (carregamento automático)
- **Contato**: Informações de contato

### Efeitos Visuais
- **Animação de partículas**: Background dinâmico com canvas
- **Liquid Glass Effect**: Cursor com efeito de vidro líquido
- **Hover animations**: Interações suaves em cards e botões
- **Gradient borders**: Bordas com gradientes animados
- **Backdrop blur**: Efeitos de desfoque para Glass Morphism
- **Controles de Performance**: Sistema HD/Potato para otimização automática

### Sistema de Controles de Efeitos

O portfolio inclui um sistema inteligente de controle de performance:

#### Modo HD (🌟)
- Todos os efeitos visuais ativos
- Animações de partículas em canvas
- Efeitos de backdrop-filter e blur
- Transições e transformações suaves
- Gradientes animados e hover effects

#### Modo Potato (🥔)
- **Ultra-otimização** para máxima performance
- Desativa todas as animações e transições
- Remove efeitos de backdrop-filter pesados
- Simplifica gradientes e sombras
- Ideal para dispositivos antigos ou conexões lentas

#### Implementação Técnica
```css
/* Exemplo de otimização no modo potato */
body.effects-disabled *,
body.effects-disabled *::before,
body.effects-disabled *::after {
    transition: none !important;
    animation: none !important;
    transform: none !important;
    filter: none !important;
    backdrop-filter: none !important;
}
```

#### Persistência
- Estado salvo em `localStorage`
- Carregamento automático da preferência
- Funciona em todas as páginas trilíngues

## 🎨 Paleta de Cores

```css
:root {
    --primary-color: #0a0a0f;      /* Azul escuro profundo */
    --secondary-color: #1a1a2e;    /* Azul noite */
    --tertiary-color: #16213e;     /* Azul médio */
    --accent-color: #64ffda;       /* Ciano elétrico */
    --accent-secondary: #9c88ff;   /* Roxo suave */
    --accent-tertiary: #ff6b9d;    /* Rosa suave */
    --text-color-light: #ffffff;   /* Branco puro */
    --text-color-medium: #e2e8f0;  /* Cinza claro */
    --text-color-dark: #94a3b8;    /* Cinza médio */
}
```

## 📱 Responsividade

O projeto utiliza uma abordagem mobile-first com breakpoints:
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

### Adaptações Mobile
- Menu de navegação simplificado
- Cards em coluna única
- Textos e espaçamentos otimizados
- Touch-friendly buttons

## 🏆 Sistema de Certificados Dinâmico

O portfolio possui um sistema automatizado para gerenciar certificados, eliminando a necessidade de editar código HTML toda vez que um novo certificado for adicionado.

### Como Funciona
1. **Adicione o PDF**: Coloque o arquivo na pasta `documentos/certificados/`
2. **Configure o nome**: Edite `scripts/certifications-config.js`
3. **Pronto!**: O certificado aparece automaticamente no site

### Exemplo de Adição
```javascript
// Em certifications-config.js
'novo-certificado-2025.pdf': {
    pt: 'Nome do Certificado - Instituição (Data)',
    en: 'Certificate Name - Institution (Date)',
    es: 'Nombre del Certificado - Institución (Fecha)',
    date: '2025-08',  // opcional
    order: 0  // opcional
},
```

### Vantagens
- ✅ **Sem edição de HTML**: Apenas configure uma vez
- ✅ **Trilíngue automático**: PT/EN/ES configurados juntos
- ✅ **Ordenação inteligente**: Por data, ordem ou alfabética
- ✅ **Certificados em progresso**: Sistema separado para cursos atuais

📖 **Guia completo**: Ver `scripts/README-Certificados.md`

## 🔧 Personalização

### Modificar Cores
Edite as variáveis CSS em `estilos/style.css`:
```css
:root {
    --accent-color: #sua-cor-aqui;
    /* outras variáveis... */
}
```

### Adicionar Novos Projetos
1. Adicione um novo `.project-card` na seção de projetos
2. Siga a estrutura HTML existente
3. Mantenha consistência visual

### Modificar Animações
As animações estão definidas em:
- CSS keyframes para animações puras
- JavaScript para interações complexas

## 🌍 Suporte Trilíngue

O site suporta três idiomas:
- **Português** (`index.html`)
- **Inglês** (`paginas/index_en.html`)
- **Espanhol** (`paginas/index_es.html`)

### Navegação entre Idiomas
- Botões de idioma disponíveis em todas as páginas
- Estrutura HTML idêntica entre versões
- Certificados e conteúdo traduzidos automaticamente

### Adicionar Novo Idioma
1. Crie uma nova página baseada na estrutura existente
2. Traduza todo o conteúdo
3. Atualize os links de navegação
4. Modifique o JavaScript para incluir o novo idioma
5. Adicione traduções no `certifications-config.js`

## 📊 Performance

### Otimizações Implementadas
- **CSS minificado**: Variáveis CSS para reduzir redundância
- **Lazy loading**: Imagens carregadas conforme necessário
- **Backdrop-filter**: Efeitos GPU-accelerated
- **Smooth animations**: Transform e opacity para melhor performance
- **Modo Potato**: Ultra-otimização com desativação completa de efeitos pesados

### Métricas Alvo
- **Lighthouse Score**: > 90
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

### Estatísticas do Projeto
- **Linhas de código CSS**: ~1000+ (incluindo comentários e otimizações)
- **Arquivos JavaScript**: 3 módulos organizados
- **Suporte a idiomas**: 3 (Português, Inglês, Espanhol)
- **Certificados gerenciados**: 7+ com sistema dinâmico
- **Seções do portfolio**: 8 seções completas
- **Responsividade**: 3 breakpoints (mobile, tablet, desktop)

## 🔒 Compatibilidade

### Navegadores Suportados
- **Chrome**: 88+
- **Firefox**: 84+
- **Safari**: 14+
- **Edge**: 88+

### Funcionalidades Modernas
- CSS Grid & Flexbox
- CSS Custom Properties
- Backdrop-filter
- Canvas API
- ES6+ JavaScript

## 🚧 Desenvolvimento Futuro

### Funcionalidades Planejadas
- [ ] Sistema de contato integrado
- [ ] Blog/artigos dinâmicos
- [ ] Tema escuro/claro
- [ ] PWA (Progressive Web App)
- [ ] Análise de tráfego
- [ ] SEO otimizado

### Melhorias Técnicas
- [ ] Build system (Webpack/Vite)
- [ ] SASS/SCSS
- [ ] TypeScript
- [ ] Testes automatizados
- [ ] CI/CD pipeline

## 📄 Licença e Direitos

**Licença MIT** com **créditos obrigatórios**: Este projeto pode ser usado livremente, mas os créditos ao autor original devem permanecer visíveis no site final.

### 📋 Condições de Uso:
- ✅ **Livre para usar** pessoal ou comercialmente
- ✅ **Modificar** conforme necessário
- ✅ **Distribuir** e **reutilizar**
- 🚨 **OBRIGATÓRIO**: Manter créditos visíveis no site final
- ❌ **PROIBIDO**: Usar documentos pessoais, textos específicos ou informações do autor

### ⚖️ Detalhes Técnicos:
Veja o arquivo `LICENSE` para detalhes completos da licença MIT.

## 👨‍💻 Autor

**Davi Castro**
- GitHub: [@Davicjc](https://github.com/Davicjc)
- LinkedIn: [Davi Castro](https://linkedin.com/in/davi-castro-jc)
- Email: davicjc@outlook.com

---

### 📝 Notas de Versão

**Versão 3.5** *(Atual - Agosto 2025)*
- 🎮 **Controles de Efeitos Visuais**: Adicionados botões discretos (🌟 HD / 🥔 Potato Mode)
- ⚡ **Modo Potato**: Ultra-otimização para dispositivos com menor capacidade
- 🔄 **Persistência de Preferências**: Estado dos efeitos salvo no localStorage
- 🎨 **Design Aprimorado**: Botões informativos com ícones e tooltips
- 🚀 **Performance**: Desativação completa de transições, animações e efeitos pesados no modo Potato
- ♿ **Acessibilidade**: Melhor experiência para dispositivos antigos e conexões lentas
- 🌍 **Suporte Trilíngue Completo**: Controles funcionais em PT/EN/ES

**Versão 3.2**
- Implementação completa do suporte trilíngue (Português, Inglês, Espanhol)
- Sistema de certificados expandido para três idiomas com traduções completas
- Navegação entre idiomas totalmente funcional com botões dedicados
- Estrutura HTML completamente unificada entre todas as versões linguísticas
- Correções de compatibilidade e otimizações de carregamento
- Documentação atualizada com guias trilíngues

**Versão 3.1**
- Adicionado suporte trilíngue (Português, Inglês, Espanhol)
- Sistema de certificados expandido para três idiomas
- Navegação entre idiomas aprimorada
- Estrutura HTML unificada entre todas as versões
- Correções de compatibilidade com navegadores

**Versão 3.0**
- Reorganização completa da estrutura de pastas
- Implementação do design Glass Morphism
- Melhoria na responsividade mobile
- Otimização de performance
- Documentação completa

---

*Desenvolvido com ❤️ e muito ☕ por Davi Castro*
