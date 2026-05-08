// Array completo de productos
const products = [
    // A LA BRASA
    {
        id: 1,
        name: "Pollo entero",
        category: "a-la-brasa",
        price: 58.00,
        description: "Papas clásicas + ensalada + cremas",
        image: "./images/menu/pollo-entero.jpg",
        available: true
    },
    {
        id: 2,
        name: "1/2 Pollo",
        category: "a-la-brasa",
        price: 32.00,
        description: "Papas clásicas + ensalada + cremas",
        image: "./images/menu/medio-pollo.jpg",
        available: true
    },
    {
        id: 3,
        name: "1/4 Pollo",
        category: "a-la-brasa",
        price: 18.00,
        description: "Papas clásicas + ensalada + cremas",
        image: "./images/menu/brasa-cuarto.jpg",
        available: true
    },
    // MOSTROS
    {
        id: 10,
        name: "Mostrazo 1/4 Pollo",
        category: "mostros",
        price: 20.00,
        description: "+ papas + arroz chaufa + caldito + ensalada + cremas + vaso de chicha",
        image: "./images/menu/mostrazo.jpg",
        available: true
    },
    {
        id: 11,
        name: "Mostrito 1/8 Pollo",
        category: "mostros",
        price: 13.00,
        description: "+ papas + arroz chaufa + caldito + ensalada + cremas + vaso de chicha",
        image: "./images/menu/mostrazo.jpg",
        available: true
    },
    {
        id: 12,
        name: "Chaufa con Pollo 1/4",
        category: "mostros",
        price: 16.00,
        description: "+ arroz chaufa + caldito + ensalada + cremas + vaso de chicha",
        image: "./images/menu/mostrito.jpg",
        available: true
    },
    {
        id: 13,
        name: "Chaufa con Pollo 1/8",
        category: "mostros",
        price: 13.00,
        description: "+ arroz chaufa + caldito + ensalada + cremas + vaso de chicha",
        image: "./images/menu/mostrito.jpg",
        available: true
    },
    // SALCHIPAPAS
    {
        id: 20,
        name: "Salchipapa clásica",
        category: "salchipapas",
        price: 8.00,
        description: "Salchipapa clásica",
        image: "./images/menu/salchipapa.jpg",
        available: true
    },
    {
        id: 21,
        name: "Salchipapa a lo pobre",
        category: "salchipapas",
        price: 10.00,
        description: "Salchipapa a lo pobre",
        image: "./images/menu/salchipapa-pobre.jpg",
        available: true
    },
    {
        id: 22,
        name: "Salchichaufa a lo pobre",
        category: "salchipapas",
        price: 13.00,
        description: "Salchichaufa a lo pobre",
        image: "./images/menu/salchichaufa-pobre.jpg",
        available: true
    },
    {
        id: 23,
        name: "Salchibrasa + 1/4 pollo",
        category: "salchipapas",
        price: 18.00,
        description: "Salchibrasa con 1/4 pollo",
        image: "./images/menu/salchibrasa.jpg",
        available: true
    },
    {
        id: 24,
        name: "Salchibrasa + 1/8 pollo",
        category: "salchipapas",
        price: 13.00,
        description: "Salchibrasa con 1/8 pollo",
        image: "./images/menu/salchibrasa.jpg",
        available: true
    },
    // MEGA COMBOS
    {
        id: 30,
        name: "Mega Combo 1",
        category: "mega-combos",
        price: 82.00,
        description: "+ 1 Pollo + 1/2 pollo solo + papa amarilla familiar + ensalada + cremas + gaseosa 1.5Lt Inka Cola",
        image: "./images/menu/mega-combo.jpg",
        available: true
    },
    {
        id: 31,
        name: "Mega Combo 2",
        category: "mega-combos",
        price: 74.00,
        description: "+ 1 Pollo + 1 salchibrasa + papas amarilla + ensalada + cremas + gaseosa 1.5Lt Pepsi",
        image: "./images/menu/mega-combo.jpg",
        available: true
    },
    {
        id: 32,
        name: "Super Monstruo Familiar",
        category: "mega-combos",
        price: 75.00,
        description: "+ 1 Pollo entero + 1/4 pollo gratis solo + chaufa + papas amarilla + ensalada + cremas + gaseosa 1.5Lt Inka Cola",
        image: "./images/menu/super-monstruo-familiar.jpg",
        available: true
    },
    {
        id: 33,
        name: "Para 2 personas",
        category: "mega-combos",
        price: 38.00,
        description: "+ 1/2 pollo + chaufa + papas amarilla + ensalada + 1/2 jarra chicha o maracuyá",
        image: "./images/menu/para-2-personas.jpg",
        available: true
    },
    // A LO ARLETH
    {
        id: 40,
        name: "Brasa Arleth",
        category: "a-lo-arleth",
        price: 21.00,
        description: "+ 1/4 pollo + arroz blanco + huevo y plátano + papas amarilla + ensalada + cremas + gaseosa personal 500ml Inka Cola",
        image: "./images/menu/brasa-arleth.jpg",
        available: true
    },
    {
        id: 41,
        name: "Pollo Arleth",
        category: "a-lo-arleth",
        price: 22.00,
        description: "+ 1/4 pollo + arroz chaufa + huevo y plátano + papas amarilla + ensalada + cremas + gaseosa personal 500ml Inka Cola",
        image: "./images/menu/pollo-arleth.jpg",
        available: true
    },
    {
        id: 42,
        name: "Salchi Alitas Arleth",
        category: "a-lo-arleth",
        price: 15.00,
        description: "+ papas amarillas + salchicha + 3 alitas + cremas + vaso de chicha",
        image: "./images/menu/salchi-alitas-arleth.jpg",
        available: true
    },
    // CHAUFAS
    {
        id: 50,
        name: "Chaufa familiar con pollo",
        category: "chaufas",
        price: 18.00,
        description: "Chaufa familiar con pollo",
        image: "./images/menu/chaufa-familiar-pollo.jpg",
        available: true
    },
    {
        id: 51,
        name: "Chaufa de pollo",
        category: "chaufas",
        price: 11.00,
        description: "Chaufa de pollo",
        image: "./images/menu/chaufa-pollo.jpg",
        available: true
    },
    {
        id: 52,
        name: "Chaufa de carne",
        category: "chaufas",
        price: 15.00,
        description: "Chaufa de carne",
        image: "./images/menu/chaufa-carne.jpg",
        available: true
    },
    {
        id: 53,
        name: "Chaufa de chancho",
        category: "chaufas",
        price: 14.00,
        description: "Chaufa de chancho",
        image: "./images/menu/chaufa-chancho.jpg",
        available: true
    },
    {
        id: 54,
        name: "Chaufa con lomo",
        category: "chaufas",
        price: 20.00,
        description: "Chaufa con lomo",
        image: "./images/menu/chaufa-lomo.jpg",
        available: true
    },
    {
        id: 55,
        name: "Chaufa con tortilla",
        category: "chaufas",
        price: 17.00,
        description: "Chaufa con tortilla",
        image: "./images/menu/chaufa-tortilla.jpg",
        available: true
    },
    {
        id: 56,
        name: "Chaufa especial",
        category: "chaufas",
        price: 20.00,
        description: "Chaufa especial",
        image: "./images/menu/chaufa-especial.jpg",
        available: true
    },
    {
        id: 57,
        name: "Chaufa con langostinos",
        category: "chaufas",
        price: 20.00,
        description: "Chaufa con langostinos",
        image: "./images/menu/chaufa-langostinos.jpg",
        available: true
    },
    // AEROPUERTO
    {
        id: 60,
        name: "Aeropuerto con Pollo",
        category: "aeropuerto",
        price: 13.00,
        description: "Aeropuerto con Pollo",
        image: "./images/menu/aeropuerto-pollo.jpg",
        available: true
    },
    {
        id: 61,
        name: "Aeropuerto con Carne",
        category: "aeropuerto",
        price: 16.00,
        description: "Aeropuerto con Carne",
        image: "./images/menu/aeropuerto-carne.jpg",
        available: true
    },
    {
        id: 62,
        name: "Aeropuerto con Chancho",
        category: "aeropuerto",
        price: 16.00,
        description: "Aeropuerto con Chancho",
        image: "./images/menu/aeropuerto-chancho.jpg",
        available: true
    },
    {
        id: 63,
        name: "Aeropuerto con Langostino",
        category: "aeropuerto",
        price: 22.00,
        description: "Aeropuerto con Langostino",
        image: "./images/menu/aeropuerto-langostino.jpg",
        available: true
    },
    {
        id: 64,
        name: "Aeropuerto Especial",
        category: "aeropuerto",
        price: 22.00,
        description: "Aeropuerto Especial",
        image: "./images/menu/aeropuerto-especial.jpg",
        available: true
    },
    /*
    // SALVAJE
    {
        id: 70,
        name: "Salvaje de Pollo",
        category: "salvaje",
        price: 13.00,
        description: "Salvaje de Pollo",
        image: "./images/menu/salvaje-pollo.jpg",
        available: true
    },
    {
        id: 71,
        name: "Salvaje de Carne",
        category: "salvaje",
        price: 16.00,
        description: "Salvaje de Carne",
        image: "./images/menu/salvaje-carne.jpg",
        available: true
    },
    {
        id: 72,
        name: "Salvaje de Chancho",
        category: "salvaje",
        price: 16.00,
        description: "Salvaje de Chancho",
        image: "./images/menu/salvaje-chancho.jpg",
        available: true
    },
    {
        id: 73,
        name: "Salvaje de Langostino",
        category: "salvaje",
        price: 22.00,
        description: "Salvaje de Langostino",
        image: "./images/menu/salvaje-langostino.jpg",
        available: true
    },
    {
        id: 74,
        name: "Salvaje especial",
        category: "salvaje",
        price: 22.00,
        description: "Salvaje especial",
        image: "./images/menu/salvaje-especial.jpg",
        available: true
    },
    */
    // COMBINADO
    {
        id: 80,
        name: "Combinado de Pollo",
        category: "combinado",
        price: 15.00,
        description: "Combinado de Pollo",
        image: "./images/menu/combinado-pollo.jpg",
        available: true
    },
    {
        id: 81,
        name: "Combinado de Chancho",
        category: "combinado",
        price: 18.00,
        description: "Combinado de Chancho",
        image: "./images/menu/combinado-chancho.jpg",
        available: true
    },
    {
        id: 82,
        name: "Combinado de Carne",
        category: "combinado",
        price: 18.00,
        description: "Combinado de Carne",
        image: "./images/menu/combinado-carne.jpg",
        available: true
    },
    {
        id: 83,
        name: "Combinado especial",
        category: "combinado",
        price: 23.00,
        description: "Combinado especial",
        image: "./images/menu/combinado-especial.jpg",
        available: true
    },
    // TALLARIN CHIFA
    {
        id: 90,
        name: "Tallarín con Pollo",
        category: "tallarin-chifa",
        price: 13.00,
        description: "Tallarín con Pollo",
        image: "./images/menu/tallarin-pollo.jpg",
        available: true
    },
    {
        id: 91,
        name: "Tallarín especial",
        category: "tallarin-chifa",
        price: 20.00,
        description: "Tallarín especial",
        image: "./images/menu/tallarin-especial.jpg",
        available: true
    },
    // LOMOS
    {
        id: 100,
        name: "Lomo saltado de carne",
        category: "lomos",
        price: 18.00,
        description: "Lomo saltado de carne",
        image: "./images/menu/lomo-carne.jpg",
        available: true
    },
    {
        id: 101,
        name: "Lomo saltado de pollo",
        category: "lomos",
        price: 16.00,
        description: "Lomo saltado de pollo",
        image: "./images/menu/lomo-pollo.jpg",
        available: true
    },
    {
        id: 102,
        name: "Lomo + chaufa de carne",
        category: "lomos",
        price: 20.00,
        description: "Lomo + chaufa de carne",
        image: "./images/menu/lomo-chaufa-carne.jpg",
        available: true
    },
    {
        id: 103,
        name: "Tallarín saltado de carne",
        category: "lomos",
        price: 18.00,
        description: "Tallarín saltado de carne",
        image: "./images/menu/tallarin-saltado-carne.jpg",
        available: true
    },
    {
        id: 104,
        name: "Tallarín saltado de pollo",
        category: "lomos",
        price: 16.00,
        description: "Tallarín saltado de pollo",
        image: "./images/menu/tallarin-saltado-pollo.jpg",
        available: true
    },
    {
        id: 105,
        name: "Lomo saltado a lo pobre",
        category: "lomos",
        price: 20.00,
        description: "Lomo saltado a lo pobre",
        image: "./images/menu/lomo-pobre.jpg",
        available: true
    },
    {
        id: 106,
        name: "Lomo saltado con chaufa a lo pobre",
        category: "lomos",
        price: 21.00,
        description: "Lomo saltado con chaufa a lo pobre",
        image: "./images/menu/lomo-chaufa-pobre.jpg",
        available: true
    },
    /*
    // SOPAS
    {
        id: 110,
        name: "Caldo solo",
        category: "sopas",
        price: 8.00,
        description: "Caldo solo",
        image: "./images/menu/caldo-solo.jpg",
        available: true
    },
    {
        id: 111,
        name: "Caldo mediano",
        category: "sopas",
        price: 10.00,
        description: "Caldo mediano",
        image: "./images/menu/caldo-mediano.jpg",
        available: true
    },
    {
        id: 112,
        name: "Caldo grande",
        category: "sopas",
        price: 12.00,
        description: "Caldo grande",
        image: "./images/menu/caldo-grande.jpg",
        available: true
    },
    {
        id: 113,
        name: "Sopa wantán",
        category: "sopas",
        price: 10.00,
        description: "Sopa wantán",
        image: "./images/menu/sopa-wantan.jpg",
        available: true
    },
    */
    // GASEOSAS
    {
        id: 120,
        name: "Inka personal 300ml",
        category: "gaseosas",
        price: 3.00,
        description: "Inka personal 300ml",
        image: "./images/menu/inka-300.jpg",
        available: true
    },
    {
        id: 121,
        name: "Inka personal 600ml",
        category: "gaseosas",
        price: 4.00,
        description: "Inka personal 600ml",
        image: "./images/menu/inka-600.jpg",
        available: true
    },
    {
        id: 122,
        name: "Inka cola 1Lt.",
        category: "gaseosas",
        price: 6.00,
        description: "Inka cola 1Lt.",
        image: "./images/menu/gaseosa-inca-1lt.jpg",
        available: true
    },
    {
        id: 123,
        name: "Coca cola 1.5 Lt.",
        category: "gaseosas",
        price: 9.00,
        description: "Coca cola 1.5 Lt.",
        image: "./images/menu/coca-1-5lt.jpg",
        available: true
    },
    {
        id: 124,
        name: "Inka Cola 3Lt.",
        category: "gaseosas",
        price: 13.00,
        description: "Inka Cola 3Lt.",
        image: "./images/menu/gaseosa-inca-3lt.jpg",
        available: true
    },
    {
        id: 125,
        name: "Pepsi 1.5Lt.",
        category: "gaseosas",
        price: 5.00,
        description: "Pepsi 1.5Lt.",
        image: "./images/menu/pepsi-1-5lt.jpg",
        available: true
    },
    // REFRESCOS
    {
        id: 130,
        name: "Chicha Morada 1Lt.",
        category: "refrescos",
        price: 10.00,
        description: "Chicha Morada 1Lt.",
        image: "./images/menu/chicha-morada.jpg",
        available: true
    },
    {
        id: 131,
        name: "Chicha Morada 1/2Lt.",
        category: "refrescos",
        price: 6.00,
        description: "Chicha Morada 1/2Lt.",
        image: "./images/menu/chicha-morada-media.jpg",
        available: true
    },
    {
        id: 132,
        name: "Maracuyá 1Lt.",
        category: "refrescos",
        price: 10.00,
        description: "Maracuyá 1Lt.",
        image: "./images/menu/maracuya.jpg",
        available: true
    },
    {
        id: 133,
        name: "Maracuyá 1/2Lt.",
        category: "refrescos",
        price: 6.00,
        description: "Maracuyá 1/2Lt.",
        image: "./images/menu/maracuya-media.jpg",
        available: true
    },
    // CERVEZAS
    {
        id: 140,
        name: "Corona",
        category: "cervezas",
        price: 10.00,
        description: "Corona",
        image: "./images/menu/corona.jpg",
        available: true
    },
    {
        id: 141,
        name: "Cusqueña Trigo",
        category: "cervezas",
        price: 10.00,
        description: "Cusqueña Trigo",
        image: "./images/menu/cerveza-trigo.jpg",
        available: true
    },
    {
        id: 142,
        name: "Cusqueña Dorada",
        category: "cervezas",
        price: 10.00,
        description: "Cusqueña Dorada",
        image: "./images/menu/cusquena-dorada.jpg",
        available: true
    },
    {
        id: 143,
        name: "Cusqueña Negra",
        category: "cervezas",
        price: 10.00,
        description: "Cusqueña Negra",
        image: "./images/menu/cerveza-negra.jpg",
        available: true
    }
];

