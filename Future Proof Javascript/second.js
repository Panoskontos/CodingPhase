// while loop
console.log('les go')

var j = 0;
while (j < 10) {
    console.log(j)
    j++
}


// Do while 
// WTF who uses that?


// Iterate array and dicts with style
cars = ['honda','bmw','subaru']
// 1t way
for (var i in cars){
    console.log(cars[i])
}
// 2nd way - EASY
for (var i of cars){
    console.log(i)
}


boxers = [
    {name:'dio',species:'vamp'},
    {name:'jojo',species:'hooman'}
]

for (var j of boxers){
    console.log(j.name +' is a '+j.species)
}

// DOM Manipulation
// This will give you the whole page
// console.log(document)

// Select spesific element
var p = document.querySelector('p')
console.log(p)
// manipulating css
p.style.background = 'red'
p.style.color = 'white'

// you should check w3schools on javascript
// target every element on a page
var d = document.querySelectorAll('p')
// array of objects
console.log(d)
d[1].style.background = 'green'

// adding and creating elements
// document.createElement(element)
var btn = document.createElement("button")
var text = document.createTextNode('Click Here')
btn.appendChild(text)
btn.style.width = '100px'
btn.style.height = '40px'
btn.style.borderRadius = '20px'
document.body.appendChild(btn)

// in javascript you will constantly looking at the references

// working with events
function makeRed(x) {
    x.style.background = 'red'
}

// Add onclick and add this 