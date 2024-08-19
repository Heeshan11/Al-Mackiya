import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { getStudents } from '../features/studentAuth/studentSlice'
import Form from 'react-bootstrap/Form';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })
  const { name, password, password2, email } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
  useEffect(() => {
    // Always reset the state when an error occurs or a successful registration is achieved
    if (isError || (isSuccess && user)) {
      // Reset the state
      dispatch(reset());
  
      // Display error message if there's an error
      if (isError) {
        toast.error(message);
      }
  
      // Redirect to the home page on successful registration
      if (isSuccess && user) {
     
        navigate('/');
      }
    }
  }, [isError, isSuccess, message, user, navigate, dispatch]);

  const handleOnchange = (e) => {

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   
    if (password !== password2) {
      toast.error('Password do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }
    
      dispatch(register(userData))
    }
    

  }
  
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div  style={{display:'flex', flex:2,justifyContent:'center',alignItems:'center'}}>
       <section className='form' >
      <div className='title'>  <FaUser size={20} style={{ marginRight: '5px' }} /> <h2>Register </h2></div>
      <h4>Please create an account</h4>
      <form action="" >
        <div className="form-group">
        <Form.Label>User Name</Form.Label>
          <input type="text" className='form-control' id='name' name='name' value={name} placeholder='Enter your name' onChange={handleOnchange} />
        </div>
        <div className="form-group">
        <Form.Label>Enter Your Email</Form.Label>
          <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter your email' onChange={handleOnchange} />
        </div>
        <div className="form-group">
        <Form.Label>Password</Form.Label>
          <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Enter your password' onChange={handleOnchange} />
        </div>
        <div className="form-group">
        <Form.Label>Confirm Password</Form.Label>
          <input type="password" className='form-control' id='password2' value={password2} name='password2' placeholder='Confirm password' onChange={handleOnchange} />
        </div>
        <div className=" d-md-block form-group">
          <div className="d-grid gap-2">
            <button className="btn btn-success" onClick={handleSubmit} type="submit">Register</button>
          </div>
        </div>
      </form>
    </section>
    </div>
   
  )
}

export default Register
