import { useState } from "react";
import React, { useref } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Girlslisting.css";

const Girlslisting = ({ girls, deleteMember }) => {
  const history = useHistory();
  return (
    <div className="new">
      <h1>Girl's Listing</h1>
      <div>
        <button><Link onClick={(e)=>{ history.push({pathname: '/members'}) }}>All</Link></button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Group</th>
            <th>Mobile Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {girls.map((girl, key) => {
            return (
              <tr key={key}>
                <td className="member">{girl.name}</td>
                <td className="member">{girl.fathername}</td>
                <td className="member">{girl.group}</td>
                <td className="member">{girl.mobilenumber}</td>
                <td className="member">
                    <button><Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: girl.email}]}) }}>Details</Link></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>
  );
};
export default Girlslisting;
