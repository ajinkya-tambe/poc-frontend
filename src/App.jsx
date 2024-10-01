import { useState } from 'react';
import './App.css'
import axios from "axios";

function App() {

  const[values, setValues] = useState({
    fullName:'',
    email:'',
    prn:'',
    contact:'',
    gender:'',
    department:'',
    resume:'',
    linkedInURL:''
})

const handleChanges = (e) =>{
  setValues({...values, [e.target.name]:[e.target.value]})
  axios.post(url,{}).then(result=>{ //ask url from prathamesh
    console.log(result)
  })
  .catch(error =>{
    console.log(error)
  })
}

const handleSubmit=(e) =>{
  e.preventDefault();
  console.log(values);
}

  return (
    <div className='container'>
      <h1>Candidate Registration Form</h1>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="fullName">Name</label>
        <input type="text" placeholder='Enter name' name='fullName' onChange={(e) => handleChanges(e)} required value={values.fullName}/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter email'name='email' onChange={(e) => handleChanges(e)} required value={values.email}/>

        <label htmlFor="prn">PRN</label>
        <input type="text" placeholder='Enter PRN'name='prn' onChange={(e) => handleChanges(e)} required value={values.prn}/>

        <label htmlFor="contact">Contact</label>
        <input type="text" placeholder='Enter phone number'name='contact' onChange={(e) => handleChanges(e)} required value={values.contact}/>

        <label htmlFor="gender">Gender</label>
        <input type="radio" value= "male" name='gender'onChange={(e) => handleChanges(e)} /> Male
        <input type="radio" value= "female" name='gender'onChange={(e) => handleChanges(e)} /> Female
        <input type="radio" value= "other" name='gender'onChange={(e) => handleChanges(e)}/> Other

        <label htmlFor="department">Department</label>
        <select name="department" id="department" onChange={(e) => handleChanges(e)} value={values.department}>
          <option value="cs">CS</option>
          <option value="IT">IT</option>
          <option value="AIDS">AIDS</option>
          <option value="ENTC">ENTC</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input type="file" placeholder='Select Resume'name='resume' onChange={(e) => handleChanges(e)} value={values.resume}/>

        <label htmlFor="linkedInURL">LinkedIn Profile Link</label>
        <input type="text" placeholder='Enter LinkedIn Profile Link' name='linkedInURL'onChange={(e) => handleChanges(e)} value={values.linkedInURL}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
  
}

export default App
