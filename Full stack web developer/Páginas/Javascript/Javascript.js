// EJERCICIO 1
// const greetingArray = ['H','o','l','a','!'];
// console.log(greetingArray.join(''));
// console.log(greetingArray.join(' '));


//EJERCICIO 2
// const mixedArray = [true,'hola',4,null]

// function printThirdValue(array){
//     console.log(array[2]);
// }
// function changeLastValueFor3(array){
//     array[3] = 3
//     return array;
// }
// function removeLastTwoElements(array){
//     return array.slice(0,array.length - 2);
// }
// function addTwoValuesToTheEnd(array){
//     return array.concat(6,'chau')
// }
// function addAFiveAsThirdValue(array){
//     array.splice(2,0,5);
//     return array
// }
// printThirdValue(mixedArray)
// console.log(changeLastValueFor3(mixedArray))
// console.log(removeLastTwoElements(mixedArray))
// console.log(addTwoValuesToTheEnd(mixedArray))
// console.log(addAFiveAsThirdValue(mixedArray))


// SECUENCIA +11 (EJERCICIO 1)
// console.log('Ejercicio 1')
// for(let i =1;i<=25;i++){
//     console.log(i*11)}

// MULTIPLOS DE 8 (EJERCICIO 2)
// console.log('Ejercicio 2')
// for(let i =1;i<=500;i++){
//     if(i%8==0)
//         console.log(i)
// }


// EJERCICIO 3
// console.log('Ejercicio 3')
// const qualifications=[4,6,9,10,10,4,2,7,8,9]
// let approved =0;
// for(let i = 0; i<=10; i++){
//     if(qualifications[i]>=7) approved ++;
// }
// console.log(`Aprobados: ${approved}`)
// console.log(`Reprobados: ${qualifications.length-approved}`)

// EJERCICIO 4
// console.log('Ejercicio 4')
// let averageAux = 0;
// for(let i=0;i<5;i++){
//     averageAux += parseInt(prompt('Ingrese la altura'))
// }
// console.log(`Promedio: ${averageAux/5}`)

// EJERCICIO 5
// console.log('Ejercicio 5')
// let salaryTotal = 0;
// let firstRange = 0;
// for(let i=0;i<5;i++){
//     let salary = parseInt(prompt('Ingrese el sueldo'))
//     salaryTotal += salary;
//     if(salary>=100 && salary <300) firstRange++;
// }
// console.log(`Total: $${salaryTotal}, ${firstRange} empleados ganan menos de $300 `)

// MULTIPLOS DE 10 (EJERCICIO 6) MOSTRAR AL REVES
// console.log('Ejercicio 6')
// for(let i =10;i<=1500;i +=10){
//         console.log(i)
// }

// EJERCICIO 7
// console.log('Ejercicio 7')
// const listOne = [];
// const listTwo = [];
// for(let i = 0; i <=3;i++){
//     listOne.push(parseInt(prompt('Ingrese un número en la lista A')))
// }
// for(let i = 0; i <=3;i++){
//     listTwo.push(parseInt(prompt('Ingrese un número en la lista B')))
// }
// let totalOne = listOne.reduce((aggregate,value) => aggregate+=value,0);
// let totalTwo = listTwo.reduce((aggregate,value) => aggregate+=value,0);
// if(totalOne>totalTwo) console.log('La lista 1 es más grande')
// else if (totalOne==totalTwo) console.log('Las listas son iguales')
// else console.log('La lista 2 es más grande')

// EJERCICIO 8
console.log('Ejercicio 8')
let even =0;
let odd = 0;
for(let i = 0; i <=5;i++){
    let input = parseInt(prompt('Ingrese un número en la lista A'))
    if(input%2) even++;
    odd++;
}
console.log(`Cantidad de numeros par ${even}`);

//EJERCICIO 9
// const base = prompt("Ingresa la base del primer triangulo");
// const altura = prompt("Ingresa la altura del primer triangulo");
// let areaTriangulo = (base * altura /2);

// const base2 = prompt("Ingresa la base del segundo triangulo");
// const altura2 = prompt("Ingresa la altura del segundo triangulo");
// let areaTriangulo2 = (base2 * altura2 /2);
// console.log("La base del triangulo es" , base2 , "Centimetros");
// console.log("La altura del triangulo es" , altura2 , "Centimetros");
// console.log("El area del triangulo es" , areaTriangulo2 , "Centimetros cuadrados");
// console.log("La base del triangulo es" , base , "Centimetros");
// console.log("La altura del triangulo es" , altura , "Centimetros");
// console.log("El area del triangulo es" , areaTriangulo , "Centimetros cuadrados");

// if(areaTriangulo > 12){
//   console.log("Este triangulo es mayor a 12");
// };
// if(areaTriangulo2 > 12){
//   console.log("Este triangulo es mayor a 12");
// };

//EJERCICIO 10
// const valor1 = prompt("Ingresa el primer valor");
// const valor2 = prompt("Ingresa el segundo valor");
// const valor3 = prompt("Ingresa el tercer valor");
// const valor4 = prompt("Ingresa el cuarto valor");
// const valor5 = prompt("Ingresa el quinto valor");
// const valor6 = prompt("Ingresa el sexto valor");
// const valor7 = prompt("Ingresa el septimo valor");
// const valor8 = prompt("Ingresa el octavo valor");
// const valor9 = prompt("Ingresa el noveno valor");
// const valor10 = prompt("Ingresa el decimo valor");
// let sumaValores = parseInt(valor6) + parseInt(valor7) + parseInt(valor8) + parseInt(valor9) + parseInt(valor10);
// console.log("La suma de los ultimos 5 valores es", sumaValores);

//EJERCICIO 11
// for (var i = 1; i <= 10; i++) {
//   multi = 5 * i;
//   console.log(5 + "x" + i + "=" + multi);
// }

//EJERCICIO 12
// const multiplo = prompt("Ingresa el numero que deseas multiplicar");
// if (multiplo >= 1 && multiplo < 10) {
//   for (var i = 1; i <= 12; i++) {
//     multi = parseInt(multiplo) * i;
//     console.log(multiplo + "x" + i + "=" + multi);
//   }
// } else {
//   alert("Valor no permitido ingresa unicamente valores del 1 al 10 :)");
// }

//EJERCICIO 13 (CONSULTAR CON NICO)
// const lado1 = prompt("ingresa una medida del primer triangulo");
// const lado2 = prompt("ingresa una medida del primer triangulo");
// const lado3 = prompt("ingresa una medida del primer triangulo");

// if(parseInt (lado1) == parseInt (lado2) == parseInt (lado3)){
//   console.log("Es un triangulo equilatero");
// }
// else if(lado1 < lado2 == lado3){
//   console.log("Es un triangulo isosceles");
// }
// else if(lado1 == lado2 < lado3){
//   console.log("Es un triangulo isosceles");
// }
// else if(lado1 > lado2 == lado3){
//   console.log("Es un triangulo isosceles");
// }
// else if(lado1 == lado2 > lado3){
//   console.log("Es un triangulo isosceles");
// }
// else{
//   console.log("Es un triangulo escaleno");
// }

