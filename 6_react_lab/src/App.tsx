import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import { Header } from './components/Header/Header';
import { Hero } from "./components/Hero/Hero";

import styles from './App.scss';
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";


function App() {
  return (
      <div className={styles.app}>
        <Router>
          <Header />
            <Hero/>
            <Content/>
            <Footer/>
        </Router>
      </div>
  );
}

export default App;