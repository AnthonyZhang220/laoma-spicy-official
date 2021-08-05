import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {NavItems} from "../../HeaderNav/NavItems/NavItems";

class Contact extends Component {
    render() {
        return (
            <div className='ContactBody'>
                {/* <Route path={NavItems.title} component={Contact}/> */}
                {/*Haven't learn PHP yet.*/}
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