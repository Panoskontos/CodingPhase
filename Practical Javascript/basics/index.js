console.log('hi')

document.body.style.background = 'pink'
document.body.style.margin = 0
document.body.style.padding = 0

// using js instead of html css
let div = document.createElement('div') 
div.className = "js-box"
div.style.width = '30px'
div.style.height = '20px'
div.style.background = 'black'
div.style.color = "white"
div.innerHTML = "<p> Text </p>"
document.body.appendChild(div)

// fuction that creates div
function createDiv(size){

    var div = document.createElement('div') 
    div.className = "function-div"
    div.style.width = size + 'px'
    div.style.height = size + 'px'
    div.style.background = 'black'
    div.style.color = "white"
    div.innerHTML = "<p> Text </p>"
    document.body.appendChild(div)
    
}

createDiv(50)
createDiv(150)

