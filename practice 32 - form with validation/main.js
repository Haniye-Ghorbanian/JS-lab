
let labels = Array.from(document.getElementsByTagName('label'));
let inputs = Array.from(document.getElementsByTagName('input'));
let usernameInput = document.querySelector('input[name="username"]');
let emailInput = document.querySelector('input[name="email"]');
let passInput = document.querySelector('input[name="password"]');
let confPassInput = document.querySelector('input[name="confirmPassword"]');
let errors = Array.from(document.getElementsByTagName('p'));
let submit = document.getElementById('submit');
let SIbtn = document.getElementById('signinbtn');
let SUbtn = document.getElementById('signupbtn');
console.log(submit)





// The label goes up when related input is focused
function move() {
    removeActive();
    this.classList.add('border');
    this.previousElementSibling.classList.add('moveLabel');
}





// The label backs in the input when related input is blur
function removeActive() {
    for (let i = 0; i < 4; i++) {
        inputs[i].classList.remove('border');
        !inputs[i].value ? labels[i].classList.remove('moveLabel') : '';
    }
}





// Validate the data entered in the iputs

function validation() {
    debugger
    // Checking the validation of the email address
    const userUsername = usernameInput.value;
    const userUsernameIsValid = /^[a-zA-Z][a-zA-Z0-9]*$/.test(userUsername);

    if (usernameInput === document.activeElement) {
        if (userUsernameIsValid || userUsername !== '') {
            usernameInput.classList.remove('red-border');
            usernameInput.classList.add('green-border');
            errors[0].textContent = 'Great!';
            errors[0].style.color = 'green';
        } else {
            usernameInput.classList.remove('green-border');
            usernameInput.classList.add('red-border');
            errors[0].textContent = 'Your username must start with a letter and can only contain letters and digits';
            errors[0].style.color = '#780606';
        }

        if (userUsername === '') {
            usernameInput.classList.remove('red-border');
            usernameInput.classList.remove('green-border');
        }
    }




    // Checking the validation of the email address
    const userEmail = emailInput.value;
    const userEmailIsValid = /^[A-Za-z0-9._%+-]{2,}@[A-Za-z0-9.-]{2,}\.[A-Za-z]{2,}$/.test(userEmail);

    if (emailInput === document.activeElement) {
        if (userEmailIsValid) {
            emailInput.classList.remove('red-border');
            emailInput.classList.add('green-border');
            errors[1].textContent = 'Great!';
            errors[1].style.color = 'green';
        } else {
            emailInput.classList.remove('green-border');
            emailInput.classList.add('red-border');
            errors[1].textContent = 'Your Email address is invalid!';
            errors[1].style.color = '#780606';
        }

        if (userEmail === '') {
            emailInput.classList.remove('red-border');
            emailInput.classList.remove('green-border');
        }

        if (userUsername === '') {
            errors[0].textContent = 'Enter username!!';
            errors[0].style.color = '#780606';
        }
    }




    // Checking the validation of the password
    const userPass = passInput.value;
    const userPassIsValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(userPass);

    if (passInput === document.activeElement) {
        if (userPassIsValid) {
            passInput.classList.remove('red-border');
            passInput.classList.add('green-border');
            errors[2].textContent = 'Great!';
            errors[2].style.color = 'green';
        } else {
            passInput.classList.remove('green-border');
            passInput.classList.add('red-border');
            errors[2].textContent = 'Your password must be at least 6 characters long and contain at least one lowercase letter and one uppercase letter';
            errors[2].style.color = '#780606';
        }

        if (userPass === '') {
            passInput.classList.remove('red-border');
            passInput.classList.remove('green-border');
        }

        if (userUsername === '' && userEmail === '') {
            errors[0].textContent = 'Enter username!!';
            errors[0].style.color = '#780606';
            errors[1].textContent = 'Enter you Email!!';
            errors[1].style.color = '#780606';
        }
    }


    // Checking the validation of the confirm password
    const userConfPass = confPassInput.value;
    if (userConfPass === userPass && userPass !== '' && userConfPass !== '') {
        confPassInput.classList.remove('red-border');
        confPassInput.classList.add('green-border');
        errors[3].textContent = 'Great!';
        errors[3].style.color = 'green';
    }

    else if (userConfPass === '') {
        confPassInput.classList.remove('green-border');
        confPassInput.classList.add('red-border');
        errors[3].textContent = 'Confirm your password!';
        errors[3].style.color = '#780606';
    }

    else if (userPass === ''){
        
    }

    else {
        confPassInput.classList.remove('green-border');
        confPassInput.classList.add('red-border');
        errors[3].textContent = 'Confirm doesn\'t match your password!';
        errors[3].style.color = '#780606'; 
    }


    // Checking if all inputs are valid
    const allInputsValid = userUsernameIsValid && userEmailIsValid && userPassIsValid && (userConfPass === userPass);

    // Removing the "deactive" class from the submit button if all inputs are valid
    if (allInputsValid) {
        submit.classList.remove('deactive');
    } else {
        submit.classList.add('deactive');
    }



    // if (userConfPass && userEmail && userPass && userUsername){
    //     submit.classList.remove('deactive');
    // }


}



// ??
// SUbmit button will be activated 

// function activeSubmit() {
//     inputs.every(input => input.value ? submit.classList.remove('deactive') : '')
// }

// ??


[...inputs].forEach(input => input.addEventListener('focus', move));
[...inputs].forEach(input => input.addEventListener('blur', removeActive));
// inputs.forEach(input => input.addEventListener('keyup', validation));
inputs.forEach(input => input.addEventListener('input', validation));
// usernameInput.addEventListener('input', validation);
// usernameInput.addEventListener('blur', validation);


