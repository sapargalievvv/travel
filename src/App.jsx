import React from "react"
import Nav from "./Nav.jsx"
import Places from "./Places.jsx"
import data from "./data.jsx"

export default function App() {

    const places = data.map(item =>
        {
            return(
                <Places
                    img = {item.img}
                    country = {item.country}
                    title = {item.title}
                    date = {item.date}
                    description = {item.description}
                />
            )
        })

    return (
        <div className="main">
            <Nav></Nav>
            {places}
        </div>
    )
}