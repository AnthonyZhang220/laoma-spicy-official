import { Suspense, lazy } from "react";
import HeaderNav from "../HeaderNav/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from '../Footer/index';
import Cart from '../Cart/index';


const Home = lazy(() => import("./Home/index"))
const Menu = lazy(() => import("./Menu/index"))
const Reservation = lazy(() => import("./Reservation/index"))

export default function Main() {
    return (
        <Router>
            <HeaderNav />
            <Suspense fallback={<div>Loading your favorite Hot Spicy Stew...</div>}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reservation" element={<Reservation />} />
                </Routes>
            </Suspense>
            <Cart />
            <Footer />
        </Router>
    );

};
