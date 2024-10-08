import { useState } from 'react';
import './App.css'
import axios from "axios";

function App() {

  const[values, setValues] = useState({
    name:'',
    email:'',
    address:'',
    prn:'',
    phone:'',
    gender:'',
    department:'',
    resume:'',
    linkedin:''
})


const handleChanges = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault(); 
  console.log(values);  

  axios.post('https://poc-backend-spring-fdcuhxb5ghandgcd.canadacentral-01.azurewebsites.net/poc/student', values) //get the link from Prathamesh
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
};

  return (
    <div className='container'>
      <h1>Candidate Registration Form</h1>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter name' name='name' onChange={(e) => handleChanges(e)} required value={values.name}/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter email'name='email' onChange={(e) => handleChanges(e)} required value={values.email}/>

        <label htmlFor="prn">PRN</label>
        <input type="text" placeholder='Enter PRN'name='prn' onChange={(e) => handleChanges(e)} required value={values.prn}/>

        <label htmlFor="phone">Contact</label>
        <input type="text" placeholder='Enter phone number'name='phone' onChange={(e) => handleChanges(e)} required value={values.phone}/>

        <label htmlFor="address">Address</label>
        <input type="text" placeholder='Enter Address' name='address' onChange={(e) => handleChanges(e)} required value={values.address}/>

        <label htmlFor="gender">Gender</label>
        <input type="radio" value= "male" name='gender'onChange={(e) => handleChanges(e)} /> Male
        <input type="radio" value= "female" name='gender'onChange={(e) => handleChanges(e)} /> Female
        <input type="radio" value= "other" name='gender'onChange={(e) => handleChanges(e)}/> Other

        <label htmlFor="department">Department</label>
        <select name="department" id="department" onChange={(e) => handleChanges(e)} value={values.department}>
          <option value="" disabled>--select--</option> 
          <option value="cs">CS</option>
          <option value="IT">IT</option>
          <option value="AIDS">AIDS</option>
          <option value="ENTC">ENTC</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input type="text" placeholder='Select Resume'name='resume' onChange={(e) => handleChanges(e)} value={values.resume}/>

        <label htmlFor="linkedin">LinkedIn Profile Link</label>
        <input type="text" placeholder='Enter LinkedIn Profile Link' name='linkedin'onChange={(e) => handleChanges(e)} value={values.linkedin}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
  
}

export default App
