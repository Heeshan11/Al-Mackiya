import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Display from './Display';
import { getStudents, reset, resetStates } from '../features/studentAuth/studentSlice';
import Spinner from '../components/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PaginationComponent from '../components/Pagination';

const Dashboard = () => {
  const { user, } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, totalRecord } = useSelector(state => state.student);


  useEffect(() => {
    if (!user) {
      navigate('/login');
      return; // Ensure the effect stops here if user is not authenticated
    }
  }, [user, navigate]);
  useEffect(() => {
    if (isSuccess) {
      dispatch(resetStates());
    }
  }, [isSuccess])
  if (isLoading) {
    return <Spinner />;
  }

  return (
  <>
  {user&& 
   <div >
      <div style={{
        visibility: isLoading ? 'hidden' : 'visible', justifyContent: 'right',
        display: 'flex'
      }}>

        <SearchBar />
      </div>
      <h6 style={{ textAlign: 'right', }} >Total Record{totalRecord > 1 ? 's' : ''}: {totalRecord}</h6>
      <Display />
      <div style={{
        justifyContent: 'center',
        display: 'flex', margin: '10px 0'
      }}>

        <PaginationComponent />
      </div>
    </div>}
  </>
  );
};

export default Dashboard;