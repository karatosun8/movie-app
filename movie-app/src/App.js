import React from "react";
import Approuter from "./router/Approuter";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import MovieContextProvider from "./context/MovieContext";

function App() {
  return (
    <div className="dark:bg-gray-dark-main min-h-screen">
      <AuthContextProvider>
        <MovieContextProvider>
          <Approuter />
          <ToastContainer />
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
