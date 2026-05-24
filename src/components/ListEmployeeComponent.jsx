import {useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
    listEmployees()
        .then((response) => {
            setEmployees(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
}, []);

//     const dummyData = [
//         {
//     "id": 1,
//     "firstName": "amit",
//     "lastName": "kumar",
//     "email": "amit.kumar@example.com"
//     },
//     {
//     "id": 2,
//     "firstName": "amit2",
//     "lastName": "kumar2",
//     "email": "amit2.kumar2@example.com"
//     },
//     {
//     "id": 3,
//     "firstName": "amit3",
//     "lastName": "kumar3",
//     "email": "amit3.kumar3@example.com"
//     },
// ]

    function addNewEmployee() {
        navigator("/add-employee");
        
    }


  return (
    <div className="container">

        <h2>List of Employees</h2>
        <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent