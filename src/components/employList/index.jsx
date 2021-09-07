import React, { useState,useEffect } from "react";
import { useSelector } from 'react-redux';
import './employee.css';
const  EmployList = ()=> {
    const myData = useSelector(state => state.myData);
    console.log(myData)

        return (
            <>
            <h4><b>Employee List Page</b></h4>
                 <div>

                     <table>
                         <thead>
                                 <th>id</th>
                                 <th>Name</th>
                                 <th>Age</th>
                                 <th>Gender</th>
                                 <th>email</th>
                                 <th>PhoneNo</th>
                         </thead>
                         <tbody>
                         {
                            myData.map((user)=>(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNo}</td>
                            </tr>
                           ))
                         }
                         </tbody>
                     </table>
                 </div>


            </>


        );
        
    }

export default EmployList;