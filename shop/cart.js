// GET CART

let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
let cartItems = document.getElementById("cartItems");
let totalItemsElement = document.getElementById("totalItems");
let totalAmountElement = document.getElementById("totalAmount");

// DISPLAY CART

function displayCart() {
    cartItems.innerHTML = "";
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                Your cart is empty.
            </div>
        `;
        totalItemsElement.textContent = "0";
        totalAmountElement.textContent = "0";
        return;
    }

    cart.forEach((product) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-left">
                    <img
                        src="${product.image}"
                        alt="${product.title}"
                    >
                    <div>
                        <h3>
                            ${product.title}
                        </h3>

                        <p>
                            Price: ₹${product.price}
                        </p>

                        <div class="quantity">
                            <button
                                onclick="decreaseQuantity(${product.id})"
                            >
                                -
                            </button>

                            <span>
                                ${product.quantity}
                            </span>

                            <button
                                onclick="increaseQuantity(${product.id})"
                            >
                                +
                            </button>

                        </div>
                    </div>
                </div>

                <div>
                    <p>
                        ₹${product.price * product.quantity}
                    </p>

                    <button
                        class="remove-btn"
                        onclick="removeFromCart(${product.id})"
                    >
                        Remove
                    </button>
                </div>
            </div>
        `;
    });
    calculateTotal();
}

// CALCULATE TOTAL

function calculateTotal() {
    let totalItems = 0;
    let totalAmount = 0;

    cart.forEach((product) => {
        totalItems += product.quantity;
        totalAmount += product.price * product.quantity;
    });

    totalItemsElement.textContent = totalItems;
    totalAmountElement.textContent = totalAmount;
    return totalAmount;
}

// INCREASE QUANTITY

function increaseQuantity(productId) {
    let product = cart.find((item) => {
        return item.id === productId;
    });

    if (product) {
        product.quantity += 1;
        updateCart();
    }
}

// DECREASE QUANTITY

function decreaseQuantity(productId) {
    let product = cart.find((item) => {
        return item.id === productId;
    });

    if (product) {
        product.quantity -= 1;
        if (product.quantity <= 0) {
            cart = cart.filter((item) => {
                return item.id !== productId;
            });
        }
        updateCart();
    }
}

// REMOVE PRODUCT

function removeFromCart(productId) {
    cart = cart.filter((item) => {
        return item.id !== productId;
    });
    updateCart();
}

// UPDATE LOCAL STORAGE

function updateCart() {
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
    displayCart();
}

// RAZORPAY PAYMENT

document.getElementById("rzp-btn").onclick = function (e) {
    e.preventDefault();

    // Check cart
    if (cart.length === 0) {
        document.getElementById("paymentError").textContent =
            "Your cart is empty.";
        return;
    }

    // Get total
    let totalAmount = calculateTotal();

    // Get current user
    let currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        document.getElementById("paymentError").textContent =
            "Please login before making payment.";
        return;
    }

    // Razorpay options
    let options = {
        "key": "rzp_test_TQR6Sto9eBI90b",
        "amount": totalAmount * 100,
        "currency": "INR",
        "name": "MeShop",
        "description": "Your order transaction",
        "image": "https://www.myshop.com/logo.png",
        "prefill": {
            "email": currentUser.email
        },
        "theme": {
            "color": "#3399cc"
        },
        "handler": function (response) {
            console.log(
                "Payment successful:",
                response
            );

            // Save payment information
            let paymentDetails = {
                paymentId: response.razorpay_payment_id,
                amount: totalAmount,
                email: currentUser.email,
                date: new Date().toISOString()
            };

            localStorage.setItem(
                "lastPayment",
                JSON.stringify(paymentDetails)
            );

            // Clear cart
            localStorage.removeItem("cart");
            cart = [];
            displayCart();

            document.getElementById("paymentSuccess").textContent =
                "Payment successful! Payment ID: " +
                response.razorpay_payment_id;

            document.getElementById("paymentError").textContent = "";
            console.log(
                "Payment Details:",
                paymentDetails
            );
        }
    };

    // Create Razorpay instance
    let rzp1 = new Razorpay(options);

    // Payment failed
    rzp1.on("payment.failed", function (response) {
        console.log(
            "Payment failed:",
            response.error
        );
        document.getElementById("paymentError").textContent =
            "Payment failed. Please try again.";
    });

    // Open Razorpay
    rzp1.open();
};