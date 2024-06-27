"use client";
import { useState } from "react"
import axios from "axios";

const page = () => {

  const [register, setregister] = useState({ name: "", number: "", email: "", password: "" });
  console.log(register, "register");

  const handleregister = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setregister({ ...register, [name]: value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (register.name && register.number && register.email && register.password) {
      const response = await axios.post("http://localhost:3000/api/products", {
        name: register.name,
        number: register.number,
        email: register.email,
        password: register.password
      });
      console.log(response.data, "chekc response");
      if (response.data.status === 200) {
        alert(response.data.message)
      }
    } else {
      alert("please fil all details")
    }
  }



  return (
    <div>
      <h1 >Admin Registration</h1>
      <form >
        {/* <p className='register-two'>Personal Information</p> */}
        <div style={{ border: "1px solid black", width: "50%", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "230px" }}>
          <div >
            <label>Name</label>
            <br />
            <input type="text" name="name" onChange={handleregister} value={register.name} placeholder='enter your name' />
          </div>
          <div >
            <label>Number</label>
            <br />
            <input type="text" name="number" onChange={handleregister} value={register.number} placeholder='enter your number' />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input type="text" name="email" onChange={handleregister} value={register.email} placeholder='enter your email' />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input type="text" name="password" onChange={handleregister} value={register.password} placeholder='enter your password' />
          </div>
        </div>
      </form>
      <br />
      <input type="submit" value="register" style={{ width: "60%", margin: "auto" }} onClick={(e) => handlesubmit(e)} />
    </div>
  )
}


export default page
