
import React from 'react';
import Approuter from './router/Approuter';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    
    <div className='dark:bg-gray-dark-main min-h-screen' >
      <AuthContextProvider>
      <Approuter/>
      </AuthContextProvider>
    </div>
    
  );
}

export default App;
