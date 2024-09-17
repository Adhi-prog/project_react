const Navbar = ({ data }) => {
    return (
      <div className="w-full h-[3vh] bg-blue-500 text-white flex justify-center">
        {/* Map over the data to display each item */}
        {data.map(item => (
          <span key={item.id}>{item.name} </span>
        ))}
      </div>
    );
  }
  
  export default Navbar;
// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4 flex justify-between items-center">
//       <div className="text-white text-lg">My Portfolio</div>
//       <div className="flex space-x-4">
//         <a href="#about" className="text-white">About</a>
//         <a href="#projects" className="text-white">Projects</a>
//         <a href="#skills" className="text-white">Skills</a>
//         <a href="#contact" className="text-white">Contact</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

  