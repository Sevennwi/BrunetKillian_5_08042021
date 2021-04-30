let confirmation = document.getElementById('confirmation')

let confirmationBasket = JSON.parse(localStorage.getItem("basket"))


function getRandomInt(min, max) {
    min = Math.ceil(1000);
    max = Math.floor(8000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





document.querySelector('p.orderNumber').textContent = "Command number : " + getRandomInt();



// Creation Cards
function createCard() {


		// boucle pour lister les éléments dans le panier
		for (let i = 0; i < confirmationBasket.length; i++) {
			
		
		const ul = document.createElement("ul");
		ul.className = 'card cardSum';
		const carte = document.createElement('li');
		carte.className = 'row align-items-center';
		const divImg = document.createElement('div');
		divImg.className = 'col-sm-4'
		const imageUrl = document.createElement("img");
		imageUrl.src = confirmationBasket[i].imageUrl;
		imageUrl.className = 'img-thumbnail imgConfirm';
		const divTexte = document.createElement('div')
		divTexte.className = "col-sm-8"
		const name = document.createElement("h3");
		name.innerText = confirmationBasket[i].name;
		name.className = "texteConfirm"


        
		carte.appendChild(divImg);
		divImg.appendChild(imageUrl);
		carte.appendChild(divTexte);
		divTexte.appendChild(name);


		ul.appendChild(carte);

		confirmation.appendChild(ul);


        let totalPrice = Math.ceil (confirmationBasket[i].price / 1000)

        console.log(totalPrice)

        document.querySelector('p.totalPriceConfirm').textContent = "Total price : " + totalPrice

    }


}

createCard()