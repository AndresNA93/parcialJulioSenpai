/* 1- Realizar un programa que pida cargar una fecha cualquiera, 
luego verificar si dicha fecha corresponde a Navidad 
(se debe cargar por separado el día, el mes y el año)
*/

let day = parseInt(prompt('Ingrese el día'))
let month = parseInt(prompt('Ingrese el mes, númerico del 1 al 12'))
let year = parseInt(prompt('Ingrese el año'))

if(month == 12 && day == 25)
    console.log("Es navidad!") 

/*
2- Se ingresan tres valores por teclado, 
si todos son iguales se imprime la suma del primero con el segundo y a 
este resultado se lo multiplica por el tercero (tener en cuenta que puede haber tres condiciones simples). 
En el caso que no sean iguales, solo indica que los números no son iguales
*/

let a = parseInt(prompt('Ingrese un número'))
let b = parseInt(prompt('Ingrese un número'))
let c = parseInt(prompt('Ingrese un número'))

if(a == b == c) console.log((a+b)*c)
else console.log("Los números no son iguales")

/* 
Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, 
imprimir en la página la leyenda ' Todos los números son menores a diez'.
*/

let d = parseInt(prompt('Ingrese un número'))
let e = parseInt(prompt('Ingrese un número'))
let f = parseInt(prompt('Ingrese un número'))

if(d < 10 && e<10 && f<10 ) console.log('Todos los números son menores a 10')

/*
Escribir un programa que pida ingresar la coordenada de un punto en el plano, 
es decir dos valores enteros x e y.
Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. 
(1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)
*/

let x = parseInt(prompt('Ingrese coordenada x'))
let y = parseInt(prompt('Ingrese coordenada y'))

if(x>0){
    if(y>0) console.log('1er cuadrante')
    else console.log('4to cuadrante')
}else{
    if(y>0) console.log('2do cuadrante')
    else console.log('3er cuadrante')
}

/*
De un operario se conoce su sueldo y los años de antigüedad. 
Se pide confeccionar un programa que lea los datos de entrada e informe
	a. Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, 
        otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
	b. Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, 
        otorgarle un aumento de 5 %.
	c. Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.
*/

let salary = parseInt(prompt('Ingrese el sueldo'))
let antiquety = parseInt(prompt('Ingrese la antiguedad en años'))

if(salary< 500 && antiquety >= 10) console.log(salary*1.20)
else if(salary<500 && antiquety < 10) console.log(salary*1.05)
else console.log(salary)

/*
Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje 'Promocionado'. 
Tener en cuenta que para obtener el promedio debemos operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado a entero podemos hacer:
nota1=prompt('Ingrese primer nota:','');
nota1=parseInt(nota1);
O en forma más corta:
	nota1=parseInt(prompt('Ingrese primer nota:',''));
*/

let grade1=parseInt(prompt('Ingrese primer nota:',''));
let grade2=parseInt(prompt('Ingrese segunda nota:',''));
let grade3=parseInt(prompt('Ingrese tercer nota:',''));
if((grade1+grade2+grade3)/3>=7) console.log('Promocionado') 

/*
Solicitar que se ingrese dos veces una clave. 
Mostrar un mensaje si son iguales 
(tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos utilizar el operador ==)
*/

let password=prompt('Ingrese su clave')
let confirmPassword=prompt('Re-Ingrese su clave')
if(password == confirmPassword) console.log('Son iguales');

/*
Realizar un programa que lea por teclado dos números, 
si el primero es mayor al segundo informar su suma y diferencia, 
en caso contrario informar el producto y la división del primero respecto al segundo.
*/

let numberA = parseInt(prompt('Ingrese un número'))
let numberB = parseInt(prompt('Ingrese otro número'))
if(numberA > numberB){
    console.log(`La suma de ambos es ${numberA+numberB}, la diferencia es ${numberA-numberB}`)
}else{
    console.log(`El producto entre ambos es ${numberA*numberB}, la divisón es ${numberA/numberB}`)
}

