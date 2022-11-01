import React from "react"

export default function Card(props) {
    let badgeText
    if (props.experience.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.experience.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className="card">
            <div>
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`../src/images/${props.experience.coverImg}`} className="card--image"/>
            </div>
            <div className="card--text">
                <span><img src="../src/images/star.png" className="card--star"/> {props.experience.stats.rating}</span>
                <span className="gray"> ({props.experience.stats.reviewCount}) - {props.experience.location}</span>
                <p className="card--title">{props.experience.title}</p>
                <p className="card--price"><span className="bold">From ${props.experience.price}</span> / person</p>
            </div>
        </div>
    )
}