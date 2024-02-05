let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id('username'),
email = id('email'),
password = id('password'),
form = id('form'),

errorMsg = classes('error'),
successIcon = classes('success-icon'),
failureIcon = classes('failure-icon');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //passing the id names, serials of class names, 
    //and passing the message which should be printed
    engine(username, 0, 'Username cannot be blank');
    engine(email, 1, 'Email cannot be blank');
    engine(password, 2, 'Password cannot be blank');
});

//to print error message and red or green icon
let engine = (id, serial, message) => {
    if (id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = '2px solid red';

        //icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } 
    else{
        errorMsg[serial].innerHTML = "";
        id.style.border = '2px solid green';

        //icons
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';

    }
};



