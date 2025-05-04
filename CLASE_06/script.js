/**
 * Busca un regalo en el arreglo usando recursión.
 * @param {string[]} gifts - Array de nombres de regalos.
 * @param {string} target - Nombre del regalo a buscar.
 * @param {number} index - Índice actual de búsqueda.
 * @returns {number} - Índice del regalo o -1 si no se encuentra.
 */
function findGift(gifts, target, index = 0) {
    if (index === gifts.length) return -1;  // Caso base: no está en la lista
    if (gifts[index].toLowerCase() === target.toLowerCase()) return index;  // Caso base: encontrado
    return findGift(gifts, target, index + 1);  // Llamada recursiva
  }
  
  document.getElementById('searchButton').addEventListener('click', () => {
    const rawListInput = document.getElementById('giftsList').value;
    const rawGiftName = document.getElementById('giftName').value;
    const listInput = rawListInput.trim();
    const giftName = rawGiftName.trim();
  
    // Validación: evitar entradas vacías o solo espacios
    if (!listInput || !giftName) {
      document.getElementById('result').textContent = 'Por favor, completa ambos campos con texto válido.';
      return;
    }
  
    // Crear arreglo de regalos filtrando elementos vacíos
    const giftsArray = listInput
      .split(',')
      .map(item => item.trim())
      .filter(item => item !== '');
  
    const position = findGift(giftsArray, giftName);
    if (position === -1) {
      document.getElementById('result').textContent = `El regalo "${giftName}" NO está en la lista.`;
    } else {
      document.getElementById('result').textContent = `¡Encontrado! "${giftName}" en la posición ${position + 1}.`;
    }
  });
  