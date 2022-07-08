// Rango de números

function range(entryNumber,lastNumber){
    for(let i = entryNumber; i<= lastNumber;i++){
        console.log(i)
    }
}

range(5,9)
// Cuál es el menor?

function minor(numberOne,numberTwo,numberThree){
    let asArray = [numberOne,numberTwo,numberThree]
    let aux = numberOne;
    asArray.forEach(number => {
        if(number<aux)
            aux=number
    })
    console.log(aux)
    //return Math.min(numberOne,numberTwo,numberThree)
}

minor(5,3,6)
//orden 
function sort(numberOne,numberTwo,numberThree){
    let asArray = [numberOne,numberTwo,numberThree]
    let sorted = []
    asArray.forEach(number => {
        let placed = false
        sorted.forEach((val,index) =>{
            if(number < val){
                placed = true;
                sorted.splice(index-1,0,number);
            }
        })
        if(!placed) sorted.push(number)
    })
    console.log(sorted)
    //return asArray.sort((a,b)=> b-a);
}

sort(7,1,10)


function max(numberOne,numberTwo,numberThree){
    let asArray = [numberOne,numberTwo,numberThree]
    let aux = numberOne;
    asArray.forEach(number => {
        if(number>aux)
            aux=number
    })
    console.log(aux)
    //return Math.max(numberOne,numberTwo,numberThree)
}

max(5,3,6)

function squarePerimeter(side){
    return side*4;
}


//Cuantos dígitos?

function getDigits(number){
    if(number>99999) return "Más digitos de los esperados"
    return number.toString().split('').length
}

console.log(getDigits(542))

// Largos!

function getLengths(array){
    return array.map((value)=> value.length)
}
console.log(getLengths(["Hola", "celular", "ser", "exige"]))

// Solo los mayores

function getMayores(numbers){
    let centinel = numbers[0];
    return numbers.slice(1).reduce((aggregate,value)=> {
        if(value>=centinel) aggregate.push(value)
        return aggregate
    } ,[]);
}

console.log(getMayores([10,15,7,8,14,11,10]))

// Scopes and closures

function test(){
    console.log(a)
    console.log(foo());

    var a = 1;
    function foo(){
        return 2;
    }
}

test()

/* 
    undefined el primer console.log(a) ya que su variable a se inizializa después
     y foo devuelve 2 al estar definido más abajo
*/

/*
    3- 
*/

var fullname = 'John Doe'
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio Da rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test())

// Vera la variable a solamente
var a =1;
function b(){
    a=10;
    return;
    function a(){

    }
}
b();
console.log(a)
