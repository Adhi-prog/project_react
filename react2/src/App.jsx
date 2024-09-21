//import Navbar from "./components/Navbar"
// import Profile from "./pages/Profile"
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Projects from "./pages/Projects"
// import Contact from "./pages/Contact"

// const App = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<Profile />} />
//                     <Route path="/projects" element={<Projects />} />
//                     <Route path="/contact" element={<Contact />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }
// export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact'; 

const App = () => {
  return (
    <BrowserRouter>
      {/* Apply a gradient background to the whole page */}
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <Navbar /> 

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<ProfileCard />} />
            <Route path="/profile" element={<ProfileCard />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
