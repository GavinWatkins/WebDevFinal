import { BookTitles } from "./domain.js";

const TitleContainerElement = document.getElementById("authorBooksContainer");
var titleList = BookTitles();
TitleContainerElement.replaceChildren();
titleList.forEach(Title => {
    const singleTitleElement = document.createElement("p");
    singleTitleElement.textContent = Title;
    singleTitleElement.classList.add("bookTitle");
    TitleContainerElement.appendChild(singleTitleElement);
});