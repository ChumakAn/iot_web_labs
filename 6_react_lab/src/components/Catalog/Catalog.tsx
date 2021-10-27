import {CatalogItem} from "./CatalogItem";
import styles from "./Catalog.module.scss";
import {CatalogHeader} from "./CatalogHeader";
import {Button} from "../Button/Button";

interface dataProps {
    id: number;
    title: string;
    price: number;
}

export const Catalog = () => {
    const data: dataProps[] = [
        {"id": 1,"title": "item1", price:200},
        {"id": 2,"title": "item2", price:350},
        {"id": 3,"title": "item3", price:270},
        {"id": 4,"title": "item4", price:274},
        {"id": 5,"title": "item5", price:195},
        {"id": 6,"title": "item6", price:250},
        {"id": 7,"title": "item7", price:295},
        {"id": 8,"title": "item8", price:195}
    ]

    const itemList = data.map( (item) => <CatalogItem key={item.id} title={item.title} price={item.price}/>)

    return (
        <div>
            <CatalogHeader/>
            <h1 className={styles.catalogTitle}>Catalog</h1>
            <div className={styles.wrapper}>
                {itemList}
            </div>
            <div className={styles.button_wrapper}>
                <Button label="View more"/>
            </div>
        </div>
    )
}