import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";

import { Header } from './components/Header/Header';

import styles from './App.scss';
import {Footer} from "./components/Footer/Footer";
import {Content} from "./components/Content/Content";
import {Hero} from "./components/Hero/Hero";
import {Catalog, data} from "./components/Catalog/Catalog";
import {ItemPage} from "./components/ItemPage/ItemPage";



function App() {
  return (
      <div className={styles.app}>
        <Router>
          <Header />
            <Switch>
                <Route exact path="/">
                    <Hero />
                    <Content />
                </Route>
                <Route exact path="/home">
                    <Hero />
                    <Content />
                </Route>
                <Route exact path="/catalog">
                    <Catalog />
                </Route>
                <Route exact path='/catalog/info/:id'>
                    <ItemPage data={data}/>
                </Route>
                <Route exact path="/cart">
                    <div>Coming soon..</div>
                </Route>
            </Switch>
            <Footer/>
        </Router>
      </div>
  );
}

export default App;