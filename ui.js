import { addToCart, books, removeFromCart } from "./domain.js";

const cardContainerElement = document.getElementById("cardContainer");

const BuildCards = () => {
    cardContainerElement.replaceChildren();
    books.forEach(book => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        const cardTitle = document.createElement("p");
        cardTitle.classList.add("title");
        const cardDescription = document.createElement("p");
        const cardPrice = document.createElement("p");
        const checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type", "checkbox");
        checkBox.classList.add("CheckBox");
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("cardHeader");

        cardTitle.textContent = book.title;
        const abbreviatedDescription = book.description.substring(0, 150) + "...";
        cardDescription.textContent = abbreviatedDescription;
        cardPrice.textContent = book.price;

        checkBox.addEventListener("click", () => {
            if(checkBox.checked === true) {
                addToCart(book);
            }
            else {
                removeFromCart(book);
            }
        });

        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(checkBox);
        cardElement.appendChild(cardHeader);
        cardElement.appendChild(cardDescription);
        cardElement.appendChild(cardPrice);
        cardContainerElement.appendChild(cardElement);

        cardElement.addEventListener("mouseover", () => {
            cardDescription.textContent = book.description;
    });
        cardElement.addEventListener("mouseleave", () => {
            cardDescription.textContent = abbreviatedDescription;
        });
    });
};

BuildCards();