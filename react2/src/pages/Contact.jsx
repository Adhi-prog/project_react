// import Navbar from "../components/Navbar"

// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <div>Contact</div>
//     </>
//   )
// }

// export default Contact
import React, { useState, useRef } from 'react';
import Navbar from "../components/Navbar";

const Contact = () => {
  // State to manage popup visibility
  const [isPopupVisible, setPopupVisible] = useState(false);
  
  // State to manage the login result
  const [loginResult, setLoginResult] = useState('');

  // Refs for form inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Toggle the visibility of the popup
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Access email and password using refs
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Simulate login response
    if (email === 'user@example.com' && password === 'password123') {
      setLoginResult('Login successful!');
      setPopupVisible(false); // Close the popup on success
    } else {
      setLoginResult('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 text-center text-xl font-semibold">Contact</div>

      {/* Login Button that triggers the popup */}
      <button
        onClick={togglePopup}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>

      {/* Display login result */}
      {loginResult && (
        <div className="text-center mt-4 text-red-500">
          {loginResult}
        </div>
      )}

      {/* Popup login form */}
      {isPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Login</h3>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  ref={emailRef} // Reference for email input
                  placeholder="Enter your email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  ref={passwordRef} // Reference for password input
                  placeholder="Enter your password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Login
              </button>
              <button
                type="button"
                onClick={togglePopup}
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
