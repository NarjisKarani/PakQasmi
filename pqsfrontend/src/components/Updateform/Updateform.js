import { useState } from "react"; 
import { Link, useHistory } from 'react-router-dom';
import "./Updateform.css";
// import Url from '../../Url';
// import pqslogo from '../pqslogo.png';
import './Updateform.css';

const Updateform = (props) => {
  const history = useHistory();
  let xyz = history?.location?.state[0];
  const [id, setId] = useState(xyz?.id??'');
  const [name, setName] = useState(xyz?.name??'');
  const [fathername, setFathername] = useState(xyz?.fathername??'');
  const [address, setAddress] = useState(xyz?.address??'');
  const [city, setCity] = useState(xyz?.city??'');
  const [email, setEmail] = useState(xyz?.email??'');
  const [gender, setGender] = useState(xyz?.gender??'');
  const [bloodgroup, setBloodgroup] = useState(xyz?.bloodgroup??'');
  const [dob, setDob] = useState(xyz?.dob??'');
  const [occupation, setOccupation] = useState(xyz?.occupation??'');
  const [education, setEducation] = useState(xyz?.education??'');
  const [cnic, setCNIC] = useState(xyz?.cnic??'');
  const [group, setGroup] = useState(xyz?.group??'');
  const [mobilenumber, setMobilenumber] = useState(xyz?.mobilenumber??'');
  const [registrationnumber, setRegistrationnumber] = useState(xyz?.registrationnumber??'');
  const [emergencycontact, setEmergencyContact] = useState(xyz?.emergencycontact??'');
  const [emergency, setEmergency] = useState(xyz?.emergencyrelation??'');
  // const [image, setImage] = useState(xyz?.image??'');
  // const [document, setDocument] = useState(xyz?.document??'');

  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className="applyjob">
      <div>
        {/* <img src={pqslogo} alt="pqslogo" className="img" /> */}
        <div>
          <h1 class="heat">ANJUMAN-E-QASIM-O-ZEHRA</h1>
          <h2 class="glass">PAK QASMI SCOUTS GROUP</h2>
        </div>
      </div>
      <div class="ball">
        <h4>REGISTERED WITH KARACHI DISTRICT BOY SCOUTS ASSOCIATION</h4>
      </div>
      <div className="form-box">
        <form
          onSubmit={(e)=>{
            e.preventDefault();
            const user = {name, fathername, group, email, dob, mobilenumber, gender, registrationnumber, cnic, occupation, education, bloodgroup, city, address, emergencycontact, emergency}
            console.log("user added");
            console.log(JSON.stringify(user));
            fetch(`http://localhost:8500/updateform/${id}`,
            {
                mode: 'cors',
                method: 'POST',
                enctype: 'multipart/form-data',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(user),
            }).then((response)=>{
                history.push('/members');
                window.location.reload();
            })
        }}
        >
          <div class="book">
            <h2>REGISTRATION FORM</h2>
          </div>
          <div className="form-fields">
            <div className="field-block">
              <label for="name">Full Name</label>
              <input type="text" id="name" className="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="fathername">Father/Husband Name</label>
              <input type="text" id="fathername" className="fathername" value={fathername} onChange={(e) => setFathername(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="gender">Gender</label>
              <select id="gender" className="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="field-block">
              <label for="dob">DOB</label>
              <input type="date" id="dob" className="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="group">Group</label>
              <select id="group" className="group" name="group" value={group} onChange={(e) => setGroup(e.target.value)}>
                <option value="Scout Leader">Scout Leader</option>
                <option value="Shaheen">Shaheen</option>
                <option value="Scout">Scout</option>
                <option value="Rover">Rover</option>
                <option value="Adult">Adult</option>
              </select>
            </div>

            <div className="field-block">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" className="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="mobilenumber">Mobile Number</label>
              <input type="number" id="mobilenumber" name="mobilenumber" value={mobilenumber} className="mobilenumber" onChange={(e) => setMobilenumber(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="registrationnumber">Registration Number</label>
              <input type="number" id="registrationnumber" name="registrationnumber" value={registrationnumber} className="registrationnumber" onChange={(e) => setRegistrationnumber(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="cnic">CNIC Number</label>
              <input type="number" id="cnic" name="cnic" className="cnic" value={cnic} onChange={(e) => setCNIC(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="address">Address</label>
              <input type="text" id="address" name="address" className="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>

            {/* <div className="field-block">
                <label for="image">Upload image</label>
                <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.value)}/>
                 <button><Link onClick={(e)=>{ 
                  image ={image}
                  fetch(`http://localhost:8500/upload`,
                  {
                      mode: 'cors',
                      method: 'POST',
                      enctype: 'multipart/form-data',
                      headers: { 'Content-Type':'application/json' },
                      // body: JSON.stringify(image),
                  }).then((response)=>{
                     console.log('image upload')
                      // history.push('/');
                      // // window.location.reload();
                  })
                 }}>Upload</Link></button> 
             </div>

            <div className="field-block">
                <label for="document">Upload Document</label>
                <input type="file" id="document" name="document" onChange={(e) => setDocument(e.target.value)}/>
            </div> */}

            <div className="field-block">
              <label for="city">City</label>
              <select id="city" className="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
              </select>
            </div>

            <div className="field-block">
              <label for="bloodgroup">Blood Group</label>
              <select id="bloodgroup" className="bloodgroup" value={bloodgroup} name="bloodgroup" onChange={(e) => setBloodgroup(e.target.value)} >
                <option value="A+">A-</option>
                <option value="A-">A+</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div> 

            <div className="field-block">
              <label for="education">Education</label>
              <select id="education" className="education" value={education} name="education" onChange={(e) => setEducation(e.target.value)} >
              <option value="Pre-primary">Pre-primary</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="Matric/O'level">Matric/O'level</option>
                <option value="Intermediate/A'level"> Intermediate/A'level</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Mastsers">Mastsers</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="field-block">
              <label for="occupation">Occupation</label>
              <select id="occupation" className="occupation" value={occupation} name="occupation" onChange={(e) => setOccupation(e.target.value)} >
                <option value="Student">Student</option>
                <option value="Job">Job</option>
                <option value="Housewife">Housewife</option>
                <option value="Business">Business</option>
                <option value="-">-</option>
              </select>
            </div>

            <div className="field-block">
              <label for="emergency">Emergency Contact (name)</label>
              <input type="text" id="emergency" value={emergency} name="emergency" className="emergency" onChange={(e) => setEmergency(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="emergencycontact">Emergency Contact Number</label>
              <input type="number" id="emergencycontact" value={emergencycontact} name="emergencycontact" className="emergencycontact" onChange={(e) => setEmergencyContact(e.target.value)}/>
            </div>

          </div>
          <div className="submit-btn">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updateform;
