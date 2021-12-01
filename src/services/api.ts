import axios from 'axios';
import {CatalogItem, CatalogItemProps} from "../components/Catalog/CatalogItem";
const http = axios.create({
    baseURL: 'http://localhost:3000/api/v2/items',
    headers: {
        'Content-type': 'application-json'
    }
});


export const getFilteredData = async (title: string, sorting: boolean) => {
    let url = `http://localhost:3000/api/v2/items?`

    if(title !== undefined && title !== '') {
        url += `title=${title}&`;
    }
    if(sorting !== undefined){
        url += `sorting=${sorting}`;
    }

    console.log('url: ', url);

    return (await http.get(url)).data
}

export const getById = async (id: string | number) => {
    let url = `http://localhost:3000/api/v2/items/${id}`
    return (await http.get(url)).data
}
