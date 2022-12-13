import { useState } from "react";
import React, { useref } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Memberlisting.css";

const Memberlisting = ({ members, deleteMember }) => {
  const history = useHistory();
  return (
    <div className="new">
      <h1>Member Listing</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Group</th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Action</th>
            {/* <th>Click to Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {members.map((member, key) => {
            return (
              <tr key={key}>
                <td className="member">{member.name}</td>
                <td className="member">{member.fathername}</td>
                <td className="member">{member.group}</td>
                <td className="member">{member.gender}</td>
                <td className="member">{member.mobilenumber}</td>
                <td className="member">
                    <button><Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: member.email}]}) }}>Details</Link></button>
                    <button><Link onClick={(e)=>{
                                            fetch(`http://localhost:8500/memberdelete/${member._id}`,
                                            {
                                              mode: 'cors',
                                              method: 'DELETE',
                                              headers: { 'Content-Type': 'application/json' },
                                              body: JSON.stringify(member),
                                            }).then(deleteMember(member._id), (response)=>{
                                                history.push('/memberlisting');
                                                window.location.reload();
                                            }).catch(err=>{
                                              console.log(err);
                                            })
                                        }}> Delete </Link></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
      <button><Link onClick={(e)=>{ history.push({pathname: '/girlslisting'}) }}>Girls</Link></button>
      <button><Link onClick={(e)=>{ history.push({pathname: '/boyslistings'}) }}>Boys</Link></button>
      </div>
    </div>
  );
};
export default Memberlisting;
