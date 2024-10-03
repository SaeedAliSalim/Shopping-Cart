// Register

let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')
let register = document.getElementById('register')




let arrData;


if (localStorage.users != null) {
    arrData = JSON.parse(localStorage.users)
} else {
    arrData = [];
}

register.onclick = function () {
    let newUser = {
        username: username.value,
        email: email.value,
        password: password.value
    }

    arrData.push(newUser)
    localStorage.setItem('users', JSON.stringify(arrData))
    cleardata()
}



// clear data

function cleardata() {
    username.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
}

