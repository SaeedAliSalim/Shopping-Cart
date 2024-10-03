let exampleInputEmail1 = document.getElementById('exampleInputEmail1')
let exampleInputPassword1 = document.getElementById('exampleInputPassword1')
let submit = document.getElementById('submit')
let Invalidtext = document.getElementById('Invalid')

let arrData;


if (localStorage.users != null) {
    arrData = JSON.parse(localStorage.users)
} else {
    arrData = [];
}

// Login

submit.onclick = function () {

    let r;

    for (let i = 0; i < arrData.length; i++) {
        resultemail = arrData[i].email;
        resultpassword = arrData[i].password;
        username = arrData[i].username;

        if (exampleInputEmail1.value == resultemail && exampleInputPassword1.value == resultpassword) {
            r = 'correct'
            break;
        } else {
            let r = 'wronge';
        }
    }

    if (r == 'correct') {
        window.location.href = `product.html?username=${encodeURIComponent(username)}`;
        localStorage.setItem('userToken', 'sing'); // Store token
        localStorage.setItem('currentUser', username);  // Store current user
    }
    else {
        Invalidtext.style.display = 'block'
        // alert("Invalid Login")
    }
}

