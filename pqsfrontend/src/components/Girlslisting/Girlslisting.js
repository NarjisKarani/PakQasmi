import { useState } from "react";
import React, { useref } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Girlslisting.css";

const Girlslisting = ({ girls }) => {
  const history = useHistory();
  return (
    <div className="new">
      <h1>Girl's Listing</h1>
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
          {girls.map((girl, key) => {
            return (
              <tr key={key}>
                <td className="member">{girl.name}</td>
                <td className="member">{girl.fathername}</td>
                <td className="member">{girl.group}</td>
                <td className="member">{girl.mobilenumber}</td>
                <td className="member"><button><Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: girl.email}]}) }}>Details</Link></button></td>
                <td className="member"><button><Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: girl.email}]}) }}>Delete</Link></button></td>
                {/* <td className="member">
                <Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: girl.email}]}) }}>Details</Link>
                </td> */}
                {/* <td className="member">
                  <Link onClick={(e)=>{ history.push({pathname: '/girlslisting', state: [{id: user.email}]}) }}>Delete</Link>
                </td> */}
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
export default Girlslisting;
