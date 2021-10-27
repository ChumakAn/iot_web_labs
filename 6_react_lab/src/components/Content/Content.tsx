
import { ContentItem } from "./ContentItem"

import styles from "./Content.module.scss"

export const Content = () => {
    return (
        <section className={styles.section}>
            <span className={styles.heading}>Popular Items</span>

            <div className={styles.content}>
                <ContentItem label="Girl Samurai" content="
                        – Pre-Shrunk 100% cotton.
                        – FULLY MACHINE WASHABLE.
                        – Made To Order.
                        – We use DTG Technology to print onto t-shirt.
                        – We only use high quality and durable t-shirt ."
                             imageURL="https://content.rozetka.com.ua/goods/images/big/194271151.jpg"/>
                <ContentItem label="Anime Tyan" content="– Pre-Shrunk 100% cotton.
                        – FULLY MACHINE WASHABLE.
                        – Made To Order.
                        – We use DTG Technology to print onto t-shirt.
                        – We only use high quality and durable t-shirt ." imageURL="https://content.rozetka.com.ua/goods/images/big/194271060.jpg"/>
                <ContentItem label="Gothic Tyan" content="– Pre-Shrunk 100% cotton.
                        – FULLY MACHINE WASHABLE.
                        – Made To Order.
                        – We use DTG Technology to print onto t-shirt.
                        – We only use high quality and durable t-shirt ." imageURL="https://content1.rozetka.com.ua/goods/images/big/194271068.jpg"/>
            </div>

            <div className={styles.viewMore}>
                <button className={styles.viewMoreButton} name="viewMore">
                    View More
                </button>
            </div>
        </section>
    )
}