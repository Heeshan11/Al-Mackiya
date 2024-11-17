import React, { useEffect } from 'react'
import { FaRegUserCircle, FaSignInAlt, FaSignOutAlt, FaUser, FaUserCheck } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg'
import person from '../images/person.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { reset } from '../features/studentAuth/studentSlice';
import SearchBar from './SearchBar';
const Header = () => {
    const naviagte = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    useEffect(() => {
        naviagte('/')
    }, [user])
    
    const handleLogout = () => {
        dispatch(reset())
        dispatch(logout())
        naviagte('/login')
        

    }
    return (
        <header>
            <div style={{ flex: 3, display: 'flex' }}>
                <Link to='/'>
                    <img src={logo} className='App-logo' alt="Logo" height={50} width={50} />
                </Link>
            </div>
            <div className="" style={{ flex: 1, display: 'flex', justifyContent: 'right' }}>
                <ul>
                    {user ? (
                        <>
                            <div className="dropdown">
                                <div className='user'>
                                 <FaRegUserCircle size={50} style={{paddingRight:10}}/>

                                    <h4>{user?.user_name}</h4>
                                </div>
                                <div className="dropdown-content">
                                    <Link to='/'>

                                        <p>All Student </p>
                                    </Link>

                                    <Link to='/form'>

                                        <p>Add New Student </p>
                                    </Link>
                                    <button
                                        className='btn btn-outline btn-sm' style={{
                                            flexDirection: 'row',
                                            display: 'flex',
                                            alignItems: 'center', color: '#000'
                                        }}
                                        onClick={() => handleLogout()}>


                                        <p>Logout </p>&ensp;<FaSignOutAlt />
                                    </button>

                                </div>
                            </div>

                        </>
                    ) :
                        <>
                            
                        </>
                    }
                </ul>
            </div>

        </header >
    )
}

export default Header
