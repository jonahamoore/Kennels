import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ locations }) => (
    <section className="location">
        <h3 className="location__name">{locations.name}</h3>
            {/* <Link to={`/animals/detail/${animal.id}`}>
            { animal.name }
            </Link> */}
        <div className="location_address">{locations.address}</div>
    </section>
)
