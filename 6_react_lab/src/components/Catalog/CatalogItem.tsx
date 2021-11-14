import styles from "./CatalogItem.module.scss";
import {ItemInfoButton} from "./ItemInfoButton";

interface CatalogItemProps {
    id: number | string;
    title: string;
    price: number;

}


export const CatalogItem = (props: CatalogItemProps) => {
    return (
        <div className={styles.catalogItem}>
            <img className={styles.itemImage} src="https://content.rozetka.com.ua/goods/images/big/194271151.jpg" alt="item"/>
            <p className={styles.itemTitle}>{props.title}</p>

            <p>props.description</p>

            <p>{props.price}</p>
            <p>
                <ItemInfoButton itemId={props.id}/>
            </p>
        </div>
    )
}