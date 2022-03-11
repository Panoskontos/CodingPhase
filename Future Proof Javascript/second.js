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
// manipulating css
p.style.background = 'red'
p.style.color = 'white'

console.log(p)