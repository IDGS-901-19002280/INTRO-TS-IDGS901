/*
    TypeScrip: lenguaje con tipos estaticos que permite detectar 
    errores de asignacion en tiempo de desarrollo 
*/ 
//forma en como establecemos la variable 

var num1=23
let num2='rcr'
const num3=34

//version es el tipado de variable y el :number establese el tipo de variable 
//let declara una variable dentro de una funcion en particular
let version:number=2.2
version=23

let nombre:string='Jesús'

let activo:boolean=true
// esta madre sirve para que la variable permita más de un tipo de datos | tipo de var |
let matricula:number|string|boolean=1234

matricula='123abc'
//esta es la forma en como se declara una variable que puede ser de cualquier tipo

//ahora vamos a definir un arreglo 
//estructura es la sig: let nomb-del-arreglo:tipo-de-dato[]= [los valores del arreglo]
let vector:number[]=[1,2,3,4]
//para im primirlo en consola se usa esto 

console.log(vector)