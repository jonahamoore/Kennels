import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useNavigate } from 'react-router-dom';

// export const AnimalList = () => {
//   // This state changes when `getAnimals()` is invoked below
//   const { animals, getAnimals } = useContext(AnimalContext)
//   const { locations, getLocations } = useContext(LocationContext)
//   const { customers, getCustomers } = useContext(CustomerContext)

//   //useEffect - reach out to the world for something
//   useEffect(() => {
//     console.log("AnimalList: useEffect - getAnimals")
//     getLocations()
//       .then(getCustomers)
//       .then(getAnimals)
//   }, [])



export const AnimalList = () => {
    const { getAnimals, animals, searchTerms } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)
// Since you are no longer ALWAYS displaying all of the animals
    const [ filteredAnimals, setFiltered ] = useState([])
    const navigate = useNavigate()
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])
// useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => navigate("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                                  console.log(animal)
                                  const owner = customers.find(c => c.id === +animal.customerId)
                                  const clinic = locations.find(l => l.id === +animal.locationId)
                                  console.log(customers)
                                  return <AnimalCard key={animal.id}
                                  location={clinic}
                                  customer={owner}
                                  animal={animal} />
                    })
                }
            </div>
        </>
    )
}