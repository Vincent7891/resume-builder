import React, { useState } from 'react';
import styles from './styles/GeneralInformation.module.css';
import HeaderWithToggle from './HeaderWithToggle'; // Import the new component.

export default function GeneralInformation({generalInfo, setGeneralInfo}) {
    const [showDetails, setShowDetails] = useState(false);

    const handleArrowClick = () => {
        setShowDetails(!showDetails);
    };

    const handleInputChange = (e)=> {
        const {name, value} = e.target;
        setGeneralInfo(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    return (
      <div className = {styles.generalInfoContainer}>
        <HeaderWithToggle 
          imgSrc='../public/profile.svg' 
          headerText="General Information"
          showDetails={showDetails}
          onToggle={handleArrowClick}
        />
          
        {showDetails && (
          <div className={styles['details-container']}>
            <p><strong>Full Name:</strong> <br /><input placeholder='...' name='name' value = {generalInfo.name} onChange={handleInputChange}></input></p>
            <p><strong>Email Address:</strong> <br /><input placeholder='...'name='email' value = {generalInfo.email} onChange={handleInputChange}></input></p>
            <p><strong>Phone Number:</strong> <br /><input placeholder='...'name='number' value = {generalInfo.number} onChange={handleInputChange}></input></p>
            <p><strong>City:</strong> <br /><input placeholder='...'name='city' value = {generalInfo.city} onChange={handleInputChange}></input></p>
          </div>
        )}
      </div>
    );
}

