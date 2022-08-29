import Review from './Review/Review'
import MapContainer from './Info/GoogleMap/GoogleMap'
import Special from './Special/Special';
import Hero from './Hero/Hero';
import Map from './Info/Map/Map';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Time from './Info/Time/Time';

import "./Home.scss";

export default function Home() {
    return (
        <>
            <Hero />
            <Special />
            <Review />
            <Box sx={{ flexGrow: 1, pt: "100px", pb: "100px" }}>
                <Grid container spacing={2} columns={12} >
                    <Grid item xs={5}>
                        <Time />
                    </Grid>
                    <Grid item xs={7}>
                        <Map />
                    </Grid>
                </Grid>
            </Box>
            {/* <MapContainer /> */}
        </>
    )
}
