import React, { useState, useEffect } from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import reviewdata from './reviewdata';
import './index.css';




export default function Review(){
    const [people, setPeople]= useState(reviewdata);
    const [index, setIndex] =useState(0)



    return (
        <section className='main'>
            <div className='title'>
                <h2>Reviews</h2>
            </div>
            <div className='review'>
                {people.map((person, personIndex)=>{
                    const {id, username, userphoto, description, reviewphoto, star} = person;
                    
                    let position = 'nextSlide';

                    if(personIndex === index){
                        person = 'activeSlide';
                    }
                    
                
                    if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
                        person = 'lastSlide';
                    }

                    if(personIndex === index + 1){
                        person = 'nextSlide';
                    }


                    return (
                        <article className={position} key={id}>
                            <img src={userphoto} alt={username} className='person-img' />
                            <h4>{username}</h4>
                            <p className='title'>{star}</p>
                            <p className='text'>{description}</p>
                            <img src={reviewphoto} alt={username} />
                        </article>
                    )
                })}
                <button className='prev'>
                    <FiChevronLeft/>
                </button>
                <button className='next'>
                    <FiChevronRight/>
                </button>
            </div>
        </section>
    )
}


