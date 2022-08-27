import React, { Component } from 'react'
import Review from './Review'
import MapContainer from './GoogleMap'
import Special from './Special'

export default class Home extends Component {
    render() {
        return (
            <div className="home" id="home">
                <Special/>
                <Review/>
                <MapContainer/>
            </div>
        )
    }
}
