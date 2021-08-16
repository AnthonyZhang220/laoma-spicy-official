import React, { Component } from 'react'
import Review from './Review'
import BgVideo from './BgVideo'

export default class Home extends Component {
    render() {
        return (
            <div>
                <BgVideo/>
                <Review/>
            </div>
        )
    }
}
