function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  /**
   * Dibuja el arreglo en pantalla con cajas.
   */
  function renderArray(arr) {
    const container = document.getElementById('arrayContainer');
    container.innerHTML = '';
    arr.forEach((num, idx) => {
      const div = document.createElement('div');
      div.className = 'box';
      div.textContent = num;
      div.dataset.index = idx;
      container.appendChild(div);
    });
  }
  
  /**
   * Resalta un rango de cajas con una clase CSS.
   */
  function highlightRange(left, right, className) {
    const boxes = document.querySelectorAll('#arrayContainer .box');
    boxes.forEach(box => {
      const idx = Number(box.dataset.index);
      if (idx >= left && idx <= right) {
        box.classList.add(className);
      }
    });
  }
  
  /**
   * Quita resaltado de todas las cajas.
   */
  function clearHighlights() {
    document.querySelectorAll('.box').forEach(box => {
      box.classList.remove('highlight-divide', 'highlight-combine');
    });
  }
  
  /**
   * Encuentra el máximo con animación.
   */
  async function findMaxAnimated(arr, left = 0, right = arr.length - 1) {
    // Dividir: resaltar en amarillo
    highlightRange(left, right, 'highlight-divide');
    await delay(500);
  
    if (left === right) {
      // Combinar: resaltar el único elemento en verde
      clearHighlights();
      highlightRange(left, right, 'highlight-combine');
      await delay(300);
      return arr[left];
    }
  
    const mid = Math.floor((left + right) / 2);
    const maxLeft = await findMaxAnimated(arr, left, mid);
    const maxRight = await findMaxAnimated(arr, mid + 1, right);
  
    // Combinar: resaltar rango combinado en verde
    clearHighlights();
    highlightRange(left, right, 'highlight-combine');
    await delay(500);
  
    return Math.max(maxLeft, maxRight);
  }
  
  document.getElementById('animateButton').addEventListener('click', async () => {
    const input = document.getElementById('arrayInput').value.trim();
    if (!input) {
      document.getElementById('result').textContent = 'Ingresa números válidos.';
      return;
    }
    const numbers = input.split(',').map(n => Number(n.trim())).filter(n => !isNaN(n));
    if (numbers.length === 0) {
      document.getElementById('result').textContent = 'No hay números válidos.';
      return;
    }
    document.getElementById('result').textContent = '';
    renderArray(numbers);
  
    const max = await findMaxAnimated(numbers);
    document.getElementById('result').textContent = `El número máximo es: ${max}`;
  });  