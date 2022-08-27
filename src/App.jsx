import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from "./components/CoverPage/index"
import styles from "./App.module.css";


const Main = lazy(() => import("./components/MainPage/Main/Main"))

const App = () => {
    return (
        <Router>
            <div className={styles.body}>
                <Suspense fallback={<div>Loading your favorite Hot Spicy Stew...</div>}>
                    <Routes>
                        <Route exact path="/" element={<Cover />} />
                        <Route path="/main" element={<Main />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );

};

export default App;
