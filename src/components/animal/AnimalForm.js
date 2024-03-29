import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { useNavigate, useParams } from 'react-router-dom';

// export const AnimalForm = () => {
//     const { addAnimal } = useContext(AnimalContext)
//     const { locations, getLocations } = useContext(LocationContext)
//     const { customers, getCustomers } = useContext(CustomerContext)
//     /*
//     With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props
//     Define the intial state of the form inputs with useState()
//     */

//     const [animal, setAnimal] = useState({
//         name: "",
//         breed: "",
//         locationId: 0,
//         customerId: 0
//       });
//       //why do we set the state here

//       const navigate = useNavigate();
//       /*
//     Reach out to the world and get customers state
//     and locations state on initialization.
//     */
//     useEffect(() => {
//         getCustomers().then(getLocations)
//       }, [])

//       //when a field changes, update state. The return will re-render and display based on the values in state
//       //Controlled component
//       const handleControlledInputChange = (event) => {
//         /* When changing a state object or array,
//         always create a copy, make changes, and then set state.*/
//         const newAnimal = { ...animal }   //step 1: make a copy 
//         /* Animal is an object with properties.
//         Set the property to the new value
//         using object bracket notation. */
//         newAnimal[event.target.id] = event.target.value  // step 2 : make changes
//         // update state
//         setAnimal(newAnimal)  // step 3: set state
//       }

//       const handleClickSaveAnimal = (event) => {
//         event.preventDefault() //Prevents the browser from submitting the form
  
//         const locationId = parseInt(animal.locationId)
//         const customerId = parseInt(animal.customerId)

//         animal.locationId = locationId
//         animal.customerId = customerId
  
//         if (locationId === 0 || customerId === 0) {
//           window.alert("Please select a location")
//         } else {
//           //invoke addAnimal passing animal as an argument.
//           //once complete, change the url and display the animal list
//           console.log(animal)
//           addAnimal(animal)
//           .then(() => navigate("/animals"))
//         }
//       }

//       return (
//         <form className="animalForm">
//             <h2 className="animalForm__title">New Animal</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="animal name">Animal name:</label>
//                     <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name}/>
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="name">Breed:</label>
//                     <input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Breed of animal" value={animal.breed}/>
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="location">Assign to location: </label>
//                     <select defaultValue={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange}className="form-control" >
//                         <option value="0">Select a location</option>
//                         {locations.map(l => (
//                             <option key={l.id} value={l.id}>
//                                 {l.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="customerId">Customer: </label>
//                     <select defaultValue={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
//                         <option value="0">Select a customer</option>
//                         {customers.map(c => (
//                             <option key={c.id} value={c.id}>
//                                 {c.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </fieldset>
//             <button className="btn btn-primary"
//               onClick={handleClickSaveAnimal}>
//               Save Animal
//             </button>
//         </form>
//       )
//   }

export const AnimalForm = () => {
    const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    //for edit, hold on to state of animal in this view
    const [animal, setAnimal] = useState({})
    // const [animal, setAnimal] = useState({
    //   name: "",
    //   breed: "",
    //   locationId: 0,
    //   customerId: 0
    // });
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {animalId} = useParams();
	  const navigate = useNavigate();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newAnimal = { ...animal }
      //animal is an object with properties.
      //set the property to the new value
      newAnimal[event.target.name] = event.target.value
      //update state
      setAnimal(newAnimal)
    }

    const handleSaveAnimal = () => {
      if (parseInt(animal.locationId) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (animalId){
          //PUT - update
          updateAnimal({
              id: animal.id,
              name: animal.name,
              breed: animal.breed,
              locationId: parseInt(animal.locationId),
              customerId: parseInt(animal.customerId)
          })
          .then(() => navigate(`/animals/detail/${animal.id}`))
        }else {
          //POST - add
          addAnimal({
              name: animal.name,
              breed: animal.breed,
              locationId: parseInt(animal.locationId),
              customerId: parseInt(animal.customerId)
          })
          .then(() => navigate("/animals"))
        }
      }
    }

    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
      getCustomers().then(getLocations).then(() => {
        if (animalId){
          getAnimalById(animalId)
          .then(animal => {
              setAnimal(animal)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="animalForm">
        <h2 className="animalForm__title">New Animal</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="animalName">Animal name: </label>
            <input type="text"  name="name" required autoFocus className="form-control"
            placeholder="Animal name"
            onChange={handleControlledInputChange}
            defaultValue={animal.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="breed">Breed:</label>
            <input type="text" id="breed" name="breed" onChange={handleControlledInputChange} className="form-control" placeholder="Breed of animal" value={animal.breed}/></div></fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={animal.locationId} name="locationId" id="animalLocation" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="customer">Customer: </label>
            <select value={animal.customerId} name="customerId" id="customerAnimal" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a customer</option>
              {customers.map(c => (
                <option key={c.id} value={c.id}>
                    {c.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveAnimal()
          }}>
        {animalId ? <>Save Animal</> : <>Add Animal</>}</button>
      </form>
    )
}

