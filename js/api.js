import {
    allItems,
    getBody,
    onEditItem,
    onRemoveItem,
    clearInputs,
    refetchAllItems,
} from "./index.js"

import {
    renderItemsList
} from "./templates.js"

axios.defaults.baseURL = "http://localhost:3000/api/items"

export const getData = () => {
    axios
        .get()
        .then(response => {
            if (allItems){
                allItems.length = 0;
                allItems.push(response.data, onEditItem, onRemoveItem);
            }
            else {allItems.push(response.data);}
            renderItemsList(response.data, onEditItem, onRemoveItem)
        })
        .catch(err => {
            console.log(err, err.response);})

    return allItems;
};


export const sendData = () => {
    axios
        .post('', getBody())
        .then( () => {
            refetchAllItems(allItems);
            clearInputs();
        })
        .catch(err => {
            console.log(err, err.response);
        });
};

export const deleteData = (id) => {
    axios
        .delete(`/${id}`)
        .then( () => { refetchAllItems(allItems) })
        .catch(err => {
            console.log(err, err.response);
        });
};

export const editData = (id) =>{
    axios
        .put(`/${id}`, getBody())
        .then( () => {
            refetchAllItems(allItems);
            clearInputs();
        })
        .catch( err => {
            console.log(err, err.response)
        });
};