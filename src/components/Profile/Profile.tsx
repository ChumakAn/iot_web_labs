import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";

export function Profile() {
    return (
        <div className={styles.profile}>
            <h1 className={styles.header}>User profile</h1>
            <div ><img className={styles.image} src="https://source.unsplash.com/random/" alt="random avatar" /></div>
            <h3 className={styles.user_name}>User Name</h3>
            <div className={styles.button_wrapper}>
                <p className={styles.logout}>
                    <Link className={styles.link} to="/logout">Logout</Link>
                </p>
            </div>
        </div>
    )
}