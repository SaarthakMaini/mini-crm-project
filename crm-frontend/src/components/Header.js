import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header-section">
      <h1 className="main-heading">Streamline Your Customer Relationships</h1>
      <p className="sub-heading">Manage your interactions efficiently with our CRM solution</p>
      <div className="button-group">
        <button className="primary-button">Get Started</button>
        <button className="secondary-button">Learn More</button>
      </div>
    </div>
  );
};

export default Header;