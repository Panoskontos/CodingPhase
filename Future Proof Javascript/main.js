var car = 'nissan'
var apples = 5
var box = 'this is a box'

console.log(car)
console.log(box)
console.log(apples*200)

/*
This comments will not be printed
*/


// Javascript is case Sensitive
var car = 'honda civic'
var Car = 'BMW'
console.log(Car)

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
console.log(cars/5)
