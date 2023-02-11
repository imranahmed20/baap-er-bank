
// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('click here')
    // step 2: get the email address inside the email input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    emailField.value = '';

    // step -3: get password 
    //  set id on the html element 
    // get the element 
    // get the value from the element
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    passwordField.value = '';
    // DANGER:Do not verify email password on the client side
    // steep -4: verify email and password

    if(email === 'imran@gmail.com' && password === 'imran2001'){
       window.location.href = 'bank.html'
    }
    else{
        alert('Toke ami teijjo sontan gosona korlam, tui unvalid user')
    }
   

})