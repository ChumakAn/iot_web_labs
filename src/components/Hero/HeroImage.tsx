import logoImage from "../../assets/anime_tshirt.png";
import styles from "./HeroImage.module.scss";

export const HeroImage = () => {
    return (
        <div className={styles.heroImage}>
            <img src={logoImage} alt="hero image"/>
        </div>
    );
};