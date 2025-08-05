# 🏆 Como Adicionar Certificados ao Site

**Para iniciantes**: Este guia te ensina como adicionar novos certificados ao portfólio de forma simples e automática.

## ✨ O que este sistema faz?

O site carrega **automaticamente** todos os certificados em PDF da pasta de documentos e os mostra de forma organizada em **3 idiomas** (Português, Inglês e Espanhol).

**Vantagem**: Você só precisa fazer 2 passos simples e o certificado aparece no site automaticamente! 🎉

---

## 📋 PASSO A PASSO SIMPLES

### PASSO 1: 📁 Adicionar o arquivo PDF
1. Abra a pasta do projeto no seu computador
2. Navegue até: `documentos` → `certificados`
3. **Arraste e solte** seu certificado PDF nesta pasta
4. ✅ **Pronto!** O arquivo está no lugar certo

> 💡 **Dica**: Use nomes descritivos como `javascript-udemy-2025.pdf` ou `aws-amazon-2025.pdf`

### PASSO 2: ⚙️ Configurar como o nome vai aparecer
1. Abra a pasta: `scripts`
2. Abra o arquivo: `certifications-config.js` (pode usar o Bloco de Notas)
3. **Copie e cole** o exemplo abaixo, mudando as informações:

```javascript
'SEU-ARQUIVO.pdf': {
    pt: 'Nome do Certificado em Português - Instituição (Data)',
    en: 'Certificate Name in English - Institution (Date)',
    date: '2025-08',  // opcional: mês que recebeu
    order: 0  // opcional: posição na lista
},
```

### PASSO 3: 🎉 Ver o resultado
1. Salve o arquivo
2. Atualize a página do site (F5)
3. **Pronto!** Seu certificado aparece automaticamente em todos os idiomas

---

## 📝 EXEMPLOS PRÁTICOS (Copie e Cole)

### Exemplo 1: Certificado de JavaScript
**Nome do arquivo**: `javascript-udemy-2025.pdf`
```javascript
'javascript-udemy-2025.pdf': {
    pt: 'JavaScript Completo - Udemy (Agosto 2025)',
    en: 'Complete JavaScript - Udemy (August 2025)',
    date: '2025-08',
    order: 1
},
```

### Exemplo 2: Certificado de AWS
**Nome do arquivo**: `aws-solutions-architect-2025.pdf`
```javascript
'aws-solutions-architect-2025.pdf': {
    pt: 'AWS Solutions Architect - Amazon (Dezembro 2025)',
    en: 'AWS Solutions Architect - Amazon (December 2025)',
    date: '2025-12',
    order: 0  // Este aparecerá PRIMEIRO na lista
},
```

### Exemplo 3: Certificado sem data específica
**Nome do arquivo**: `scrum-master-certificate.pdf`
```javascript
'scrum-master-certificate.pdf': {
    pt: 'Scrum Master Certificado - Scrum Alliance',
    en: 'Certified Scrum Master - Scrum Alliance',
    order: 10  // Este aparecerá por ÚLTIMO
},
```

---

## 🎯 EXPLICAÇÃO DOS CAMPOS

| Campo | O que é? | Precisa? | Como usar |
|-------|----------|----------|-----------|
| **`pt`** | Nome em português | ✅ **SIM** | `'Python Básico - Alura (2025)'` |
| **`en`** | Nome em inglês | ✅ **SIM** | `'Basic Python - Alura (2025)'` |
| **`date`** | Mês que recebeu | ❌ Não | `'2025-08'` (Agosto de 2025) |
| **`order`** | Posição na lista | ❌ Não | `0` = primeiro, `10` = último |

---

## � COMO OS CERTIFICADOS SÃO ORGANIZADOS

O site organiza automaticamente por:
1. **Primeiro**: Campo `order` (número menor = aparece primeiro)
2. **Segundo**: Campo `date` (mais recente primeiro)
3. **Terceiro**: Ordem alfabética (A → Z)

**Exemplo prático**:
- `order: 0` → Aparece no topo ⬆️
- `order: 5` → Aparece no meio
- `order: 10` → Aparece no final ⬇️

---

## � CERTIFICADOS EM ANDAMENTO (Cursos que está fazendo)

Se você está fazendo um curso ainda, pode adicioná-lo como "Em Progresso":

### Como fazer:
1. Abra o arquivo: `scripts/certifications-config.js`
2. Procure por: `IN_PROGRESS_CERTIFICATIONS`
3. **Adicione** seu curso nas listas de português e inglês:

