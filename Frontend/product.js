const camera = document.getElementById('detailProduit');
let detailCamera = JSON.parse(localStorage.getItem("detailCameras"))
const badge = document.getElementById("Badge");


// Creation Cards
function createCard() {

	
	const col = document.createElement("div");
    col.className = 'produit';
	const carte = document.createElement('div');
	carte.className = 'card';
	const name = document.createElement("h3");
    name.innerText = detailCamera.name;
	const description = document.createElement("p");
    description.innerText = detailCamera.description;
	const imageUrl = document.createElement("img");
	imageUrl.src = detailCamera.imageUrl;
	imageUrl.className = 'img-thumbnail';
    const price = document.createElement('p')
    price.innerText = Math.ceil (detailCamera.price / 1000) + "€"
	price.className = 'price';

	const div = document.createElement("div");
	div.className= "div"
	const lensesSizes = document.createElement("p");
	lensesSizes.innerText = "Select a lens size"
	lensesSizes.className = "p"
	const button = document.createElement('a');
	button.innerText = "Buy";
	button.type = "button";
	button.className = 'btn btn-danger button';
	button.href = "Basket.html"

	console.log (detailCamera._id)

	// Achat envoyer dans le panier
	button.addEventListener ("click", function(){


			function getBasket (){
			// Get the existing data
			var basket = localStorage.getItem('basket');

			// If no existing data, create an array
			// Otherwise, convert the localStorage string to an array
			basket = basket ? JSON.parse(basket) : [];

			// Add new data to localStorage Array
			
			/*for (let j = 0; j < basket.length; j++) {
				const basketId = basket[j]._id;
				alert(detailCamera._id)
				alert(basketId, detailCamera._id)
				
				if (detailCamera._id == basketId) {
				alert("Ce produit est déjà dans le panier");
				break;
					} else {
				basket.push(detailCamera);
				break;
					}
			}*/

			basket.push(detailCamera);
			// Save back to localStorage
			localStorage.setItem('basket', JSON.stringify(basket));
		
			}
			getBasket()



	})


	// Selection des Lenses
	const select = document.createElement('select');
	select.className = "button"
	const lenses = detailCamera.lenses;

	for (let i = 0; i < lenses.length; i++) {
		const option = document.createElement('option')
		option.value = lenses[i];
		option.innerText = lenses[i];
		select.appendChild(option)
	}

	carte.appendChild(imageUrl);
	carte.appendChild(name);
	carte.appendChild(description);
    carte.appendChild(price);
	carte.appendChild(div);
	div.appendChild(lensesSizes);
	div.appendChild(select);
	div.appendChild(button);
	col.appendChild(carte);

	camera.appendChild(col);


}

createCard()


// Fonction notification panier
function basketNotif() {

	let basket = JSON.parse(localStorage.getItem("basket"))

	if (basket.length > 0) {
		badge.innerText = basket.length;
	}
}
basketNotif()