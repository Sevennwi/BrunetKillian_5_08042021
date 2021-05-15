let confirmation = document.getElementById('confirmation')

let confirmationBasket = JSON.parse(localStorage.getItem("basket"))

let totalPrice = [] 

// Ancien générateur d'Id
/*function getRandomInt(min, max) {
    min = Math.ceil(1000);
    max = Math.floor(8000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}*/



let orderNumber = JSON.parse(localStorage.getItem("orderId"))
const contact = JSON.parse(localStorage.getItem("contact"));

document.getElementById('firstName').innerHTML = "First name: " + '<strong>' + contact.firstName + '</strong>'
document.getElementById('lastName').innerHTML = "Last name: " + '<strong>' + contact.lastName + '</strong>'
document.getElementById('Email').innerHTML = "Email: " + '<strong>' + contact.email + '</strong>'
document.getElementById('Addresse').innerHTML = "Addresse: " + '<strong>' + contact.address + '</strong>'
document.getElementById('City').innerHTML = "City: " + '<strong>' + contact.city + '</strong>'

document.querySelector('p.orderNumber').textContent = "Command number : " + orderNumber;



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


		// Faire un total du prix
		totalPrice.push( Math.ceil (confirmationBasket[i].price / 1000))
		console.log(totalPrice)  
		let totalPriceProduct = 0

			for(let j = 0 ; j < totalPrice.length; j++) { 
               

			totalPriceProduct += totalPrice[j];
			}
				



        document.querySelector('p.totalPriceConfirm').textContent = "Total price : " + totalPriceProduct + "€"


    }


}

createCard()


