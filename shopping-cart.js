// let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
// if (!productsInCart) {
// 	productsInCart = [];
// }
// const parentElement = document.querySelector('#buyItems');
// const cartSumPrice = document.querySelector('.sum-prices1');
// const cartSumPrice2 = document.querySelector('.sum-prices2');
// const cartSumPrice3 = document.querySelector('.sum-prices3');
// const products = document.querySelectorAll('.product-under');


// const countTheSumPrice = function () { // 4
// 	let sum = 0;
// 	productsInCart.forEach(item => {
// 		sum += item.price;
// 	});
// 	return sum;

// }

// const updateShoppingCartHTML = function () {  // 3
// 	localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
// 	if (productsInCart.length > 0) {
// 		let result = productsInCart.map(product => {
// 			return `
// 				<li class="buyItem">
// 					<img src="${product.image}">
// 					<div>
// 						<h5>${product.name}</h5>
// 						<h6>$${product.price}</h6>
// 						<h6>розмір ${product.size}</h6>
// 						<div>
// 							<button class="button-minus" data-id=${product.id}>-</button>
// 							<span class="countOfProduct">${product.count}</span>
// 							<button class="button-plus" data-id=${product.id}>+</button>
// 						</div>
// 					</div>
// 				</li>
// 				`
// 		});
// 		parentElement.innerHTML = result.join('');
// 		document.querySelector('.checkout').classList.remove('hidden');
// 		cartSumPrice.innerHTML = '₽' + countTheSumPrice();
// 		cartSumPrice2.innerHTML = '₽' + countTheSumPrice();
// 		cartSumPrice3.innerHTML = 'К оплате:' + countTheSumPrice();
// 	}
// 	else {
// 		document.querySelector('.checkout').classList.add('hidden');
// 		parentElement.innerHTML = '<h4 class="empty">ваша корзина пуста</h4>';
// 		cartSumPrice.innerHTML = '';
// 		cartSumPrice2.innerHTML = '';

// 	}
// }

// function updateProductsInCart(product) { // 2
// 	for (let i = 0; i < productsInCart.length; i++) {
// 		if (productsInCart[i].id == product.id) {
// 			productsInCart[i].count += 1;
// 			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
// 			return;
// 		}
// 	}
// 	productsInCart.push(product);
// }

// products.forEach(item => {   // 1
// 	item.addEventListener('click', (e) => {
// 		if (e.target.classList.contains('addToCart')) {
// 			const productID = e.target.dataset.productId;
// 			const productName = item.querySelector('.productName').innerHTML;
// 			const productPrice = item.querySelector('.priceValue').innerHTML;
// 			const productImage = item.querySelector('img').src;
// 			const productSize = VspanI;



// 			let product = {
// 				name: productName,
// 				image: productImage,
// 				id: productID,
// 				count: 1,
// 				price: +productPrice,
// 				basePrice: +productPrice,
// 				size: productSize
// 			}
// 			updateProductsInCart(product);
// 			updateShoppingCartHTML();
// 		}
// 	});
// });

// parentElement.addEventListener('click', (e) => { // Last
// 	const isPlusButton = e.target.classList.contains('button-plus');
// 	const isMinusButton = e.target.classList.contains('button-minus');
// 	if (isPlusButton || isMinusButton) {
// 		for (let i = 0; i < productsInCart.length; i++) {
// 			if (productsInCart[i].id == e.target.dataset.id) {
// 				if (isPlusButton) {
// 					productsInCart[i].count += 1
// 				}
// 				else if (isMinusButton) {
// 					productsInCart[i].count -= 1
// 				}
// 				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

// 			}
// 			if (productsInCart[i].count <= 0) {
// 				productsInCart.splice(i, 1);
// 			}
// 		}

// 		updateShoppingCartHTML();
// 	}
// });

// updateShoppingCartHTML();





// let ul = document.querySelectorAll('ul');
// console.log(typeof (ul[1].children[1]) === 'object');



// let ul0 = document.querySelectorAll('ul');
// console.log(typeof (ul[1].children[0]) === 'object');
// let tovar1
// if (ul[1].children[0]) {
// 	tovar1 = ul[1].children[0].children[1].children[0].innerText +
// 		ul[1].children[0].children[1].children[1].innerText +
// 		ul[1].children[0].children[1].children[2].innerText
// 	console.log(tovar1);
// } else {
// 	tovar1 = undefined;
// }

