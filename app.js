// Restaurant Management Application JavaScript with Session Management

// Complete menu data with all categories
const menuData = {
  vegetarian_items: [
    {"id": 1, "name": "Paneer Tikka", "description": "Grilled cottage cheese with aromatic spices", "price": 320, "category": "veg", "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300"},
    {"id": 2, "name": "Vegetable Biryani", "description": "Fragrant basmati rice with mixed vegetables", "price": 280, "category": "veg", "image": "https://product-assets.faasos.io/eatsure/production/veg-biryani-online.jpeg"},
    {"id": 3, "name": "Margherita Pizza", "description": "Classic pizza with tomato, mozzarella, and basil", "price": 300, "category": "veg", "image": "https://simplyhomecooked.com/wp-content/uploads/2023/04/Margherita-Pizza-3.jpg"},
    {"id": 4, "name": "Veg Burger", "description": "Crispy vegetable patty with fresh lettuce", "price": 250, "category": "veg", "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300"},
    {"id": 5, "name": "Dal Makhani", "description": "Creamy black lentils cooked with butter", "price": 270, "category": "veg", "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300"},
    {"id": 6, "name": "Aloo Gobi", "description": "Spiced cauliflower and potato curry", "price": 260, "category": "veg", "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300"},
    {"id": 7, "name": "Palak Paneer", "description": "Cottage cheese in spinach gravy", "price": 290, "category": "veg", "image": "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300"},
    {"id": 8, "name": "Veg Fried Rice", "description": "Wok-tossed rice with mixed vegetables", "price": 240, "category": "veg", "image": "	https://monsoonlr.com/wp-content/uploads/2025/04/Chicken-Schezwan-Fried-Rice-e1746216452434.webp"}
  ],
  non_vegetarian_items: [
    {"id": 9, "name": "Chicken Tikka", "description": "Tender grilled chicken with spices", "price": 380, "category": "non-veg", "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300"},
    {"id": 10, "name": "Butter Chicken", "description": "Rich and creamy chicken curry", "price": 420, "category": "non-veg", "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300"},
    {"id": 11, "name": "Fish Curry", "description": "Fresh fish in coconut curry sauce", "price": 450, "category": "non-veg", "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300"},
    {"id": 12, "name": "Mutton Biryani", "description": "Aromatic rice with tender mutton pieces", "price": 480, "category": "non-veg", "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"},
    {"id": 13, "name": "Chicken Pizza", "description": "Wood-fired pizza with chicken toppings", "price": 400, "category": "non-veg", "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300"},
    {"id": 14, "name": "Beef Burger", "description": "Juicy beef patty with cheese and vegetables", "price": 360, "category": "non-veg", "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300"},
    {"id": 15, "name": "Prawn Curry", "description": "Fresh prawns in spicy coconut gravy", "price": 500, "category": "non-veg", "image": "https://www.whiskaffair.com/wp-content/uploads/2023/02/Shrimp-Masala-2-3.jpg"},
    {"id": 16, "name": "Chicken Wings", "description": "Spicy and tangy chicken wings", "price": 350, "category": "non-veg", "image": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300"}
  ],
  breads: [
    {"id": 17, "name": "Butter Naan", "description": "Soft leavened bread with butter", "price": 120, "category": "breads", "image": "https://foodess.com/wp-content/uploads/2023/02/Butter-Naan-3-500x500.jpg"},
    {"id": 18, "name": "Garlic Naan", "description": "Naan with garlic and herbs", "price": 130, "category": "breads", "image": "	https://cdn.tasteatlas.com/images/dishes/af408c91593d4ba5b2a0fdc723e912a3.jpg?w=600"},
    {"id": 19, "name": "Tandoori Roti", "description": "Whole wheat bread from tandoor", "price": 80, "category": "breads", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbkXX4Q5rI8Ij5pPjbjt37pH8ukxHLFhIdA&s"},
    {"id": 20, "name": "Cheese Naan", "description": "Naan stuffed with cheese", "price": 150, "category": "breads", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0NzxjYvN4f1t0cIynKF-juLh0joS8Vh1XA&s"},
    {"id": 21, "name": "Kulcha", "description": "Stuffed bread with onions", "price": 100, "category": "breads", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsy019jaHSaq-wGol-Df15hg6JMubVzD3yfQ&s"},
    {"id": 22, "name": "Paratha", "description": "Layered flatbread", "price": 90, "category": "breads", "image": "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksz4cnCntZigSce72IQACd6JTSXcVawspMg&s"}
  ],
  desserts: [
    {"id": 23, "name": "Gulab Jamun", "description": "Sweet milk dumplings in syrup", "price": 180, "category": "desserts", "image": "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAFsYrh06dQOUqCTH_8A5WaI4tLG4ssDDwQ&s"},
    {"id": 24, "name": "Rasgulla", "description": "Spongy cheese balls in syrup", "price": 160, "category": "desserts", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtknw9jcOvvhEI6LT_KpWyCpnEz014yKhGzw&s"},
    {"id": 25, "name": "Kulfi", "description": "Traditional Indian ice cream", "price": 150, "category": "desserts", "image": "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYzh8sHv8sTQn-DW3UeAT8qsx-7kIuXaJoQ&s"},
    {"id": 26, "name": "Shahi Tukda", "description": "Royal bread pudding with nuts", "price": 220, "category": "desserts", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcP5OFu6Xdd7mVhTa_qv-dd9lvY4FLg--IQ&s"},
    {"id": 27, "name": "Ras Malai", "description": "Cheese patties in flavored milk", "price": 200, "category": "desserts", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLQh0b_h3pAk98DXdyVfp0L-J6a6FoDgqow&s"},
    {"id": 28, "name": "Kheer", "description": "Rice pudding with nuts and cardamom", "price": 170, "category": "desserts", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HsrNPM6cRjq0kF_pQh5ClOUsccRtgpFQrQ&s"}
  ],
  mocktails: [
    {"id": 29, "name": "Virgin Mojito", "description": "Fresh mint and lime refresher", "price": 150, "category": "mocktails", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEGUvy5QKcBKFQMS1rTmWiI8DEaRTBo33Kw&s"},
    {"id": 30, "name": "Mango Lassi", "description": "Creamy mango yogurt drink", "price": 140, "category": "mocktails", "image": "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22285ztkaIeZOUAzL_gF1vuYXYMbBgK1EYA&s"},
    {"id": 31, "name": "Fresh Lime Soda", "description": "Sparkling lime refresher", "price": 120, "category": "mocktails", "image": "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDM5jK-GFeRHvrPV-q572gOXLYfEIqz6pzQ&s"},
    {"id": 32, "name": "Pineapple Punch", "description": "Tropical fruit punch", "price": 160, "category": "mocktails", "image": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300"},
    {"id": 33, "name": "Cucumber Cooler", "description": "Refreshing cucumber drink", "price": 130, "category": "mocktails", "image": "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjqGArNg-X8hry1pIju7RtMtsdxpVAniDTA&s"},
    {"id": 34, "name": "Masala Chaas", "description": "Spiced buttermilk", "price": 120, "category": "mocktails", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAd2X7QC9rHKA678HyqHgajs4PAi3h-R-oxw&s"}
  ],
  combos: [
    {"id": 35, "name": "Veg Thali", "description": "Complete vegetarian meal with rice, dal, vegetables, bread, pickle, and dessert", "price": 450, "category": "combos", "image": "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Ii-ai1_dNluBhY5DQ3eBTNeLHMf_rgyRGg&s"},
    {"id": 36, "name": "Non-Veg Thali", "description": "Complete non-vegetarian meal with chicken curry, rice, dal, bread, and sides", "price": 550, "category": "combos", "image": "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPn_ttCitBuyttTAkLI5bJ0veggr1zJtTcw&s"},
    {"id": 37, "name": "Biryani Combo", "description": "Biryani with raita, pickle, and dessert", "price": 480, "category": "combos", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjPxcdlbaaV0oyPTI28fhY076YhIjf7DTjaw&s"},
    {"id": 38, "name": "Pizza Combo", "description": "Pizza with garlic bread and mocktail", "price": 520, "category": "combos", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIiNh5SkrKFtObvWAnck5upWQ2hh_9HYFjg&s"},
    {"id": 39, "name": "Burger Combo", "description": "Burger with fries and drink", "price": 400, "category": "combos", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTh-iNsyzoV6WXLXOfqAC2qq-0LY2Ec5joRw&s"},
    {"id": 40, "name": "Family Pack", "description": "2 main courses, rice, bread, dessert for 4 people", "price": 650, "category": "combos", "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300"}
  ]
};

// Application state
let currentUser = null;
let cart = [];
let currentCategory = 'all';
let searchTerm = '';
let allMenuItems = [];

// Session storage keys
const SESSION_KEY = 'spiceGardenSession';
const CART_KEY = 'spiceGardenCart';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Combine all menu items
    allMenuItems = [
        ...menuData.vegetarian_items,
        ...menuData.non_vegetarian_items,
        ...menuData.breads,
        ...menuData.desserts,
        ...menuData.mocktails,
        ...menuData.combos
    ];
    
    // Check for existing session
    checkSession();
    
    // Set up event listeners
    setupEventListeners();
}

function checkSession() {
    try {
        const session = sessionStorage.getItem(SESSION_KEY);
        const savedCart = sessionStorage.getItem(CART_KEY);
        
        if (session) {
            currentUser = JSON.parse(session);
            if (savedCart) {
                cart = JSON.parse(savedCart);
            }
            showMainApp();
            displayMenu();
            updateCartDisplay();
            initializeDatePicker();
        } else {
            showLoginPage();
        }
    } catch (error) {
        console.error('Session check error:', error);
        showLoginPage();
    }
}

function saveSession() {
    try {
        if (currentUser) {
            sessionStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
            sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
        }
    } catch (error) {
        console.error('Session save error:', error);
    }
}

function clearSession() {
    try {
        sessionStorage.removeItem(SESSION_KEY);
        sessionStorage.removeItem(CART_KEY);
    } catch (error) {
        console.error('Session clear error:', error);
    }
}

function setupEventListeners() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection(e.target.dataset.section);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Category filters
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            filterByCategory(e.target.dataset.category);
        });
    });
    
    // Cart functionality
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCartModal();
        });
    }
    
    // Modal event listeners
    setupModalEventListeners();
    
    // Reservation form
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', handleReservation);
    }
    
    const newReservationBtn = document.getElementById('newReservationBtn');
    if (newReservationBtn) {
        newReservationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showNewReservationForm();
        });
    }
    
    // Modal backdrop clicks
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            closeAllModals();
        }
    });
}

