import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { getStudents } from '../features/studentAuth/studentSlice'
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",

  })
  const { user_name, password, email } = formData
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
    
    const userData = {
      email,
      password, 
      user_name
    }
    dispatch(login(userData))
  }
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div style={{ display: 'flex', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <section className='form'>
        <div className='formText'> <h3>Student's Records Management System</h3>
          <p style={{color:'gray',paddingBottom:'20px'}}>{`Developing a robust Student Records Management System to streamline data handling, enhance security, and ensure efficient, accurate record-keeping.`}</p>
          <div style={{paddingTop:'20px'}} className='title'>  <FaUser size={20} style={{ marginRight: '5px' }} /> <h4>Login Your Account </h4></div></div>
        <form action="" className='fromSection'>

          <div className="form-group">
            <Form.Label>Email</Form.Label>
            <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter your email' onChange={handleOnchange} />
          </div>
          <div className="form-group">
            <Form.Label>User Name</Form.Label>
            <input required type="text" className='form-control' id='user_name' name='user_name' value={user_name} placeholder='Enter your user name' onChange={handleOnchange} />
          </div>
          <div className="form-group">
            <Form.Label>Password</Form.Label>
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Enter your password' onChange={handleOnchange} />
          </div>

          <div className=" d-md-block form-group">

            <div className="d-grid gap-2">
              <button className="btn btn-success" onClick={handleSubmit} type="submit">Login</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login
