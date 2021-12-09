import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase/firebase';
import styles from './Input.module.scss';

export const Register: React.FunctionComponent = (props) => {
    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();

    const signUpWithEmailAndPassword = () => {
        if (password !== confirm) setError('Passwords are not the same')
        if (error !== '') setError('');

        setRegistering(true);

        auth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result);
                history.push('/login');
            })
            .catch(error => {
                alert(error);

                if (error.code.includes('auth/weak-password')) {
                    setError('Please enter stronget password.');
                    alert(error);
                } else if (error.code.includes('auth/email-already-in-use')) {
                    setError('Email already in use.');
                    alert(error);
                } else {
                    setError('Unable to register. Please try again later.');
                    alert(error)
                }

                setRegistering(false);
            });
    }

    return (
        <div>
            <h1 className={styles.header}>Register Page</h1>
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

                <div>
                    <label className={styles.label} htmlFor="confirm">Confirm Password</label>
                    <input
                        className={styles.field}
                        autoComplete="new-password"
                        type="password"
                        name="confirm"
                        id="confirm"
                        placeholder="Confirm password"
                        onChange={event => setConfirm(event.target.value)}
                        value={confirm}
                    />
                </div>

                <button
                    className={styles.button}
                    disabled={registering}
                    style={{display: "block"}}
                    onClick={() => signUpWithEmailAndPassword()}
                >
                    Sign Up
                </button>
                <small>
                    <p className={styles.is_registered}>Already have an account? <Link className={styles.register_link}
                                                                                       to="/login">Login</Link>.</p>
                </small>
                <p style={{color: "red"}}>{error}</p>
            </form>
        </div>
    )
}