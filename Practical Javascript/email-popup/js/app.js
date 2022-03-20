console.log('hi')

decline_button = document.querySelector('.email-modal__decline-offer')

// console.log(decline_button)

// show modal everytime you leave the page
console.log(window)


// Fixed Decline button
decline_button.onclick = function(){
    console.log('yeah')
    var modal = document.querySelector('.email-modal')
    modal.classList.remove('email-modal--visible')
}

// Close Button
closeButton = document.querySelector('.email-modal__close-btn')
closeButton.onclick = function(){
    console.log('yeah')
    var modal = document.querySelector('.email-modal')
    modal.classList.remove('email-modal--visible')
}