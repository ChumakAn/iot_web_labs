import {
    addItemToPage,
    clearInputs,
    getInputValues, renderItemList,
} from "./dom_util.js";

const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const priceInput = document.getElementById("price_input");
const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortItemsASC = document.getElementById("sort_items_asc");
const sortItemsDESC = document.getElementById("sort_items_desc");
const itemsCounter = document.getElementById("items_counter");
const errorTitle = document.getElementById("errorTitle");
const errorPrice = document.getElementById("errorPrice");
const errorFind = document.getElementById("errorFind");



let items = [];

const addItem = ({title, desc, price}) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        title,
        desc,
        price,
    };
    items.push(newItem);
    addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const invalidSymbols = ["@", "#", "<", ">", "/", "\\", "*", "+", "-", "=", ")", "(", "[", "]",
        "{", "}", "&", "^", "%", "$","!", "~"];

    if(titleInput.value == 0){
        errorTitle.textContent = "Please enter a title";
        window.alert("Oops,something went wrong");

    }
    else if(invalidSymbols.some(symbol =>titleInput.value.includes(symbol))){
        errorTitle.textContent = "Wrong symbols";
        window.alert("Oops,something went wrong");
    }
    else if(priceInput.value <= 0) {
        errorPrice.textContent = "Please enter a valid number";
        window.alert("Oops,something went wrong");
    }
    else {
        const {title, description, price} = getInputValues();
        clearInputs();

        addItem({
            title,
            desc: description,
            price,
        });
        errorPrice.textContent = "";
        errorTitle.textContent = "";
    }
});
findButton.addEventListener("click", (event) => {
    event.preventDefault();
    if(findInput.value == 0) {
        errorFind.textContent = "Please, enter what you want to find";
        itemsCounter.innerHTML = `${items.length}`;
    }
    else {
        const foundItems = items.filter(item => item.title.search(findInput.value) !== -1);
        itemsCounter.innerHTML = `${foundItems.length}`;
        errorFind.textContent = "";
        renderItemList(foundItems);
    }

});

cancelFindButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderItemList(items);
    itemsCounter.innerHTML = `${items.length}`;
    findInput.value = "";
});
sortItemsASC.addEventListener("click", (event) => {
    event.preventDefault();
    items.sort((a, b) => (a.price < b.price) ? 1 : -1);
    renderItemList(items);

})
sortItemsDESC.addEventListener("click", (event) => {
    event.preventDefault();
    items.sort((a, b) => (a.price > b.price) ? 1 : -1);
    renderItemList(items);
});

renderItemList(items);