function setupModalEventListeners() {
    // Cart modal
    const closeCartBtn = document.getElementById('closeCartModal');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeCartModal();
        });
    }
    
    const clearCartBtn = document.getElementById('clearCart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            clearCart();
        });
    }
    
    const continueShoppingBtn = document.getElementById('continueShopping');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeCartModal();
        });
    }
    
    const proceedBtn = document.getElementById('proceedToCheckout');
    if (proceedBtn) {
        proceedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCheckoutModal();
        });
    }
    
    // Checkout modal
    const closeCheckoutBtn = document.getElementById('closeCheckoutModal');
    if (closeCheckoutBtn) {
        closeCheckoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeCheckoutModal();
        });
    }
    
    const backToCartBtn = document.getElementById('backToCart');
    if (backToCartBtn) {
        backToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            backToCart();
        });
    }
    
    const placeOrderBtn = document.getElementById('placeOrder');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            placeOrder();
        });
    }
    
    // Order confirmation modal
    const closeOrderBtn = document.getElementById('closeOrderModal');
    if (closeOrderBtn) {
        closeOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeOrderModal();
        });
    }
    
    const newOrderBtn = document.getElementById('newOrderBtn');
    if (newOrderBtn) {
        newOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            startNewOrder();
        });
    }
}

// Authentication functions
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Simple authentication (in real app, this would be server-side)
    if (username === 'admin' && password === 'admin123') {
        currentUser = { 
            username, 
            loginTime: new Date().toISOString(),
            sessionId: generateSessionId()
        };
        saveSession();
        showMainApp();
        displayMenu();
        initializeDatePicker();
    } else {
        alert('Invalid credentials! Use username: admin, password: admin123');
    }
}

