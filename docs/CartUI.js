import { PriceInCart, addToCart, books, getCartList } from "./domain.js";

const cartContainerElement = document.getElementById("cartArea");
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('inCart');
const InCartTitles = myParam.split(';');
InCartTitles.forEach(title => {
        books.forEach(book => {
            if(book.title == title) {
                addToCart(book);
            }
        });
});

const priceElement = document.getElementById("priceContainer");
const updatePrice = () => {
    priceElement.textContent = `Price: $${PriceInCart()}`;
};

const BuildCart = (cartItems) => {
    console.log("Should update cart");
    cartContainerElement.replaceChildren();
    cartItems.forEach(item => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const cardTitle = document.createElement("p");
        cardTitle.classList.add("title");
        const cardDescription = document.createElement("p");
        const cardPrice = document.createElement("p");

        cardTitle.textContent = item.title;
        const abbreviatedDescription = item.description.substring(0, 50) + "...";
        cardDescription.textContent = abbreviatedDescription;
        cardPrice.textContent = `$${item.price}`;

        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardDescription);
        cardElement.appendChild(cardPrice);
        cardElement.draggable = true;
        cartContainerElement.appendChild(cardElement);

        cardElement.addEventListener("mouseover", () => {
            cardDescription.textContent = item.description;
    });
        cardElement.addEventListener("mouseleave", () => {
            cardDescription.textContent = abbreviatedDescription;
        });
    })
};

BuildCart(getCartList());
console.log(getCartList());