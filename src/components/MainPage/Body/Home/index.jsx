import React, { Component } from 'react'
import Review from './Review'
import BgVideo from './BgVideo'
import MapContainer from './GoogleMap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <BgVideo/>
                <Review/>
                <MapContainer/>
            </div>
        )
    }
}
