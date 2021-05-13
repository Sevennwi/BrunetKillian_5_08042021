const shopBasket = document.getElementById("shoppingBasket");
const badge = document.getElementById("Badge");
const formBuy = document.getElementById('formBuy')

let basket = JSON.parse(localStorage.getItem("basket"))


let priceProductArray = []


// Creation Cards
function createCard() {

	// Si le panier est vide
	if (basket === null || basket.length === 0) {
		const div = document.createElement('div')
		div.className = "gif"

		const p = document.createElement('p')
		p.innerText = "Your cart is empty !"
		p.className = "emptyCart"

		const img = document.createElement('img')
		img.className = "img-fluid"
		img.src = "/Orinoco/Image/giphy.gif"
		img.alt = "Pulp-Fiction"

		div.appendChild(p);
		div.appendChild(img);

		shopBasket.appendChild(div);
		shopBasket.removeChild(formBuy);
	}

		// boucle pour lister les éléments dans le panier
		for (let i = 0; i < basket.length; i++) {
			
		
		const ul = document.createElement("ul");
		ul.className = 'card';
		const carte = document.createElement('li');
		carte.className = 'row align-items-center';
		const divImg = document.createElement('div');
		divImg.className = 'col-sm-4'
		const imageUrl = document.createElement("img");
		imageUrl.src = basket[i].imageUrl;
		imageUrl.className = 'img-thumbnail img';
		const divTexte = document.createElement('div')
		divTexte.className = "col-sm-8"
		const name = document.createElement("h3");
		name.innerText = basket[i].name;
		name.className = "texte"
		const divNumber = document.createElement('div')
		divNumber.className = "row price-form justify-content-center"
		const price = document.createElement('p')
		let priceProduct = Math.ceil (basket[i].price / 1000)
		price.innerText = priceProduct + "€"
		const totalPrice = document.createElement ('p')
		totalPrice.innerText = price.innerText
		totalPrice.className = "col-sm-3 price"
		const trashCan = document.createElement('a')
		trashCan.className = 'col-sm-3 trashCan'
		trashCan.innerHTML = '<i class="fas fa-trash-alt"></i>'
		trashCan.addEventListener ("click", function(){
			basket.splice(i, 1);
			localStorage.setItem('basket',JSON.stringify(basket));
			window.location.reload()
			})


		// Form price

		const form = document.createElement('form')
		form.className = 'col-sm-3 row form'
		form.setAttribute("onSubmit", 'return false;') 

		const input = document.createElement('span')
		input.className = "number"
		input.innerText = "1"

		
		const divFormDecrease = document.createElement('div')
		divFormDecrease.className = 'value-button decrease'
		divFormDecrease.addEventListener ("click", function(){
			decreaseValue()
			})
		divFormDecrease.innerText = "-"
		divFormDecrease.setAttribute("value", "Decrease Value")

		const divFormIncrease = document.createElement('div')
		divFormIncrease.className = 'value-button increase'
		divFormIncrease.addEventListener ("click", function(){
			increaseValue()
			})
		divFormIncrease.innerText = "+"
		divFormIncrease.setAttribute("value", "Increase Value")	

		// Prix total
		priceProductArray.push(priceProduct)
		let totalPriceProduct = 0
			for(let j = 0 ; j < priceProductArray.length; j++) { 
		   
			totalPriceProduct += priceProductArray[j];
				}

		console.log(priceProductArray)
		document.querySelector('p.totalPriceForm').textContent = "Total price : " + totalPriceProduct + "€"



			// Bouton nombre de Produit
		function increaseValue() {
			var value = parseInt(input.value, 10);
			value = isNaN(value) ? 1 : value;
			value > 9 ? value = 9 : value;
			value++;
			input.value = value;
			input.innerText = value;

			let totalPricePerProduct = priceProduct * input.value
			totalPrice.innerText = totalPricePerProduct + '€'

			/*totalPriceForm.push(totalPricePerProduct)
			if (totalPriceForm.length > 1) {
				totalPriceForm.shift()
			}
			console.log(totalPriceForm)
			//totalPriceForm = totalPricePerProduct*/
					

			document.querySelector('p.totalPriceForm').textContent = "Total price : " + totalPrice.innerText
		}
		
		function decreaseValue() {
			var value = parseInt(input.value, 10);
			value = isNaN(value) ? 1 : value;
			value < 1 ? value = 1 : '';
			value > 10 ? value = 10 : value;
			value--;
			if (value == 0) {
				basket.splice(i, 1);
				localStorage.setItem('basket',JSON.stringify(basket));
				window.location.reload()
			}
			input.value = value;
			input.innerText = value;

			let totalPricePerProduct = priceProduct * input.value
			totalPrice.innerText = totalPricePerProduct + '€'
			
			//let totalPriceForm = 0
			//totalPriceForm = totalPricePerProduct + totalPriceForm
			//console.log(totalPriceForm)

			document.querySelector('p.totalPriceForm').textContent = "Total price : " + totalPrice.innerText
		}


		carte.appendChild(divImg);
		divImg.appendChild(imageUrl);
		carte.appendChild(divTexte);
		divTexte.appendChild(name);
		divTexte.appendChild(divNumber);
		divNumber.appendChild(form);
		divNumber.appendChild(totalPrice);
		divNumber.appendChild(trashCan);
		form.appendChild(divFormDecrease);
		form.appendChild(input);
		form.appendChild(divFormIncrease);
		ul.appendChild(carte);

		shopBasket.appendChild(ul);
		

	}

	// Boutons en dehors de la liste
	const div = document.createElement("div")
	div.className = "clearBasket"

	if (basket.length !== 0) {
		
		const clearBasket = document.createElement("button")
		clearBasket.innerText = "Clear Basket";
		clearBasket.className = 'btn btn-danger';
		clearBasket.addEventListener ("click", function(){
			localStorage.removeItem("basket")
			window.location.reload()
		});

		shopBasket.appendChild(div);
		div.appendChild(clearBasket);
		shopBasket.appendChild(formBuy);
	}
	

}

createCard()


// Fonction notification panier
function basketNotif() {

	if (basket.length > 0) {
		badge.innerText = basket.length;
	}
}
basketNotif()




