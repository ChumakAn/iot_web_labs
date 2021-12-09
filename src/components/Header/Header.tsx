import styles from "./Header.module.scss";
import { Logo } from "../Logo/Logo";
import { HeaderItem } from "./HeaderItem";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <nav>
                <div>
                    <HeaderItem label="Home" path="/"/>
                    <HeaderItem label="Catalog" path="/catalog"/>
                    <HeaderItem label="Cart" path="/cart"/>
                    <HeaderItem label="Profile" path="/profile"/>
                </div>
            </nav>
        </header>
    );
};