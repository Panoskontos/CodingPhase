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

