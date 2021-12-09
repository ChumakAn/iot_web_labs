import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

import styles from "./Input.module.scss";

export const Login: React.FunctionComponent = (props) => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();

    const signInWithEmailAndPassword = () => {
        if(error !== '') setError('');

        setAuthenticating(true);

        auth.signInWithEmailAndPassword(email, password)
            .then(result => {
                console.log("Logged in ", result);
                history.push('/')
            })
            .catch(error => {
                setError('Wrong email or password');
                alert(error);
                setAuthenticating(false);
            })
    }

    return (
        <div>
            <h1 className={styles.header}>Login Page</h1>
            <form className={styles.form}>
                <div>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                        className={styles.field}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                </div>

                <div>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input
                        className={styles.field}
                        autoComplete="new-password"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                </div>

                <button
                    className={styles.button}
                    disabled={authenticating}
                    style={{display: "block"}}
                    onClick={() => signInWithEmailAndPassword()}
                >
                    Login
                </button>
                <small>
                    <p className={styles.is_registered}>Don't have an account? <Link className={styles.register_link}  to="/register">Register</Link>.</p>
                </small>
                <p style={{color: "red"}}>{error}</p>
            </form>
        </div>
    )
}