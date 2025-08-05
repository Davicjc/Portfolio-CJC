# 🏆 Como Adicionar Certificados

Este sistema carrega automaticamente os certificados da pasta `documentos/certificados/` e os exibe no site com nomes amigáveis.

## 📋 Processo Simples

### 1. Adicionar o Arquivo PDF
- Coloque o arquivo PDF na pasta: `documentos/certificados/`
- Use um nome descritivo para o arquivo (ex: `javascript-udemy-2025.pdf`)

### 2. Configurar o Nome de Exibição
- Abra o arquivo: `scripts/certifications-config.js`
- Adicione uma nova entrada no objeto `CERTIFICATIONS_CONFIG`:

```javascript
'javascript-udemy-2025.pdf': {
    pt: 'JavaScript Completo - Udemy (Agosto 2025)',
    en: 'Complete JavaScript - Udemy (August 2025)',
    date: '2025-08',  // opcional
    order: 0  // opcional - números menores aparecem primeiro
},
```

### 3. Pronto! 🎉
- Recarregue a página
- O certificado aparecerá automaticamente na seção "Certificações"

## 🎯 Exemplos Práticos

### Certificado de AWS
```javascript
'aws-solutions-architect-2025.pdf': {
    pt: 'AWS Solutions Architect - Amazon (Dezembro 2025)',
    en: 'AWS Solutions Architect - Amazon (December 2025)',
    date: '2025-12',
    order: 0  // Aparecerá primeiro na lista
},
```

### Certificado de Java
```javascript
'java-oracle-certified-2025.pdf': {
    pt: 'Java SE 17 Developer - Oracle (Novembro 2025)',
    en: 'Java SE 17 Developer - Oracle (November 2025)',
    date: '2025-11'
},
```

### Certificado sem data específica
```javascript
'scrum-master-certificate.pdf': {
    pt: 'Scrum Master Certificado - Scrum Alliance',
    en: 'Certified Scrum Master - Scrum Alliance',
    order: 10  // Aparecerá depois dos que têm data
},
```

## ⚙️ Campos Disponíveis

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `pt` | string | ✅ | Nome em português |
| `en` | string | ✅ | Nome em inglês |
| `date` | string | ❌ | Data no formato 'YYYY-MM' |
| `order` | number | ❌ | Ordem de exibição (menor = primeiro) |

## 📅 Ordenação Automática

Os certificados são ordenados automaticamente por:
1. **Campo `order`** (se especificado) - números menores primeiro
2. **Campo `date`** (se especificado) - mais recentes primeiro  
3. **Nome alfabético** - como fallback

## 🚀 Certificados em Progresso

Para adicionar certificados que você está cursando:

1. Edite o objeto `IN_PROGRESS_CERTIFICATIONS` em `certifications-config.js`
2. Adicione nas listas `pt` e `en`:

```javascript
const IN_PROGRESS_CERTIFICATIONS = {
    pt: [
        'Java - Udemy (Previsão: Final de 2025)',
        'AWS - Amazon Web Services (Previsão: Final de 2025)',
        'Novo Curso - Plataforma (Previsão: Data)' // <- Adicione aqui
    ],
    en: [
        'Java - Udemy (Expected: End of 2025)',
        'AWS - Amazon Web Services (Expected: End of 2025)',
        'New Course - Platform (Expected: Date)' // <- Add here
    ]
};
```

## 🛠️ Solução de Problemas

### Certificado não aparece
1. ✅ Verifique se o arquivo PDF existe em `documentos/certificados/`
2. ✅ Confirme se a entrada foi adicionada corretamente em `certifications-config.js`
3. ✅ Verifique se há erros no console do navegador (F12)
4. ✅ Limpe o cache do navegador (Ctrl+F5)

### Ordem incorreta
- Use o campo `order` para controlar a posição específica
- Use o campo `date` para ordenação cronológica
- Números menores aparecem primeiro

### Nome muito longo
- Mantenha os nomes concisos mas informativos
- Use abreviações conhecidas (ex: "AWS" em vez de "Amazon Web Services")
- Inclua a data entre parênteses se relevante

## 📁 Estrutura de Arquivos

```
scripts/
├── certifications-config.js    # ← Edite este arquivo
├── script.js                   # Sistema principal (não editar)
└── ...

documentos/
├── certificados/               # ← Adicione PDFs aqui
│   ├── codigo-conduta-algar.pdf
│   ├── python-alura.pdf
│   ├── SEU-NOVO-CERTIFICADO.pdf  # ← Novo arquivo
│   └── ...
└── ...
```

---

## 🎓 Exemplo Completo

Vamos adicionar um certificado de Docker:

### 1. Arquivo PDF
- Salve como: `documentos/certificados/docker-fundamentals-2025.pdf`

### 2. Configuração
```javascript
// Em scripts/certifications-config.js
'docker-fundamentals-2025.pdf': {
    pt: 'Docker Fundamentals - Docker Inc (Setembro 2025)',
    en: 'Docker Fundamentals - Docker Inc (September 2025)',
    date: '2025-09',
    order: 0  // Aparecerá no topo
},
```

### 3. Resultado
✅ O certificado aparecerá automaticamente no site em português e inglês!

---

*💡 Dica: Mantenha um padrão de nomenclatura para os arquivos PDF (ex: tecnologia-instituição-ano.pdf) para facilitar a organização.*
