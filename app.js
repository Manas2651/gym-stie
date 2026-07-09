// Pulse Gym E-commerce Website Logic

// Product Dataset
const products = [
    {
        id: 1,
        name: "Apex Whey Protein",
        category: "supplements",
        price: 59.99,
        rating: 4.9,
        reviews: 218,
        badge: "Best Seller",
        description: "Premium cold-filtered whey protein isolate. 25g protein per scoop.",
        // Custom SVG drawing a Protein Tub
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="30" width="50" height="55" rx="8" fill="url(#productGradient)" stroke="#6366f1" stroke-width="2"/>
            <rect x="30" y="20" width="40" height="10" rx="3" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
            <rect x="35" y="40" width="30" height="25" rx="2" fill="#1e293b" opacity="0.8"/>
            <text x="50" y="52" fill="#a855f7" font-family="'Outfit', sans-serif" font-size="10" font-weight="bold" text-anchor="middle">WHEY</text>
            <text x="50" y="60" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="6" text-anchor="middle">PROTEIN</text>
            <path d="M40 73 L60 73" stroke="#6366f1" stroke-width="2" stroke-linecap="round"/>
        </svg>`
    },
    {
        id: 2,
        name: "Ignite Pre-Workout",
        category: "supplements",
        price: 44.99,
        rating: 4.8,
        reviews: 145,
        badge: "High Stim",
        description: "Explosive energy and laser focus formula. Nitric oxide booster.",
        // Custom SVG drawing a Pre-workout Canister with lightning symbol
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="28" y="32" width="44" height="50" rx="6" fill="url(#productGradient)" stroke="#ff4e50" stroke-width="2"/>
            <rect x="33" y="24" width="34" height="8" rx="2" fill="#0f172a" stroke="#ff4e50" stroke-width="2"/>
            <!-- Lightning bolt logo -->
            <path d="M50 42 L42 55 L49 55 L47 70 L57 53 L50 53 Z" fill="#f9d423" stroke="#ff4e50" stroke-width="1"/>
            <text x="50" y="80" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="7" font-weight="bold" text-anchor="middle">IGNITE</text>
        </svg>`
    },
    {
        id: 3,
        name: "HydroSteel Shaker 700ml",
        category: "accessories",
        price: 24.99,
        rating: 4.7,
        reviews: 96,
        badge: "Insulated",
        description: "Double-wall vacuum insulated stainless steel shaker. Leakproof lid.",
        // Custom SVG drawing a Gym Shaker Bottle
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 25 L65 25 L60 85 L40 85 Z" fill="url(#productGradient)" stroke="#6366f1" stroke-width="2"/>
            <path d="M33 20 L67 20 L65 25 L35 25 Z" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
            <!-- Shaker cap and loop -->
            <rect x="45" y="14" width="10" height="6" rx="1" fill="#6366f1"/>
            <path d="M55 17 C60 17 62 20 62 23" fill="none" stroke="#6366f1" stroke-width="2"/>
            <!-- measurement markings -->
            <line x1="42" y1="35" x2="48" y2="35" stroke="#a855f7" stroke-width="1.5"/>
            <line x1="42" y1="45" x2="52" y2="45" stroke="#a855f7" stroke-width="1.5"/>
            <line x1="42" y1="55" x2="48" y2="55" stroke="#a855f7" stroke-width="1.5"/>
            <line x1="42" y1="65" x2="52" y2="65" stroke="#a855f7" stroke-width="1.5"/>
        </svg>`
    },
    {
        id: 4,
        name: "IronFit Training Tee",
        category: "apparel",
        price: 29.99,
        rating: 4.6,
        reviews: 312,
        badge: "Breathable",
        description: "Ultra-lightweight mesh panels, moisture-wicking technology.",
        // Custom SVG drawing a folded/hanging T-shirt
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20 L40 20 C42 24 58 24 60 20 L70 20 L80 32 L70 38 L68 32 L68 85 L32 85 L32 32 L30 38 L20 32 Z" fill="url(#productGradient)" stroke="#a855f7" stroke-width="2"/>
            <path d="M50 30 L50 85" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3 3"/>
            <!-- Chest logo -->
            <polygon points="46,38 54,38 52,43 48,43" fill="#f8fafc"/>
        </svg>`
    },
    {
        id: 5,
        name: "Alpha Oversized Hoodie",
        category: "apparel",
        price: 54.99,
        rating: 4.9,
        reviews: 180,
        badge: "Premium Heavyweight",
        description: "450GSM organic cotton fleece. Drop shoulder athletic fit.",
        // Custom SVG drawing a hoodie
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 25 C30 15 70 15 70 25 L82 38 L72 44 L70 36 L70 85 L30 85 L30 36 L28 44 L18 38 Z" fill="url(#productGradient)" stroke="#6366f1" stroke-width="2"/>
            <!-- Hood lines -->
            <path d="M36 25 C36 20 64 20 64 25" fill="none" stroke="#0f172a" stroke-width="2"/>
            <!-- Drawstrings -->
            <line x1="45" y1="28" x2="45" y2="40" stroke="#f8fafc" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="55" y1="28" x2="55" y2="43" stroke="#f8fafc" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Kangaroo Pocket -->
            <path d="M38 65 L62 65 L58 80 L42 80 Z" fill="#1e2942" stroke="#6366f1" stroke-width="1.5"/>
        </svg>`
    },
    {
        id: 6,
        name: "UltraGrip Wrist Straps",
        category: "accessories",
        price: 14.99,
        rating: 4.8,
        reviews: 88,
        badge: "Heavy Duty",
        description: "Padded neoprene wrist straps. Double-stitched cotton webbing.",
        // Custom SVG drawing wrist straps
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- Left strap loop -->
            <path d="M25 65 C25 65 30 25 45 35 C60 45 40 85 40 85" fill="none" stroke="url(#productGradient)" stroke-width="8" stroke-linecap="round"/>
            <!-- Right strap loop -->
            <path d="M75 65 C75 65 70 25 55 35 C40 45 60 85 60 85" fill="none" stroke="#6366f1" stroke-width="8" stroke-linecap="round"/>
            <!-- Pad stitching -->
            <path d="M35 30 L40 33" stroke="#a855f7" stroke-width="2"/>
            <path d="M65 30 L60 33" stroke="#a855f7" stroke-width="2"/>
        </svg>`
    },
    {
        id: 7,
        name: "FlexiBand Resistance Set",
        category: "accessories",
        price: 19.99,
        rating: 4.5,
        reviews: 154,
        badge: "5 Levels",
        description: "100% natural latex loops. Tension ratings from 5lbs to 40lbs.",
        // Custom SVG drawing stacked resistance bands
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- Band 1 -->
            <rect x="25" y="30" width="50" height="10" rx="3" fill="#ef4444" stroke="#0f172a" stroke-width="1.5"/>
            <!-- Band 2 -->
            <rect x="25" y="45" width="50" height="10" rx="3" fill="#6366f1" stroke="#0f172a" stroke-width="1.5"/>
            <!-- Band 3 -->
            <rect x="25" y="60" width="50" height="10" rx="3" fill="#10b981" stroke="#0f172a" stroke-width="1.5"/>
            <!-- Details -->
            <circle cx="35" cy="35" r="2" fill="#fff"/>
            <circle cx="35" cy="50" r="2" fill="#fff"/>
            <circle cx="35" cy="65" r="2" fill="#fff"/>
        </svg>`
    },
    {
        id: 8,
        name: "Pace Gym Shorts",
        category: "apparel",
        price: 34.99,
        rating: 4.7,
        reviews: 167,
        badge: "Quick-Dry",
        description: "Lightweight stretch fabrics. Integrated zipper phone pockets.",
        // Custom SVG drawing athletic shorts
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 25 L70 25 L75 65 L55 65 L50 45 L45 65 L25 65 Z" fill="url(#productGradient)" stroke="#6366f1" stroke-width="2"/>
            <rect x="35" y="25" width="30" height="5" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
            <!-- Drawstring node -->
            <line x1="50" y1="28" x2="48" y2="38" stroke="#f8fafc" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="50" y1="28" x2="53" y2="36" stroke="#f8fafc" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`
    },
    {
        id: 9,
        name: "Titan Water Jug 2L",
        category: "accessories",
        price: 18.99,
        rating: 4.6,
        reviews: 204,
        badge: "BPA Free",
        description: "Heavy-duty gallon jug. Easy-carry built-in side grip handle.",
        // Custom SVG drawing water jug
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 32 C35 32 40 25 50 25 C60 25 65 32 65 32 L65 85 L35 85 Z" fill="url(#productGradient)" stroke="#6366f1" stroke-width="2"/>
            <rect x="44" y="16" width="12" height="9" rx="1" fill="#0a0f1d" stroke="#6366f1" stroke-width="2"/>
            <!-- Handle -->
            <path d="M64 40 L74 40 L74 70 L64 70" fill="none" stroke="#6366f1" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Water level details -->
            <path d="M35 60 C40 62 45 58 50 60 C55 62 60 58 65 60" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.6"/>
            <path d="M35 75 C40 77 45 73 50 75 C55 77 60 73 65 75" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.6"/>
        </svg>`
    },
    {
        id: 10,
        name: "BeastMode Lifting Belt",
        category: "accessories",
        price: 49.99,
        rating: 4.9,
        reviews: 194,
        badge: "4-inch Leather",
        description: "Contoured top-grain leather support belt. Solid steel buckle.",
        // Custom SVG drawing lifting belt
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- Curved belt block -->
            <path d="M15 50 Q50 30 85 50 C82 58 75 58 70 56 Q50 40 30 56 C25 58 18 58 15 50 Z" fill="url(#productGradient)" stroke="#6366f1" stroke-width="2"/>
            <!-- Steel Buckle -->
            <rect x="46" y="34" width="8" height="12" rx="1" fill="none" stroke="#f8fafc" stroke-width="2"/>
            <!-- Belt holes representation -->
            <circle cx="28" cy="46" r="1.5" fill="#f8fafc"/>
            <circle cx="34" cy="44" r="1.5" fill="#f8fafc"/>
            <circle cx="66" cy="44" r="1.5" fill="#f8fafc"/>
            <circle cx="72" cy="46" r="1.5" fill="#f8fafc"/>
        </svg>`
    }
];

// Initialize Cart State from LocalStorage
let cart = JSON.parse(localStorage.getItem('pulse_cart')) || [];

// Constants for tax & shipping rules
const TAX_RATE = 0.08; // 8%
const SHIPPING_COST = 4.99;
const FREE_SHIPPING_THRESHOLD = 50.00;

// Helper: Save Cart State
function saveCart() {
    localStorage.setItem('pulse_cart', JSON.stringify(cart));
    updateCartUI();
}

// Helper: Calculate Cart Totals
function getCartTotals() {
    let subtotal = 0;
    cart.forEach(item => {
        const prod = products.find(p => p.id === item.productId);
        if (prod) {
            subtotal += prod.price * item.quantity;
        }
    });
    const shipping = (subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD) ? 0 : SHIPPING_COST;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + shipping + tax;

    return {
        subtotal: subtotal.toFixed(2),
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2),
        count: cart.reduce((acc, curr) => acc + curr.quantity, 0)
    };
}

// ----------------------------------------------------
// PAGE 1: SHOPPING PAGE (index.html) LOGIC
// ----------------------------------------------------
function initShoppingPage() {
    const productsGrid = document.getElementById('productsGrid');
    const searchInput = document.getElementById('searchInput');
    const categoriesContainer = document.getElementById('categoriesContainer');
    const resultsCountSpan = document.getElementById('resultsCount');
    const heroBtn = document.getElementById('heroBtn');

    let activeCategory = 'all';
    let searchQuery = '';

    // Scroll to products
    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            productsGrid.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Render Products function
    function renderProducts() {
        // Filter items
        const filtered = products.filter(prod => {
            const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
            const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 prod.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Set counts
        resultsCountSpan.innerText = filtered.length;

        // Clear and rebuild grid
        productsGrid.innerHTML = '';
        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                    <svg viewBox="0 0 24 24" style="width: 48px; height: 48px; fill: var(--text-muted); opacity: 0.5; margin-bottom: 16px;">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                    <p style="font-size: 16px; font-weight: 600;">No items found matching "${searchQuery}"</p>
                    <p style="font-size: 14px; margin-top: 4px;">Try searching for a different keyword or category.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-container">
                    ${prod.svg}
                    ${prod.badge ? `<span class="product-badge">${prod.badge}</span>` : ''}
                </div>
                <div class="product-info">
                    <span class="product-category">${prod.category}</span>
                    <h3 class="product-title">${prod.name}</h3>
                    <div class="product-rating">
                        <!-- Star SVG -->
                        <svg viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <span>${prod.rating} (${prod.reviews} reviews)</span>
                    </div>
                    <div class="product-footer">
                        <span class="product-price">$${prod.price.toFixed(2)}</span>
                        <button class="add-cart-btn" data-id="${prod.id}" aria-label="Add ${prod.name} to Cart">
                            <svg viewBox="0 0 24 24">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(card);
        });

        // Attach event listeners to newly rendered add buttons
        document.querySelectorAll('.add-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const prodId = parseInt(btn.getAttribute('data-id'));
                addToCart(prodId);
                // Mini animation trigger
                btn.style.transform = 'scale(0.85)';
                setTimeout(() => btn.style.transform = '', 150);
            });
        });
    }

    // Category button handling
    if (categoriesContainer) {
        categoriesContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.category-btn');
            if (!btn) return;

            // Remove active from all and set active on this
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            activeCategory = btn.getAttribute('data-category');
            renderProducts();
        });
    }

    // Search input handling
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderProducts();
        });
    }

    // Run Initial Catalog Render
    renderProducts();
}

