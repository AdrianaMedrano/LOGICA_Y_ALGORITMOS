let listaDeCompras = [];

const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        actualizarLista();
    } else {
        alert(`El producto "${producto}" ya está en la lista.`);
    }
};

const eliminarProducto = (producto) => {
    listaDeCompras = listaDeCompras.filter(item => item !== producto);
    actualizarLista();
};

const actualizarLista = () => {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    listaDeCompras.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto;
        
        const boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.onclick = () => eliminarProducto(producto);

        li.appendChild(boton);
        lista.appendChild(li);
    });
};

document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();
    const producto = document.getElementById("producto").value.trim();
    if (producto) {
        agregarProducto(producto);
        document.getElementById("producto").value = "";
    }
});
