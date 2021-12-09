import React from 'react'
import {useHistory} from 'react-router-dom'
import {auth} from '../../firebase/firebase';


import styles from './Input.module.scss';

export const Logout: React.FunctionComponent = () => {
    const history = useHistory();

    const Logout = () => {
        console.log('logouted');

        auth.signOut()
            .then(() => history.push('/login'))
            .catch(error => alert(error));
    }

    return (
        <div>
            <h2 className={styles.header}>Are you sure you want to logout?</h2>
            <div className={styles.wrapper}>
                <button className={styles.button} onClick={() => history.goBack()}>Cancel</button>
                <button className={styles.button} onClick={() => Logout()}>Logout</button>
            </div>
        </div>
    )
}