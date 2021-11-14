import styles from "./ItemPage.module.scss";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getById} from "../../services/api";
import {Loader} from "../Catalog/Loader";


export const ItemPage = () => {

    const {id} = useParams<{ id: string }>();
    const [item, setItem] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(async () => {
            setItem(await getById(id));
            setLoading(false);
        }, 300)
    }, [id])

    return (
        <div>
            {
                loading ? (
                    <Loader/>
                ) : (<>
                    <div className={styles.item_info}>
                        <img className={styles.image}
                             src="https://content.rozetka.com.ua/goods/images/big/194271151.jpg"
                             alt="item"/>
                        <div className={styles.description}>
                            <h1>{item?.title}</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa officia exercitationem ad
                                ipsum dolorum ut corporis est eius soluta harum, magni omnis voluptatibus esse ducimus
                                quasi sed temporibus et aperiam? Doloribus cumque nesciunt rem vero?</p>
                        </div>
                    </div>
                    <div className={styles.price_and_buttons}>
                        <p className={styles.price}>Price: {item?.price} $</p>
                        <div>
                            <Link className={styles.view_more_button} to={`/catalog`}>Go back</Link>
                            <Link className={styles.view_more_button} to={`/cart`}> Add to cart</Link>
                        </div>
                    </div>
                </>)
            }

        </div>
    )
}