// Cart Drawer Interaction & Logic
function initCartDrawer() {
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const cartCloseBtn = document.getElementById('cartCloseBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartPanel = document.getElementById('cartPanel');
    const checkoutBtn = document.getElementById('cartCheckoutBtn');

    if (!cartToggleBtn || !cartOverlay) return;

    // Toggle drawer open
    cartToggleBtn.addEventListener('click', () => {
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    });

    // Close drawer
    const closeDrawer = () => {
        cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    cartCloseBtn.addEventListener('click', closeDrawer);
    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) closeDrawer();
    });

    // Handle checkout button routing
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty. Add items before checking out!');
                return;
            }
            // Navigate to payment page
            window.location.href = 'payment.html';
        });
    }
}

// Function to add item to cart
function addToCart(productId) {
    const existing = cart.find(item => item.productId === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ productId, quantity: 1 });
    }
    saveCart();
    // Open cart drawer on adding item (creates immediate feedback)
    document.getElementById('cartOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Function to adjust item quantity
function adjustQuantity(productId, delta) {
    const item = cart.find(i => i.productId === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.productId !== productId);
    }
    saveCart();
}

// Function to remove item completely
function removeFromCart(productId) {
    cart = cart.filter(i => i.productId !== productId);
    saveCart();
}

