const cards_Array = [
    {
    id: 4,
    title: "newTitle",
    price: 205,
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart and 7- Color RGB LED Back-lighting for smart LED Back-lighting for smart LED Back-lighting for smart",
    image_url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    },
    {
    id: 7,
    title: "Ergonomic Wooden Tuna",
    price: 743,
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles,oxygenation, stabilizes active muscles , oxygenation, stabilizes ",
    image_url: "https://preview.redd.it/c3uhsgo1vx541.jpg?auto=webp&s=a45b583ebf921d3ad1649e77ad05e55226140120"
    },
    {
    id: 9,
    title: "Electronic Bronze Chips",
    price: 808,
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive , and four wheel drive of a front-engine design, of a front-engin",
    image_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN6bX7PLVRuY9RSvLl2roObBtUEbmNPrjQEgSe-HsLIfcszD48NrVGpSmDI0lpdbwWOoN3D9qFf9ifkREmxyhUY0rwcU38ICVUzBCIykzGKvJOkG0wwq456EIXoM_v_n1Q7uVCefmfwsli4n6YknyoPiJZBhOluBmCx_927mT3ruFngx0vTRTXk4ybgg/w640-h360-rw/beeautiful-sunset-illustration-1212023.png"
    },
    {
    id: 11,
    title: "Awesome Bronze Car",
    price: 382,
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals, the most stylish range of shoes & sandals, the most stylish range of shoes & sandals, the most stylish range ",
    image_url: "https://images.hdqwalls.com/wallpapers/watching-moon-city-47.jpg"
    },
    {
    id: 12,
    title: "Recycled Rubber Cheese",
    price: 30,
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016 power UHD Graphics, OS 10 Home, OS Office A & J 2016 power UHD ",
    image_url: "https://i.pinimg.com/736x/56/1c/02/561c02f268d50d72330c1e139fb95e05.jpg"
    },
    {
    id: 12,
    title: "Recycled Rubber Cheese",
    price: 30,
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016 power UHD Graphics, OS 10 Home, OS Office A & J 2016 power UHD ",
    image_url: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg   "
    }
    ]

    const cards = document.getElementById("template_literals_Cards")

    cards_Array.forEach((student)=>{
        const {id,title,price,description,image_url} = student
        cards.innerHTML += `<div class="card d-inline-block ms-5 mt-5 " style="width: 18rem;">
        <img src="${image_url}" class="card-img-top h-100 " alt="...">
        <div class="card-body">
          <h5 class="card-title">${id}</h5>
          <h5 class="card-title">${title}</h5>
          <h5 class="card-title">${price}</h5>
          <p class="card-text">${description}</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>`
    })