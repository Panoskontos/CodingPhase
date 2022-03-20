console.log('hi')

document.body.style.background = 'pink'
document.body.style.margin = 0
document.body.style.padding = 0

// using js instead of html css
let div = document.createElement('div') 
div.className = "js-box"
div.style.width = '300px'
div.style.height = '200px'
div.style.background = 'black'
div.style.color = "white"
div.innerHTML = "<p> Text </p>"
document.body.appendChild(div)
