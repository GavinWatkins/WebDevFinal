import { books } from "./domain.js";

const cardContainerElement = document.getElementById("cardContainer");

const BuildCards = () => {
    cardContainerElement.replaceChildren();
    books.forEach(book => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        const cardTitle = document.createElement("p");
        const cardDescription = document.createElement("p");
        const cardPrice = document.createElement("p");

        cardTitle.textContent = book.title;
        const abbreviatedDescription = book.description.substring(0, 150) + "...";
        cardDescription.textContent = abbreviatedDescription;
        cardPrice.textContent = book.price;

        cardElement.appendChild(cardTitle);
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