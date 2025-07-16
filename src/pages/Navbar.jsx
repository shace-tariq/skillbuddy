import React from 'react';
import '../styles/Navbar.css'; // Assuming you have a CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar({setActiveSection}) {
  // const  onClick = () => {
  //   alert('Search clicked');
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 no-padding">
          <nav className="main-nav">
            {/* Logo */}
            <a href="#" className="logo">
              <img src="/skillbuddy/dist/icons/logo.png" alt="logo" />
            </a>

            {/* Menu */}  
            <ul className="nav">
              <li ><a href="#" onClick={() => setActiveSection('home')}>Home</a></li>
              <li><a href="#"   onClick={() => setActiveSection('Courses')} className="course_scroll">Courses</a></li>
              <li><a href="#"   onClick={() => setActiveSection('NewsEvents')} className="news_scroll">News & Events</a></li>
              <li ><a href="#"  onClick={() => setActiveSection('HowItWorks')} >How It Works</a></li>
              <li><a href="#"   onClick={() => setActiveSection('Blogs')} id="blog_scroll">Blog</a></li>
              <li ><a href="#"  onClick={() => setActiveSection('FAQS')} >FAQs</a></li>
              <li ><a href="#"  onClick={() => setActiveSection('ContactUs')} >Contact Us</a></li>
              <li >
                <a id="LMSLink" href="#"  onClick={() => setActiveSection('SignIn')}  rel="noopener noreferrer">Sign In</a>
              </li>
              <li >
                <div className="main-blue-button search-icon search-li LargeScreenSearch">
                  <a href="#"><i className="fa fa-search"></i></a>
                </div>
              </li>
              <li >
                <div className="main-blue-button">
                  <a href="#"  onClick={() => setActiveSection('SignUp')} >Sign Up <i className="fa fa-arrow-right"></i></a>
                </div>
              </li>
            </ul>




          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


/* 
className="container">
className="row">
className="col-12 no-padding">
className="main-nav">
className="logo">
className="nav">
><a href="Default.aspx">Home</a></li>
className="course_scroll">Courses</a></li>
className="news_scroll">News & Events</a></li>
><a href="HowItWorks.aspx">How It Works</a></li>
><a href="FAQs.aspx">FAQs</a></li>
><a href="ContactUs.aspx">Contact Us</a></li>
>
>
className="main-blue-button search-icon search-li LargeScreenSearch">
className="fa fa-search"></i></a>
>
className="main-blue-button">
className="fa fa-arrow-right"></i></a>
className="ScriptTop">
className="ScriptHeader">
className="main-blue-button search-icon search-li search-li-mobile">
className="fa fa-search"></i></a>
className="togglesearch togglesearchMobile">
className="menu-trigger">
*/