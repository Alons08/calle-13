// Array completo de productos
const products = [
    // CEVICHES
    {
        id: 1,
        name: "Ceviche mixto",
        category: "ceviches",
        price: 15.00,
        description: "Ceviche mixto tradicional.",
        image: "./images/menu/ceviche-mixto.jpg",
        available: true
    },
    {
        id: 2,
        name: "Ceviche de pescado",
        category: "ceviches",
        price: 20.00,
        description: "Ceviche de pescado fresco.",
        image: "./images/menu/ceviche-pescado.jpg",
        available: true
    },
    {
        id: 3,
        name: "Ceviche super mixto",
        category: "ceviches",
        price: 25.00,
        description: "Ceviche con variedad de mariscos y pescado.",
        image: "./images/menu/ceviche-super-mixto.jpg",
        available: true
    },
    {
        id: 4,
        name: "Ceviche clásico",
        category: "ceviches",
        price: 20.00,
        description: "Ceviche clásico peruano.",
        image: "./images/menu/ceviche-clasico.jpg",
        available: true
    },
    {
        id: 5,
        name: "Ceviche de conchas negras",
        category: "ceviches",
        price: 25.00,
        description: "Ceviche preparado con conchas negras.",
        image: "./images/menu/ceviche-conchas-negras.jpg",
        available: true
    }
    ,
    // LECHES
    {
        id: 10,
        name: "Leche de tigre",
        category: "leches",
        price: 12.00,
        description: "Leche de tigre tradicional.",
        image: "./images/menu/leche-de-tigre.jpg",
        available: true
    },
    {
        id: 11,
        name: "Leche de Pantera",
        category: "leches",
        price: 15.00,
        description: "Leche de Pantera especial.",
        image: "./images/menu/leche-de-pantera.jpg",
        available: true
    },
    {
        id: 12,
        name: "Leche calle 13",
        category: "leches",
        price: 20.00,
        description: "Leche especial de la casa Calle 13.",
        image: "./images/menu/leche-calle-13.jpg",
        available: true
    }
    ,
    // ARROCES
    {
        id: 20,
        name: "Arroz con marisco",
        category: "arroces",
        price: 16.00,
        description: "Arroz con mariscos frescos.",
        image: "./images/menu/arroz-con-mariscos.jpg",
        available: true
    },
    {
        id: 21,
        name: "Arroz norteño",
        category: "arroces",
        price: 16.00,
        description: "Arroz norteño tradicional.",
        image: "./images/menu/arroz-norteno.jpg",
        available: true
    },
    {
        id: 22,
        name: "Chaufa de marisco",
        category: "arroces",
        price: 16.00,
        description: "Chaufa de mariscos variados.",
        image: "./images/menu/arroz-chaufa-mariscos.jpg",
        available: true
    },
    {
        id: 23,
        name: "Chaufa de pescado",
        category: "arroces",
        price: 20.00,
        description: "Chaufa preparado con pescado.",
        image: "./images/menu/chaufa-pescado.jpg",
        available: true
    },
    {
        id: 24,
        name: "Chaufa de langostino",
        category: "arroces",
        price: 20.00,
        description: "Chaufa preparado con langostinos.",
        image: "./images/menu/chaufa-de-langostinos.jpg",
        available: true
    },
    // PESCADO-FRITO
    {
        id: 30,
        name: "Cabrilla frita",
        category: "pescado-frito",
        price: 20.00,
        description: "Cabrilla frita crocante.",
        image: "./images/menu/cabrilla-frita.jpg",
        available: true
    },
    {
        id: 31,
        name: "Doncella frita",
        category: "pescado-frito",
        price: 20.00,
        description: "Doncella frita al estilo de la casa.",
        image: "./images/menu/doncella-frita.jpg",
        available: true
    },
    {
        id: 32,
        name: "Pampanito frito",
        category: "pescado-frito",
        price: 20.00,
        description: "Pampanito frito dorado.",
        image: "./images/menu/pampanito-frito.jpg",
        available: true
    },
    // CHICHARRONES-JALEAS
    {
        id: 40,
        name: "Chicharrón de pota",
        category: "chicharrones-jaleas",
        price: 12.00,
        description: "Chicharrón de pota crocante.",
        image: "./images/menu/chicharron-pota.jpg",
        available: true
    },
    {
        id: 41,
        name: "Chicharrón de pescado",
        category: "chicharrones-jaleas",
        price: 25.00,
        description: "Chicharrón de pescado fresco.",
        image: "./images/menu/chicharron-pescado.jpg",
        available: true
    },
    {
        id: 42,
        name: "Chicharrón de calamar",
        category: "chicharrones-jaleas",
        price: 30.00,
        description: "Chicharrón de calamar tierno.",
        image: "./images/menu/chicharron-calamar.jpg",
        available: true
    },
    {
        id: 43,
        name: "Chicharrón mixto",
        category: "chicharrones-jaleas",
        price: 25.00,
        description: "Chicharrón mixto de mariscos.",
        image: "./images/menu/chicharron-mixtoo.jpg",
        available: true
    },
    {
        id: 44,
        name: "Jalea mixta",
        category: "chicharrones-jaleas",
        price: 25.00,
        description: "Jalea mixta de mariscos.",
        image: "./images/menu/jalea-mixtoo.jpg",
        available: true
    },
    {
        id: 45,
        name: "Jalea norteña",
        category: "chicharrones-jaleas",
        price: 30.00,
        description: "Jalea norteña tradicional.",
        image: "./images/menu/jalea-nortena.jpg",
        available: true
    },
    {
        id: 46,
        name: "Jalea Calle 13",
        category: "chicharrones-jaleas",
        price: 35.00,
        description: "Jalea especial de la casa Calle 13.",
        image: "./images/menu/jalea-calle-13.jpg",
        available: true
    },
        // SOPAS
    {
        id: 50,
        name: "Sudado de cabrilla",
        category: "sopas",
        price: 20.00,
        description: "Sudado de cabrilla tradicional.",
        image: "./images/menu/sudado-cabrilla.jpg",
        available: true
    },
    {
        id: 51,
        name: "Sudado de trambollo",
        category: "sopas",
        price: 25.00,
        description: "Sudado de trambollo fresco.",
        image: "./images/menu/sudado-trambollo.jpg",
        available: true
    },
    {
        id: 52,
        name: "Sudado calle 13",
        category: "sopas",
        price: 25.00,
        description: "Sudado especial de la casa Calle 13.",
        image: "./images/menu/sudado-calle-13.jpg",
        available: true
    },
    {
        id: 53,
        name: "Parihuela de cabrilla",
        category: "sopas",
        price: 25.00,
        description: "Parihuela de cabrilla con mariscos.",
        image: "./images/menu/parihuela-cabrilla.jpg",
        available: true
    },
    {
        id: 54,
        name: "Parihuela de trambollo",
        category: "sopas",
        price: 25.00,
        description: "Parihuela de trambollo con mariscos.",
        image: "./images/menu/parihuela-tramboyo.jpg",
        available: true
    },
    {
        id: 55,
        name: "Chupe de pescado",
        category: "sopas",
        price: 20.00,
        description: "Chupe de pescado tradicional.",
        image: "./images/menu/chupe-pescado.jpg",
        available: true
    },
    {
        id: 56,
        name: "Chupe de langostino",
        category: "sopas",
        price: 25.00,
        description: "Chupe de langostino fresco.",
        image: "./images/menu/chupe-langostino.jpg",
        available: true
    },
    {
        id: 57,
        name: "Chupe de cangrejo",
        category: "sopas",
        price: 20.00,
        description: "Chupe de cangrejo tradicional.",
        image: "./images/menu/chupe-cangrejo.jpg",
        available: true
    },
    {
        id: 58,
        name: "Chupe calle 13",
        category: "sopas",
        price: 25.00,
        description: "Chupe especial de la casa Calle 13.",
        image: "./images/menu/chupe-calle-13.jpg",
        available: true
    },
    {
        id: 59,
        name: "Chilcano",
        category: "sopas",
        price: 10.00,
        description: "Chilcano tradicional peruano.",
        image: "./images/menu/chilcano.jpg",
        available: true
    },
    // PLATOS-CRIOLLOS
    {
        id: 70,
        name: "Chaufa de pollo",
        category: "platos-criollos",
        price: 12.00,
        description: "Chaufa de pollo clásico.",
        image: "./images/menu/chaufa-pollo.jpg",
        available: true
    },
    {
        id: 71,
        name: "Saltado de pollo",
        category: "platos-criollos",
        price: 15.00,
        description: "Saltado de pollo al estilo peruano.",
        image: "./images/menu/saltado-pollo.jpg",
        available: true
    },
    {
        id: 72,
        name: "Lomo saltado",
        category: "platos-criollos",
        price: 15.00,
        description: "Lomo saltado tradicional peruano.",
        image: "./images/menu/lomo-saltado.jpg",
        available: true
    },
     // DUOS
    {
        id: 80,
        name: "Arroz c/Mariscos + ceviche",
        category: "duos",
        price: 20.00,
        description: "Arroz con mariscos acompañado de ceviche.",
        image: "./images/menu/duo-arroz-mariscos-ceviche.jpg",
        available: true
    },
    {
        id: 81,
        name: "Chaufa d/ Marisco + ceviche",
        category: "duos",
        price: 20.00,
        description: "Chaufa de marisco acompañado de ceviche.",
        image: "./images/menu/duo-chaufa-marisco-ceviche.jpg",
        available: true
    },
    {
        id: 82,
        name: "Picante d/ Marisco + ceviche",
        category: "duos",
        price: 20.00,
        description: "Picante de marisco acompañado de ceviche.",
        image: "./images/menu/picante-marisco-ceviche.jpg",
        available: true
    },
    {
        id: 83,
        name: "Ceviche + Chicharrón de pescado",
        category: "duos",
        price: 20.00,
        description: "Ceviche acompañado de chicharrón de pescado.",
        image: "./images/menu/duo-ceviche-chicharron-pescado.jpg",
        available: true
    },
    {
        id: 84,
        name: "Ceviche + Chicharrón de calamar",
        category: "duos",
        price: 25.00,
        description: "Ceviche acompañado de chicharrón de calamar.",
        image: "./images/menu/ceviche-chicharron-calamar.jpg",
        available: true
    },
    {
        id: 85,
        name: "Ceviche + Chicharrón mixto",
        category: "duos",
        price: 25.00,
        description: "Ceviche acompañado de chicharrón mixto.",
        image: "./images/menu/duo-ceviche-chicharron-mixto.jpg",
        available: true
    },
    {
        id: 86,
        name: "Leche d/ tigre + chicharrón de Pescado",
        category: "duos",
        price: 15.00,
        description: "Leche de tigre con chicharrón de pescado.",
        image: "./images/menu/leche-tigre-chicharron-pescado.jpg",
        available: true
    },
    {
        id: 87,
        name: "Leche d/ tigre + chicharrón mixto",
        category: "duos",
        price: 20.00,
        description: "Leche de tigre con chicharrón mixto.",
        image: "./images/menu/leche-tigre-chicharron-mixto.jpg",
        available: true
    },
    {
        id: 88,
        name: "Leche d/ tigre + chicharrón d/ calamar",
        category: "duos",
        price: 22.00,
        description: "Leche de tigre con chicharrón de calamar.",
        image: "./images/menu/leche-tigre-chicharron-calamar.jpg",
        available: true
    },
    {
        id: 89,
        name: "Causa + ceviche",
        category: "duos",
        price: 20.00,
        description: "Causa limeña acompañada de ceviche.",
        image: "./images/menu/causa-ceviche.jpg",
        available: true
    },
        // TRIOS
    {
        id: 100,
        name: "Arroz c/ marisco + ceviche + c/ de pota",
        category: "trios",
        price: 25.00,
        description: "Arroz con marisco, ceviche y chicharrón de pota.",
        image: "./images/menu/arroz-marisco-ceviche-chicharron-pota.jpg",
        available: true
    },
    {
        id: 101,
        name: "Chaufa d/ marisco + ceviche + c/ de pota",
        category: "trios",
        price: 26.00,
        description: "Chaufa de marisco, ceviche y chicharrón de pota.",
        image: "./images/menu/chaufa-marisco-ceviche-chicharron-pota.jpg",
        available: true
    },
    {
        id: 102,
        name: "Arroz norteño + ceviche + c/ de pota",
        category: "trios",
        price: 28.00,
        description: "Arroz norteño, ceviche y chicharrón de pota.",
        image: "./images/menu/arroz-norteno-ceviche-chicharron-pota.jpg",
        available: true
    },
    {
        id: 103,
        name: "Causa + ceviche + arroz de mariscos",
        category: "trios",
        price: 25.00,
        description: "Causa limeña, ceviche y arroz de mariscos.",
        image: "./images/menu/causa-ceviche-arroz-mariscos.jpg",
        available: true
    },
    {
        id: 104,
        name: "Chaufa de mariscos + causa + ceviche",
        category: "trios",
        price: 25.00,
        description: "Chaufa de mariscos, causa y ceviche.",
        image: "./images/menu/chaufa-mariscos-causa-ceviche.jpg",
        available: true
    },
    {
        id: 105,
        name: "Leche d/ tigre + chicharron d/ calamar",
        category: "trios",
        price: 25.00,
        description: "Leche de tigre y chicharrón de calamar.",
        image: "./images/menu/leche-tigre-chicharron-calamar.jpg",
        available: true
    },
        // CUARTETO-MARINO
    {
        id: 110,
        name: "Arroz c/ marisco + ceviche + c/ de pota + causa",
        category: "cuarteto-marino",
        price: 35.00,
        description: "Arroz con marisco, ceviche, chicharrón de pota y causa.",
        image: "./images/menu/arroz-marisco-ceviche-chicharron-pota-causa.jpg",
        available: true
    },
    {
        id: 111,
        name: "Chaufa d/ marisco + ceviche + c/ de pota + causa",
        category: "cuarteto-marino",
        price: 35.00,
        description: "Chaufa de marisco, ceviche, chicharrón de pota y causa.",
        image: "./images/menu/chaufa-marisco-ceviche-chicharron-pota-causa.jpg",
        available: true
    },
    {
        id: 112,
        name: "Arroz norteño + ceviche + c/ de pota + causa",
        category: "cuarteto-marino",
        price: 35.00,
        description: "Arroz norteño, ceviche, chicharrón de pota y causa.",
        image: "./images/menu/arroz-norteno-ceviche-chicharron-pota-causa.jpg",
        available: true
    },
    {
        id: 113,
        name: "Arroz c/ marisco + tiradito + c/ de pota + causa",
        category: "cuarteto-marino",
        price: 35.00,
        description: "Arroz con marisco, tiradito, chicharrón de pota y causa.",
        image: "./images/menu/arroz-marisco-tiradito-chicharron-pota-causa.jpg",
        available: true
    },
    {
        id: 114,
        name: "Chaufa d/ marisco + tiradito + c/ de pota + causa",
        category: "cuarteto-marino",
        price: 35.00,
        description: "Chaufa de marisco, tiradito, chicharrón de pota y causa.",
        image: "./images/menu/chaufa-marisco-tiradito-chicharron-pota-causa.jpg",
        available: true
    },
    {
        id: 115,
        name: "Arroz norteño + tiradito + c/ de pota + causa",
        category: "cuarteto-marino",
        price: 35.00,
        description: "Arroz norteño, tiradito, chicharrón de pota y causa.",
        image: "./images/menu/arroz-norteno-tiradito-chicharron-pota-causa.jpg",
        available: true
    },
        // BEBIDAS
    {
        id: 120,
        name: "Gordita",
        category: "bebidas",
        price: 3.00,
        description: "Gaseosa Gordita.",
        image: "./images/menu/gaseosa-gordita.jpg",
        available: true
    },
    {
        id: 121,
        name: "Inca Kola 1L.",
        category: "bebidas",
        price: 5.00,
        description: "Inca Kola de 1 litro.",
        image: "./images/menu/gaseosa-inca-1lt.jpg",
        available: true
    },
    {
        id: 122,
        name: "Coca Cola 1L.",
        category: "bebidas",
        price: 5.00,
        description: "Coca Cola de 1 litro.",
        image: "./images/menu/gaseosa-coca-1lt.jpg",
        available: true
    },
    /*
    {
        id: 123,
        name: "Chola Inca 1L.",
        category: "bebidas",
        price: 5.00,
        description: "Chola Inca de 1 litro.",
        image: "./images/menu/chola-inca-1l.jpg",
        available: true
    },*/
    {
        id: 124,
        name: "Chicha Morada",
        category: "bebidas",
        price: 7.00,
        description: "Chicha Morada tradicional.",
        image: "./images/menu/chicha-morada.jpg",
        available: true
    },
    {
        id: 125,
        name: "Pilsen",
        category: "bebidas",
        price: 7.00,
        description: "Cerveza Pilsen.",
        image: "./images/menu/cerveza-pilsen-callao.jpg",
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

function renderProducts(category = 'ceviches') {
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
    renderProducts('ceviches');
    setupFilters();
    setupProductEvents();
}

document.addEventListener('DOMContentLoaded', initProducts);
