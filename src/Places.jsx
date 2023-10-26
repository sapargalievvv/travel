import React from "react";

export default function Places(props) {
    return (
        <div>
            <div className="sights">
                <img src={`/src/images/${props.img}`} alt="" />
                <div className="rightcont">
                    <div className="location">
                        <img src="src/images/location.svg" alt="" />
                        <p className="country">{props.country}</p>
                        <a href="#">View on Google Maps</a>
                    </div>
                    <h3 className="loc-title">{props.title}</h3>
                    <p className="date">{props.date}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}