// Update UI Badge Count & Drawer Items
function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotalPrice = document.getElementById('cartTotalPrice');

    const totals = getCartTotals();

    // Badge styling and updating
    if (cartBadge) {
        cartBadge.innerText = totals.count;
        if (totals.count > 0) {
            cartBadge.classList.add('has-items');
        } else {
            cartBadge.classList.remove('has-items');
        }
    }

    if (cartTotalPrice) {
        cartTotalPrice.innerText = `$${totals.subtotal}`;
    }

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty-state">
                <svg viewBox="0 0 24 24">
                    <path d="M19 13H5v-2h14v2z"/>
                </svg>
                <div>
                    <p style="font-weight:600; font-size: 16px; margin-bottom: 4px;">Your Cart is Empty</p>
                    <p style="font-size: 13px;">Add products from our catalog to get started.</p>
                </div>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const prod = products.find(p => p.id === item.productId);
        if (!prod) return;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <div class="cart-item-img">
                ${prod.svg}
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${prod.name}</div>
                <div class="cart-item-price">$${(prod.price * item.quantity).toFixed(2)} <span style="font-size: 11px; font-weight: normal; color: var(--text-muted);">($${prod.price.toFixed(2)} ea)</span></div>
                <div class="cart-item-qty">
                    <button class="qty-btn dec-btn" data-id="${prod.id}">-</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn inc-btn" data-id="${prod.id}">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-id="${prod.id}" aria-label="Remove item">
                <svg viewBox="0 0 24 24">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
            </button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    // Attach cart item quantity event listeners
    cartItemsContainer.querySelectorAll('.dec-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            adjustQuantity(parseInt(btn.getAttribute('data-id')), -1);
        });
    });

    cartItemsContainer.querySelectorAll('.inc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            adjustQuantity(parseInt(btn.getAttribute('data-id')), 1);
        });
    });

    cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            removeFromCart(parseInt(btn.getAttribute('data-id')));
        });
    });
}

