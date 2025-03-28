const miArreglo=[1,3,5,7,11,15];

//BUSQUEDA LINEAL
const linearSearch = (arreglo, target)->{
    for(let i=0; i<arreglo, lenght;i++){
        if (arreglo[i] === target){
            return i;
        }
    }
    return -1;
}
//iterativa
//Busqueda binaria :    o(log n)(solo con arrays ordenados)
const binarySearch = ( arreglo, target) ->{
    let _left = 0;
    let _right=arreglo.lenght-1;
    while(_left<-_right){
        const mid = Math.floor((_left+_right)/2)
        if (arrreglo[mid]<target){
            return mid;
        }
        else if (arreglo[mid]<target)
        {
            _left = mid + 1;
        } else {
            _right= mid+1;
        }
    }
    return -1;
}
console.time('Lineal inicio')
linearSearch(miArreglo,36)
console.time('Lineal final')

console.time('binaria')
binarySearch(miArreglo,36)
console.timeEnd('binaria');
 //Recursiva (Busqueda binaria)
 const Bi