function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        const inicial1 = arr[inicio][0].toLowerCase();
        const inicial2 = arr[siguiente][0].toLowerCase();

        if (inicial1 === inicial2) {
            return [arr[inicio], arr[siguiente]];
        }

        inicio++;
        siguiente++;
    }

    return null;
}

const resultadoDiv = document.getElementById("resultado");

// Carga el archivo JSON
fetch('invitados.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        const invitados = data.invitados;
        const pareja = encontrarPareja(invitados);

        if (pareja) {
            resultadoDiv.innerHTML = `<span>¡Pareja encontrada!</span> ${pareja[0]} y ${pareja[1]}`;
        } else {
            resultadoDiv.innerHTML = `<span>No se encontró ninguna pareja</span> con la misma inicial.`;
        }
    })
    .catch(error => {
        resultadoDiv.innerHTML = `<span>Error:</span> ${error.message}`;
    });
