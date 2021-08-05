import HeaderNav from "./components/HeaderNav/index";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Menu from "./components/Body/Menu";
import Contact from "./components/Body/Contact";
import Home from "./components/Body/Home";

const App = ()=> {
    return (
      <Router>
            <HeaderNav/>
        <Route path="/Home">
            <Home/>
        </Route>
        <Route path="/Menu">
            <Menu/>
        </Route>
        <Route path="/Contact Us">
          <Contact/>
          </Route>
        </Router>
    );
};

export default App;
