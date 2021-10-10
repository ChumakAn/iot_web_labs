const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const priceInput = document.getElementById("price_input");
const itemsContainer = document.getElementById("items_container");

const getItemId = (ItemId) => `item-${ItemId}`;

export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = "delete-button-";


const itemTemplate = ({ItemId, title, desc, price}) =>
    `<li ItemId="${getItemId(ItemId)}" class="item-card">
<img src= "https://content.rozetka.com.ua/goods/images/big/194586782.jpg"
class = "card image"
width="375"
alt="card image"/>
<div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class = "card-paragraph">${desc}</p>
    <p class="card-paragraph">${price}</p>
    <div class="button-wrapper">
    <button class="card-edit-button" id="${EDIT_BUTTON_PREFIX}${ItemId}">Edit</button>  
     <button id="${DELETE_BUTTON_PREFIX}${ItemId}" class="form__find-button-cancel">Delete</button>
    </div>
</div>
</li>
`;

export const getInputValues = () => {
    return {
        title: titleInput.value,
        description: descriptionInput.value,
        price: priceInput.value,
    };
};
export const clearInputs = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    priceInput.value = "";
};

export const addItemToPage = ({ItemId, title, desc, price}) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ItemId, title, desc, price})
    );
};

export const renderItemList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);

    }

};