import React, { Component } from 'react'
import Review from './Review'
import BgVideo from './BgVideo'
import MapContainer from './GoogleMap'
import Special from './Special'
import Blank from '../../Blank'

export default class Home extends Component {
    render() {
        return (
            <div>
                <BgVideo/>
                <Special/>
                <Review/>
                <Blank/>
                <MapContainer/>
            </div>
        )
    }
}
