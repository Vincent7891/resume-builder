import React, { useState } from 'react';
import ProfessionalInformation from './ProfessionalInformation';
import styles from './styles/CV.module.css';

export default function CV() {
    const [professionalInfo, setProfessionalInfo] = useState({
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        description: ''
    });

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <ProfessionalInformation 
                    professionalInfo={professionalInfo} 
                    setProfessionalInfo={setProfessionalInfo}
                />
            </div>
            <div className={styles.right}>
                <p><strong>Job Title:</strong> {professionalInfo.jobTitle}</p>
                <p><strong>Company:</strong> {professionalInfo.company}</p>
                <p><strong>startDate:</strong> {professionalInfo.startDate}</p>
                <p><strong>End date:</strong> {professionalInfo.endDate}</p>
                <p><strong>description:</strong> {professionalInfo.description}</p>
            </div>
        </div>
    );
}
