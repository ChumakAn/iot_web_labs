import { Button } from "../Button/Button";
import styles from "./Hero.module.scss";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <HeroImage />
            <div>
                <h1>ITEM OF THE WEEK</h1>
                <h2 className={styles.heroName}>Naruto T-Shirt</h2>
                <p className={styles.about}>
                    <span>
                        T-SHIRT FEATURES:
                        <br/>
                        We use %100 Cotton shirts (fiber content may vary for different colors)
                        which brands name are UNISEX Bella + Canvas, Gildan.
                        We will ship one of these based on our stock
                    </span>
                    <br />
                    <span className={styles.more}>
                        <Button label="More"/>
                    </span>
                </p>
            </div>
        </div>
    );
};