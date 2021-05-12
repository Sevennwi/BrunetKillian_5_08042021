const tasks = [{
    title: "Appareil photo Zeiss",
    description: "Appareil photo en bon état",
    imageUrl: '../JWDP5-master/images/vcam_1.jpg',
    price: 70,
  },
  {
    title: "Appareil photo",
    description: "Appareil photo 40.5mm",
    imageUrl: '../JWDP5-master/images/vcam_2.jpg',
    price: 50,
  },
  {
    title: "Appareil photo ancien",
    description: "Appareil photo kodak 1945",
    imageUrl: '../JWDP5-master/images/vcam_3.jpg',
    price: 200,
  }
  ,
  {
    title: "Appareil photo Minolta",
    description: "Appareil photo 50mm",
    imageUrl: '../JWDP5-master/images/vcam_4.jpg',
    price: 100,
  }
  ,
  {
    title: "Appareil photo de type photo",
    description: "Appareil photo j'ai plus d'idée pour la description",
    imageUrl: '../JWDP5-master/images/vcam_5.jpg',
    price: 90,
  }
  ];
  
  let cardContainer;
  
  let createTaskCard = (task) => {

  let col = document.createElement('div');
  col.className = 'col-sm-4';
  
  let card = document.createElement('div');
  card.className = 'card';
  
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  let title = document.createElement('h5');
  title.innerText = task.title;
  title.className = 'card-title';
  
  let description = document.createElement('p');
  description.innerText = task.description;
  description.className = 'card-description';

  let imageUrl = document.createElement('img');
  imageUrl.src = task.imageUrl;
  imageUrl.className = 'img-thumbnail img ';

  let price = document.createElement('p');
  price.innerText = task.price +'€';
  price.className = 'card-price';
  
  cardBody.appendChild(imageUrl); 
  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(price);
  card.appendChild(cardBody);
  col.appendChild(card);
  cardContainer.appendChild(col);
  
  }
  
  let initListOfTasks = () => {
  if (cardContainer) {
    document.getElementById('card-container').replaceWith(cardContainer);
    return;
  }
  
  cardContainer = document.getElementById('card-container');
  tasks.forEach((task) => {
    createTaskCard(task);
  });
  };
  
  initListOfTasks();