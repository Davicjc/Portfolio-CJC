# Portfolio de Davi Castro

Um portfólio web moderno e responsivo desenvolvido com HTML, CSS e JavaScript, apresentando um design futurístico com efeitos Glass Morphism e animações interativas.

## 🌟 Características Principais

- **Design Glass Morphism**: Interface moderna com efeitos de vidro fosco e transparências
- **Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- **Animações Interativas**: Efeitos de partículas, cursor dinâmico e transições suaves
- **Multi-idioma**: Versões em Português e Inglês
- **Performance Otimizada**: CSS otimizado com variáveis personalizadas
- **Acessibilidade**: Estrutura semântica e navegação por teclado

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
│   └── 📄 index_en.html            # Página principal (Inglês)
├── 📁 estilos/                      # Arquivos de estilo
│   └── 📄 style.css                # CSS principal com Glass Morphism
├── 📁 scripts/                      # Arquivos JavaScript
│   └── 📄 script.js                # JavaScript principal
├── 📁 imagens/                      # Recursos visuais
│   └── 📷 profile-pic.jpg          # Foto de perfil
├── 📁 documentos/                   # Documentos e certificados
│   ├── 📄 curriculo.pdf            # Currículo em PDF
│   ├── 📁 certificados/            # Certificações
│   │   ├── 📄 prompt-windows-alura.pdf
│   │   ├── 📄 python-alura.pdf
│   │   ├── 📄 seguranca-hacker-rangers.pdf
│   │   ├── 📄 ingles-alura.pdf
│   │   ├── 📄 ingles-wizard.pdf
│   │   ├── 📄 codigo-conduta-algar.pdf
│   │   └── 📄 lgpd-algar.pdf
│   └── 📁 outros/                  # Outros documentos
│       └── 📄 curriculo em html.html
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

## 🌐 Funcionalidades

### Navegação
- **Barra de navegação fixa**: Sempre visível durante a rolagem
- **Smooth scrolling**: Rolagem suave entre seções
- **Troca de idioma**: Botão para alternar entre PT/EN
- **Links responsivos**: Navegação adaptada para mobile

### Seções
- **Hero**: Apresentação com foto de perfil e call-to-action
- **Sobre Mim**: Descrição pessoal e profissional
- **Experiência**: Timeline com histórico profissional
- **Projetos**: Grid responsivo com projetos destacados
- **Habilidades**: Categorização de competências técnicas
- **Formação**: Histórico acadêmico
- **Certificações**: Lista de cursos e certificados
- **Contato**: Informações de contato

### Efeitos Visuais
- **Animação de partículas**: Background dinâmico com canvas
- **Liquid Glass Effect**: Cursor com efeito de vidro líquido
- **Hover animations**: Interações suaves em cards e botões
- **Gradient borders**: Bordas com gradientes animados
- **Backdrop blur**: Efeitos de desfoque para Glass Morphism

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

## 🌍 Multi-idioma

O site suporta dois idiomas:
- **Português** (`index.html`)
- **Inglês** (`paginas/index_en.html`)

### Adicionar Novo Idioma
1. Crie uma nova página baseada na estrutura existente
2. Traduza todo o conteúdo
3. Atualize os links de navegação
4. Modifique o JavaScript para incluir o novo idioma

## 📊 Performance

### Otimizações Implementadas
- **CSS minificado**: Variáveis CSS para reduzir redundância
- **Lazy loading**: Imagens carregadas conforme necessário
- **Backdrop-filter**: Efeitos GPU-accelerated
- **Smooth animations**: Transform e opacity para melhor performance

### Métricas Alvo
- **Lighthouse Score**: > 90
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

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

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Davi Castro**
- GitHub: [@Davicjc](https://github.com/Davicjc)
- LinkedIn: [Davi Castro](https://linkedin.com/in/davi-castro-jc)
- Email: davicjc@outlook.com

---

### 📝 Notas de Versão

**Versão 3.0**
- Reorganização completa da estrutura de pastas
- Implementação do design Glass Morphism
- Melhoria na responsividade mobile
- Otimização de performance
- Documentação completa

---

*Desenvolvido com ❤️ e muito ☕ por Davi Castro*