// ----------------------------------------------------
// PAGE 2: SECURE CHECKOUT PAGE (payment.html) LOGIC
// ----------------------------------------------------
function initPaymentPage() {
    const summaryItems = document.getElementById('summaryItems');
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryShipping = document.getElementById('summaryShipping');
    const summaryTax = document.getElementById('summaryTax');
    const summaryTotal = document.getElementById('summaryTotal');

    const paymentForm = document.getElementById('paymentForm');
    const cardName = document.getElementById('cardName');
    const cardNumber = document.getElementById('cardNumber');
    const cardExpiry = document.getElementById('cardExpiry');
    const cardCvv = document.getElementById('cardCvv');

    // Live Mock Card elements
    const mockCardName = document.getElementById('mockCardName');
    const mockCardNumber = document.getElementById('mockCardNumber');
    const mockCardExpiry = document.getElementById('mockCardExpiry');

    // Simulator Switch Buttons
    const simSuccessBtn = document.getElementById('simSuccessBtn');
    const simFailedBtn = document.getElementById('simFailedBtn');
    let targetStatus = 'success'; // default target outcome

    if (simSuccessBtn && simFailedBtn) {
        simSuccessBtn.addEventListener('click', () => {
            simSuccessBtn.classList.add('active');
            simFailedBtn.classList.remove('active');
            targetStatus = 'success';
        });

        simFailedBtn.addEventListener('click', () => {
            simFailedBtn.classList.add('active');
            simSuccessBtn.classList.remove('active');
            targetStatus = 'failed';
        });
    }

    // Redirect to index if cart empty
    if (cart.length === 0) {
        alert('No items in checkout. Redirecting to catalog.');
        window.location.href = 'index.html';
        return;
    }

    // Render Checkout Order Summary Panel
    function renderOrderSummary() {
        const totals = getCartTotals();
        
        if (summarySubtotal) summarySubtotal.innerText = `$${totals.subtotal}`;
        if (summaryShipping) summaryShipping.innerText = totals.shipping === "0.00" ? "FREE" : `$${totals.shipping}`;
        if (summaryTax) summaryTax.innerText = `$${totals.tax}`;
        if (summaryTotal) summaryTotal.innerText = `$${totals.total}`;

        if (!summaryItems) return;

        summaryItems.innerHTML = '';
        cart.forEach(item => {
            const prod = products.find(p => p.id === item.productId);
            if (!prod) return;

            const summaryCard = document.createElement('div');
            summaryCard.className = 'summary-item-card';
            summaryCard.innerHTML = `
                <div class="summary-item-left">
                    <span class="summary-item-qty">${item.quantity}x</span>
                    <span>${prod.name}</span>
                </div>
                <span style="font-weight: 600;">$${(prod.price * item.quantity).toFixed(2)}</span>
            `;
            summaryItems.appendChild(summaryCard);
        });
    }

    // Input Formatters & Live Mock Card Updates
    if (cardName) {
        cardName.addEventListener('input', (e) => {
            const val = e.target.value.toUpperCase();
            mockCardName.innerText = val === '' ? 'YOUR NAME' : val;
        });
    }

    if (cardNumber) {
        cardNumber.addEventListener('input', (e) => {
            // Remove non-digits and group in blocks of 4
            let val = e.target.value.replace(/\D/g, '');
            let formatted = val.match(/.{1,4}/g);
            if (formatted) {
                e.target.value = formatted.join(' ');
            } else {
                e.target.value = '';
            }
            
            // Update mockup card
            const cleanVal = e.target.value;
            mockCardNumber.innerText = cleanVal === '' ? '•••• •••• •••• ••••' : cleanVal;
        });
    }

    if (cardExpiry) {
        cardExpiry.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length > 2) {
                e.target.value = val.slice(0, 2) + '/' + val.slice(2, 4);
            } else {
                e.target.value = val;
            }

            const cleanVal = e.target.value;
            mockCardExpiry.innerText = cleanVal === '' ? 'MM/YY' : cleanVal;
        });
    }

    // Form Submission & Bank Network Simulation spinner
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Card inputs basic checks
            if (cardNumber.value.replace(/\s/g, '').length < 16) {
                alert('Please enter a valid 16-digit card number.');
                return;
            }
            if (cardExpiry.value.length < 5) {
                alert('Please enter a valid expiry date (MM/YY).');
                return;
            }
            if (cardCvv.value.length < 3) {
                alert('Please enter a valid 3-digit CVV.');
                return;
            }

            const totals = getCartTotals();
            const loaderOverlay = document.getElementById('loaderOverlay');
            const loaderText = document.getElementById('loaderText');

            if (loaderOverlay) loaderOverlay.classList.add('active');

            // Set up processing message cycles
            const steps = [
                "Securing network gateway connection...",
                "Validating sandbox account credentials...",
                "Acquiring authorization block from issuing network...",
                "Finalizing ledger transaction entries..."
            ];

            let stepIdx = 0;
            const textInterval = setInterval(() => {
                if (stepIdx < steps.length) {
                    if (loaderText) loaderText.innerText = steps[stepIdx];
                    stepIdx++;
                }
            }, 600);

            // Execute redirect after mock loading completes (2.4s total)
            setTimeout(() => {
                clearInterval(textInterval);
                
                // Store results of sandbox transaction
                const transactionResult = {
                    cardholderName: cardName.value,
                    cardLastFour: cardNumber.value.slice(-4),
                    amount: totals.total,
                    status: targetStatus,
                    timestamp: new Date().toISOString()
                };
                localStorage.setItem('pulse_latest_txn', JSON.stringify(transactionResult));

                // Clear cart if successful checkout
                if (targetStatus === 'success') {
                    // We clear local cart array, but keep the pulse_cart storage key until status page clears it,
                    // so status page can display what was bought, or we clear it directly and read totals from the txn log.
                    // Let's clear the pulse_cart now so they don't see items in the cart if they revisit the catalog.
                    localStorage.removeItem('pulse_cart');
                }

                // Redirect
                window.location.href = `status.html?status=${targetStatus}`;
            }, 2600);
        });
    }

    renderOrderSummary();
}

