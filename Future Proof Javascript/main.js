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

