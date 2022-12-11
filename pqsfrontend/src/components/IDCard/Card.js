import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
// import './Card.css';

const Card = ({members}) => {
  const history = useHistory();
  let abc = history?.location?.state[0];
  function candidate(candidateemail) {
    return candidateemail.email === abc?.email??'';
  }
  const candidatearray = [members.find(candidate)];
  console.log(candidatearray);
  return (
    <div className="Card">
        <h2 className='cdh1'>Individual ID Card</h2>
        {candidatearray.map((member, key) => {
        return <div key={key} className="cdmember">
          <p className="cdjob">Name: {member.name}</p>
          <p className='cdreq1'>Email: {member.email}</p>
          {/* <p className='cdreq1'>Password: {member.password}</p> */}
          <p className='cdreq1'>Gender: {member.gender}</p>
          <p className='cdreq1'>Group: {member.group}</p>
          <div className='cdreq2'>Father Name: {member.fathername}</div>
          {/* <div className='cdreq2'>Address: {member.address}</div>
          <div className='cdreq3'>Bloodgroup: {member.bloodgroup}</div>
          <div className='cdreq4'>Academic: {member.academic}</div>
          <p className='cdreq5'>Occupation: {member.occupation}</p>
          <p className='cdreq6'>Mobile number: {member.mobilenumber}</p>
          <p className='cdreq7'>City: {member.city}</p> */}
          <button><Link onClick={(e)=>{ history.push({pathname: '/members'}) }}>Back</Link></button>
        </div>
    })}
    </div>
  );
};

export default Card;