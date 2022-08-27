import React, { Component } from 'react'
import Review from './Review'
import MapContainer from './GoogleMap'
import Special from './Special'
import Blank from '../../Blank'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Special/>
                <Review/>
                <Blank/>
                <MapContainer/>
            </div>
        )
    }
}
