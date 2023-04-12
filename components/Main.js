import React from "react"

export default function Main(props) {
    return (
        <div className="wrapper">
            <div className="mountain">
                <div className="img--wrapper">
                    <img className="mountain--img" src={props.imageUrl} alt="mountain photo"/>
                </div>
                <div className="mountain--info">
                    <div className="info--header">
                        <img src="/images/Location.png"/>
                        <h4 className="mountain--country">{props.location}</h4>
                        <a href={props.googleMapsUrl} className="google-map">View on Google Maps</a>
                    </div>
                    <h4 className="mountain--name">{props.title}</h4>
                    <p className="dates">{`${props.startDate} - ${props.endDate}`}</p>
                    <p className="about--mountain">{props.description}</p>
                </div>
            </div>
        </div>
    )
}