console.log('hi')

decline_button = document.querySelector('.email-modal__decline-offer')
var modal = document.querySelector('.email-modal')

// console.log(decline_button)

let emailState = false;
// show modal everytime you leave the page
// anonymous function
window.onload = function() {
    // arrow function
    if (emailState == false){
        document.body.addEventListener('mouseleave', () => {
            modal.classList.add('email-modal--visible')
        })
    }
} 

    


// Fixed Decline button
decline_button.onclick = function(){
    console.log('yeah')
    modal.classList.remove('email-modal--visible')
}

// Close Button
closeButton = document.querySelector('.email-modal__close-btn')
closeButton.style.background = 'red'
closeButton.style.borderRadius = '10px'

closeButton.onclick = function(){
    console.log('yeah')
    var modal = document.querySelector('.email-modal')
    modal.classList.remove('email-modal--visible')
    console.log(count)

}

// Check if close button has been clicked before

