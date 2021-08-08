import React, { useState, useEffect } from 'react';
import reviewdata from './reviewdata';


export default function Review(){
    const [people, setPeople]= useState(reviewdata);
    const [index, setIndex] =useState(0)
    return (
        <div className='main'>
            <div className='title'>
                <h2>Reviews</h2>
            </div>
            <div className='section-center'>
                {people.map((person, personIndex)=>{
                    const {id, username, userphoto, description, reviewphoto, star} = person;

                    return (
                        <article key={id}>
                            <img src={userphoto} alt={username} />
                            <h4>{username}</h4>
                            <h4>{star}</h4>
                            <p className='text'>{description}</p>
                            <img src={reviewphoto} alt={username} />
                        </article>
                    )

                    
                })}
                
            </div>
        </div>
    )
}


