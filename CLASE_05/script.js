// script.js
// Usamos la técnica Sliding Window para recorrer cada palabra

document.getElementById('findButton').addEventListener('click', () => {
    const text = document.getElementById('inputText').value.trim();
    if (!text) {
      document.getElementById('result').textContent = 'Por favor, ingresa un texto.';
      return;
    }
  
    const words = text.split(' ');
    let longestWord = '';
  
    // Sliding Window: recorremos cada palabra y comparamos longitudes
    for (let i = 0; i < words.length; i++) {
      const current = words[i];
      if (current.length > longestWord.length) {
        longestWord = current;
      }
    }
  
    document.getElementById('result').textContent = `La palabra más larga es: "${longestWord}" (longitud: ${longestWord.length})`;
  }); 