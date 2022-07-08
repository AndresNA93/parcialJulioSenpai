/*
    Realizar un programa que imprima 25 términos de la serie 11-22-33
*/

console.log('Ejercicio 1')
for(let i =1;i<=25;i++){
    console.log(i*11)
}

/*
    Mostrar los múltiplos de 8 hasta el valor 500
*/

console.log('Ejercicio 2')
for(let i =1;i<=500;i++){
    if(i%8==0)
        console.log(i)
}
// Promedio de notas

console.log('Ejercicio 3')
const qualifications=[4,6,9,10,10,4,2,7,8,9]
let approved =0;


for(let i = 0; i<=10; i++){
    if(qualifications[i]>=7) approved ++;
}

console.log(`Aprobados: ${approved}`)
console.log(`Reprobados: ${qualifications.length-approved}`)

//Promedio de estaturas

console.log('Ejercicio 4')
let averageAux = 0;
for(let i=0;i<5;i++){
    averageAux += parseInt(prompt('Ingrese la altura'))
}
console.log(`Promedio: ${averageAux/5}`)

// Reportes de sueldos

console.log('Ejercicio 5')
let salaryTotal = 0;
let firstRange = 0;
for(let i=0;i<5;i++){
    let salary = parseInt(prompt('Ingrese el sueldo'))
    salaryTotal += salary;
    if(salary>=100 && salary <300) firstRange++;
}

console.log(`Total: ${salaryTotal}, total en primer rango ${firstRange}`)


/*
    Mostrar los múltiplos de 10 hasta el valor  1500
*/

console.log('Ejercicio 6')
for(let i =10;i<=1500;i +=10){
        console.log(i)
}

/*
    Tres listas Mayor, menor o iguales?
*/

console.log('Ejercicio 7')
const listOne = [];
const listTwo = [];

for(let i = 0; i <=3;i++){
    listOne.push(parseInt(prompt('Ingrese un número en la lista A')))
}

for(let i = 0; i <=3;i++){
    listTwo.push(parseInt(prompt('Ingrese un número en la lista B')))
}

let totalOne = listOne.reduce((aggregate,value) => aggregate+=value,0);
let totalTwo = listTwo.reduce((aggregate,value) => aggregate+=value,0);

if(totalOne>totalTwo) console.log('La lista 1 es más grande')
else if (totalOne==totalTwo) console.log('Las listas son iguales')
else console.log('La lista 2 es más grande')

/*
    Par o impar?
*/
console.log('Ejercicio 8')

let even =0;
let odd = 0;

for(let i = 0; i <=5;i++){
    let input = parseInt(prompt('Ingrese un número en la lista A'))
    if(input%2) even++;
    odd++;
}
console.log(`Cantidad par ${even}`);

/*
    Triangulo de las bermudas
*/
console.log('Ejercicio 9')

const triangles = []

for(let i = 0; i <=3;i++){
    let base = parseInt(prompt('Ingrese la base'))
    let height = parseInt(prompt('Ingrese la altura'))
    triangles.push({base:base, height:height});
}
let overTwelve = 0;

function getArea(triangle){
    return (triangle.base * triangle.height)/2;
}

triangles.forEach(triangle =>{
    console.log(`La base del triangulo es ${triangle.base}, la altura ${triangle.height} y el area es ${getArea(triangle)}`)
    if(getArea(triangle)>12) overTwelve++;
})
console.log(`Los que tienen más de 12 de superficie es ${overTwelve}`);

// Los últimos seran los primeros

console.log('Ejercicio 10')

const numbers = [];

for(let i = 0; i <=10;i++){
    numbers.push(parseInt(prompt('Ingrese un número')));
}

let lastFive = numbers.slice(5);
console.log(lastFive)
let totalOfLast =lastFive.reduce((aggregate,value)=> aggregate+=value,0);
console.log(totalOfLast)

// Tabla del 5

console.log('Ejercicio 11')

for(let i =1; i<=10;i++){
    console.log(i*5);
}

let inputNumber = parseInt(prompt('Ingrese un número'))

for(let i =1; i<= 12;i++){
    console.log(inputNumber*i)
}

//Los cuatro triángulos

console.log('Ejercicio 12')

const trianglesTwo = [];

