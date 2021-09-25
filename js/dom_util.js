const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const priceInput = document.getElementById("price_input");
const itemsContainer = document.getElementById("items_container");

const getItemId = (id) => `item-${id}`;
const getItemToEdit = (id) => `edit-${id}`;

const itemTemplate = ({id, title, desc, price}) =>
    `<li id="${getItemId(id)}" class="item-card">
<img src= "https://content.rozetka.com.ua/goods/images/big/194586782.jpg"
class = "card image"
width="375"
alt="card image"/>
<div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class = "card-paragraph">${desc}</p>
    <p class="card-paragraph">${price}</p>
    <div class="button-wrapper">
    <button class="card-edit-button">Edit</button>
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

export const addItemToPage = ({id, title, desc, price}) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({id, title, desc, price})
    );
};
export const renderItemList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);

    }

};