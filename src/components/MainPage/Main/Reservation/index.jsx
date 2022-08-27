import React, { Component } from 'react';
import axios from 'axios';
import styles from './index.module.css';
import bg from './reservation.jpg'




export const Popup = ({ reservation }) => {


    const handleClick = () => {
        this.prop.toggle();
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <ul>
                    {reservation.map((info, index) => {
                        return (
                            <li key={index}>{info.reservation}</li>
                        )

                    })}
                </ul>
            </div>
            <button className='cancel' onClick={handleClick}>Cancel</button>
        </div>
    )
}


class Reservations extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        numberofpeople: '',
        memo: '',
        showPopup: false,
    }

    togglePopup = () => {
        // const reservation = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     phone: this.state.phone,
        //     date: this.state.date,
        //     time: this.state.time,
        //     numberofpeople: this.state.numberofpeople,
        //     memo: this.state.memo,
        // }

        this.setState({
            showPopup: !this.state.showPopup
        });
    }


    handleSubmit = e => {
        e.preventDefault();


        const reservation = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            date: this.state.date,
            time: this.state.time,
            numberofpeople: this.state.numberofpeople,
            memo: this.state.memo,
        }

        axios.post('https://jsonplaceholder.typicode.com/users', { ...reservation })
            .then(res => {
                console.log(res);
                console.log(res.data);
                // window.location = '/retrieve'
            })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }
        )
    }

    render() {
        return (
            <div className={styles.reservations_container}>
                <div className={styles.col_left}>
                    <img className={styles.reservations_background} src={bg} alt="contact_background" type='png' />
                </div>
                <div className={styles.col_right}>
                    <h2>Make a Reservation</h2>
                    <form action='#' className={styles.form} >
                        <label htmlFor="name" >Name:
                            <input type='text' id='name' name='name' placeholder='(This field is required.)' required='required' value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <label htmlFor="email" >Email:
                            <input type='email' id='email' name='email' value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <label htmlFor="tel" >Phone Number:
                            <input type='tel' id='phone' name='phone' placeholder='(This field is required.)' required='required' value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <label htmlFor="date">Reservation Date:
                            <input type='date' id='date' name='date' required='required' value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <label htmlFor="time">Reservation Time:
                            <input type='time' id='time' name='time' required='required' value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <label htmlFor="numberofpeople">Number of People:
                            <div className={styles.select}>
                                <select id="numberofpeople" name="numberofpeople" required='required' value={this.state.value} onChange={this.handleChange}>
                                    <option defaultValue='1-2'>1-2</option>
                                    <option value="3-4">3-4</option>
                                    <option value="5-8">5-8</option>
                                    <option value="8+">8+</option>
                                </select>
                            </div>
                        </label>

                        <label htmlFor="memo">Memo:
                            <textarea type='text' id='memo' name='memo' value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </form>
                    <div className={styles.button} >
                        <button onClick={this.togglePopup}>Submit</button>
                    </div>
                    {this.state.showPopup ? <Popup toggle={this.togglePopup} /> : null}
                </div>
            </div>
        );
    }
}

export default Reservations;