/*
Se ingresan tres notas de un alumno, 
si el promedio es mayor o igual a 4 mostrar un mensaje 'regular', sino 'reprobado'.
*/

let grade4=parseInt(prompt('Ingrese primer nota:',''));
let grade5=parseInt(prompt('Ingrese segunda nota:',''));
let grade6=parseInt(prompt('Ingrese tercer nota:',''));
if((grade4+grade5+grade6)/3>=4) console.log('Regular')
else console.log('Reprobado') 

/*

Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) 
mostrar un mensaje indicando si el número tiene uno o dos dígitos 
(recordar de convertir a entero con parseInt para preguntar posteriormente por una variable entera). 
Tener en cuenta qué condición debe cumplirse para tener dos dígitos un número entero.
*/

let numberC = parseInt(prompt('Ingrese un número'))

if(numberC>=10) console.log('Tiene 2 dígitos')
else console.log('Tiene 1 dígito')

/*
Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.
*/

let numberD = parseInt(prompt('Ingrese un número'))
let numberE = parseInt(prompt('Ingrese otro número'))
let numberF = parseInt(prompt('Ingrese un tercer número'))

console.log(Math.max(numberD,numberE,numberF))

// manualmente con  loops

let numbers = [numberD,numberE,numberF]
let max = 0;
numbers.forEach(number =>{
    if(number>=max) max = number
})
console.log(max)

/*
Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.
*/

let numberG = parseInt(prompt('Ingrese un número'))

if(numberG>0) console.log('Es positivo')
else if(numberG<0) console.log('Es negativo')
else console.log('Es cero')

/*
Confeccionar un programa que permita cargar un número entero 
positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.
*/

do {
    let numberH = parseInt(prompt('Ingrese un número de hasta 3 dígitos'))
    if(numberH>=100) console.log('Tiene 3 dígitos')
    else if(numberH>=10) console.log('Tiene 2 dígito')
    else console.log('Tiene 1 dígito')
}while(numberH>999)

/*
De un postulante a un empleo, que realizó un test de capacitación, 
    se obtuvo la siguiente información: 
        nombre del postulante, cantidad total de preguntas que se le realizaron y 
        cantidad de preguntas que contestó correctamente. 
Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo 
    según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
Nivel superior: Porcentaje>=90%.
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%.
asked - 100
answer - (answer*100)/asked
*/

let questionsAsked = parseInt(prompt('Preguntas realizadas'))
let rightAnswers = parseInt(prompt('Respuestas correctas'))

let average = (answer*100)/asked
if(average>=90) console.log('Niver superior')
else if (average>=75) console.log('Nivel medio')
else if(average>=50) console.log('Nivel regular')
else console.log('Fuera de nivel')

/*
Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menores a 10, 
imprimir en la página la leyenda 'Alguno de los números es menor a diez'

*/

let numberI = parseInt(prompt('Ingrese un número'))
let numberJ = parseInt(prompt('Ingrese otro número'))
let numberK = parseInt(prompt('Ingrese un tercer número'))

if(numberI<10 || numberJ<10 || numberK<10) console.log('Alguno de los números es menor a diez')

/*
Se ingresan por teclado dos números,
 mostrar en pantalla el mayor de los 2. Si son iguales mostrar el mensaje “son iguales”
*/

let numberL=parseInt(prompt("Ingrese el numero 1",""));
let numberM=parseInt(prompt("Ingrese el numero 2",""));

if(numberL >= numberM)console.log('El mayor es ', numberL)
else console.log('El mayor es ', numberM)

/*
Se ingresan por teclado tres números (largo, ancho y alto) y
 se calcular el volumen de esa caja.
*/

let side = parseInt(prompt("Ingrese el lado",""));
let width = parseInt(prompt("Ingrese el ancho",""));
let height = parseInt(prompt("Ingrese el alto",""));

console.log(`El volumen es ${side*width*height}`)

