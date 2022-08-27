import { Suspense, lazy } from "react";
import HeaderNav from "./components/MainPage/HeaderNav/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/MainPage/Footer';
import Cart from './components/MainPage/Cart';
import Blank from './components/MainPage/Blank'
import styles from "./App.module.css";


const Home = lazy(() => import("./routes/Home"))
const Menu = lazy(() => import("./routes/Menu"))
const Reservation = lazy(() => import("./routes/Reservation"))

const App = () => {
    return (
        <Router>
            <div className={styles.body}>
                <HeaderNav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Cart />
                    <Blank />
                    <Footer />
                </Routes>
            </div>
        </Router>
    );

};

export default App;
