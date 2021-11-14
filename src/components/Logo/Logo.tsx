
import logoImage from "../../assets/shop_logo.png";
 import styles from "./Logo.module.scss";
export const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logoImage} alt="logo"/>
        </div>
    );
};