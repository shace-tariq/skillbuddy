import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Body from './components/Body';

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
