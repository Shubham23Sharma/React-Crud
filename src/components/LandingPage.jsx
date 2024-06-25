import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LandingNavbar from './LandingNavbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import image from '../assets/technology-stnazkul-adobe.jpeg';
const LandingPage = () => {
  let navigate = useNavigate()
  let [cred, setCred] = useState()
  let [state, setState] = useState({
    username: "",
    password: "",
    id: Date.now().toString()
  })
  let { username, password, id } = state
  useEffect(() => {
    axios.get(`http://localhost:3000/credentials`).then((resp) => { setCred(resp.data) })
  }, [])
  setTimeout(() => {
    console.log(cred)
  }, 3000)
  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  let handleLogin = () => {
    console.log("checking...")
    cred.length == 0 && alert("no data found")
    cred.length > 0 && cred.map((obj, i) => {
      if (obj.username == state.username && obj.password == state.password) {
        navigate("/home")
      }
    })
    if (obj.username == state.username && obj.password == state.password) {
      alert("Welcome user")

    }

  }
  return (
    <div>
      {/* <LandingNavbar /> */}

      <div>

        <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-white font-bold my-4'>Turn your codes into reality</h1>
          <p className='text-xl text-white font-normal'>Start for free and get attractive offers for the community</p>

        </div>

        <img src={image} className='w-full h-full object-cover' />
        
        </div>

        <div  className='w-1/2 h-full bg-[#f5f5f5 flex flex-col p-20 justify-between'>
        <h1 className='text-xl text-[#060606] font-semibold'>Interactive Brand </h1>
        

        <div className='w-full flex flex-col'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-base mb-2'>Welcome Back! Please enter your details</p>
          </div>
          <div className='w-full flex flex-col'>
            <input type="text" placeholder='Email' className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
            <input type='text' placeholder='Password' className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'></input>
          </div>

          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center'>
              <input type="checkbox" className='w-4 h-4 mr-2'/>
              <p className='text-sm'>Remember Me</p>
            </div>
          </div>
        </div>
        </div>

        </div>
        {/* <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" name='username' value={username} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" name='password' value={password} onChange={handleChange} />
          </Form.Group>
        </Form> */}
        {/* <Button onClick={handleLogin} variant="secondary">Sign In</Button> */}
      </div>
    </div> 
  )
}

export default LandingPage