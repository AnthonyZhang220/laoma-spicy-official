import Special from './Special/Special';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import Gallery from './Gallery/Gallery';
import { Box } from '@mui/material';

import "./Home.scss";

export default function Home({ openMobileMenu }) {
    return (
        <Box className={openMobileMenu ? "main" : "menu-open"} id="main">
            <Hero />
            <Special />
            <Gallery />
            <Info />
        </Box>
    )
}
