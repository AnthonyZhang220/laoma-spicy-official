import HeaderNav from "./components/HeaderNav/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Body/Menu";
import Contact from "./components/Body/Contact";

export default function App() {
  return (
    <Router>
      <div>
        <HeaderNav />
        <div>
          <Route path="/Menu" component={Menu}>
            <Menu />
          </Route>
        </div>
        <Route path="/Contact%20us">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}
