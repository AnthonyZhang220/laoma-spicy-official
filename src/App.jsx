import HeaderNav from "./components/HeaderNav/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Body/Menu";
import Contact from "./components/Body/Contact";
import Home from "./components/Body/Home";
import Delivery from "./components/Body/Delivery";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div>
                <HeaderNav />
                <Route exact path="/" component={Home} />
                <Route path="/Menu" component={Menu} />
                <Route path="/Delivery" component={Delivery} />
                <Route path="/Contact_Us" component={Contact} />
                <Cart/>
            </div>
        </Router>
    );
};

export default App;
