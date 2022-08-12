const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')
 

form.addEventListener('submit' , e=> {
    e.preventDefault();

    validateInputs();
}

);

const setError = (element,message) =>{
    const inputControl= element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
     errorDisplay.innerText=message;
     inputControl.classList.add('error')
     inputControl.classList.remove('success')
}

const setSuccess= element => {
const inputControl = element.parentElement;

};

const validateInputs =() =>{
    const usernamevalue= username.value.trim();
    const emailvalue= email.value.trim();
    const passwordvalue= password.value.trim();
    const password2value= password2.value.trim();
  
if (emailvalue === ''){
    setError(emailvalue, 'Username is required');

}else if (!isvalidEmail(emailvalue)){
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email);
}
if (password ===''){
    setError(password,'Password is required')
}else if (passwordvalue.length < 8){
    setError(password, 'Password should be atleast 8 characters.');
} else{
    setSuccess(password);
}

if (password2 ===''){
    setError(password2,'Please confirm your password' );
} else if (password2value!==passwordvalue) {
   setError(password2,'Passwords doesnt match');
}else{
    setSuccess(password2);
}



}

