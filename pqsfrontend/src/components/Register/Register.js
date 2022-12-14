import { useState } from "react"; 
import { Link, useHistory } from 'react-router-dom';
import "./Register.css";
import axios from "axios"
// import Url from '../../Url';
// import pqslogo from '../pqslogo.png';
import './Register.css';

const Register = () => {
  const [name, setName] = useState("");
  const [fathername, setFathername] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [cnic, setCNIC] = useState("");
  const [group, setGroup] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [registrationnumber, setRegistrationnumber] = useState("");
  const [emergencycontact, setEmergencyContact] = useState("");
  const [emergency, setEmergency] = useState("");
  const [remarks, setRemarks] = useState("");
  const [image, setImage] = useState(null);
  // const [document, setDocument] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const UPLOAD_URL = 'http://localhost:8500/register';
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
        <h4>REGISTERED BY KARACHI DISTRICT BOY SCOUTS ASSOCIATION</h4>
      </div>
      <div className="form-box">
        <form
          onSubmit={(e)=>{
            e.preventDefault();
            // const user = {name, fathername, group, email, dob, mobilenumber, remarks, gender, registrationnumber, cnic, occupation, education, bloodgroup, city, address, emergencycontact, emergency}
            const formData= new FormData();
              formData.append("image", image); //first is input field name, second is usestate name
              formData.append("name", name);
              formData.append("fathername", fathername);
              formData.append("group", group);
              formData.append("email", email);
              formData.append("dob", dob);
              formData.append("bloodgroup", bloodgroup);
              formData.append("cnic", cnic);
              formData.append("mobilenumber", mobilenumber);
              formData.append("gender", gender);
              formData.append("education", education);
              formData.append("city", city);
              formData.append("address", address);
              formData.append("occupation", occupation);
              formData.append("registrationnumber", registrationnumber);
              formData.append("emergencycontact", emergencycontact);
              formData.append("emergency", emergency);
              formData.append("remarks", remarks);
              // Display the values
              for (const value of formData.values()) {
                console.log(value);
              }

              axios
              .post(UPLOAD_URL, formData)
              .then((res) => {
                alert("Record Inserted Successfully!!");
              })
              .catch((err) => alert("File Upload Error"));
            // console.log(JSON.stringify(formData));
            // console.log(JSON.stringify(user));
            // fetch(`http://localhost:8500/register`,
            // {
            //     mode: 'cors',
            //     method: 'POST',
            //     enctype: 'multipart/form-data',
            //     headers: { 'Content-Type':'application/json' },
            //     // body: JSON.stringify(user),
            //     body: formData,
            //     // data:formData,
            // }).then((response)=>{
            //     history.push('/register');
            //     // window.location.reload();
            // })
        }}
        >
          <div class="book">
            <h2>REGISTRATION FORM</h2>
          </div>
          <div className="form-fields">
            <div className="field-block">
              <label for="name">Full Name</label>
              <input type="text" id="name" className="name" name="name" onChange={(e) => setName(e.target.value)}/>
              <input type="hidden" value="Admin input" id="registrationnumber" name="registrationnumber" className="registrationnumber" onChange={(e) => setRegistrationnumber(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="fathername">Father/Husband Name</label>
              <input type="text" id="fathername" className="fathername" onChange={(e) => setFathername(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="gender">Gender</label>
              <select id="gender" className="gender" name="gender" onChange={(e) => setGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            

            <div className="field-block">
              <label for="dob">DOB</label>
              <input type="date" id="dob" className="dob" onChange={(e) => setDob(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="group">Group</label>
              <select id="group" className="group" name="group" onChange={(e) => setGroup(e.target.value)}>
                <option value="Scout Leader">Scout Leader</option>
                <option value="Shaheen">Shaheen</option>
                <option value="Scout">Scout</option>
                <option value="Rover">Rover</option>
                <option value="Adult">Adult</option>
              </select>
            </div>
            <div className="field-block">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="xyz@example.com" className="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="mobilenumber">Mobile Number</label>
              <input type="number" pattern="[0-9]{11}" placeholder="Add exactly 11 number (0300 0000000)" min="10" max="12" id="mobilenumber" name="mobilenumber" className="mobilenumber" onChange={(e) => setMobilenumber(e.target.value)}/>
            </div>

            {/* <div className="field-block">
              <label for="registrationnumber">Registration Number</label> */}
              {/* <input type="hidden" value="Admin input" id="registrationnumber" name="registrationnumber" className="registrationnumber" onChange={(e) => setRegistrationnumber(e.target.value)}/> */}
            {/* </div> */}

            <div className="field-block">
              <label for="cnic">CNIC Number</label>
              <input type="number" id="cnic" name="cnic" className="cnic" placeholder="Exact 13 digits" min="12" max="14" pattern="[0-9]{13}" onChange={(e) => setCNIC(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="address">Address</label>
              <input type="text" id="address" name="address" className="address" onChange={(e) => setAddress(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="city">City</label>
              <select id="city" className="city" name="city" onChange={(e) => setCity(e.target.value)}>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
              </select>
            </div>

            <div className="field-block">
              <label for="bloodgroup">Blood Group</label>
              <select id="bloodgroup" className="bloodgroup" name="bloodgroup" onChange={(e) => setBloodgroup(e.target.value)} >
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
                <label for="image">Upload image</label>
                <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
            </div>

            {/* <div className="field-block">
                <label for="document">Upload Document</label>
                <input type="file" id="document" name="document" onChange={(e) => setDocument(e.target.value)}/>
            </div> */}

            <div className="field-block">
              <label for="education">Education</label>
              <select id="education" className="education" name="education" onChange={(e) => setEducation(e.target.value)} >
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
              <select id="occupation" className="occupation" name="occupation" onChange={(e) => setOccupation(e.target.value)} >
                <option value="Student">Student</option>
                <option value="Job">Job</option>
                <option value="Housewife">Housewife</option>
                <option value="Business">Business</option>
                <option value="-">-</option>
              </select>
            </div>

            <div className="field-block">
              <label for="emergency">Emergency Contact (name)</label>
              <input type="text" id="emergency" name="emergency" className="emergency" onChange={(e) => setEmergency(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="emergencycontact">Emergency Contact Number</label>
              <input type="number" id="emergencycontact" name="emergencycontact" pattern="[0-9]{11}" placeholder="Add exactly 11 number (0300 0000000)" min="10" max="12" className="emergencycontact" onChange={(e) => setEmergencyContact(e.target.value)}/>
            </div>

            <div className="field-block">
              <label for="remarks">Comments/Remarks</label>
              <input type="textarea" id="remarks" name="remarks" value={remarks} className="remarks" onChange={(e) => setRemarks(e.target.value)}/>
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

export default Register;
