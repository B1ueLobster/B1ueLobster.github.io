// Sample data to simulate cart storage
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage or initialize empty

// Handle "Add to Cart" button click
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const product = {
            id: this.dataset.id,
            name: this.dataset.name,
            price: parseInt(this.dataset.price),
            quantity: 1
        };

        // Add product to cart or update quantity if it's already in the cart
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push(product);
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        showAddToCartModal();
    });
});

// Update the cart count
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Show modal after adding item to cart
function showAddToCartModal() {
    alert("Товар додано до корзини!");
}

// Handle cart icon click - check if cart is empty and navigate to cart page
document.querySelector('.cart-icon').addEventListener('click', function() {
    if (cart.length === 0) {
        alert("Корзина пуста");
    } else {
        window.location.href = 'cart.html'; // Navigate to cart page
    }
});

// Handle checkout button click
document.getElementById('checkout-btn')?.addEventListener('click', function () {
    alert('Перехід до оплати...');
});

// Handle continue shopping button click
document.getElementById('continue-shopping-btn')?.addEventListener('click', function () {
    window.location.href = 'product.html';
});

// Render cart items on the cart page
if (document.getElementById('cart-items')) {
    const cartItemsContainer = document.getElementById('cart-items');
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} (x${item.quantity})</p>
            <p>${item.price * item.quantity} грн</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById('total-price').textContent = totalPrice;
}
