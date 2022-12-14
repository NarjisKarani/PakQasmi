import './IDCard.css';
//import pqslogo from '../pqslogo.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
// import {Link} from 'react-router-dom'

const IDCard = () => {
    const history = useHistory();
  return (
        <div>
            <div><h1>Welcome to IDCard</h1></div>
            <button><Link onClick={(e)=>{ history.push({pathname: '/members'}) }}>Back</Link></button>
            {/* <button><Link onClick={(e)=>{ history.push({pathname: '/individualpage', state: [{email: member.email}]}) }}>Back</Link></button> */}

        </div>
  )};

export default IDCard;