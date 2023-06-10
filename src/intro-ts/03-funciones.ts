
//para definir una funcion se usa la palabra funcion
function sumar(a:number,b:number):void{
    //si quiero que esta no regrese nada se le pone despues del parentesis el :void
    console.log(a+b)
}
let num=sumar(3,5)

console.log(num)
//lo que va despues de los parentesis es el tipo de dato que se devolvera
function sumar2(a:number,b:number):number{
 
    return a+b
}

function operasBas(n1:number,n2?:number,n3:number=2):number{
    let tem=n1*n3
    return tem
}

console.log(operasBas(3,5,5))

//crear una funcion que reciva un objeto y no una variable 
interface Mascota{
    nombre:string,
    edad:number,
    mostrarEdad:()=>void
}

function calculaEdad(mascota:Mascota, x:number):void{
    mascota.edad+=x
    console.log(mascota)
}

const nuevaMascota:Mascota={
    nombre: "Miau",
    edad: 3,
    mostrarEdad(){
        console.log('La edad ed: ',this.edad)
    }
}
calculaEdad(nuevaMascota,2)
//una funcion anonima es una que no tiene nombre
const funcSumar=function(n1:number,n2:number):number{
    return n1+n2
}
console.log(funcSumar(4,9))

//Parametros Rest en funciones
function calcular2(...valores:number[]){
    let suma = 0;
    for(let x=0;x<valores.length;x++)
        suma+=valores[x]
    return suma;
}
console.log(calcular2(10, 2, 3, 4));
console.log(calcular2(1,2))
