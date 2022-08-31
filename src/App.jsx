import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Cover from "./components/CoverPage/Cover"
import HeaderNav from "./components/MainPage/HeaderNav/HeaderNav";
import Home from "./components/MainPage/Home/Home";
import Cart from "./components/MainPage/Cart/Cart";
import Footer from "./components/MainPage/Footer/Footer";
import Menu from "./components/MainPage/Menu/Menu";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: "#c59d5f",
        },
    },
    typography: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        h1: {
            fontSize: "5rem",
            fontWeight: 500,
        },
        h2: {
            fontSize: "4rem",
            fontWeight: 500,
        },
        h3: {
            fontSize: "3.25rem",
            fontWeight: 500,
        },
        h4: {
            fontSize: "2.25rem",
            fontWeight: 500,
        },
        h5: {
            fontSize: "1.75rem",
            fontWeight: 500,
        },
        h6: {
            fontSize: "1.25rem",
            fontWeight: 500,
        },
    }
});

const AppLayout = () => (
    <>
        <HeaderNav />
        <Cart />
        <Footer />
    </>
)

const App = () => {
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
