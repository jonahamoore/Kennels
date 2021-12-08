import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetails"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"


export const ApplicationViews = () => {
    return (
            <AnimalProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        <CustomerProvider> 
                            <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="animals/*" element={<AnimalList />} />
                        <Route path="animals/create/*" element={<AnimalForm />} />
                        <Route path="animals/edit/:animalId/*" element={<AnimalForm />} />
                        <Route path="animals/detail/:animalId/*" element={<AnimalDetail />} />
                        <Route path="customers/*" element={<CustomerList />} />
                        <Route path="employees/*" element={<EmployeeList />} />
                        <Route path="employees/create/*" element={<EmployeeForm />} />
                        <Route path="employees/detail/:employeeId/*" element={<EmployeeDetail />} />
                        <Route path="locations/*" element={<LocationList />} />
                        <Route path="locations/create/*" element={<LocationForm />} />
                    </Routes>
                        </CustomerProvider>
                    </LocationProvider>
                </EmployeeProvider>
            </AnimalProvider>            
    )
}