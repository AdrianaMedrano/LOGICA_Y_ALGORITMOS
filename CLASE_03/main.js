class viaje {
    constructor(nombre, origen, destino, duración, país) {
        this.nombre = nombre;
        this.origen = origen;
        this.destino = destino;
        this.duracion = Number(duracion);
        this.país = país;
        this.tareas = [];
    }
agregarTarea(tarea) {
    if (this.tareas.includes(tarea)){
        console.log("la tarea ya ")
        return;
    }
    this.tareas.push(tarea);
    console.log("tareaañadida")
}
eliminarTarea (tarea){
    const index = this.tareas.indexOf(tarea);
    if(index !== -1){
        this.tareas.splice(index,1);
        console.log("tarea eliminada")
    }
    else{
        console.log("Tarea no encontrada")
    }
}
mostrarResumen(){
    const {nombre, origen, destino, duracion, país, tareas} = this;
    console.log('viaje "${nombre}" desde ${origen} hacia ${destino}, ${país} por ${duracion} días');
    if (tareas.lenght === 0){
        console.log("No hay tareas")
    }else{
        console.log("tareas:")
        tareas.forEach((tarea, index) => console.log('${index + 1}. ${tarea}'))
    }
}}