let firstReply = 'Valid username';
let secondReply = 'Invalid username';
let firstNumber = 10;


let firstResponse = 'Password not Valid';
let secondResponse = 'Password Valid';
let secondNumber = 8;



function displayUserDetails(){
    let username = prompt('Enter Username');

while (validateUserName(username) == secondReply) {
    username = prompt('Invalid username\n Please enter a valid username');
}

if (username == null) {
   return
}

let password = prompt('Enter Password');


while (validatePassword(password) == firstResponse) {
    password = prompt('Password too weak\n please enter a strong password');
}

if (password == null) {
    return
 }

//console.log(username, password)

}

displayUserDetails();
alert('successfully login');

function validateUserName (username) {
    if (username.length > firstNumber){
        return firstReply
    }else if (username == null){
        return secondReply
    }else {
        return secondReply
    }
}

function validatePassword (password) {
    if (password == null) {
        return firstResponse
    } else if (password.length < secondNumber) {
        return firstResponse
    } else {
        return secondResponse
    }
 }