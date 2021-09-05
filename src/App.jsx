import HeaderNav from "./components/MainPage/HeaderNav/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/MainPage/Body/Menu";
import Reservations from "./components/MainPage/Body/Reservations";
import Home from "./components/MainPage/Body/Home";
import Delivery from "./components/MainPage/Body/Delivery";
import Footer from './components/MainPage/Footer';
// import Cart from './components/MainPage/CartDisplay/Cart';
import Blank from './components/MainPage/Blank'
import Retrieve from "./components/Retrieve";
import styles from "./App.module.css";

const App = () => {
    return (
        <Router>
            <div className={styles.body}>
                <HeaderNav />
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/Menu" >
                    <Menu />
                </Route>
                <Route path="/Delivery" >
                    <Delivery />
                </Route>
                <Route path="/Reservations" >
                    <Reservations />
                </Route>
                {/* <Retrieve /> */}
                <Blank/>
                <Footer />
            </div>
        </Router>
    );

};

export default App;
