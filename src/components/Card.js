import React from 'react';
//import five from './images/five.jpeg'

export default function Card(props) {
    let badgeText 
    if(props.item.openSpots === 0){
        badgeText="SOLD OUT"
    }else if(props.item.location === "online"){
        badgeText="ONLINE"
    }
    return(
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" alt=""/>
        <div className="card--stats">
                <span><i class="fas fa-star"></i></span>
                <span>{props.item.rating}</span>
                <span className="gray">({props.item.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}