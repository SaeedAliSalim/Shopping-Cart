function checkAuthentication() {
    const isLoggedIn = !!localStorage.getItem('userToken');
    if (!isLoggedIn) {
        window.location.href = '/index.html'; // Redirect to login if not logged in
    }
}

document.addEventListener('DOMContentLoaded', checkAuthentication);