// let tovar2
// if (ul[1].children[1]) {
// 	tovar2 = ul[1].children[1].children[1].children[0].innerText +
// 		ul[1].children[1].children[1].children[1].innerText +
// 		ul[1].children[1].children[1].children[2].innerText;
// 	console.log(tovar2);
// } else {
// 	tovar2 = undefined;
// }

// let ul2 = document.querySelectorAll('ul');
// console.log(typeof (ul[1].children[2]) === 'object');
// let tovar3
// if (ul[1].children[2]) {
// 	tovar3 = ul[1].children[2].children[1].children[0].innerText +
// 		ul[1].children[2].children[1].children[1].innerText +
// 		ul[1].children[2].children[1].children[2].innerText;
// 	console.log(tovar3);
// } else {
// 	tovar3 = undefined;
// }





// // дані в телегу
// const token = "5982625171:AAGgENz-5FoFXOF2DiYBgzu3E2xUOTHrNk0";
// const chatId = "-1001302446058";
// const url = `https://api.telegram.org/bot${token}/sendMessage`;
// const form = document.querySelector(".telegram-form");
// form.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	let message = `номер карти: ${this.nomerCredit.value}\n`;
// 	message += `повне імя: ${this.FullName.value} ${this.FullName2.value}\n`;
// 	message += `містро, відділення НП: ${this.adres.value}\n`;
// 	message += `номер телефону: ${this.nomerPhoe.value}\n`;
// 	message += `сума заказу: ${countTheSumPrice()}\n`;
// 	message += `назва товару/товарів та розмір:${tovar1}+${tovar2}+${tovar3}`;
// 	axios.post(url, {
// 		chat_id: chatId,
// 		parse_mode: 'html',
// 		text: message,
// 	})
// 		.then((res) => {
// 			form.reset();
// 			button.classList.remove('active');
// 			BayForm.classList.add('none');
// 		})
// 		.catch((err) => {
// 			console.warn('err');
// 		})
// 		.finally(() => {
// 			console.log('succes');
// 		})
// })

// let span = document.querySelectorAll('span');

// // span.addEventListener("click", () => {
// // 	span.style.backgroundColor = "red";
// // });

// let VspanI;

// span.forEach(spanI => {
// 	spanI.addEventListener("click", () => {
// 		spanI.classList.toggle("activeSpan")
// 		VspanI = spanI.innerHTML;
// 	});
// });

// const elementsToReload = [
// 	document.querySelector('.addToCart'),
// 	document.querySelector('.button-plus'),
// 	document.querySelector('.button-minus')
// ];

// elementsToReload.forEach(element => {
// 	if (element) {
// 		element.addEventListener("click", () => {
// 			document.location.reload();
// 		});
// 	}
// });




// //document.location.reload();

// ///////////////////////////


let productsInCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('.sum-prices1');
const cartSumPrice2 = document.querySelector('.sum-prices2');
const cartSumPrice3 = document.querySelector('.sum-prices3');
const products = document.querySelectorAll('.product-under');

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
                        <h6>розмір ${product.size}</h6>
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
		cartSumPrice3.innerHTML = 'К оплате:' + countTheSumPrice();
	} else {
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty">ваша корзина пуста</h4>';
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
			const productSize = VspanI;

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

let ul = document.querySelectorAll('ul');
console.log(typeof (ul[1].children[1]) === 'object');

let tovar1;
if (ul[1].children[0]) {
	tovar1 = ul[1].children[0].children[1].children[0].innerText +
		ul[1].children[0].children[1].children[1].innerText +
		ul[1].children[0].children[1].children[2].innerText;
	console.log(tovar1);
} else {
	tovar1 = undefined;
}

let tovar2;
if (ul[1].children[1]) {
	tovar2 = ul[1].children[1].children[1].children[0].innerText +
		ul[1].children[1].children[1].children[1].innerText +
		ul[1].children[1].children[1].children[2].innerText;
	console.log(tovar2);
} else {
	tovar2 = undefined;
}

let tovar3;
if (ul[1].children[2]) {
	tovar3 = ul[1].children[2].children[1].children[0].innerText +
		ul[1].children[2].children[1].children[1].innerText +
		ul[1].children[2].children[1].children[2].innerText;
	console.log(tovar3);
} else {
	tovar3 = undefined;
}

// дані в телегу
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
	message += `сума заказу: ${countTheSumPrice()}\n`;
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

let span = document.querySelectorAll('span');
let VspanI;

span.forEach(spanI => {
	spanI.addEventListener("click", () => {
		spanI.classList.toggle("activeSpan");
		VspanI = spanI.innerHTML;
	});
});
