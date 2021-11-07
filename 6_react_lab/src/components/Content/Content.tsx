
import { ContentItem } from "./ContentItem"

import styles from "./Content.module.scss"
import {useState} from "react";

export const Content = () => {
    const [showMore, setShowMore] = useState(true);
    const [count, setCount] = useState(3);

    const imageURL = "https://content.rozetka.com.ua/goods/images/big/194271151.jpg";
    
    const MOST_POPULAR_ITEMS = [
        {"label": "T-shirt", "content" : "Pre-Shrunk 100% cotton. FULLY MACHINE WASHABLE.Made To Order.– We use DTG Technology to print onto t-shirt.We only use high quality and durable t-shirt.", "imageURL": imageURL},
        {"label": "T-shirt", "content" : "Pre-Shrunk 100% cotton. FULLY MACHINE WASHABLE.Made To Order.– We use DTG Technology to print onto t-shirt.We only use high quality and durable t-shirt.", "imageURL": imageURL},
        {"label": "T-shirt", "content" : "Pre-Shrunk 100% cotton. FULLY MACHINE WASHABLE.Made To Order.– We use DTG Technology to print onto t-shirt.We only use high quality and durable t-shirt.", "imageURL": imageURL},
        {"label": "T-shirt", "content" : "Pre-Shrunk 100% cotton. FULLY MACHINE WASHABLE.Made To Order.– We use DTG Technology to print onto t-shirt.We only use high quality and durable t-shirt.", "imageURL": imageURL},
        {"label": "T-shirt", "content" : "Pre-Shrunk 100% cotton. FULLY MACHINE WASHABLE.Made To Order.– We use DTG Technology to print onto t-shirt.We only use high quality and durable t-shirt.", "imageURL": imageURL},
        {"label": "T-shirt", "content" : "Pre-Shrunk 100% cotton. FULLY MACHINE WASHABLE.Made To Order.– We use DTG Technology to print onto t-shirt.We only use high quality and durable t-shirt.", "imageURL": imageURL},

    ]
    const showMoreButton = () => {
        setCount(count + 3);
        const newShowMore = count < 3;
        setShowMore(newShowMore)
    }
      

    return (
        <section className={styles.section}>
            <span className={styles.heading}>Popular Items</span>

            <div className={styles.items}>
                { [...MOST_POPULAR_ITEMS.slice(0, count)].map( (item, i) => <ContentItem key={i} label={item.label} content={item.content} imageURL={item.imageURL} />) }
            </div>
            <div className={styles.viewMore}>
                { showMore
                &&
                <button className={styles.viewMoreButton} name="view more button" onClick={showMoreButton}>View More</button>
                }
            </div>
        </section>
    )
}