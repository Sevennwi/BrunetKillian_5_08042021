const camera = document.getElementById('card-container');



// Appelle API





(async function () {
	const articles = await fetchCameras()
  
	for (article of articles) {
		createCard(article)
	}

}())


function fetchCameras() {
	return fetch("http://localhost:3000/api/cameras/")
	  .then(function(httpBodyResponse) {
		return httpBodyResponse.json()
	  })
	  .then(function(articles) {
		return articles
	  })
	  .catch(function(error) {
		alert(error)
	  })
  }


// Creation Cards

function createCard(article) {
	
	const col = document.createElement("div");
    col.className = 'col-sm-4';
	const carte = document.createElement('div');
	carte.className = 'card carte';
	const name = document.createElement("h3");
    name.innerText = article.name;
	const description = document.createElement("p");
    description.innerText = article.description;
	const imageUrl = document.createElement("img");
	imageUrl.src = article.imageUrl;
	imageUrl.className = 'img-thumbnail img ';
    const price = document.createElement('p')
    price.innerText = Math.ceil (article.price / 1000) + "€"
	price.className = 'price';
	const button = document.createElement('a');
	button.innerText = "Buy";
	button.type = "button";
	button.className = 'btn btn-danger button stretched-link';
	button.href = "Product.html"
	button.addEventListener ("click", function(){
		localStorage.setItem("detailCameras", JSON.stringify(article));
	})
	

	carte.appendChild(imageUrl);
	carte.appendChild(name);
	carte.appendChild(description);
    carte.appendChild(price);
	carte.appendChild(button);
	col.appendChild(carte);

	camera.appendChild(col);
}

