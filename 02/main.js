// Selecionando a lista onde os múltiplos serão inseridos
const multiplesList = document.getElementById('multiples-list');

// Iterando para os primeiros 300 múltiplos de 3
for (let i = 1; i <= 300; i++) {
  // Verificando se o número é um múltiplo de 3
  if (i % 3 === 0) {
    // Criando um novo item de lista e adicionando-o à lista
    const listItem = document.createElement('li');
    listItem.textContent = `Múltiplo ${i}: ${i * 3}`;
    multiplesList.appendChild(listItem);
  }
}