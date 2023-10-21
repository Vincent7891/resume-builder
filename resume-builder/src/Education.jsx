import React, { useState } from 'react'
import HeaderWithToggle from './HeaderWithToggle'
import styles from './styles/GeneralInformation.module.css';


export default function Education({educationalInfo,setEducationalInfo}) {

    const [showDetails, setShowDetails] = useState(false)
    
    const handleArrowClick = () => {
        setShowDetails(!showDetails)
    }

    const handeInputChange = (e) => {
        const {name, value} = e.target;
        setEducationalInfo(prevState => ({
            ...prevState,
            [name]:value
        }))
    }


    return (
        <div className={styles.generalInfoContainer}>
            <HeaderWithToggle
            imgSrc='../public/education.svg'
            headerText="Educational Information"
            showDetails={showDetails}
            onToggle={handleArrowClick}
            />

            {showDetails && (
            <div className={styles['details-container']}>
                <p><strong>Degree:</strong> <br /><input placeholder='...' name ='degree' value = {educationalInfo.degree} onChange={handeInputChange}></input></p>
                <p><strong>University:</strong> <br /><input placeholder='...' name ='university' value = {educationalInfo.university} onChange={handeInputChange}></input></p>
                <p><strong>Grade:</strong> <br /><input placeholder='...' name ='grade' value = {educationalInfo.grade} onChange={handeInputChange}></input></p>
                <p><strong>Start date:</strong> <br /><input placeholder='...' name ='startDate' value = {educationalInfo.startDate} onChange={handeInputChange}></input></p>
                <p><strong>End date:</strong> <br /><input placeholder='...' name ='endDate' value = {educationalInfo.endDate} onChange={handeInputChange}></input></p>
            </div>
            )}
        </div>

    )
}
