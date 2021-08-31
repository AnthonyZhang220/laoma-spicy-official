import axios from 'axios'
import React, { Component } from 'react'

export default class Retrieve extends Component {
  state = {
    reservations: [],
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log(res);
        this.setState({ reservations: res.data });
      })
  }

  render() {
    return (
      <div>
        {this.state.reservations.map(reservation =>
          <li key={reservation.id}>{reservation.name}</li>
        )}
      </div>
    )
  }
}
