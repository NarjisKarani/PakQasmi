import './IDCard.css';
// import pqslogo from './pqslogo.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
// import {Link} from 'react-router-dom'

const IDCard = ({members}) => {
    const history = useHistory();
    let abc = history?.location?.state[0];
    function candidate(candidateemail) {
      return candidateemail.email === abc?.email??'';
    }
    const candidatearray = [members.find(candidate)];
    console.log(candidatearray);
  return (
    <div>
         <table className="main-table" align="center">
      {candidatearray.map((member, key) => {
       return <tr>
            <td>
                <table className="front-info">
				<tr><td colspan="2">
                    {/* <img className="center fixedwidth" align="center" border="0" src={pqslogo} alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;margin: auto;width: 50%;max-width: 280px" width="280"/> */}
                </td>
                </tr>
                {/* <tr>
                    <td colspan="2" className="heading" style="padding-left: 0px;height: 42px; padding:30px 0">
                        <li style="width: 115px;height: 130px;border: 2px; solid #a3a3a3;margin: auto;"></li>
                    </td>
                </tr> */}
                <tr>
                    <td>
                        <li><strong>Name:</strong></li>
                    </td> 
                    <td>
                        <li><p className="input_custom">{member.name}</p></li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li><strong>Father Name: </strong></li>
                    </td>
                    <td>
                        <li><p className="input_custom">{member.fathername}</p></li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li><strong>Registration:</strong></li>
                    </td>
                    <td>
                        <li><p className="input_custom">{member.registrationnumber}</p></li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li><input className="input_custom"/><br/><p className="signature">Sign of Candidate</p></li>
                    </td>
                    <td>
                        <li><input className="input_custom"/><br/><p className="signature">Registered Stamp</p></li>
                    </td>
                </tr>
                </table>
            </td>
        </tr>
    
    })}
    </table>
    <button><Link onClick={(e)=>{ history.push({pathname: '/members'}) }}>Back</Link></button>
    {/* <button><Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: member.email}]}) }}>Back</Link></button> */}
   
    </div>
    
)};

export default IDCard;