import './IDCard.css';
//import pqslogo from '../pqslogo.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
// import {Link} from 'react-router-dom'

const IDCard = () => {
    const history = useHistory();
  return (
      <div>
        <table class="main-table" align="center">
        <tr>
            <td>
                <table class="front-info">
				<tr><td colspan="2">
                    {/* <img class="center fixedwidth" align="center" border="0" src={pqslogo} alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;margin: auto;width: 50%;max-width: 280px" width="280"/> */}
                </td>
                </tr>
                <tr>
                    <td colspan="2" class="heading" style="padding-left: 0px;height: 42px; padding:30px 0">
                        <li style="width: 115px;height: 130px;border: 2px solid #a3a3a3;margin: auto;"></li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li><strong>Name:</strong></li>
                    </td> 
                    <td>
                        <li><input class="input_custom"/></li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li><strong>Father Name: </strong></li>
                    </td>
                    <td>
                        <li><input class="input_custom"/></li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li><strong>Registration:</strong></li>
                    </td>
                    <td>
                        <li><input class="input_custom"/></li>
                    </td>
                </tr>
                <tr>
                    <td>
                        <li><input class="input_custom"/><br/><p class="signature">Sign of Candidate</p></li>
                    </td>
                    <td>
                        <li><input class="input_custom"/><br/><p class="signature">Registered Stamp</p></li>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                </tr>
                </table>
            </td>
        </tr>
    </table>
    <button><Link onClick={(e)=>{ history.push({pathname: '/members'}) }}>Back</Link></button>
    {/* <button><Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: member.email}]}) }}>Back</Link></button> */}
    </div>
  )};

export default IDCard;
