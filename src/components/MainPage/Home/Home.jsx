import Review from './Review/Review'
import MapContainer from './GoogleMap/GoogleMap'
import Special from './Special/Special';
import Hero from './Hero/Hero';
import Info from './Info/Info';

import "./Home.scss";

export default function Home() {
    return (
        <>
            <Hero />
            <Special />
            <Review />
            <Info />
            {/* <MapContainer /> */}
        </>
    )
}
