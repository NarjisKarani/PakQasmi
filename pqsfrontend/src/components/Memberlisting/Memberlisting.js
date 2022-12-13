import { useState } from "react";
import React, { useref } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Memberlisting.css";

const Memberlisting = ({ members }) => {
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
                <td className="member"><button><Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: member.email}]}) }}>Details</Link></button></td>
                {/* <td className="member">
                <Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: member.email}]}) }}>Details</Link>
                </td> */}
                {/* <td className="member">
                  <Link onClick={(e)=>{ history.push({pathname: '/memberslisting', state: [{id: user.email}]}) }}>Delete</Link>
                </td> */}
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
