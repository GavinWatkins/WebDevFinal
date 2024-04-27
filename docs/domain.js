import { GetAllBooks } from "./service.js";

export const books = await GetAllBooks();

var CartList = [];
export const getCartList = () => {
        return CartList;
}

export const addToCart = (book) => {
        CartList.push(book);
        console.log(CartList);
        console.log(book.price);
};

export const removeFromCart = (book) => {
        const index = CartList.indexOf(book);
        CartList.splice(index, 1);
        console.log(CartList);
}

export const filterTitles = (text) => {
        return books.filter((book) => {
                if (book.title.toLowerCase().includes(text.toLowerCase())) {
                        return book;
                }
        })
};

export const CartContainsBook = (title) => {
        var DoesContain = false;
        CartList.forEach(book => {
                if (book.title === title) {
                        console.log(title);
                        DoesContain = true;
                }
        });
        return DoesContain;
}

export const PriceInCart = () => {
        var Price = 0;
        CartList.forEach(book => {
                Price += book.price;
        });
        return Price;
}

// [
//         {   title: "The Glimmer Crisis",
//         pageCount: 300,
//         price: "$20.00",
//         description: "Monsters have always existed. They've just gotten really good at hiding, when they follow the rules. It's Kevin's job to make sure the monsters (known as Myths) keep the rules. However, things start to go wrong when something happens to the supply of Glimmer which all Myths rely on to stay hidden." },

//         {   title: "The Strongest Mindbender",
//         pageCount: 300,
//         price: "$25.00",
//         description: "Some Myths have adjusted to the world outside of the Vale quite well. Others, like Kevin, are having a difficult time finding their place in the larger world. Kevin has made it his goal to gather up all of the Fiction escapees (while also stopping any other trouble-making Myths who rear their heads). Things get more complicated once the little girl of Todd and Claire goes missing, and Will is the suspect." },

//         {   title: "The Collector of Death",
//         pageCount: 300,
//         price: "$20.00",
//         description: "Unbeknownst to most, the world exists in the balance of good and evil. Tainted energy is what propels this balance. Tainted energy, if left to grow out of hand, forms Demons (nightmarish creatures invisible to most). Tainted energy can also be harnessed by a select few to destroy Demons. After the strongest Demon Zarich was trapped in an ancient dagger, good began to get the upper hand. Until the power of the dagger was unleashed, releasing Zarich's sould once more." }
// ]