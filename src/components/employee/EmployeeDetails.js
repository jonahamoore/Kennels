import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useNavigate } from "react-router-dom"

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();
	const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
    }, [])

  return (
    <section className="Employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">Location: {employee.location?.name}</div>
    </section>
  )
}
