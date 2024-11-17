import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import Header from './components/Header'
import './App.css';
import './components/components.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { register, reset } from './features/auth/authSlice'
import Display from './pages/Display'
import AddForm from './pages/AddForm'
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import UpdateForm from './components/UpdateForm'
import { useEffect } from 'react'
import { getStudents } from './features/studentAuth/studentSlice'
import SearchBar from './components/SearchBar'
import PrintableStudentDetails from './components/PrintedDetails'
const App = () => {
  const { user, } = useSelector(state => state.auth);
  const { isLoading, limit } = useSelector(state => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch students only if user is authenticated
    if (user) {

      dispatch(getStudents(limit));
    }
    // Optionally reset any relevant state
  }, [user, dispatch, limit]);
  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true }); // Use 'replace' to prevent back navigation
    }
  }, [user, navigate]);
  return (
    <>
      <Router>
        <div className='container-fluid' style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />

          <div className='content' >
            <div style={{
              display: 'flex',
              justifyContent: 'end',
              width: '97%'
            }}>

            </div>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/form' element={<AddForm />} />
              {/* <Route path='/register' element={<Register />} /> */}
              <Route path='/print' element={<PrintableStudentDetails />} />
              <Route path='/login' element={<Login />} />
              <Route path='/update/:id' element={<UpdateForm />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
      <ToastContainer position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      // theme="dark"
      />
    </>
  )
}

export default App


