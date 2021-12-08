import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal, customer, location }) => (
    <section className="animal">
        <h3><Link to={`/animals/detail/${animal.id}`}>
            { animal.name }
          </Link></h3>
        <div className="animals__breed">{animal.breed}</div>
        <div className="customer__name">{customer.name}</div>
        <div className="location__name">{location.name}</div>
    </section>
)


