import { Link } from "react-router-dom";
import styles from "./HeaderItem.module.scss";

interface HeaderItemProps {
    label: string;
    path: string;
}

export const HeaderItem = (props: HeaderItemProps) => {
    return (
        <Link className={styles.headerItem} to={props.path}>
            {props.label}
        </Link>
    )
}