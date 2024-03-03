import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { RootState } from '../redux/store';
 

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
     
    return <div>Unauthorized Access. Please sign in.</div>;
  }

  return (
    <div>
      <h1>Protected Dashboard Page</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
     
    </div>
  );
};

export default  DashboardPage;
