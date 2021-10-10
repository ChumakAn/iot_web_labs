import {
    addItemToPage,
    renderItemsList,
    DELETE_BUTTON_PREFIX,
    EDIT_BUTTON_PREFIX
} from "./templates.js";

import {
    getData,
    sendData,
    editData,
    deleteData
} from "./api.js"

import {
    submitinModal,
    editedModal,
    deletedModal
} from "./modal.js"

const inputs = document.querySelectorAll('input');
const nameInput = document.getElementById("name_input");
const submitInputs = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortButtonASC = document.getElementById("sort_button_asc");
const sortButtonDESC = document.getElementById("sort_button_desc");
const priceInput = document.getElementById("price_input");
const error_message = document.getElementById("message");
const countButton = document.getElementById("count_button");
const itemCounter = document.getElementById("counter");

export let allItems = [];

export const getBody = () => {
    var myForm = document.getElementById('add_form');
    var body = new FormData(myForm);
    return body
}

export const onRemoveItem =  (event) => {
    const itemId = event.target.id.replace(DELETE_BUTTON_PREFIX, "")
    deleteData(itemId);
    deletedModal();
}

export const onEditItem =  (event) => {
    const itemId = event.target.id.replace(EDIT_BUTTON_PREFIX, "");
    if (validate()) { editData(itemId), editedModal() };
    refetchAllItems();
}

export const refetchAllItems = () => {
    const items =  getData();
    renderItemsList(items, onEditItem, onRemoveItem);
};

const findItems = (items) => {
     const foundItems = items[0].filter((items) => items.title.search(findInput.value) !== -1);
     return foundItems;

};

const sortItemsASC = (items) => {
    const sortedItems = items[0].sort((a, b) => (a.price < b.price) ? 1 : -1);
    return sortedItems;
}

const sortItemsDESC = (items) => {
    const sortedItems = items[0].sort((a, b) => (a.price > b.price) ? 1 : -1);
    return sortedItems;
}

export const clearInputs = () => {
    inputs.forEach(input =>  input.value = '');
};

cancelFindButton.addEventListener("click", () => {
    refetchAllItems(allItems);
    clearInputs();
})

submitInputs.addEventListener('click', (event) => {
    event.preventDefault();
    if (validate()) {
        sendData(), submitinModal() }
    clearInputs();
});

sortButtonASC.addEventListener('click', (event) => {
    event.preventDefault();
    renderItemsList(sortItemsASC(allItems));
});

sortButtonDESC.addEventListener('click', (event) => {
    event.preventDefault();
    renderItemsList(sortItemsDESC(allItems));
});


findButton.addEventListener("click", () => {
    error_message.style.padding = "10px";

    if (findInput.value == 0) {
        error_message.textContent = "What you want to find?"
    } else {
        renderItemsList(findItems(allItems));
        clearInputs();
        error_message.style.display = "none"
    }
});

countButton.addEventListener("click", (event) => {
    event.preventDefault();
    itemCounter.textContent = `Total amount of items: ${allItems[0].length}`;
});

const validate = () => {
    error_message.style.padding = "10px";
    var text;

    if(nameInput.value.length < 3){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    } else if(priceInput.value.length == 0){
        text = "Please Enter valid Price";
        error_message.innerHTML = text;
        return false;
    } else{
        error_message.style.display = "none";
        return true;
    }
}

window.onload = () => {
    renderItemsList(getData());
}