import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Cover from "./components/CoverPage/Cover"
import HeaderNav from "./components/MainPage/HeaderNav/HeaderNav";
import Home from "./components/MainPage/Home/Home";
import Cart from "./components/MainPage/Cart/Cart";
import Footer from "./components/MainPage/Footer/Footer";
import Menu from "./components/MainPage/Menu/Menu";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import "./App.scss";
import SpeedDialMenu from "./components/MainPage/SpeedDialMenu/SpeedDialMenu";
import Booking from "./components/MainPage/Home/Booking/Booking";



const AppLayout = ({ openMobileMenu, handleMobileMenu }) => (
    <>
        <HeaderNav openMobileMenu={openMobileMenu} handleMobileMenu={handleMobileMenu} />
        <Outlet />
        <Cart />
        <Booking />
        <Footer />
    </>
)

const App = () => {
    const [openBooking, setOpenBooking] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(true);
    const handleOpenBooking = () => {
        setOpenBooking(true);
    }

    const handleCloseBooking = () => {
        setOpenBooking(false);
    }
    const handleMobileMenu = () => {
        setOpenMobileMenu((prevOpenMobileMenu) => !prevOpenMobileMenu);
    }

    let theme = createTheme({
        palette: {
            primary: {
                main: "#c59d5f",
            },
        },
        typography: {
            fontFamily: ["Helvetica", "sans-serif"].join(","),
        }
    });

    theme = responsiveFontSizes(theme)

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Cover />} />
                    <Route element={<AppLayout openMobileMenu={openMobileMenu} handleMobileMenu={handleMobileMenu} />}>
                        <Route path="/home" element={<Home openMobileMenu={openMobileMenu} />} />
                        <Route path="/menu" element={<Menu openMobileMenu={openMobileMenu} />} />
                    </Route>
                </Routes>
            </Router>
            <Booking openBooking={openBooking} handleCloseBooking={handleCloseBooking} />
            <SpeedDialMenu handleOpenBooking={handleOpenBooking} />
        </ThemeProvider>
    );

};

export default App;
