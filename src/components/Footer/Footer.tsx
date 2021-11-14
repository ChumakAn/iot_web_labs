import { Logo } from "../Logo/Logo"
import styles from "./Footer.module.scss"

// logo media imports
import facebook from "../../assets/facebook-white-grey.png"
import telegram from "../../assets/telegram-white-nobg.png"
import youtube from "../../assets/youtube-white-grey.png"
import instagram from "../../assets/instagram-white.png"


export const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <Logo />
                <div className={styles.media}>
                    <img src={facebook} alt="facebook" style={{width: '35px', height: '35px'}}/>
                    <img src={telegram} alt="telegram" style={{width: '35px', height: '35px'}}/>
                    <img src={youtube} alt="youtube" style={{width: '45px', height: '45px'}}/>
                    <img src={instagram} alt="instagram" style={{width: '45px', height: '45px'}} />
                </div>
            </div>
            <div className={styles.rights}>
                <p>
                    2021 IoT LPNU
                    <br/>
                    © All rights reserved (нє)
                </p>
            </div>
        </footer>
    )
}