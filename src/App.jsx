import React,{Component} from "react";
import HeaderNav from "./components/MainPage/HeaderNav/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/MainPage/Body/Menu";
import Contact from "./components/MainPage/Body/Contact";
import Home from "./components/MainPage/Body/Home";
import Delivery from "./components/MainPage/Body/Delivery";
import Cart from "./components/MainPage/Cart";
import Footer from './components/MainPage/Footer';
import styles from "./App.module.css";

class App extends Component {
    render(){
        return (
            <Router>
                <div className={styles.body}>
                    <HeaderNav/>
                    <Route exact path="/" component={Home} />
                    <Route path="/Menu" component={Menu} />
                    <Route path="/Delivery" component={Delivery} />
                    <Route path="/Contact_Us" component={Contact} />
                    <Footer/>
                    <Cart/>
                </div>
            </Router>
        );
    }
    
};

export default App;
