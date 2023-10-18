import React, { useState } from 'react';
// import styles from './styles/GeneralInformation.module.css';
import HeaderWithToggle from './HeaderWithToggle';

export default function ProfessionalInformation({professionalInfo, setProfessionalInfo}) {
    
    const [showDetails, setShowDetails] = useState(false)

    const handleArrowClick = () => {
        setShowDetails(!showDetails);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfessionalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


  return (
    <>
        <HeaderWithToggle
        imgSrc='../public/briefcase.svg' 
        headerText="Professional Information"
        showDetails={showDetails}
        onToggle={handleArrowClick}
        />

        {showDetails &&(
            <div>
                <p><strong>Job Title:</strong> <br /><input placeholder='...' name = 'jobTitle' value = {professionalInfo.jobTitle} onChange={handleInputChange}></input></p>
                <p><strong>Company:</strong> <br /><input placeholder='...' name = 'company' value = {professionalInfo.company} onChange={handleInputChange}></input></p>
                <p><strong>Start Date:</strong> <br /><input placeholder='...' name = 'startDate' value = {professionalInfo.startDate} onChange={handleInputChange}></input></p>
                <p><strong>End Date:</strong> <br /><input placeholder='...' name = 'endDate' value = {professionalInfo.endDate} onChange={handleInputChange}></input></p>
                <p><strong>Description:</strong> <br /><input placeholder='...' name = 'description' value = {professionalInfo.description} onChange={handleInputChange}></input></p>
            </div>
        )}
    </>
  )
}
