// import { User2 } from 'lucide-react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <>
//             <div className="w-full h-[4rem] flex justify-center items-center bg-purple-500 shadow-md shadow-purple-700 rounded-sm">
//                 <div className="w-[80%] h-full flex justify-center items-center flex-row">
//                     <div className='w-1/2 flex h-full justify-start items-center font-bold text-xl text-white'>ADITHYA RS</div>
//                     <div className='w-1/2 flex  h-full justify-end items-center'>
//                         <ul className='w-full list-none flex flex-row justify-center gap-6'>
//                             <Link to={'/'}>
//                                 <li className='font-bold text-xl text-white'>Profile</li>
//                             </Link>
//                             <Link to={'/projects'}>
//                             <li className='font-bold text-xl text-white'>Projects</li>
//                             </Link>
//                             <Link to={'/contact'}>
//                             <li className='font-bold text-xl text-white'>Contact</li>
//                             </Link>
//                         </ul>
//                         <User2 className='h-9 w-9 text-white rounded-full border-2 border-white'  />
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Navbar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link to="/">My Portfolio</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/profile">
            <li className="hover:text-yellow-400 transition-colors duration-300">Profile</li>
          </Link>
          <Link to="/projects">
            <li className="hover:text-yellow-400 transition-colors duration-300">Projects</li>
          </Link>
          <Link to="/skills">
            <li className="hover:text-yellow-400 transition-colors duration-300">Skills</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-yellow-400 transition-colors duration-300">Contact</li>
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col items-center bg-gray-700 py-4 space-y-4">
          <Link to="/profile" onClick={toggleMenu}>
            <li className="hover:text-yellow-400 transition-colors duration-300">Profile</li>
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            <li className="hover:text-yellow-400 transition-colors duration-300">Projects</li>
          </Link>
          <Link to="/skills" onClick={toggleMenu}>
            <li className="hover:text-yellow-400 transition-colors duration-300">Skills</li>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <li className="hover:text-yellow-400 transition-colors duration-300">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
