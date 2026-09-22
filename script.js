/* =====================================================
   FARM2DOOR PRODUCT DATA
===================================================== */

const products = [

    {
        id: 1,
        name: "Fresh Spinach",
        farmer: "Green Valley Farm",
        category: "Vegetables",
        price: 25,
        unit: "bunch",
        stock: 20,
        description: "Freshly harvested spinach grown locally.",
        image: "images/spinach.png"
    },

    {
        id: 2,
        name: "Farm Tomatoes",
        farmer: "Sunrise Produce",
        category: "Vegetables",
        price: 35,
        unit: "kg",
        stock: 15,
        description: "Ripe, juicy tomatoes picked fresh from the farm.",
        image: "images/tomatoes.png"
    },

    {
        id: 3,
        name: "Fresh Carrots",
        farmer: "Mokoena Family Farm",
        category: "Vegetables",
        price: 28,
        unit: "kg",
        stock: 18,
        description: "Crunchy farm-grown carrots, freshly harvested.",
        image: "images/carrots.png"
    },

    {
        id: 4,
        name: "Farm Potatoes",
        farmer: "Harvest Fields",
        category: "Vegetables",
        price: 30,
        unit: "2 kg",
        stock: 25,
        description: "Locally grown potatoes perfect for everyday meals.",
        image: "images/potatoes.jpg"
    },

    {
        id: 5,
        name: "Fresh Avocados",
        farmer: "Limpopo Fresh Farms",
        category: "Fruits",
        price: 45,
        unit: "4 pack",
        stock: 12,
        description: "Creamy, ripe avocados sourced directly from the farm.",
        image: "images/avocadoes.jpg"
    },

    {
        id: 6,
        name: "Fresh Apples",
        farmer: "Mountain View Farm",
        category: "Fruits",
        price: 40,
        unit: "kg",
        stock: 10,
        description: "Crisp and naturally sweet farm-grown apples.",
        image: "images/apple.png"
    },

    {
        id: 7,
        name: "Farm Oranges",
        farmer: "Sunrise Produce",
        category: "Fruits",
        price: 35,
        unit: "kg",
        stock: 16,
        description: "Fresh and juicy locally grown oranges.",
        image: "images/orange.png"
    },

    {
        id: 8,
        name: "Fresh Strawberries",
        farmer: "Berry Fields Farm",
        category: "Fruits",
        price: 45,
        unit: "punnet",
        stock: 8,
        description: "Sweet strawberries harvested fresh from the farm.",
        image: "images/strawberry.png"
    },

    {
        id: 9,
        name: "Free-Range Eggs",
        farmer: "Mokoena Family Farm",
        category: "Eggs & Dairy",
        price: 55,
        unit: "dozen",
        stock: 30,
        description: "Fresh free-range eggs from happy, healthy hens.",
        image: "images/eggs.png"
    },

    {
        id: 10,
        name: "Farm Fresh Milk",
        farmer: "Green Valley Farm",
        category: "Eggs & Dairy",
        price: 28,
        unit: "litre",
        stock: 14,
        description: "Fresh dairy milk sourced from local farmers.",
        image: "images/milk.png"
    },

    {
        id: 11,
        name: "Plain Farm Yoghurt",
        farmer: "Meadow Dairy",
        category: "Eggs & Dairy",
        price: 35,
        unit: "500 ml",
        stock: 9,
        description: "Creamy natural yoghurt made with fresh farm milk.",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 12,
        name: "Fresh Chicken",
        farmer: "Thaba Farm",
        category: "Meat",
        price: 95,
        unit: "kg",
        stock: 7,
        description: "Quality farm-raised chicken prepared fresh.",
        image: "images/chicken.jpg"
    },

    {
        id: 13,
        name: "Pure Local Honey",
        farmer: "Golden Hive Farm",
        category: "Pantry",
        price: 80,
        unit: "500 g",
        stock: 11,
        description: "Pure natural honey collected from local hives.",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 14,
        name: "Fresh Coriander",
        farmer: "Green Valley Farm",
        category: "Herbs",
        price: 18,
        unit: "bunch",
        stock: 13,
        description: "Fresh aromatic coriander grown naturally.",
        image: "images/coriander.png"
    },

    {
        id: 15,
        name: "Fresh Lettuce",
        farmer: "Harvest Fields",
        category: "Vegetables",
        price: 18,
        unit: "head",
        stock: 20,
        description: "Crisp lettuce harvested fresh from the farm.",
        image: "images/lettuce.png"
    },

    {
        id: 16,
        name: "Butternut Squash",
        farmer: "Thaba Farm",
        category: "Vegetables",
        price: 30,
        unit: "kg",
        stock: 6,
        description: "Sweet and nutritious locally grown butternut.",
        image: "images/butternut-squash.png"
    }

];


