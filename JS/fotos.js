document.addEventListener('DOMContentLoaded', function() {

    const  cardContainer  = document.getElementById("listaFotos");

    fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(response => response.json())
    .then(result => {
        console.log(result)
        const fotoArray = Object.values(result);
        fotoArray.forEach(foto => {
            const card = document.createElement("div");
            card.classList.add("card", "col-md-4", "mb-4");

            const image = document.createElement("img");
            image.src = foto.thumbnailUrl;
            image.classList.add("card-img-top");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = foto.title;

            cardBody.appendChild(cardTitle);
            card.appendChild(image);
            card.appendChild(cardBody);

            cardContainer.appendChild(card);
        });    
    })
    .catch(error => {
        console.error("Error:", error);
    });
});