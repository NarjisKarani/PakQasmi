import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
// import './Individualpage.css';

const Individualpage = ({members}) => {
  const history = useHistory();
  let abc = history?.location?.state[0];
  function candidate(candidateemail) {
    return candidateemail.email === abc?.email??'';
  }
  const candidatearray = [members.find(candidate)];
  console.log(candidatearray);
  return (
    <div className="Individualpage">
        <h2 className='cdh1'>Individual Data</h2>
        {candidatearray.map((member, key) => {
        return <div key={key} className="cdmember">
          <p className="cdjob">Name: {member.name}</p>
          <p className='cdreq1'>Email: {member.email}</p>
          {/* <p className='cdreq1'>Password: {member.password}</p> */}
          <p className='cdreq1'>Gender: {member.gender}</p>
          <p className='cdreq1'>CNIC number: {member.cnic}</p>
          <div className='cdreq2'>Father Name: {member.fathername}</div>
          <div className='cdreq2'>Registration Number: {member.registrationnumber}</div>
          <p className='cdreq6'>Mobile number: {member.mobilenumber}</p>
          <div className='cdreq2'>Address: {member.address}</div>
          <div className='cdreq2'>DOB: {member.dob}</div>
          <p className='cdreq7'>City: {member.city}</p>
          <div className='cdreq3'>Bloodgroup: {member.bloodgroup}</div>
          <div className='cdreq4'>Education: {member.education}</div>
          <p className='cdreq5'>Occupation: {member.occupation}</p>
          <div className='cdreq4'>Emergency Contact: {member.emergencycontact}</div>
          <div className='cdreq4'>Emergency Relation: {member.emergencyrelation}</div>
          <div className='cdreq4'>Image: {member.image}</div>
          <div className='cdreq4'>Documents: {member.documents}</div>
          <button><Link onClick={(e)=>{ history.push({pathname: '/IDCard', state: [{email: member.email}]}) }}>Generate ID Card</Link></button>
          <button><Link onClick={(e)=>{ history.push({pathname: '/card', state: [{email: member.email}]}) }}>Card</Link></button>
          <button><Link onClick={(e)=>{ history.push({pathname: '/updateform', state: [{
                                                        id: member._id,
                                                        name: member.name, 
                                                        fathername: member.fathername, 
                                                        address: member.address, 
                                                        education: member.education,
                                                        city: member.city, 
                                                        email: member.email, 
                                                        gender: member.gender,
                                                        bloodgroup: member.bloodgroup, 
                                                        occupation: member.occupation, 
                                                        cnic: member.cnic,
                                                        group: member.group, 
                                                        mobilenumber: member.mobilenumber,
                                                        registrationnumber: member.registrationnumber, 
                                                        emergencycontact: member.emergencycontact, 
                                                        emergencyrelation: member.emergencyrelation
                                                    }]}) }}>Update</Link></button>
          <button><Link onClick={(e)=>{ history.push({pathname: '/members'}) }}>Back</Link></button>
          {/* <button><Link onClick={(e)=>{ history.push({pathname: '/memberlist'}) }}>Delete</Link></button>
          <button><Link onClick={(e)=>{ history.push({pathname: '/memberlist'}) }}>Update</Link></button> */}
        </div>
    })}
    </div>
  );
};

export default Individualpage;