```javascript
const IN_PROGRESS_CERTIFICATIONS = {
    pt: [
        'Java - Udemy (Previsão: Final de 2025)',
        'AWS - Amazon Web Services (Previsão: Final de 2025)',
        'SEU NOVO CURSO - Plataforma (Previsão: Data)' // ← Adicione aqui
    ],
    en: [
        'Java - Udemy (Expected: End of 2025)',
        'AWS - Amazon Web Services (Expected: End of 2025)',
        'YOUR NEW COURSE - Platform (Expected: Date)' // ← Add here
    ]
};
```

---

## 🆘 PROBLEMAS? SOLUÇÕES RÁPIDAS

### ❌ Certificado não aparece no site
1. **Confira**: O arquivo PDF está em `documentos/certificados/`?
2. **Confira**: Você adicionou a configuração em `certifications-config.js`?
3. **Teste**: Aperte F12 no navegador e veja se tem erro (linha vermelha)
4. **Limpe**: Aperte Ctrl+F5 para atualizar completamente a página

### ❌ Certificado aparece em posição errada
- **Solução**: Use o campo `order` para controlar a posição
- **Exemplo**: `order: 0` = primeiro, `order: 10` = último

### ❌ Nome do certificado muito grande
- **Solução**: Use abreviações conhecidas
- **Exemplo**: "AWS" em vez de "Amazon Web Services"
- **Dica**: Coloque a data no final entre parênteses

---

## � ONDE ESTÃO OS ARQUIVOS

```
📁 Pasta do Projeto/
├── 📁 documentos/
│   └── 📁 certificados/          ← COLOQUE OS PDFs AQUI
│       ├── 📄 python-alura.pdf
│       ├── 📄 aws-amazon.pdf
│       └── 📄 SEU-NOVO-PDF.pdf   ← Novo arquivo
│
└── 📁 scripts/
    └── 📄 certifications-config.js ← EDITE ESTE ARQUIVO
```

---

## 🎓 EXEMPLO COMPLETO PASSO A PASSO

**Situação**: Você quer adicionar um certificado de Docker

### 1️⃣ Nome do arquivo PDF
- Salve como: `docker-fundamentals-2025.pdf`
- Coloque em: `documentos/certificados/`

### 2️⃣ Abra o arquivo de configuração
- Arquivo: `scripts/certifications-config.js`
- Pode usar: Bloco de Notas, Visual Studio Code, ou qualquer editor

### 3️⃣ Adicione esta configuração
```javascript
'docker-fundamentals-2025.pdf': {
    pt: 'Docker Fundamentals - Docker Inc (Setembro 2025)',
    en: 'Docker Fundamentals - Docker Inc (September 2025)',
    date: '2025-09',
    order: 0  // Aparecerá no topo da lista
},
```

### 4️⃣ Salve e teste
1. Salve o arquivo (Ctrl+S)
2. Abra o site no navegador
3. Aperte F5 para atualizar
4. ✅ **Sucesso!** O certificado aparece automaticamente em português e inglês

---

## 🎯 DICAS IMPORTANTES

### ✅ FAÇA ASSIM:
- Use nomes de arquivo descritivos: `python-udemy-2025.pdf`
- Mantenha os nomes de exibição concisos mas informativos
- Sempre inclua a data do certificado
- Use o campo `order` para destacar certificados importantes

### ❌ EVITE ISSO:
- Nomes de arquivo confusos: `certificado1.pdf`, `documento.pdf`
- Nomes muito longos que não cabem na tela
- Esquecer de traduzir para o inglês
- Não salvar o arquivo após editar

---

## 💡 PERGUNTAS FREQUENTES

**P: Posso adicionar certificados em espanhol?**
R: Sim! Adicione o campo `es:` na configuração com a tradução em espanhol.

**P: O que acontece se eu esquecer o campo `en`?**
R: O certificado não aparecerá na versão em inglês do site.

**P: Posso usar qualquer formato de data?**
R: Use sempre o formato `YYYY-MM` (ex: `2025-08` para Agosto de 2025).

**P: Como faço para remover um certificado?**
R: Delete o arquivo PDF da pasta e remova a configuração do arquivo .js

---

*💡 **Dica final**: Se você não tem experiência com código, peça ajuda a alguém da área técnica para o primeiro certificado. Depois fica fácil!*
