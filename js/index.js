import {
    addItemToPage,
    clearInputs,
    getInputValues, renderItemList,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortItemsASC = document.getElementById("sort_items_asc");
const sortItemsDESC = document.getElementById("sort_items_desc");
const itemsCounter = document.getElementById("items_counter");

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
    const {title, description, price} = getInputValues();
    clearInputs();

    addItem({
        title,
        desc: description,
        price,
    });
});
findButton.addEventListener("click", (event) => {
    event.preventDefault();
    const foundItems = items.filter(item => item.title.search(findInput.value) !== -1);
    itemsCounter.innerHTML = `${foundItems.length}`;
    renderItemList(foundItems);
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