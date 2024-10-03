const params = new URLSearchParams(window.location.search);
const username = params.get('username');
document.getElementById('h').innerText = `Good Bay, ${username} See You Later Soon! `;




