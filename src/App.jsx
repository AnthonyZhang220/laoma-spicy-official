import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Cover from "./components/CoverPage/Cover"
import HeaderNav from "./components/MainPage/HeaderNav/HeaderNav";
import Home from "./components/MainPage/Home/Home";
import Cart from "./components/MainPage/Cart/Cart";
import Footer from "./components/MainPage/Footer/Footer";
import Menu from "./components/MainPage/Menu/Menu";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";

import "./App.scss";



const AppLayout = () => (
    <>
        <HeaderNav />
        <Outlet />
        <Cart />
        <Footer />
    </>
)

const App = () => {
    const isTablet = useMediaQuery('(max-width:1000px)');
    const isMobile = useMediaQuery('(max-width:650px)');

    const theme = createTheme({
        palette: {
            primary: {
                main: "#c59d5f",
            },
        },
        typography: {
            fontFamily: ["Open Sans", "sans-serif"].join(","),
            h1: {
                fontSize: isTablet ? isMobile ? "3.25rem" : "4rem" : "5rem",
                fontWeight: 500,
            },
            h2: {
                fontSize: isTablet ? isMobile ? "2.75rem" : "3.25rem" : "4rem",
                fontWeight: 500,
            },
            h3: {
                fontSize: isTablet ? isMobile ? "2.25rem" : "2.75rem" : "3.25rem",
                fontWeight: 500,
            },
            h4: {
                fontSize: isTablet ? isMobile ? "1.75rem" : "2rem" : "2.25rem",
                fontWeight: 500,
            },
            h5: {
                fontSize: isTablet ? isMobile ? "1.25rem" : "1.5rem" : "1.5rem",
                fontWeight: 500,
            },
            h6: {
                fontSize: isTablet ? isMobile ? "0.75rem" : "1rem" : "1.25rem",
                fontWeight: 500,
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Suspense fallback={<div>Loading your favorite Hot Spicy Stew...</div>}>
                    <Routes>
                        <Route exact path="/" element={<Cover />} />
                        <Route element={<AppLayout />}>
                            <Route path="/home" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
        </ThemeProvider>
    );

};

export default App;
