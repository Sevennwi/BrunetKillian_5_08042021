const camera = document.getElementById('detailProduit');




function createCard() {

    let detailCamera = JSON.parse(localStorage.getItem("detailCameras"))

	
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
	imageUrl.className = 'img-thumbnail img ';
    const price = document.createElement('p')
    price.innerText = Math.ceil (detailCamera.price / 1000) + "€"
	price.className = 'price';

	const div = document.createElement("div");
	div.className= "div"
	const lensesSizes = document.createElement("p");
	lensesSizes.innerText = "Select a lens size"
	lensesSizes.className = "p"
	const button = document.createElement('button');
	button.innerText = "Buy";
	button.type = "button";
	button.className = 'btn btn-danger button';
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