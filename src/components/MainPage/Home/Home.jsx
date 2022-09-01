import Review from './Review/Review'
import MapContainer from './GoogleMap/GoogleMap'
import Special from './Special/Special';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import Booking from './Booking/Booking';
import Map from './Map/Map';
import Gallery from './Gallery/Gallery';

import "./Home.scss";

export default function Home() {
    return (
        <>
            <Hero />
            <Booking />
            <Special />
            <Gallery />
            {/* <Review />
            <Map /> */}
            <Info />
            {/* <MapContainer /> */}
        </>
    )
}
