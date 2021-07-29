import HeaderNav from './components/HeaderNav/index';
// import Contact from './components/Body/Contact/index';
import './App.css';
import {Component} from "react";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderNav/>
                {/*<Contact/>*/}
            </div>
        );
    }
}
