const fs = require('fs');
const path = require('path');

// Função para atualizar as extensões de importação/exportação para .mjs
function updateToMJS(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Erro ao ler o arquivo ${filePath}:`, err);
      return;
    }

    const updatedData = data
      .replace(/(import .*? from '.*?)(\.js)(';?)/g, '$1.mjs$3')
      .replace(/(export .*? from '.*?)(\.js)(';?)/g, '$1.mjs$3');

    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error(`Erro ao escrever o arquivo ${filePath}:`, err);
      } else {
        console.log(`Arquivo ${filePath} atualizado para .mjs`);
      }
    });
  });
}

// Função para atualizar as extensões de require/exportação para .cjs
function updateToCJS(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Erro ao ler o arquivo ${filePath}:`, err);
      return;
    }

    const updatedData = data
      .replace(/(require\(.*?)(\.js)(.*?\))/g, '$1.cjs$3')
      .replace(/(module\.exports = require\(.*?)(\.js)(.*?\))/g, '$1.cjs$3');

    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error(`Erro ao escrever o arquivo ${filePath}:`, err);
      } else {
        console.log(`Arquivo ${filePath} atualizado para .cjs`);
      }
    });
  });
}

// Função para processar todos os arquivos em um diretório
function processDirectory(directoryPath, updateFunction) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Erro ao ler o diretório ${directoryPath}:`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Erro ao verificar o arquivo ${filePath}:`, err);
          return;
        }

        if (stats.isFile() && path.extname(file) === '.js') {
          updateFunction(filePath);
        } else if (stats.isDirectory()) {
          processDirectory(filePath, updateFunction); // Processar recursivamente subdiretórios
        }
      });
    });
  });
}

// Caminhos para os diretórios a serem processados
const esmDirectory = path.join(__dirname, '../dist/esm');
const cjsDirectory = path.join(__dirname, '../dist/cjs');

// Processar os diretórios
if (process.argv[2] === 'esm') {
  processDirectory(esmDirectory, updateToMJS);
} else if (process.argv[2] === 'cjs') {
  processDirectory(cjsDirectory, updateToCJS);
} else {
  console.error('Por favor, especifique "esm" ou "cjs" como argumento.');
}