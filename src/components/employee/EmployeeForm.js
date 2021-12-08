import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import { useNavigate } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    

    const [employees, setEmployee] = useState({
        name: "",
        locationId: 0,
      });

      const navigate = useNavigate();

    useEffect(() => {
        getLocations()
      }, [])

      const handleControlledInputChange = (event) => {
        const newEmployee = { ...employees }
        newEmployee[event.target.id] = event.target.value
        setEmployee(newEmployee)
      }

      const handleClickSaveEmployee = (event) => {
        event.preventDefault()
  
        const locationId = parseInt(employees.id)

        employees.locationId = locationId
  
        if (employees.Id === 0) {
          window.alert("Please select a location")
        } else {
          console.log(employees)
          addEmployees(employees)
          .then(() => navigate("/employees"))
        }
      }

      return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employees.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue={employees.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange}className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
              onClick={handleClickSaveEmployee}>
              Save Employee
            </button>
        </form>
      )
  }