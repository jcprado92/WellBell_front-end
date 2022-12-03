import React from 'react';
import Dashboard from '../Components/UserInput/Dashboard';
import SideNav from '../Components/SideNav';
import { UserAuth } from '../context/AuthContext';
import { retrieveToken } from '../Firebase/firebase';

const Account = () => {
  const { logOut, user } = UserAuth();
retrieveToken()

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <SideNav/>
      <h1 className='text-center text-2xl font-bold pt-12'>{user?.displayName}'s Dashboard</h1>
      {/* <div>
        <p>Welcome, {user?.displayName}!</p>
      </div> */}
      <Dashboard/>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
      <button>BACK</button>
    </div>
  );
};

export default Account;