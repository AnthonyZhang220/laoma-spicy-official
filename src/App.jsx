import { Suspense, lazy } from "react";
import HeaderNav from "./components/MainPage/HeaderNav/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/MainPage/Footer';
import Cart from './components/MainPage/Cart';
import Blank from './components/MainPage/Blank'
import styles from "./App.module.css";


const Home = lazy(() => import("../src/components/MainPage/Body/Home/index"))
const Menu = lazy(() => import("../src/components/MainPage/Body/Menu/index"))
const Reservation = lazy(() => import("../src/components/MainPage/Body/Reservation/index"))

const App = () => {
    return (
        <Router>
            <div className={styles.body}>
                <HeaderNav />
                <Suspense fallback={<div>Loading your favorite Hot Spicy Stew...</div>}>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/reservation" element={<Reservation />} />
                    </Routes>
                </Suspense>
                <Cart />
                <Blank />
                <Footer />
            </div>
        </Router>
    );

};

export default App;
