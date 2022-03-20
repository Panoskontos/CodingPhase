console.log('hi')

decline_button = document.querySelector('.email-modal__decline-offer')
var modal = document.querySelector('.email-modal')

// console.log(decline_button)

// show modal everytime you leave the page
// anonymous function
window.onload = function() {
    // arrow function
    document.addEventListener('mouseleave', () => {
        modal.classList.add('email-modal--visible')
    })
}


// Fixed Decline button
decline_button.onclick = function(){
    console.log('yeah')
    modal.classList.remove('email-modal--visible')
}

// Close Button
closeButton = document.querySelector('.email-modal__close-btn')
closeButton.onclick = function(){
    console.log('yeah')
    var modal = document.querySelector('.email-modal')
    modal.classList.remove('email-modal--visible')
}