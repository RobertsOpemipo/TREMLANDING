// src/components/LandingPage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faKey,
  faFileAlt,
  faMoneyBillAlt,
  faHome,
  faDatabase,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';

const icons = [faUser, faKey, faFileAlt, faMoneyBillAlt, faHome, faDatabase, faChartBar];
const texts = [
  'Profile Manager',
  'Vehicle Ops',
  'Plate Manager',
  'Payment',
  'Documents',
  'User Manager',
  'Data',
  'Statistics',
  'Charts'
];

const links = [
  'https://example.com/user',
  'https://example.com/license',
  'https://example.com/tax',
  'https://example.com/paynet',
  'https://example.com/housing',
  'https://example.com/data',
  'https://example.com/statistics',
  'https://example.com/charts'
];

const LandingPage = () => {
  const circles = icons.map((icon, index) => (
    <div key={index} className={`circle circle-${index + 1}`} style={{ animationDelay: `${index * 0.5}s` }}></div>
  ));

  return (
    <div className="container mx-auto mt-10">
      <div className="bouncing-circles">
        {circles}
      </div>
      <h1 className="text-8xl font-bold mb-6 text-white">TREM</h1>
      <div className="grid grid-cols-4 gap-8">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={links[index]}
            className={`icon-container animate__animated animate__fadeIn color-${index + 1}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} size="3x" color="#333" className="icon" />
            <div className="icon-text">{texts[index]}</div>
          </a>
        ))}
      </div>
      <div className="loading-container">
        {/* Add your 3D loading animation here */}
      </div>
    </div>
  );
};

export default LandingPage;
