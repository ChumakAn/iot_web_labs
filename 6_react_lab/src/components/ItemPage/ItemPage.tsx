import { dataProps } from "../Catalog/Catalog";

import styles from "./ItemPage.module.scss";
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";

interface itemPageProps {
    data: dataProps[]
}
export const ItemPage = (props: itemPageProps) => {
    const id = window.location.pathname.split("/").pop();
    let data = props.data;
    const item = data.filter( item => item.id == id).shift();

    return (
        <div>
            <div className={styles.item_info}>
                <img className={styles.image} src="https://content.rozetka.com.ua/goods/images/big/194271151.jpg"
                     alt="item"/>
                <div className={styles.description}>
                <h1>{item?.title}</h1>
                    <p>{item?.description}</p>
                </div>
            </div>
                <div className={styles.price_and_buttons}>
                    <p className={styles.price}>Price: {item?.price} $</p>
                    <div>
                        <Link className={styles.view_more_button} to={`/catalog`}>Go back</Link>
                        <Link className={styles.view_more_button} to={`/cart`}> Add to cart</Link>
                    </div>
                </div>

        </div>
    )
}