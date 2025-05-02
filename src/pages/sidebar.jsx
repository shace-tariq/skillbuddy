import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar-container">
      {/* Button 1 */}
      <button className="sidebar-btn">
        <img src="/icons/digiskills_call.png" alt="Call Icon" className="sidebar-icon" />
        <span className="sidebar-text">Call</span>
      </button>

      {/* Button 2 */}
      <button className="sidebar-btn">
        <img src="/icons/digiskills_mail.png" alt="Mail Icon" className="sidebar-icon" />
        <span className="sidebar-text">Mail</span>
      </button>

      {/* Button 3 */}
      <button className="sidebar-btn">
        <img src="/icons/digiskills_question.png" alt="Question Icon" className="sidebar-icon" />
        <span className="sidebar-text">Any Question?</span>
      </button>
    </div>
  );
}

export default Sidebar;
