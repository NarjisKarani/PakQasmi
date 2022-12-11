import { useState } from "react";
import React, { useref } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Memberlisting.css";

const Memberlisting = ({ members }) => {
  const history = useHistory();
  // const [searchname, setSearchname] = useState('');
  // console.log(members);
  // const history = useHistory();
  // let abc = history?.location?.state[0];
  // function candidate(candidateemail) {
  //   return candidateemail.email === abc?.email??'';
  // }
  // const candidatearray = [members.find(candidate)];
  // console.log(candidatearray);
  return (
    <div className="new">
      <h1>Member Listing</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Group</th>
            <th>DOB</th>
            <th>Mobile Number</th>
            {/* <th>Click for Details</th> */}
            {/* <th>Click to Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {members.map((member, key) => {
            return (
              <tr key={key}>
                <td className="member"><Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: member.email}]}) }}>{member.name}</Link></td>
                <td className="member">{member.fathername}</td>
                <td className="member">{member.group}</td>
                <td className="member">{member.dob}</td>
                <td className="member">{member.mobilenumber}</td>
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
      {/* <div>
      <button><Link onClick={(e)=>{ history.push({pathname: '/girlslist'}) }}>Girls</Link></button>
        <button><Link onClick={(e)=>{ history.push({pathname: '/boyslist'}) }}>Boys</Link></button>
      </div> */}
    </div>
  );
};
export default Memberlisting;
