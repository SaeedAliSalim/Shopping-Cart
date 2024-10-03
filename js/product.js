// Get the current user from local storage
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

// Set the username on page load
function setUsername() {
    const username = getCurrentUser();
    if (username) {
        document.getElementById('h').innerText = `Welcome, ${username}!`;
    }
}

// Initialize cart count
let cartCount = 0;

// Update cart count display
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartCount;
}

// Load cart from local storage
function loadCart() {
    const currentUser = getCurrentUser();
    if (currentUser) {
        const cartKey = `cart_${currentUser}`;
        const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
        cartCount = cart.length; // Set cart count from loaded cart
        updateCartCount(); // Update the display
    }
}

// Add to Cart with user-specific cart storage
function addToCart(productName, productPrice) {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        alert("You must be logged in to add items to your cart.");
        return;
    }

    const cartKey = `cart_${currentUser}`;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.price += productPrice; // Update price or quantity as needed
    } else {
        cart.push({ name: productName, price: productPrice });
    }

    try {
        localStorage.setItem(cartKey, JSON.stringify(cart));
        cartCount = cart.length; // Update cart count
        updateCartCount();
        // Notify user with alert
        alert(`${productName} has been added to ${currentUser}'s cart!`);
    } catch (error) {
        console.error("Could not save to cart:", error);
    }
}

// Log out function
function logging_out() {
    const currentUser = getCurrentUser();
    if (currentUser) {
        localStorage.removeItem('currentUser'); // Clear current user
        window.location.href = `logout.html?username=${encodeURIComponent(currentUser)}`;
    }
}

// On page load
window.onload = function () {
    setUsername(); // Set the username on page load
    loadCart(); // Load the cart from local storage
};