/* =====================================================
   CART
===================================================== */

let cart = JSON.parse(localStorage.getItem("farm2doorCart")) || [];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const productsGrid = document.getElementById("productsGrid");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const productCount =
    document.getElementById("productCount");

const noProducts =
    document.getElementById("noProducts");

const cartButton =
    document.getElementById("cartButton");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(productList) {

    productsGrid.innerHTML = "";

    productCount.textContent =
        `${productList.length} ${productList.length === 1 ? "product" : "products"}`;


    if (productList.length === 0) {

        noProducts.style.display = "block";

        return;

    }

    noProducts.style.display = "none";


    productList.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";


        let stockText = "In Stock";

        let stockClass = "";


        if (product.stock === 0) {

            stockText = "Out of Stock";

            stockClass = "out";

        }

        else if (product.stock <= 8) {

            stockText = "Low Stock";

            stockClass = "low";

        }


        card.innerHTML = `

            <div class="product-image-container">

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="stock-badge ${stockClass}">
                    ${stockText}
                </span>

            </div>


            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="farmer-name">
                    🌱 ${product.farmer}
                </p>

                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <p class="price">
                        R${product.price.toFixed(2)}
                        <span>/ ${product.unit}</span>
                    </p>

                    <button
                        class="add-cart-btn"
                        onclick="addToCart(${product.id})"
                        ${product.stock === 0 ? "disabled" : ""}
                    >
                        ${product.stock === 0 ? "Unavailable" : "Add to Cart"}
                    </button>

                </div>

            </div>
        `;


        productsGrid.appendChild(card);

    });

}


/* =====================================================
   SEARCH + FILTER
===================================================== */

function filterProducts() {

    const searchTerm =
        searchInput.value.toLowerCase().trim();

    const selectedCategory =
        categoryFilter.value;


    const filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.farmer.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);


        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;


        return matchesSearch && matchesCategory;

    });


    displayProducts(filteredProducts);

}


/* Search */

searchInput.addEventListener(
    "input",
    filterProducts
);


/* Dropdown */

categoryFilter.addEventListener(
    "change",
    () => {

        categoryButtons.forEach(button => {

            button.classList.remove("active");

        });

        filterProducts();

    }
);


/* Category buttons */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;


        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        categoryFilter.value = category;


        filterProducts();

    });

});


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(p => p.id === productId);


    if (!product || product.stock === 0) {
        return;
    }


    const existingItem =
        cart.find(item => item.id === productId);


    if (existingItem) {

        if (existingItem.quantity < product.stock) {

            existingItem.quantity++;

        }

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            unit: product.unit,

            farmer: product.farmer,

            image: product.image,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    openCart();

}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(productId, change) {

    const item =
        cart.find(item => item.id === productId);


    if (!item) {
        return;
    }


    const product =
        products.find(p => p.id === productId);


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.id !== productId);

    }


    if (product && item.quantity > product.stock) {

        item.quantity = product.stock;

    }


    saveCart();

    updateCart();

}


/* =====================================================
   REMOVE ITEM
===================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(item => item.id !== productId);


    saveCart();

    updateCart();

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add some fresh products from local farmers.
                </p>

            </div>

        `;

    }


    let total = 0;

    let itemCount = 0;


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;


        total += itemTotal;

        itemCount += item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
                class="cart-item-image"
            >


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p class="farmer-name">
                    ${item.farmer}
                </p>

                <p class="cart-item-price">
                    R${item.price.toFixed(2)}
                    / ${item.unit}
                </p>


                <div class="quantity-controls">

                    <button
                        onclick="changeQuantity(${item.id}, -1)">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${item.id}, 1)">
                        +
                    </button>

                </div>


                <button
                    class="remove-item"
                    onclick="removeFromCart(${item.id})">

                    Remove

                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    cartCount.textContent = itemCount;

    cartTotal.textContent =
        `R${total.toFixed(2)}`;

}


/* =====================================================
   LOCAL STORAGE
===================================================== */

function saveCart() {

    localStorage.setItem(
        "farm2doorCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    cartSidebar.classList.add("open");

    cartOverlay.classList.add("show");

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCartSidebar() {

    cartSidebar.classList.remove("open");

    cartOverlay.classList.remove("show");

}


cartButton.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartSidebar
);


cartOverlay.addEventListener(
    "click",
    closeCartSidebar
);


/* =====================================================
   CHECKOUT
===================================================== */

document
    .getElementById("checkoutButton")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }


        alert(
            "Checkout will be connected to the ordering system."
        );

    });


/* =====================================================
   INITIAL LOAD
===================================================== */

displayProducts(products);

updateCart();