function handleLogout() {
    currentUser = null;
    cart = [];
    clearSession();
    showLoginPage();
    updateCartDisplay();
    
    // Reset form and navigation state
    resetAppState();
}

function resetAppState() {
    currentCategory = 'all';
    searchTerm = '';
    
    // Clear search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const allCategoryBtn = document.querySelector('[data-category="all"]');
    if (allCategoryBtn) {
        allCategoryBtn.classList.add('active');
    }
    
    // Close all modals
    closeAllModals();
}

function showLoginPage() {
    const loginPage = document.getElementById('loginPage');
    const mainApp = document.getElementById('mainApp');
    
    if (loginPage) loginPage.classList.remove('hidden');
    if (mainApp) mainApp.classList.add('hidden');
    
    // Clear form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.reset();
    }
}

function showMainApp() {
    const loginPage = document.getElementById('loginPage');
    const mainApp = document.getElementById('mainApp');
    
    if (loginPage) loginPage.classList.add('hidden');
    if (mainApp) mainApp.classList.remove('hidden');
}

function initializeDatePicker() {
    const dateInput = document.getElementById('reservationDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }
}

// Navigation functions
function navigateToSection(section) {
    if (!section) return;
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`[data-section="${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Show section
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    const targetSection = document.getElementById(`${section}Section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Menu functions
function displayMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    const filteredItems = getFilteredItems();
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<div class="no-results"><p>No items found matching your search criteria.</p></div>';
        return;
    }
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">
            <div class="menu-item-content">
                <span class="menu-item-category ${item.category}">${getCategoryLabel(item.category)}</span>
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">₹${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <button class="btn btn--primary add-to-cart-btn" onclick="addToCart(${item.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(category) {
    const labels = {
        'veg': '🥗 Vegetarian',
        'non-veg': '🍖 Non-Vegetarian',
        'breads': '🫓 Indian Breads',
        'desserts': '🍮 Desserts',
        'mocktails': '🥤 Mocktails',
        'combos': '🍽️ Food Combos'
    };
    return labels[category] || category;
}

function getFilteredItems() {
    let items = allMenuItems;
    
    // Filter by category
    if (currentCategory !== 'all') {
        items = items.filter(item => item.category === currentCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    return items;
}

function handleSearch(e) {
    searchTerm = e.target.value;
    displayMenu();
}

function filterByCategory(category) {
    if (!category) return;
    
    currentCategory = category;
    
    // Update category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    displayMenu();
}

// Cart functions
function addToCart(itemId) {
    const item = allMenuItems.find(item => item.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCartDisplay();
    saveSession();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    displayCartItems();
    saveSession();
}

function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartDisplay();
        displayCartItems();
        saveSession();
    }
}

function clearCart() {
    cart = [];
    updateCartDisplay();
    displayCartItems();
    saveSession();
}

function updateCartDisplay() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const cartCountEl = document.getElementById('cartCount');
    const cartTotalEl = document.getElementById('cartTotal');
    
    if (cartCountEl) cartCountEl.textContent = cartCount;
    if (cartTotalEl) cartTotalEl.textContent = cartTotal.toFixed(2);
}

function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.remove('hidden');
        displayCartItems();
    }
}

function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.add('hidden');
    }
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    
    if (!cartItemsContainer || !cartEmpty) return;
    
    if (cart.length === 0) {
        cartItemsContainer.classList.add('hidden');
        cartEmpty.classList.remove('hidden');
        updateCartSummary();
        return;
    }
    
    cartItemsContainer.classList.remove('hidden');
    cartEmpty.classList.add('hidden');
    
    // Group items by category for better organization
    const groupedCart = groupCartByCategory();
    
    cartItemsContainer.innerHTML = Object.entries(groupedCart).map(([category, items]) => `
        <div class="cart-category-group">
            <h4 class="cart-category-title">${getCategoryLabel(category)}</h4>
            ${items.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price} each</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
    
    updateCartSummary();
}

function groupCartByCategory() {
    const grouped = {};
    cart.forEach(item => {
        if (!grouped[item.category]) {
            grouped[item.category] = [];
        }
        grouped[item.category].push(item);
    });
    return grouped;
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10; // 10% tax
    const total = subtotal + tax;
    
    const cartSubtotalEl = document.getElementById('cartSubtotal');
    const cartTaxEl = document.getElementById('cartTax');
    const cartFinalTotalEl = document.getElementById('cartFinalTotal');
    const checkoutFinalTotalEl = document.getElementById('checkoutFinalTotal');
    
    if (cartSubtotalEl) cartSubtotalEl.textContent = subtotal.toFixed(2);
    if (cartTaxEl) cartTaxEl.textContent = tax.toFixed(2);
    if (cartFinalTotalEl) cartFinalTotalEl.textContent = total.toFixed(2);
    if (checkoutFinalTotalEl) checkoutFinalTotalEl.textContent = total.toFixed(2);
}

// Checkout functions
function openCheckoutModal() {
    if (cart.length === 0) return;
    
    closeCartModal();
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.classList.remove('hidden');
        displayCheckoutItems();
    }
}

function closeCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.classList.add('hidden');
    }
}

function backToCart() {
    closeCheckoutModal();
    openCartModal();
}

function displayCheckoutItems() {
    const checkoutItemsContainer = document.getElementById('checkoutItems');
    if (!checkoutItemsContainer) return;
    
    const groupedCart = groupCartByCategory();
    
    checkoutItemsContainer.innerHTML = Object.entries(groupedCart).map(([category, items]) => `
        <div class="checkout-category-group">
            <h5>${getCategoryLabel(category)}</h5>
            ${items.map(item => `
                <div class="checkout-item">
                    <span>${item.name} × ${item.quantity}</span>
                    <span>₹${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('')}
        </div>
    `).join('');
    
    updateCartSummary();
}

function placeOrder() {
    if (cart.length === 0) return;
    
    const paymentMethodEl = document.querySelector('input[name="payment"]:checked');
    const paymentMethod = paymentMethodEl ? paymentMethodEl.value : 'credit';
    const orderId = generateOrderId();
    
    // Store order details
    const orderDetails = {
        id: orderId,
        items: [...cart],
        subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        tax: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.10,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.10,
        paymentMethod: paymentMethod,
        timestamp: new Date().toISOString()
    };
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    saveSession();
    
    // Show order confirmation
    closeCheckoutModal();
    showOrderConfirmation(orderDetails);
}

function showOrderConfirmation(orderDetails) {
    const orderIdEl = document.getElementById('orderId');
    if (orderIdEl) {
        orderIdEl.textContent = orderDetails.id;
    }
    
    const orderSummaryContainer = document.getElementById('orderSummaryFinal');
    if (orderSummaryContainer) {
        orderSummaryContainer.innerHTML = `
            <div class="order-summary-item">
                <span><strong>Order ID:</strong></span>
                <span>${orderDetails.id}</span>
            </div>
            <div class="order-summary-item">
                <span><strong>Payment Method:</strong></span>
                <span>${formatPaymentMethod(orderDetails.paymentMethod)}</span>
            </div>
            <div class="order-summary-item">
                <span><strong>Subtotal:</strong></span>
                <span>₹${orderDetails.subtotal.toFixed(2)}</span>
            </div>
            <div class="order-summary-item">
                <span><strong>Tax (10%):</strong></span>
                <span>₹${orderDetails.tax.toFixed(2)}</span>
            </div>
            <div class="order-summary-item">
                <span><strong>Total:</strong></span>
                <span><strong>₹${orderDetails.total.toFixed(2)}</strong></span>
            </div>
        `;
    }
    
    const orderModal = document.getElementById('orderConfirmationModal');
    if (orderModal) {
        orderModal.classList.remove('hidden');
    }
}

function closeOrderModal() {
    const orderModal = document.getElementById('orderConfirmationModal');
    if (orderModal) {
        orderModal.classList.add('hidden');
    }
}

function startNewOrder() {
    closeOrderModal();
    navigateToSection('menu');
}

function generateOrderId() {
    return 'ORD' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 100);
}

