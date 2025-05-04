const fs = require('fs');
const path = require('path');
/**
 * Carga todas las notas desde notas.json (o devuelve [] si no existe)
 */
function cargarNotas() {
  if (!fs.existsSync(NOTES_FILE)) {
    return [];
  }
  try {
    const data = fs.readFileSync(NOTES_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error al leer notas:', err);
    process.exit(1);
  }
}

/**
 * Guarda el array de notas en notas.json
 */
function guardarNotas(notas) {
  try {
    fs.writeFileSync(NOTES_FILE, JSON.stringify(notas, null, 2), 'utf8');
  } catch (err) {
    console.error('Error al escribir notas:', err);
    process.exit(1);
  }
}

/**
 * Crea una nueva nota con título y cuerpo
 */
function crearNota(titulo, cuerpo) {
  const notas = cargarNotas();
  if (notas.find(n => n.titulo === titulo)) {
    console.log(`Ya existe una nota con título "${titulo}".`);
    return;
  }
  notas.push({ titulo, cuerpo });
  guardarNotas(notas);
  console.log(`Nota "${titulo}" creada correctamente.`);
}

/**
 * Lista todas las notas existentes
 */
function listarNotas() {
  const notas = cargarNotas();
  if (notas.length === 0) {
    console.log('No hay notas para mostrar.');
    return;
  }
  console.log('Notas existentes:');
  notas.forEach((n, i) => console.log(`${i+1}. [${n.titulo}] ${n.cuerpo}`));
}

/**
 * Elimina una nota según su título
 */
function eliminarNota(titulo) {
  let notas = cargarNotas();
  const iniciales = notas.length;
  notas = notas.filter(n => n.titulo !== titulo);
  if (notas.length === iniciales) {
    console.log(`No se encontró nota con título "${titulo}".`);
    return;
  }
  guardarNotas(notas);
  console.log(`Nota "${titulo}" eliminada correctamente.`);
}

// Procesamiento de comandos CLI
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'crear':
    crearNota(args[0], args.slice(1).join(' '));
    break;
  case 'listar':
    listarNotas();
    break;
  case 'eliminar':
    eliminarNota(args[0]);
    break;
  default:
    console.log('Uso: node gestorNotas.js <comando> [args]');
    console.log('Comandos:');
    console.log('  crear <título> <cuerpo>   Crear una nueva nota');
    console.log('  listar                   Listar todas las notas');
    console.log('  eliminar <título>         Eliminar nota por título');
}
