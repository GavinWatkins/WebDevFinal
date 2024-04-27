import { PriceInCart, SaveNewCartToStorage, addToCart, books, getCartList, removeFromCartbyTitle } from "./domain.js";

const cartContainerElement = document.getElementById("cartArea");
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('inCart');
if (myParam != null) {
    const InCartTitles = myParam.split(';');
    InCartTitles.forEach(title => {
            books.forEach(book => {
                if(book.title == title) {
                    addToCart(book);
                }
            });
    });
}

var shippingPrice;
const selectElement = document.getElementById("shippingMethod");
const updateShippingPrice = () => {
    if (selectElement.value === "premium") {
        shippingPrice = 15;
    }
    else if (selectElement.value === "3-day") {
        shippingPrice = 10;
    }
    else {
        shippingPrice = 5;
    }
};
updateShippingPrice();
selectElement.addEventListener("change", () => {
    updateShippingPrice();
    updatePrice();
    confirmationElement.textContent = "";
});
const priceElement = document.getElementById("priceContainer");
const CartHeaderElement = document.getElementById("cartHeader");
const updatePrice = () => {
    var CartPrice = PriceInCart();
    console.log(CartPrice);
    console.log(shippingPrice);
    CartPrice += shippingPrice;
    priceElement.textContent = `Price: $${CartPrice}`;
    CartHeaderElement.textContent = `Your Cart: $${PriceInCart()}`;
};

const dragHereTextElement = document.getElementById("alertText");
const confirmationElement = document.getElementById("ConfirmationText");
const formElement = document.getElementById("paymentForm");
const addressElement = document.getElementById("streetAddress");
addressElement.addEventListener("input", () => {
    confirmationElement.textContent = "";
});
const cityElement = document.getElementById("city");
cityElement.addEventListener("input", () => {
    confirmationElement.textContent = "";
});
const creditCardElement = document.getElementById("creditCardNumber");
creditCardElement.addEventListener("input", () => {
    confirmationElement.textContent = "";
});
formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    if (addressElement.value.length < 4) {
        dragHereTextElement.textContent = "Must Include Valid Address!";
    }
    else if (cityElement.value.length < 1) {
        dragHereTextElement.textContent = "Must Include a City!";
    }
    else if (creditCardElement.value.length < 16) {
        dragHereTextElement.textContent = "Missing Valid Credit Card!";
    }
    else {
        dragHereTextElement.textContent = "";
        confirmationElement.textContent = "Purchase Successful!";
        SaveNewCartToStorage();
    };
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
    removeFromCartbyTitle(draggedBookTitle);
    updatePrice();
    BuildCart(getCartList());
    confirmationElement.textContent = "";
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
            formElement.classList.add("dragHere");
            dragHereTextElement.textContent = "Drag Here to Remove From Cart";
        });
        cardElement.addEventListener("dragend", () => {
            formElement.classList.remove("dragHere");
            dragHereTextElement.textContent = "";
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