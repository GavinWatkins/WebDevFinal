import { CartContainsBook, addToCart, books, filterTitles, removeFromCart } from "./domain.js";

const cardContainerElement = document.getElementById("cardContainer");
const searchInputElement = document.getElementById("searchBar");
searchInputElement.addEventListener("input", () => {
    var updatedBooksList = filterTitles(searchInputElement.value)
    BuildCards(updatedBooksList);
});

const BuildCards = (books) => {
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
        
        if (CartContainsBook(book.title)) {
            checkBox.checked = true;
        }
        cardElement.addEventListener("mouseover", () => {
            cardDescription.textContent = book.description;
    });
        cardElement.addEventListener("mouseleave", () => {
            cardDescription.textContent = abbreviatedDescription;
        });
    });
};

BuildCards(books);