function generateSessionId() {
    return 'SES' + Date.now().toString() + Math.floor(Math.random() * 10000);
}

function formatPaymentMethod(method) {
    const methods = {
        'credit': '💳 Credit Card',
        'debit': '💳 Debit Card',
        'upi': '📱 UPI Payment',
        'cash': '💵 Cash on Delivery'
    };
    return methods[method] || method;
}

// Reservation functions
function handleReservation(e) {
    e.preventDefault();
    
    const reservationData = {
        name: document.getElementById('customerName').value.trim(),
        email: document.getElementById('customerEmail').value.trim(),
        phone: document.getElementById('customerPhone').value.trim(),
        date: document.getElementById('reservationDate').value,
        time: document.getElementById('reservationTime').value,
        guests: document.getElementById('guestCount').value,
        specialRequests: document.getElementById('specialRequests').value.trim(),
        confirmationId: generateReservationId()
    };
    
    // Validate form
    if (!validateReservationForm(reservationData)) return;
    
    // Show confirmation
    showReservationConfirmation(reservationData);
}

function validateReservationForm(data) {
    if (!data.name || !data.email || !data.phone || !data.date || !data.time || !data.guests) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }
    
    // Date validation
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        alert('Please select a future date for your reservation.');
        return false;
    }
    
    return true;
}

