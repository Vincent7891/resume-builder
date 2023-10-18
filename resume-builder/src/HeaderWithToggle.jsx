import React from 'react';
import styles from './styles/HeaderWithToggle.module.css'; // Consider having its own styles if necessary.

// eslint-disable-next-line react/prop-types
export default function HeaderWithToggle({ imgSrc, headerText, showDetails, onToggle }) {
  return (
    <div className={styles['header-container']}>
      <img className={styles['profile-image']} src={imgSrc} alt="Profile" />
      <p className={styles['header-text']}>{headerText}</p>
      <img 
        className={styles['arrow']} 
        src={showDetails ? '../public/arrow-up.svg' : '../public/arrow-down.svg'} 
        alt="Toggle Details"
        onClick={onToggle}
      />
    </div>
  );
}
