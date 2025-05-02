import React from 'react';
import Blogs from './Blog';
import ContactUs from './ContactUs';
import Courses from './Courses';
import FAQS from './FAQS';
import Home from './Home';
import HowItWorks from './HowItWorks';
import NewsEvents from './News&Events';
import SignIn from './SignIn';
import SignUp from './SignUp';


function Body({ activeSection }) {
  if (activeSection === 'home') {
    return <Home />;
  } 
  else if (activeSection === 'Blogs') {
    return <Blogs />;
  } 
  else if (activeSection === 'ContactUs') {
    return <ContactUs />;
  } 
  else if (activeSection === 'Courses') {
    return <Courses />;s
  } 
  else if (activeSection === 'FAQS') {
    return <FAQS />;
  } 
  else if (activeSection === 'HowItWorks') {
    return <HowItWorks />;
  } 
  else if (activeSection === 'NewsEvents') {
    return <NewsEvents  />;
  } 
  else if (activeSection === 'SignIn') {
    return <SignIn />;
  } 
  else if (activeSection === 'SignUp') {
    return <SignUp />; 
  } 
  else {
    return (
      <div className="body-section">
        <h1>ERROR 404 NOT FOUND</h1>        
      </div>
    );
  }
}

export default Body;
