import styles from "./CatalogItem.module.scss";
import {ItemInfoButton} from "./ItemInfoButton";
import {AddToCartButton} from "./AddToCartButton";

export interface CatalogItemProps {
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
            <p className={styles.buttons}>
                <ItemInfoButton itemId={props.id}/>
                <AddToCartButton id={props.id} title={props.title} price={props.price}/>


            </p>

        </div>
    )
}