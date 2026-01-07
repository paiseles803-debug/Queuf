// ========================================
// ARQUIVO: server.js
// ========================================

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da raiz
app.use(express.static(__dirname));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

// ========================================
// ARQUIVO: index.html
// ========================================
/*

*/

// ========================================
// ARQUIVO: style.css
// ========================================
/*

*/

// ========================================
// ARQUIVO: script.js
// ========================================
/*

*/

// ========================================
// ARQUIVO: .gitignore
// ========================================
/*
node_modules/
.env
*.log
.DS_Store
*/

// ========================================
// README - ESTRUTURA NOVA
// ========================================
/*
ESTRUTURA DO PROJETO (TUDO NA RAIZ):

alight-motion-site/
├── server.js           ← Servidor Express
├── package.json        ← Dependências
├── index.html          ← Página principal
├── style.css           ← Estilos
├── script.js           ← JavaScript
├── .gitignore
└── 115fe0917d8ba056c996.txt  ← ARQUIVO DE VERIFICAÇÃO (baixe do Hilltop Ads)

COMO USAR:

1. Crie a pasta:
   mkdir alight-motion-site
   cd alight-motion-site

2. Crie os arquivos na raiz:
   - server.js
   - package.json
   - index.html
   - style.css
   - script.js

3. Instale:
   npm install

4. Rode:
   npm start

5. Para verificar o domínio no Hilltop Ads:
   - Baixe o arquivo .txt que eles fornecem
   - Cole na RAIZ do projeto (junto com index.html)
   - Faça deploy
   - Clique em "Verificar Site"

PRONTO! ✅
*/