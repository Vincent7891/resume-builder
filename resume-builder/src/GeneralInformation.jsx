import React, { useState } from 'react';
import styles from './styles/GeneralInformation.module.css';
import HeaderWithToggle from './HeaderWithToggle'; // Import the new component.

export default function GeneralInformation() {
    const [showDetails, setShowDetails] = useState(false);

    const handleArrowClick = () => {
        setShowDetails(!showDetails);
    };

    return (
      <>
        <HeaderWithToggle 
          imgSrc='../public/profile.svg' 
          headerText="General Information"
          showDetails={showDetails}
          onToggle={handleArrowClick}
        />
          
        {showDetails && (
          <div className={styles['details-container']}>
            <p><strong>Full Name:</strong> <br /><input placeholder='...'></input></p>
            <p><strong>Email Address:</strong> <br /><input placeholder='...'></input></p>
            <p><strong>Phone Number:</strong> <br /><input placeholder='...'></input></p>
            <p><strong>City:</strong> <br /><input placeholder='...'></input></p>
          </div>
        )}
      </>
    );
}

