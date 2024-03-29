import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">
          <Link to={`/employees/detail/${employee.id}`}>
            { employee.name }
          </Link>
        </h3>
        <div className="employee__workLocation">{employee.locationId}</div>
    </section>
)

// export const EmployeeCard = ({ employee }) => (
//     <section className="employee">
//         <h3 className="employee__name">
//           <Link to={`/employee/detail/${employee.id}`}>
//             { employee.name }
//           </Link>
//         </h3>
//         <div className="employee__workLocation">{ employee.locationId }</div>
//     </section>
// )
