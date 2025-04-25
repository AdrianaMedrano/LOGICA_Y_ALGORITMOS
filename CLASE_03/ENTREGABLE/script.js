const productos = [
    { nombre: "Teclado Mecánico", precio: 120, categoría: "Electrónica" },
    { nombre: "Cuaderno", precio: 45, categoría: "Papelería" },
    { nombre: "Audífonos", precio: 85, categoría: "Electrónica" },
    { nombre: "Mochila", precio: 75, categoría: "Accesorios" },
    { nombre: "Mouse Inalámbrico", precio: 95, categoría: "Electrónica" },
  ];
  
  // 1. Filtrar productos que cuesten menos de $100
  const productosBaratos = productos.filter(producto => producto.precio < 100);
  console.log("Productos con precio menor a $100:", productosBaratos);
  
  // 2. Ordenar alfabéticamente por nombre
  const productosOrdenados = [...productosBaratos].sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
  });
  console.log("Productos ordenados alfabéticamente:", productosOrdenados);
  
  // 3. Generar arreglo solo con los nombres
  const nombresProductos = productosOrdenados.map(producto => producto.nombre);
  console.log("Nombres de los productos:", nombresProductos);
  
  // (Opcional) Usar reduce para obtener el precio total de los productos filtrados
  const precioTotal = productosBaratos.reduce((total, producto) => total + producto.precio, 0);
  console.log("Precio total de los productos filtrados:", precioTotal);
  