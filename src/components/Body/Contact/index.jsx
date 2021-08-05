import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div className='ContactBody'>
                <form action='#'>
                    <label htmlFor="name">Name:</label><br/>
                    <input type='text' id='name' name='name'/><br/>
                    <label htmlFor="name">Email:</label><br/>
                    <input type='text' id='email' name='email'/><br/>
                </form>
            </div>
        );
    }
}

export default Contact;