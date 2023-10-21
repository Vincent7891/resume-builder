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
        description: 'Your Description'
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
                            <div>{generalInfo.email}</div>
                            <div>{generalInfo.number}</div>
                            <div>{generalInfo.city}</div>
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
                                <div className={styles.jobDescription}>
                                    {info.company}
                                </div>
                                <div className={styles.jobDescription}>
                                    {info.description}
                                </div>
                                <div className={styles.lineBreak}></div>
                            </div>

                        ))}
                    </div>

                    {/* {professionalExperiences.map((info) => (
                        <React.Fragment key={info.id}>
                            <p><strong>Job Title:</strong> {info.jobTitle}</p>
                            <p><strong>Company:</strong> {info.company}</p>
                            <p><strong>startDate:</strong> {info.startDate}</p>
                            <p><strong>End date:</strong> {info.endDate}</p>
                            <p><strong>description:</strong> {info.description}</p>
                            <br />
                        </React.Fragment>
                    ))} */}

                    {/* <p><strong>Full Name:</strong> {generalInfo.name}</p>
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
                    ))} */}
                </div>
            </div>
        </div>
    );
}


