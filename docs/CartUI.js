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

const formElement = document.getElementById("paymentForm");
formElement.addEventListener("submit", (e) => {
    e.preventDefault();
});
formElement.addEventListener("dragover", (e) => {
    e.preventDefault();
});
formElement.addEventListener("dragenter", (e) => {
    e.preventDefault();
});
formElement.addEventListener("drop", (e) => {
    const draggedBookTitle = e.dataTransfer.getData("text/plain");
    console.log(draggedBookTitle);
});

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
        cardElement.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", item.title);
        });

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
updatePrice();