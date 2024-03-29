const mainTitle = document.querySelector('.titles h1');
const titleHomePage = document.querySelector('.titles');
const loader = document.getElementById('loader');

//Call to the API to retrieve all products
fetch('http://localhost:3000/api/products')
.then(res => {
    if(res.ok){
        res.json().then(data => {
            hideLoader();
            showData(data);
            })
        } else {
            console.log('Retour du serveur : ', res.status);
            showInfos();
            titleHomePage.innerHTML = `<h1>Le serveur ne répond pas...</h1>`
        }
});

//We use the information retrieved via the API to display all the products
function showData(products) {
    for(let product of products) {

        let productLink = document.createElement('a');
        document.querySelector('.items').appendChild(productLink);
        productLink.href = `./product.html?id=${product._id}`;

        let productArticle = document.createElement('article');
        productLink.appendChild(productArticle);

        let productImg = document.createElement('img');
        productArticle.appendChild(productImg);
        productImg.src = `${product.imageUrl}`; 
        productImg.alt = `${product.altTxt}`;

        let productName = document.createElement('h3');
        productArticle.appendChild(productName);
        productName.innerHTML = `${product.name}`;

        let productDescription = document.createElement("p");
        productArticle.appendChild(productDescription);
        productDescription.innerHTML = `${product.description}`;
    }
};

function hideLoader() {
    loader.style.display = 'none';
};