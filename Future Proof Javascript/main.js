// var car = 'nissan'
// var apples = 5
// var box = 'this is a box'

// console.log(car)
// console.log(box)
// console.log(apples*200)

/*
This comments will not be printed
*/


// Javascript is case Sensitive
// var car = 'honda civic'
// var Car = 'BMW'
// console.log(Car)

// you don't need the semi column
// it is good practice for statement finishing


// Javascript Data Types
// Are number,bigint,string,boolean,null,undefinded,object,function

// Find type of element
console.log('')
console.log('Data types are')
console.log(typeof apples);
console.log(typeof car);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof [1,2,3,4]);
console.log(typeof null);
console.log(typeof 9007199254740992n);
console.log(typeof function(){});

// You can cast the variable however you want 
// nothing crashes!
var total = 32.4512
total = 'hello'
total = undefined
toatl = [1,2,3,4]
total = false
total = [true,12,'asdasd',[1,2,312]]
// object
console.log(typeof total)

// creating an object
var student = {
    name: 'Panos',
    dream:undefined,
    age: '25',
    claas:'1A',
    girlfriend:null,
    greeting: function(){
        console.log('my name is Panos nice to meet you')
    }
}

console.log(student.age)
student.greeting()

// difference between let and var
// The main difference is scoping rules. Variables declared by var keyword are scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).
{
    var fighter1 = 'Tyson'
    let fighter2 = 'Dennis'
}
console.log(fighter1)
// console.log(fighter2) Error because undefined



// Go to W3Schools and look operators
x  = 5
y = 3
// Number operators
x += y
x *= y
x -= y
x /= y
x **= y
x++

// String operators
t1 = 'John'
t2 = 'Doe'
t3 = t1 + ' say what ' + t2
// Add numbers
t3 = t1 + ' say what ' + t2 + x

t4 = '5'+2
// What is the type of t4
console.log(typeof t4)
// answer string

// tenary operator
t5 = 5 > 4 ? "yes is true" : 'no it is false'
console.log(t5)

// logical operators
t6 = true && false
t6 = true || false
t6 = !0
console.log(t6)

// Using the
// instance of 
// gives true of false for an instance Struct or Function
t7 = [1,2,3,4]
console.log(t7 instanceof Number)
console.log(t7 instanceof Boolean)
console.log(t7 instanceof String)
console.log(t7 instanceof Object)

let literalString = 'This is a literal string';
let stringObject  = new String('String created with constructor');

literalString instanceof String;  // false, string literal is not a String
stringObject  instanceof String;  // true


var cars = 12
// integer methods to add decimals
console.log(cars.toFixed(3))

// Other Methods
// toString
// isInteger()

str = 'Panos'
age = 25
console.log('my name is '+ str+' i am '+ age)


// String methods
// https://www.w3schools.com/js/js_string_methods.asp
console.log(str.length)
console.log(str.replace("o","0"))
console.log(str.toUpperCase())


// Arrays and methods
var users = ['Panos','Nik','Demon']
users[2] = 'Leroe'
// adding to the end
users.push('Nadia')
users.push('Nadia')
users.pop()
console.log(users)
// adding to the beggining
users.shift()
users.unshift('Eddie')
console.log(users)

// splice method 
// #1 how many should be added 
// #2 how many should be removed 
users.splice(1,3,'Ricardo')
console.log(users)

// sorting numerically
// !sort alone works alphabetically
var numbers = [2,1,56,3,87, 502,4]
numbers.sort(function(a, b){return a - b})
console.log(numbers)
console.log(numbers.indexOf(502))

users.push('Nadia')
// Remove the Ricardo and add Julian
users.splice(1,1,'Julian')
// Print the revesre of an array
console.log(users.reverse())

// Objects
// Objects are usefull because the let you keep 
// a lot of data inside of a variable
var boxer = {
    name:'Nakatani',
    power:80,
    stamina:34,
    score:"22:1",
    girlfriend:null,
}


boxer.power = 88

console.log(boxer)

var boxer2 = {
    name:'Kambosos',
    power:89,
    stamina:98,
    score:"20:0",
    car: {
        name:'honda',
        price:80000
    }
}

console.log(boxer2.car.name)

// adding elements to objecrts
// 2 ways
boxer2['speed'] = 100
boxer2.best_punch = 'right overhand'
console.log(boxer2)

// Functions
function printname(name,age) {
    console.log('my name is '+ name+' i am '+ age +' years old')
}

printname('Panos',25)
printname('Nikos',25)

function addStudent(name){
    console.log(name + ' has subscribed')
}

addStudent('Marino')
addStudent('John')

function stats(name,bench,deadlift){
    function inline(bench) {
        console.log( name + ' inline is '+bench*0.8)
    }
    return {
        name: name,
        bench:bench,
        deadlift:deadlift,
        inline: inline(bench)
    }
}

var user1 = stats('Panos',90,110)
var user2 = stats('Marinos',100,120)
var user2 = stats('Babi',80,80)
console.log(user1)
console.log(user2)

// Control Flow
if (user1.bench>110) {
    console.log(user1.name + ' is intermediate')
    // not elif
    // else if
} else if (user1.deadlift>100) {
    console.log(user1.name + ' is a strong deadlifter')
} else {
    console.log(user1.name + ' is not yet there')
}

// switch statement
// Always look at the documentation

// When to use switch over if
// Use switch every time you have more than 2 conditions on a single variable, take weekdays for example, if you have a different action for every weekday you should use a switch.

switch(user1.bench) {
    case 100:
      console.log('strong')
      break;
    case 90:
      console.log('weak')
      break;
    default:
        console.log('default')
  } 

//   Loops 
// Most important loop is the for loop
for (var i =0; i<11;i++){
    console.log(i)
}

// iterate array
var names = ['Dio','Joseph','Jotaro']
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

