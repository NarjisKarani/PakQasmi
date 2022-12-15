import './NewCard';
//import pqslogo from '../pqslogo.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
// import {Link} from 'react-router-dom'

const NewCard = () => {
    const history = useHistory();
  return (
        <div>
            <table class="main-table" align="center">
        <tr>
            <td>
                <table class="front-info">
				<tr><td colspan="2">
                    <h1>logo</h1>
                    {/* <img class="center fixedwidth" align="center" border="0" src="./log.jpg" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;margin: auto;width: 50%;max-width: 280px" width="280"> */}
                </td></tr>
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
                </table>
            </td>
        </tr>
		<tr>
            <td>
                <table class="front-info">
                   <tr><td colspan="2">
                    <h1>logo</h1>
                        {/* <img class="center fixedwidth" align="center" border="0" src="./log.jpg" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;margin: auto;width: 50%;max-width: 280px" width="280"> */}
                    </td></tr>
                    
                    <tr>
                        <td>
                            <li><strong>Valid:</strong></li>
                        </td> 
						<td>
                            <li><input class="input_custom"/></li>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <li><strong>Contact: </strong></li>
                        </td>
						<td>
                            <li><input class="input_custom"/></li>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <li><strong>Date of Birth:</strong></li>
                        </td>
						<td>
                            <li><input class="input_custom"/></li>
                        </td>
                    </tr>
					 <tr>
                        <td>
                            <li><strong>Address</strong></li>
                        </td>
						<td>
                            <li><input class="input_custom"/></li>
                        </td>
                    </tr>
					 <tr>
                        <td colspan="2">
                            <li style="line-height: 20px;text-align: center;padding: 10px 32px;border: 1px solid;border-radius: 100px;margin-top: 29px;margin-bottom: 8px;"><p style="font-size: 13px;">The bearer of this card is a member of Pak Qasmi Scouts Group (PQSG)</p>
							<p style="font-size: 13px;">This Card is necessary for admission to all program and meeting of scouts</p></li>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

        </div>
  )};

export default NewCard;