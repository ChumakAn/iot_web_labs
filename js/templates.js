const getItemId = (id) => `item-${id}`;

export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = "delete-button-";

const itemTemplate = ({ id, title, price }) => `
    <li id="${getItemId(id)}" class="item-card">
        <img
        src="https://content.rozetka.com.ua/goods/images/big/194586782.jpg"
        class="card-img"
        width="375"
        alt="card image"
        />
        <div class="card-body">
            <div>
                <h4 class="card-Name">${title}</h4>
                <p class="card-text">Price: ${price}</p>
            </div>
            <div>
            <span>
                <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="btn btn-outline-dark mt-4">
                Edit
                </button>
            </span>
            <span>
                <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="btn btn-dark mt-4">
                Delete
                </button>
            </div>
        </div>
    </li>
`;

export const addItemToPage = ({ id, title, price }, onEditItem, onRemoveItem ) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, price })
    );

    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);
    deleteButton.addEventListener("click", onRemoveItem);

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    editButton.addEventListener("click", onEditItem);
};

export const renderItemsList = (items, onEditItem, onRemoveItem,) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem, onRemoveItem);
    }
};