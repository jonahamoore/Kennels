import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useNavigate } from 'react-router-dom';

export const EmployeeList = ({ history }) => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getEmployees()
  }, [])

  const navigate = useNavigate()
  
  return (
  <>
    <h1>Employees</h1>

    <button onClick={() => navigate("/employees/create")}>
                Hire Employee
            </button>
    <div className="Employees">
      {
        employees.map(employee => {
          return <EmployeeCard key={employee.id} employee={employee} />
        })
      }
    </div>
  </>
  )
}

// export const EmployeeList = ({ history }) => {
//   const { getEmployees, employees } = useContext(EmployeeContext)

//   // Initialization effect hook -> Go get animal data
//   useEffect(()=>{
//       getEmployees()
//   }, [])
//   const navigate = useNavigate()
//   return (
//       <>
//           <h1>Employees</h1>

//           <button onClick={() => navigate("/employees/create")}>
//               Make Reservation
//           </button>
//           <div className="employees">
//               {
//                   employees.map(employee => {
//                       return <EmployeeCard key={employee.id} animal={employee} />
//                   })
//               }
//           </div>
//       </>
//   )
// }