// Hacer el array accesible globalmente
window.restaurantProducts = products;

function getProductPrice(product) {
    const today = new Date().getDay();
    if (product.specialPrice && product.specialPrice.days.includes(today)) {
        return product.specialPrice.price;
    }
    return product.price;
}

function renderProducts(category = 'a-la-brasa') {
    const menuItemsContainer = document.getElementById('menu-items');
    if (!menuItemsContainer) return;

    menuItemsContainer.innerHTML = '';

    const filteredProducts = products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        menuItemsContainer.innerHTML = `
            <div class="no-products">
                <i class="fas fa-utensils"></i>
                <p>No hay productos disponibles en esta categoría</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const price = getProductPrice(product);
        const isSpecial = product.specialPrice && product.specialPrice.days.includes(new Date().getDay());
        const productElement = document.createElement('div');
        productElement.className = 'menu-item';
        productElement.innerHTML = `
            <div class="item-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${!product.available ? '<span class="sold-out">Agotado</span>' : ''}
            </div>
            <div class="item-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <span class="price">S/ ${price.toFixed(2)}${isSpecial ? ' <span class="special-price">(Precio especial)</span>' : ''}</span>
                ${product.available ? `
                <div class="item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        Añadir al carrito
                    </button>
                </div>
                ` : ''}
            </div>
        `;
        menuItemsContainer.appendChild(productElement);
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });
}

function setupProductEvents() {
    // Evento delegado para controles de cantidad
    document.addEventListener('click', function(e) {
        // Control de cantidad
        const quantityBtn = e.target.closest('.quantity-btn');
        if (quantityBtn) {
            const input = quantityBtn.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            
            if (quantityBtn.classList.contains('minus') && value > 1) {
                input.value = value - 1;
            } else if (quantityBtn.classList.contains('plus')) {
                input.value = value + 1;
            }
            return; // Salir para no procesar el clic como add-to-cart
        }
        
        // Evento para añadir al carrito
        const addToCartBtn = e.target.closest('.add-to-cart');
        if (addToCartBtn) {
            const productId = parseInt(addToCartBtn.dataset.id);
            const product = window.restaurantProducts.find(p => p.id === productId);
            if (product) {
                const quantityInput = addToCartBtn.closest('.item-actions').querySelector('.quantity-input');
                const quantity = parseInt(quantityInput.value) || 1;
                // Usar el precio correcto según el día
                const price = getProductPrice(product);
                // Disparar evento personalizado con la cantidad y precio correcto
                const event = new CustomEvent('productAddedToCart', {
                    detail: { product: { ...product, price }, quantity }
                });
                document.dispatchEvent(event);
                // Mostrar feedback visual
                const notification = document.createElement('div');
                notification.className = 'add-to-cart-feedback';
                notification.textContent = `+${quantity}`;
                addToCartBtn.appendChild(notification);
                setTimeout(() => {
                    notification.remove();
                }, 1000);
            }
        }
    });
}

function initProducts() {
    renderProducts('a-la-brasa');
    setupFilters();
    setupProductEvents();
}

document.addEventListener('DOMContentLoaded', initProducts);