// ----------------------------------------------------
// PAGE 3: TRANSACTION STATUS PAGE (status.html) LOGIC
// ----------------------------------------------------
function initStatusPage() {
    const statusCard = document.getElementById('statusCard');
    const statusIcon = document.getElementById('statusIcon');
    const statusTitle = document.getElementById('statusTitle');
    const statusMessage = document.getElementById('statusMessage');
    const receiptDetails = document.getElementById('receiptDetails');
    
    // Receipt nodes
    const receiptTxnId = document.getElementById('receiptTxnId');
    const receiptDate = document.getElementById('receiptDate');
    const receiptCard = document.getElementById('receiptCard');
    const receiptTotal = document.getElementById('receiptTotal');
    const statusActions = document.getElementById('statusActions');

    // Parse URL params
    const urlParams = new URLSearchParams(window.location.search);
    const txnStatus = urlParams.get('status') || 'failed';

    // Read stored transaction receipt
    const storedTxn = JSON.parse(localStorage.getItem('pulse_latest_txn'));

    if (!statusCard) return;

    // Reset card class
    statusCard.classList.remove('success', 'failed');

    if (txnStatus === 'success') {
        statusCard.classList.add('success');
        
        // Success Animated Checkmark
        statusIcon.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" stroke-dasharray="30" stroke-dashoffset="0"/>
            </svg>
        `;

        statusTitle.innerHTML = `PAYMENT <span class="gradient-text">ACCEPTED</span>`;
        statusMessage.innerText = "Thank you for training with PULSE. Your mock sandbox transaction completed successfully. Order shipping details will be sent to your mockup contact email.";

        // Populate dynamic receipt
        if (storedTxn) {
            const randTxn = "TXN-PULSE-" + Math.floor(10000000 + Math.random() * 90000000);
            const dateStr = new Date(storedTxn.timestamp).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
            });

            if (receiptTxnId) receiptTxnId.innerText = randTxn;
            if (receiptDate) receiptDate.innerText = dateStr;
            if (receiptCard) receiptCard.innerText = `Visa ending in ${storedTxn.cardLastFour}`;
            if (receiptTotal) receiptTotal.innerText = `$${storedTxn.amount}`;
            
            if (receiptDetails) receiptDetails.style.display = 'flex';
        }

        // Success buttons
        if (statusActions) {
            statusActions.innerHTML = `
                <a href="index.html" class="btn" style="width: 100%; height: 50px;">CONTINUE SHOPPING</a>
            `;
        }

    } else {
        // Failed Status State
        statusCard.classList.add('failed');

        // Failed Cross badge
        statusIcon.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
        `;

        statusTitle.innerHTML = `TRANSACTION <span class="gradient-text-alt">DECLINED</span>`;
        statusMessage.innerText = "The sandbox payment processor returned error code [PULSE-ERR-502]. Reason: Card issuer reported insufficient credit limit or credentials mismatch in sandbox simulator settings.";

        // Populate failure details if available
        if (storedTxn) {
            const randTxn = "TXN-FAIL-" + Math.floor(10000000 + Math.random() * 90000000);
            const dateStr = new Date(storedTxn.timestamp).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
            });

            if (receiptTxnId) receiptTxnId.innerText = randTxn;
            if (receiptDate) receiptDate.innerText = dateStr;
            if (receiptCard) receiptCard.innerText = `Visa ending in ${storedTxn.cardLastFour}`;
            if (receiptTotal) receiptTotal.innerText = `$${storedTxn.amount}`;
            
            if (receiptDetails) receiptDetails.style.display = 'flex';
        }

        // Action controls for failure state
        if (statusActions) {
            statusActions.innerHTML = `
                <a href="payment.html" class="btn btn-secondary" style="flex: 1; height: 50px;">TRY AGAIN</a>
                <a href="index.html" class="btn" style="flex: 1; height: 50px;">BACK TO CATALOG</a>
            `;
        }
    }
}

// ----------------------------------------------------
// ROUTING ENTRY POINT
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Initial global run
    updateCartUI();

    // Check if on Shopping page
    if (document.getElementById('productsGrid')) {
        initShoppingPage();
        initCartDrawer();
    }

    // Check if on Checkout/Payment page
    if (document.getElementById('paymentForm')) {
        initPaymentPage();
    }

    // Check if on Status page
    if (document.getElementById('statusCard')) {
        initStatusPage();
    }
});
