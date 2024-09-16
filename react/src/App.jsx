// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <div className='h-screen w-screen flex justify-center items-center bg-purple-600' >
//         <div className='w-[30%] h-3/6 flex justify-center items-center bg-white rounded-md'>
//         <form className='w-[80%] h-[80%] flex flex-col justify-center items-center gap-4' >

//         <input type="text" name="" id="" placeholder="Name" className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-blue-300'/>
//         <input type="email" name="" id="" placeholder="Email" className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-blue-300' />
//         <input type="number" name="" id="" placeholder="Age" className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-blue-300'/>
//         <input type="password" name="" id="" placeholder="Password" className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-blue-300'/>
//         <button type="submit" className='w-full p-3  rounded-md outline-none font-bold text-white bg-blue-300 '>Register here</button> 

//         </form>   
//         </div>
//     </div>  
//     </>
//   )
// }

// export default App
import Navbar from "./NavBar";  

const App = () => {
  const appName = "M-A-X";
  
  const data = {
    appName: "M-A-X",
    appData: [
      { id: 1, name: "Item 1", active: true },
      { id: 2, name: "Item 2", active: false },
      { id: 3, name: "Item 3", active: true }
    ]
  };

  const filteredData = data.appData.filter(item => item.active);  

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar data={filteredData} />  {/* Pass filtered data to NavBar */}
      {/* Display login area */}
      <div>Login Component Here</div>
    </div>
  );
}

export default App;
