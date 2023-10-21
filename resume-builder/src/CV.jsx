import React, { useState } from 'react';
import Education from './Education';
import ProfessionalInformation from './ProfessionalInformation';
import styles from './styles/CV.module.css';
import GeneralInformation from './GeneralInformation';

export default function CV() {
    const [professionalExperiences, setProfessionalExperiences] = useState([{
        id: '',
        jobTitle: 'Your Job Title',
        company: 'Your Company',
        startDate: '01/06/2020',
        endDate: 'Current',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    }]);

    const [educationalInfo, setEducationalInfo] = useState({
        degree: 'Your Degree',
        university: 'Your University',
        grade: 'Your grade',
        startDate: '01/09/2016',
        endDate: '01/05/2020'
    });

    const [generalInfo, setGeneralInfo] = useState({
      name: 'Your Name',
      email: 'YourEmail@gmail.com',
      number: '0213981239123',
      city: 'YourCity'
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
                    <div className={styles.mainHeader}>
                        <div className={styles.name}>{generalInfo.name}</div>
                        <div className={styles.emailNumberCityContainer}>
                            <div className={styles.email}>{generalInfo.email}</div>
                            <div className={styles.number}>{generalInfo.number}</div>
                            <div className={styles.city}>{generalInfo.city}</div>
                        </div>
                    </div>


                    <div className={styles.educationContainer}>
                        <div className={styles.educationTitle}>Education</div>
                        <div className={styles.educationInfo}>
                            <div className={styles.containerForUniversityAndDate}>

                                <div className={styles.university}>{educationalInfo.university}</div>
                                <div className={styles.dateContainer}>
                                    <div className={styles.startDate}>{educationalInfo.startDate}</div>
                                    <div className={styles.hyphen}>-</div>
                                    <div className={styles.endDate}>{educationalInfo.endDate}</div>
                                </div>
                            </div>

                            <div className={styles.degreeAndGradeContainer}>
                                <div className={styles.degree}>{educationalInfo.degree}</div>
                                <div className={styles.comma}>, </div>
                                <div className={styles.grade}>{educationalInfo.grade}</div>
                            </div>
                                
                        </div>
                    </div>
                    <div className={styles.lineBreak}></div>
                    <div className={styles.experienceTitle}>Experience</div>
                    <div className={styles.experienceContainer}>
                        {professionalExperiences.map((info) => (
                            <div className={styles.workInfoContainer} key={info.id}>
                                <div className={styles.containerForWorkTitleAndDate}>
                                    <div className={styles.jobTitle}>{info.jobTitle}</div>
                                    <div className={styles.dateContainer}>
                                        <div className={styles.startDate}>{info.startDate}</div>
                                        <div className={styles.hyphen}>-</div>
                                        <div className={styles.endDate}>{info.endDate}</div>
                                    </div>
                                </div>
                                <div className={styles.companyName}>
                                    {info.company}
                                </div>
                                <div className={styles.jobDescription}>
                                    {info.description}
                                </div>
                                <div className={styles.lineBreak}></div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


