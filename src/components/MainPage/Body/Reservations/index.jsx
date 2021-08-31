import React, { Component } from 'react';
import styles from './index.module.css';
import bg from './reservations.jpg'

class Reservations extends Component {
    render() {
        return (
            <div className={styles.reservations_container}>
                <div className={styles.col_left}>
                    <img className={styles.reservations_background} src={bg} alt="contact_background" typeof='png' />
                </div>
                <div className={styles.col_right}>
                    <h2>Make a Reservation</h2>
                    <form action='#' className={styles.form}>
                        <label htmlFor="name" >Name:</label>
                        <input type='text' id='name' name='name' placeholder='(This field is required.)' required='required' />

                        <label htmlFor="email" >Email:</label>
                        <input type='email' id='email' name='email' />

                        <label htmlFor="name" >Phone Number:</label>
                        <input type='tel' id='phone' name='phone' placeholder='(This field is required.)' pattern="([0-9]{3})-[0-9]{4}-[0-9]{4}" required='required' />

                        <label htmlFor="name">Reservation Date:</label>
                        <input type='date' id='date' name='date' required='required' />

                        <label htmlFor="comment">Reservation Time:</label>
                        <input type='time' id='phone' name='phone' required='required'/>

                        <label htmlFor="comment">Number of People:</label>
                        <div className={styles.select}>
                            <select id="numberofpeople" name="numberofpeople" required='required'>
                                <option value='1,2'>1-2</option>
                                <option value="3-4">3-4</option>
                                <option value="5-8">5-8</option>
                                <option value="8+">8+</option>
                            </select>
                        </div>

                        <label htmlFor="comment">Memo:</label>
                        <textarea type='text' id='memo' name='memo' />
                        <button className={styles.button} type="submit" value='submit'><span>Submit</span></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Reservations;