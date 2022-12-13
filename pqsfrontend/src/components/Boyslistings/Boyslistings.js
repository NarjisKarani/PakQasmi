import { useState } from "react";
import React, { useref } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Boyslistings.css";

const Boyslistings = ({ boys, deleteMember }) => {
  const history = useHistory();
  return (
    <div className="new">
      <h1>Boy's Listing</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Group</th>
            <th>Mobile Number</th>
            <th>Action</th>
            {/* <th>Click to Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {boys.map((boy, key) => {
            return (
              <tr key={key}>
                <td className="member">{boy.name}</td>
                <td className="member">{boy.fathername}</td>
                <td className="member">{boy.group}</td>
                <td className="member">{boy.mobilenumber}</td>
                <td className="member">
                    <button><Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: boy.email}]}) }}>Details</Link></button>
                    {/* <button><Link onClick={(e)=>{
                                            fetch(`http://localhost:8500/memberdelete/${boy._id}`,
                                            {
                                              mode: 'cors',
                                              method: 'DELETE',
                                              headers: { 'Content-Type': 'application/json' },
                                              body: JSON.stringify(boy),
                                            }).then(deleteMember(boy._id), (response)=>{
                                                history.push('/boyslistings');
                                                window.location.reload();
                                            }).catch(err=>{
                                              console.log(err);
                                            })
                                        }}> Delete </Link></button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <div>
        <button><Link onClick={(e)=>{ history.push({pathname: '/members'}) }}>All</Link></button>
      </div>
    </div>
  );
};
export default Boyslistings;
