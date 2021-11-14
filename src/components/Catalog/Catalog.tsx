import {CatalogItem} from "./CatalogItem";
import styles from "./Catalog.module.scss";
import {ChangeEvent, useEffect, useState} from "react";
import {getFilteredData} from "../../services/api";
import {Loader} from "./Loader";


export interface dataProps {
    id: string | number;
    title: string;
    price: number;
}

export const Catalog = () => {

    const [items, setItems] = useState<dataProps[]>();
    const [titleFilter, setTitleFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(async () => {
            setItems(await getFilteredData(titleFilter, priceFilter));
            setLoading(false);
        }, 300)
    }, [titleFilter, priceFilter])

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const enteredName: string = event.target.value;
        setLoading(true);
        setTimeout(async () => {
            setTitleFilter(enteredName);
            setLoading(false)
        }, 300)
    }
    const priceHandler = () => {
        setPriceFilter(!priceFilter);
    }
    const [showMore, setShowMore] = useState(true);
    const [count, setCount] = useState(4);

    const showMoreButton = () => {
        setCount(count + 4);
        const newShowMore = count < 4;
        setShowMore(newShowMore)
    }

    return (
        <div>
            <div className={styles.search}>
                <div>
                    <input type="text" placeholder="What are you looking for?" onChange={inputHandler}/>
                </div>
                <div>
                    <button className={styles.search_button} type="submit" onClick={priceHandler}>Sort</button>

                </div>
            </div>

            <h1 className={styles.catalogTitle}>Catalog</h1>
            <div className={styles.wrapper}>
                {loading ? (
                    <Loader/>
                ) : (items?.length ? (
                    [...items.slice(0, count)].map(item => <CatalogItem key={item.id} id={item.id} title={item.title}
                                                                        price={item.price}/>)
                ) : (
                    <h2>No Items Found</h2>
                ))
                }
            </div>
            <div className={styles.button_wrapper}>
                {showMore
                &&
                <button className={styles.view_more_button} name="view more button" onClick={showMoreButton}>View
                    More</button>
                }
            </div>
        </div>
    )
}