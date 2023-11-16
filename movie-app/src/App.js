
import React from 'react';
import Approuter from './router/Approuter';
import AuthContextProvider from './context/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    
    <div className='dark:bg-gray-dark-main min-h-screen' >
      <AuthContextProvider>
      <Approuter/>
      <ToastContainer />
      </AuthContextProvider>
    </div>
    
  );
}

export default App;
