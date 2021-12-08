// import React, { useContext, useEffect, useState } from "react"
// import { LocationContext } from "../location/LocationProvider"
// import { useNavigate } from 'react-router-dom';

// export const LocationForm = () => {
//     const { addLocations, } = useContext(LocationContext)

//     const [locations, setLocations] = useState({
//         name: "",
//         address: ""
//       });

//     const navigate = useNavigate();
     
//     useEffect(() => {
//         getLocations()
//       }, [])

//       const handleControlledInputChange = (event) => {
        
//         const newLocations = { ...locations } 
//         newLocation[event.target.id] = event.target.value
//         setLocation(newLocation)
//       }
//       const handleClickSaveLocation = (event) => {
//         event.preventDefault()
//         if (locations.id === 0 ) {
//           window.alert("Please select a location")
//         } else {
//           console.log(locations)
//         }
//       }
//       return (
//         <form className="locationForm">
//             <h2 className="locationForm__title">New Location</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="name">Location name:</label>
//                     <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={locations.name}/>
//                 </div>
//             </fieldset>
//             <h2 className="locationForm__title">New Location</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="name">address name:</label>
//                     <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="address name" value={locations.address}/>
//                 </div>
//             </fieldset>
//             <button className="btn btn-primary"
//               onClick={handleClickSaveLocation}>
//               Save Location
//             </button>
//         </form>
//       )
//     }
           