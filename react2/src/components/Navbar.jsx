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
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
          <Link to="/profile">
            <li className="hover:text-yellow-400">Profile</li>
          </Link>
          <Link to="/projects">
            <li className="hover:text-yellow-400">Projects</li>
          </Link>
          <Link to="/skills">
            <li className="hover:text-yellow-400">Skills</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-yellow-400">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
