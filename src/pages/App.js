import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import About from "./About";
import Webdesign from "./WebDesign";
import Appdesign from "./AppDesign";
import GraphicDesign from "./GraphicDesign";
import Header from "../components/Header";
import Footer from '../components/Footer';
import MainFooter from '../components/MainFooter';
import DesignoFooter from '../components/DesignoFooter';
import '../styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/web-design">
            <Webdesign />
          </Route>
          <Route path="/app-design">
            <Appdesign />
          </Route>
          <Route path="/graphic-design">
            <GraphicDesign />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer/>

          <MainFooter />
         
      </div>
      <DesignoFooter />
    </Router>
  );
}

export default App;





