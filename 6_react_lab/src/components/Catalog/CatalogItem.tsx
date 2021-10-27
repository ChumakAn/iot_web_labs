import { Button } from "../Button/Button";
import styles from "./CatalogItem.module.scss";

interface CatalogItemProps {
    key: number;
    title: string;
    /* content: string;
    price: number; */
    price: number;
}


export const CatalogItem = (props: CatalogItemProps) => {
    return (
        <div className={styles.catalogItem}>
            <img className={styles.itemImage} src="https://content.rozetka.com.ua/goods/images/big/194271151.jpg" alt="item"/>
            <p className={styles.itemTitle}>{props.title}</p>

            <p>props.content</p>

            <p>{props.price}</p>
            <p><Button label="More"/></p>
        </div>
    )
}