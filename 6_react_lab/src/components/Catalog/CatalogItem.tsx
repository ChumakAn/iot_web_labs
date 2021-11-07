import { Link } from "react-router-dom";
import styles from "./CatalogItem.module.scss";

interface CatalogItemProps {
    id: number | string;
    title: string;
    price: number;
    description: string;
}


export const CatalogItem = (props: CatalogItemProps) => {
    return (
        <div className={styles.catalogItem}>
            <img className={styles.itemImage} src="https://content.rozetka.com.ua/goods/images/big/194271151.jpg" alt="item"/>
            <p className={styles.itemTitle}>{props.title}</p>

            <p>{props.description}</p>

            <p>{props.price}</p>
            <p>
                <Link className={styles.view_more_button} to={{pathname: `catalog/info/${props.id}`}}>More</Link>
            </p>
        </div>
    )
}