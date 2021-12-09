import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";

import {Header} from './components/Header/Header';

import styles from './App.scss';
import {Footer} from "./components/Footer/Footer";
import {Content} from "./components/Content/Content";
import {Hero} from "./components/Hero/Hero";
import {Catalog} from "./components/Catalog/Catalog";
import {ItemPage} from "./components/ItemPage/ItemPage";

import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Cart} from "./components/Cart/Cart";
import {Profile} from "./components/Profile/Profile";
import {Register} from "./components/Profile/Register";
import {Login} from "./components/Profile/Login";
import {Logout} from "./components/Profile/Logout";
import { auth } from "./firebase/firebase";
import {Loader} from "./components/Catalog/Loader";
import {AuthRoute} from "./firebase/auth/AuthRoute";


function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const [isLog, setIsLog] = useState<boolean>(false)

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                console.log('user detected');
                setIsLog(true);
            } else {
                console.log('no user detected');
                setIsLog(false);
            }
            setLoading(false);
        })
    }, [])

    if(loading) {
        return <Loader />
    }
    return (
        <Provider store={store}>
            <div className={styles.app}>
                <Router>
                    {isLog && <Header />}
                    <Switch>
                        <Route exact path="/register">
                            <Register/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/logout">
                            <AuthRoute>
                                <Logout/>
                            </AuthRoute>
                        </Route>
                        <Route exact path="/">
                            <AuthRoute>
                                <Hero />
                                <Content />
                            </AuthRoute>
                        </Route>
                        <Route exact path="/catalog">
                            <AuthRoute>
                                <Catalog />
                            </AuthRoute>
                        </Route>
                        <Route exact path='/catalog/info/:id'>
                            <AuthRoute>
                                <ItemPage />
                            </AuthRoute>
                        </Route>
                        <Route exact path="/cart">
                            <AuthRoute>
                                <Cart />
                            </AuthRoute>
                        </Route>
                        <Route exact path="/profile">
                            <AuthRoute>
                                <Profile />
                            </AuthRoute>
                        </Route>
                    </Switch>

                    {isLog && <Footer />}
                </Router>
            </div>
        </Provider>
    );
}

export default App;