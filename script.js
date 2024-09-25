/*
let correctPassword='12345';
let password=document.querySelector('#password');

let displayError=document.querySelector('.errorDisplay')

function checkPassword(){
    passwordValue=password.value;
    if(passwordValue!==correctPassword){
        let theMessage=document.createElement('p');
        theMessage.textContent='incorrect password ';
        displayError.appendChild(theMessage);
    }
}
*/
let minLength=5;
let maxLength=5;
let firstNameInput=document.querySelector('#first-name');
let lastNameInput=document.querySelector('#last-name');
let passwordInput=document.querySelector('#password');
let emailInput=document.querySelector('#email')

function displayValue(){
    let errorMessage=document.querySelector('.errorMessage')
    
    
    let firstName=firstNameInput.value;
    let firstNameArray=firstName.split('');
    let lastName=lastNameInput.value;
    let lastNameArray=lastName.split('');
    let password=passwordInput.value;
    let email=emailInput.value;
    let emailRegx=/^[^@\s]+@[^\s@]+\.[^\s@]+$/;
    if(firstNameArray.length==0){
        errorMessage.innerHTML='first name is required';
    }
    else if ( firstNameArray.length<minLength && firstNameArray.length>0){
        errorMessage.innerHTML='first name must be greater than 5';
    }
    else if(firstNameArray.length>20){
        errorMessage.innerHTML='first name must be less than 15';
    }
    else if(lastNameArray.length==0){
        errorMessage.innerHTML='last name is required';
    }
    else if (lastNameArray.length<minLength){
        errorMessage.innerHTML='last name must be greater than 5';
    }
    else if(lastNameArray.length>20){
        errorMessage.innerHTML='last name must be less than 15';
    }
    else if(emailRegx.test(email)==false){
        errorMessage.innerHTML='invalid email';
    }
    else{
        errorMessage.innerHTML='';
    }
}

