import {CatalogItem} from "./CatalogItem";
import styles from "./Catalog.module.scss";
import {ChangeEvent, useState} from "react";


export interface dataProps {
    id: string | number;
    title: string;
    price: number;
    description: string;
}

export const data: dataProps[] = [
    {"id": 1,"title": "item1", price:200, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": 2,"title": "item2", price:350,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": 3,"title": "item3", price:270,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": 4,"title": "item4", price:274,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": 5,"title": "item5", price:195,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": 6,"title": "item6", price:250,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": 7,"title": "item7", price:295,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": 8,"title": "item8", price:125,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": 9,"title": "item5", price:430,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": 10,"title": "item6", price:320,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id": 11,"title": "item7", price:475,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
]
export const itemList = data.map( (item) => <CatalogItem key={item.id} id={item.id} title={item.title} price={item.price} description={item.description}/>)

export const Catalog = () => {

        const [query, setQuery] = useState('');
        const [result, setResult] = useState<dataProps[] | undefined>();

        const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const enteredName: string = event.target.value;
            setQuery(enteredName);
        }

        const searchByTitle = () => {
            const foundItems = data.filter( (item) =>
                item.title.toLowerCase().includes(query.toLocaleLowerCase())
            );
            setResult(foundItems)
        }
        const [showMore, setShowMore] = useState(true);
        const [count, setCount] = useState(8);

        const showMoreButton = () => {
            setCount(count + 8);
            const newShowMore = count < 8;
            setShowMore(newShowMore)
        }
    const [sortedASC, setSortedASC] = useState<dataProps[] | undefined>();
    const [sortedDESC, setSortedDESC] = useState<dataProps[] | undefined>();
        const sortAsc = () =>{
            const sortItems = data.sort((a, b) => (a.price > b.price) ? 1 : -1);
            setSortedASC(sortItems)
        }
        const sortDesc = () =>{
            const sortedItems = data.sort((a, b) => (a.price < b.price) ? 1 : -1);
            setSortedDESC(sortedItems)
        }
        return (
            <div>
                <div className={styles.search}>
                    <div>
                    <input type="text" placeholder="What are you looking for?" onChange={inputHandler}/>
                    <button className={styles.search_button} type="submit" onClick={searchByTitle}> Search </button>
                    </div>
                    <div>
                    <button className={styles.search_button} type="submit" onClick={sortAsc}>Sort ASC</button>
                    <button className={styles.search_button} type="submit" onClick={sortDesc}>Sort DESC</button>
                    </div>
                </div>

                <h1 className={styles.catalogTitle}>Catalog</h1>
                <div className={styles.wrapper}>
                    {result && result.length > 0 ? (
                        [...result.slice(0, count)].map( item => <CatalogItem key={item.id} id={item.id} title={item.title} price={item.price} description={item.description}/>)
                    ) : !result ? (
                        [...data.slice(0, count)].map( item => <CatalogItem key={item.id} id={item.id} title={item.title} price={item.price} description={item.description}/>)
                    ) : (
                        <h2>No Items Found</h2>
                    )}
                </div>
                <div className={styles.button_wrapper}>

                        { showMore
                        &&
                        <button className={styles.view_more_button} name="view more button" onClick={showMoreButton}>View More</button>
                        }
                </div>
            </div>
        )
}