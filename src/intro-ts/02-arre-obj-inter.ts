
//aqui tambien se hace un arreglo pero con el array
let vector1: Array<number> = [9, 8, 7, 6]
vector1.push(10)
//aqui se remplasa el valor de la posicion 1
vector1[1] = 22
for (let tem of vector1)
    console.log(tem)

//aqui no se meten los datos en el arreglo, se metem con el push 
let tem: (number | string)[] = []
tem.push('mario')
tem.push(123)

//MANEJO DE INTERFACES
//aqui se crea una interfaz
interface Alumno {
    //cuando se le pone el signo ? despues de la variable es para decir que es opcional 
    matricula?: number
    nombre: string
    edad: number
    email: string
}
//aqui se esta definiendo un objeto con sus respectivas propiedades 
const alumno: Alumno = {
    matricula: 19002280,
    nombre: 'Putricio',
    edad: 23,
    email: 'putricio@gmail.com'
}

console.table(alumno)