for(let i = 0;i<=4;i++){
    let sideA = parseInt(prompt(`Ingrese un lado del triangulo ${i}`))
    let sideB = parseInt(prompt(`Ingrese otro lado del triangulo ${i}`))
    let sideC = parseInt(prompt(`Ingrese e tercer lado del triangulo ${i}`))
    trianglesTwo.push({sideA:sideA,sideB:sideB,sideC:sideC})
}

let equilaterus = 0;
let isosceles = 0;
let scalene = 0;

trianglesTwo.forEach(({sideA,sideB,sideC},index) =>{
    if(sideA == sideB && sideB == sideC){
        equilaterus++;
        console.log(`El triangulo ${index+1} es equilatero`)
    }else if (sideA == sideB || sideB ==sideC || sideA==sideC){
        isosceles++;
        console.log(`El triangulo ${index+1} es isosceles`)
    }else{
        scalene ++;
        console.log(`El triangulo ${index+1} es escaleno`)
    }
})

console.log(`Hay ${equilaterus} equilateros, ${isosceles} isosceles y ${scalene} escalenos`)

if(equilaterus<isosceles && equilaterus < scalene) console.log('El que hay menos es equilatero')
else if(isosceles<scalene && isosceles < equilaterus) console.log('El que hay menos es isosceles')
else console.log('El que hay menos es escaleno')

//Coordenadas

console.log('Ejercicio 13')

let breakPoint = parseInt(prompt("Cuantos valores desea ingresar?"))

let coordinatesInFirst = 0;
let coordinatesInSecond = 0;
let coordinatesInThird = 0;
let coordinatesInFour = 0;

for(let i =0; i<=breakPoint;i++){
    let x = parseInt(prompt("Ingrese coordenada x"))
    let y = parseInt(prompt("Ingrese coordenada y"))
    if(x>=0 && y>=0) coordinatesInFirst++;
    else if(x>=0 && y<0) coordinatesInFour++;
    else if(x<0 && y>=0) coordinatesInSecond++;
    else coordinatesInThird++;
}

console.log(`En el primer cuadrante ${coordinatesInFirst}`)
console.log(`En el segundo cuadrante ${coordinatesInSecond}`)
console.log(`En el tercer cuadrante ${coordinatesInThird}`)
console.log(`En el cuarto cuadrante ${coordinatesInFour}`)

// Positivos, negativos o múltiplos de 15

console.log('Ejercicio 14')

let negatives =0;
let positives = 0;
let multiplesOfFifthteen = 0;
for(let i=0; i<=10;i++){
    let number =parseInt(prompt("Ingrese un número"))
    if(number>=0) {
        positives++;
        if(number%15==0) multiplesOfFifthteen++;
    }else negatives++;
}

console.log(`Los positivos son ${positives}`)
console.log(`Los negativos son ${negatives}`)
console.log(`Los múltiplos de 15 son ${multiplesOfFifthteen}`)


console.log('Ejercicio 15')
let morningHours = [];
let afternoonHours = [];
let nightHours = [];

function loadStudents(group,students) {
    for (let i = 0; i <= students; i++) {
        group.push(parseInt(prompt("Ingrese la edad")));
    }
}

loadStudents(morningHours,5);
loadStudents(afternoonHours,6);
loadStudents(nightHours,11);

let averageMorning = morningHours.reduce((aggregate,value)=> aggregate+=value,0)/morningHours.length;
let averageAfternoon = afternoonHours.reduce((aggregate,value)=> aggregate+=value,0)/afternoonHours.length;
let averageNight = nightHours.reduce((aggregate,value)=> aggregate+=value,0)/nightHours.length;

// EJERCICIO 1 ARREGLOS

let elements = [];

    for (let i = 0; i <= 8; i++) {
        elements.push(parseInt(prompt("Ingrese el elemento")));
    }

let moreThanFifty = 0;
let moreThanThirtySix = 0;
let total =0;

elements.forEach(value=> {
    if(value>36){
        moreThanThirtySix++;
        if(value>50) moreThanFifty ++
    }
    total += value
})

console.log(total)
console.log(`Los mayores de 36 son ${moreThanThirtySix}`)
console.log(`Los mayores de 50 son ${moreThanFifty}`)