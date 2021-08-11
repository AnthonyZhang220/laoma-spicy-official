import React, { useState, useEffect } from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import reviewdata from './reviewdata';
import './index.css';


export default function Review(){
    const [people, setPeople]= useState(reviewdata);
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        const lastIndex = people.length - 1;
        if (index < 0){
            setIndex(lastIndex);
        } 
        if (index > lastIndex){
            setIndex(0);
        }
    },[index,people]);

    useEffect(()=> {
        let slider = setInterval(()=>{
            setIndex(index + 1);
        },4000)
        return ()=> clearInterval(slider)
    },[index])

    return (
        <section className='main'>
            <div className='title'>
                <h2>Reviews</h2>
            </div>
            <div className='review-main'>
                {people.map((person, personIndex)=>{
                    const {id, username, userphoto, description, reviewphoto, star} = person;
                    
                    let position = 'nextSlide';

                    if(personIndex === index){
                        position = 'activeSlide';
                    }
                    
                
                    if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={userphoto} alt={username} className='person-img'/>
                            <h4>{username}</h4>
                            <p className='title'>{star}</p>
                            <p className='text-review'>{`"${description}"`}</p>
                            <img className='review-img' src={reviewphoto} alt={username} />
                            
                        </article>

                    )
                })}
                <button className='prev' onClick={()=> setIndex(index - 1)}>
                    <FiChevronLeft/>
                </button>
                <button className='next' onClick={()=> setIndex(index + 1)}>
                    <FiChevronRight/>
                </button>
            </div>
        </section>
    )
}


