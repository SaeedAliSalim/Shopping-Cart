const params = new URLSearchParams(window.location.search);
const username = params.get('username');
document.getElementById('h').innerText = `Welcome, ${username}!`;

let logout=document.getElementById('logout')


function logging_out(){
    window.location.href = `logout.html?username=${encodeURIComponent(username)}`;
    localStorage.removeItem('userToken'); // Clear token
}