function showReservationConfirmation(reservationData) {
    const reservationForm = document.getElementById('reservationForm');
    const reservationConfirmation = document.getElementById('reservationConfirmation');
    
    if (reservationForm) reservationForm.classList.add('hidden');
    if (reservationConfirmation) reservationConfirmation.classList.remove('hidden');
    
    const detailsContainer = document.getElementById('reservationDetails');
    if (detailsContainer) {
        detailsContainer.innerHTML = `
            <div class="reservation-detail">
                <span><strong>Confirmation ID:</strong></span>
                <span>${reservationData.confirmationId}</span>
            </div>
            <div class="reservation-detail">
                <span><strong>Name:</strong></span>
                <span>${reservationData.name}</span>
            </div>
            <div class="reservation-detail">
                <span><strong>Email:</strong></span>
                <span>${reservationData.email}</span>
            </div>
            <div class="reservation-detail">
                <span><strong>Phone:</strong></span>
                <span>${reservationData.phone}</span>
            </div>
            <div class="reservation-detail">
                <span><strong>Date:</strong></span>
                <span>${formatDate(reservationData.date)}</span>
            </div>
            <div class="reservation-detail">
                <span><strong>Time:</strong></span>
                <span>${reservationData.time}</span>
            </div>
            <div class="reservation-detail">
                <span><strong>Guests:</strong></span>
                <span>${reservationData.guests}</span>
            </div>
            ${reservationData.specialRequests ? `
            <div class="reservation-detail">
                <span><strong>Special Requests:</strong></span>
                <span>${reservationData.specialRequests}</span>
            </div>
            ` : ''}
        `;
    }
}

function showNewReservationForm() {
    const reservationConfirmation = document.getElementById('reservationConfirmation');
    const reservationForm = document.getElementById('reservationForm');
    
    if (reservationConfirmation) reservationConfirmation.classList.add('hidden');
    if (reservationForm) {
        reservationForm.classList.remove('hidden');
        reservationForm.reset();
    }
    
    // Set minimum date to today
    initializeDatePicker();
}

function generateReservationId() {
    return 'RES' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 100);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Utility functions
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
    });
}