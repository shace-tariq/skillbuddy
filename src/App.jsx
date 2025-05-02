import React from 'react';
import Navbar from './pages/Navbar';
import Sidebar from './pages/sidebar';
import Body from './pages/Body';

function App() {
  const [activeSection, setActiveSection] = React.useState('home'); // default is Home page

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      <Sidebar/>
      <Body activeSection={activeSection} />
    </div>
  );
}

export default App;
