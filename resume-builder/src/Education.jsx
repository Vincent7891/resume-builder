import React, { useState } from 'react'
import HeaderWithToggle from './HeaderWithToggle'

export default function Education() {

    const [showDetails, setShowDetails] = useState(false)
    
    const handleArrowClick = () => {
        setShowDetails(!showDetails)
    }

    return (
        <>
            <HeaderWithToggle 
            imgSrc='../public/education.svg' 
            headerText="Educational Information"
            showDetails={showDetails}
            onToggle={handleArrowClick}
            />

            { showDetails && (
            <div className={'details-container'}>
                <p><strong>Degree:</strong> <br /><input placeholder='...'></input></p>
                <p><strong>University:</strong> <br /><input placeholder='...'></input></p>
                <p><strong>Grade:</strong> <br /><input placeholder='...'></input></p>
                <p><strong>Start date:</strong> <br /><input placeholder='...'></input></p>
                <p><strong>End date:</strong> <br /><input placeholder='...'></input></p>
            </div>
            )}
        </>       
    )
}
