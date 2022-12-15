import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
import './Individualpage.css';

const Individualpage = ({members}) => {
  const history = useHistory();
  let xyz = history?.location?.state[0];
  function person(personemail) {
    return personemail.email === xyz?.email??'';
  }
  const personarray = [members.find(person)];
  console.log(personarray);
  return (
    <div className="Individualpage">
        <h2 className='cdh1'>Individual Data</h2>
        {personarray.map((member, key) => {
        return <div key={key} className="new">
        <table>
            <tr>
                <th className="member">Name</th>
                <td className="member">{member.name}</td>
            </tr>
            <tr>
                <th className="member">Father/Husband's Name</th>
                <td className="member">{member.fathername}</td>
            </tr>
            <tr>
                <th className="member">Group</th>
                <td className="member">{member.group}</td>
            </tr>
            <tr>
              <th className="member">Gender</th>
              <td className="member">{member.gender}</td>
            </tr>
            <tr>
              <th className="member">DOB</th>
              <td className="member">{member.dob}</td>
            </tr>
            <tr>
              <th className="member">Email</th>
              <td className="member">{member.email}</td>
            </tr>
            <tr>
              <th className="member">Mobile Number</th>
              <td className="member">{member.mobilenumber}</td>
            </tr>
            <tr>
              <th className="member">CNIC Number</th>
              <td className="member">{member.cnic}</td>
            </tr>
            <tr>
              <th className="member">Registration Number</th>
              <td className="member">{member.registrationnumber}</td>
            </tr>
            <tr>
                <th className="member">Bloodgroup</th>
                <td className="member">{member.bloodgroup}</td>
            </tr>
            <tr>
                <th className="member">Address</th>
                <td className="member">{member.address}</td>
            </tr>
            <tr>
                <th className="member">City</th>
                <td className="member">{member.city}</td>
            </tr>
            <tr>
              <th className="member">Education</th>
              <td className="member">{member.education}</td>
            </tr>
            <tr>
              <th className="member">Occupation</th>
              <td className="member">{member.occupation}</td>
            </tr>
            <tr>
              <th className="member">Name (emergency)</th>
              <td className="member">{member.emergency}</td>
            </tr>
            <tr>
              <th className="member">Contact (emergency)</th>
              <td className="member">{member.emergencycontact}</td>
            </tr>
            <tr>
              <th className="member">Comments</th>
              <td className="member">{member.comments}</td>
            </tr>
          </table>
          
          <div>
            <button><Link onClick={(e)=>{ history.push({pathname: '/IDCard', state: [{email: member.email}]}) }}>Card</Link></button>
            <button><Link onClick={(e)=>{ history.push({pathname: '/card', state: [{email: member.email}]}) }}>Generate ID Card</Link></button>
            <button><Link onClick={(e)=>{ history.push({pathname: '/updateform', state: [{ 
                                                              id: member._id, 
                                                              name: member.name,
                                                              fathername: member.fathername,
                                                              gender: member.gender,
                                                              group: member.group,
                                                              dob: member.dob,
                                                              cnic: member.cnic,
                                                              registrationnumber: member.registrationnumber,
                                                              mobilenumber: member.mobilenumber,
                                                              address: member.address,
                                                              city: member.city,
                                                              email: member.email,
                                                              education: member.education,
                                                              occupation: member.occupation,
                                                              bloodgroup: member.bloodgroup,
                                                              emergencycontact: member.emergencycontact,
                                                              emergency: member.emergency,
                                                              comments: member.comments,
                                                              }]}) }}>Update</Link></button>
            <button><Link onClick={(e)=>{ history.push({pathname: '/members'}) }}>Back to listing</Link></button>
          </div>
        </div>
    })}
    
    </div>
  );
};

export default Individualpage;
