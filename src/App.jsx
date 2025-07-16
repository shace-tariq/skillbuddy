import React, { useState } from 'react';
import Navbar from './pages/Navbar';
import Sidebar from './pages/sidebar';
import Body from './pages/Body';
import axios from 'axios';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      <Sidebar />
      <Body activeSection={activeSection} />
    </div>
  );
}

export default App;
