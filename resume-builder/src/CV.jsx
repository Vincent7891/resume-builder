import React, { useState } from 'react';
import Education from './Education';
import ProfessionalInformation from './ProfessionalInformation';
import styles from './styles/CV.module.css';
import GeneralInformation from './GeneralInformation';

export default function CV() {
    const [professionalExperiences, setProfessionalExperiences] = useState([{
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        description: ''
    }]);

    const [educationalInfo, setEducationalInfo] = useState({
        degree: '',
        university: '',
        grade: '',
        startDate: '',
        endDate: ''
    });

    const [generalInfo, setGeneralInfo] = useState({
      name: '',
      email: '',
      number: '',
      city: ''
    });

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <GeneralInformation
                    generalInfo={generalInfo}
                    setGeneralInfo={setGeneralInfo}
                />
                <Education
                    educationalInfo={educationalInfo}
                    setEducationalInfo={setEducationalInfo}
                />
                <ProfessionalInformation
                    professionalExperiences={professionalExperiences}
                    setProfessionalExperiences={setProfessionalExperiences}
                />
            </div>
            <div className={styles.paper}>
                <div className={styles.right}>
                    <p><strong>Full Name:</strong> {generalInfo.name}</p>
                    <p><strong>Email:</strong> {generalInfo.email}</p>
                    <p><strong>Phone Number:</strong> {generalInfo.number}</p>
                    <p><strong>City:</strong> {generalInfo.city}</p>
                    <br />
                    <p><strong>Degree:</strong> {educationalInfo.degree}</p>
                    <p><strong>University:</strong> {educationalInfo.university}</p>
                    <p><strong>Grade:</strong> {educationalInfo.grade}</p>
                    <p><strong>Start Date:</strong> {educationalInfo.startDate}</p>
                    <p><strong>End Date:</strong> {educationalInfo.endDate}</p>
                    <br />
                    {professionalExperiences.map((info, ID) => (
                        <React.Fragment key={ID}>
                            <p><strong>Job Title:</strong> {info.jobTitle}</p>
                            <p><strong>Company:</strong> {info.company}</p>
                            <p><strong>startDate:</strong> {info.startDate}</p>
                            <p><strong>End date:</strong> {info.endDate}</p>
                            <p><strong>description:</strong> {info.description}</p>
                            <br />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}


