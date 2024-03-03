import React from 'react';
import {  useSelector } from 'react-redux';
 
import { RootState } from '../redux/store';
 

const DashboardPage: React.FC = () => {
 
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
     
    return <div>Unauthorized Access. Please sign in.</div>;
  }

  // console.log(isAuthenticated);
  return (
    <div className="p-8 bg-gray-200 min-h-screen flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Protected Dashboard Page</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         
      >
        Logout
      </button>
    </div>
  </div>
  );
};

export default  DashboardPage;
