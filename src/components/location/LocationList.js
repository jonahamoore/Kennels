import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getLocation()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocation")
    getLocations()

  }, [])


  return (
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(locations => {
          return <LocationCard key={locations.id} locations={locations} />
        })
      }
    </div>
  )
}
