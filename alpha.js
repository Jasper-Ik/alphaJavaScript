
//object literals decleration

let dataValidation = {
    'MarkZugerberger': {
        fistName: 'John',
        lastName: 'Doe',
        address: 'Abuja',
        email: 'johndoe@gmail.com',
        password: 565346565455
    },
    'Beth': {
        fistName: 'Peter',
        lastName: 'Obi',
        address: 'Nigeria',
        email: 'johndoe@gmail.com',
        password: 123456789
    },
    'Lizzy': {
        fistName: 'Kwankwanso',
        lastName: 'Jibril',
        address: 'Kano',
        email: 'johndoe@gmail.com',
        password: 0987654321
    }
}


//variable decleration

let firstReply = 'Valid username';
let secondReply = 'Invalid username';
let firstNumber = 10;


let firstResponse = 'Password not Valid';
let secondResponse = 'Password Valid';
let secondNumber = 8;


//enter password

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

//confirm password

let confirmPassword = prompt('Confirm Password');

while (confirmPassword !== password) {
    confirmPassword = prompt('incorrect password,\n please enter a valid password');
}

//calling the object method

const user = dataValidation[username]


if (user == undefined) {
    alert('account not found\n please sign up')
}




console.log(user)


alert(`User found with the following details
        first name: ${user.fistName}
        last name: ${user.lastName}
        address: ${user.address}
        Email: ${user.email}
        `)

        alert('Thanks for using JUc')

console.log(username, password)

}

displayUserDetails();
alert('successfully login');

//function decleration

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