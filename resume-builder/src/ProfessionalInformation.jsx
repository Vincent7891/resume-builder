import React, { useState } from 'react';
import HeaderWithToggle from './HeaderWithToggle';
import styles from './styles/GeneralInformation.module.css';

export default function ProfessionalInformation({
    professionalExperiences,
    setProfessionalExperiences
}) {
    const [showDetails, setShowDetails] = useState(false);
    const [experienceCounter, setExperienceCounter] = useState(0);

    const handleArrowClick = () => setShowDetails(!showDetails);

    const handleInputChange = (e, id) => {
        const { name, value } = e.target;
        setProfessionalExperiences((experiences) =>
            experiences.map((experience) =>
                experience.id === id ? { ...experience, [name]: value } : experience
            )
        );
    };

    const handleAddExperience = () => {
        setProfessionalExperiences((experiences) => [
            ...experiences,
            {
                id: experienceCounter + 1,
                jobTitle: '',
                company: '',
                startDate: '',
                endDate: '',
                description: '',
            },
        ]);
        setExperienceCounter((counter) => counter + 1);
    };

    const handleDeleteExperience = (id) => {
        setProfessionalExperiences((experiences) =>
            experiences.filter((experience) => experience.id !== id)
        );
    };

    return (
        <div className={styles.generalInfoContainer}>
            <HeaderWithToggle
                imgSrc='../public/briefcase.svg'
                headerText="Professional Information"
                showDetails={showDetails}
                onToggle={handleArrowClick}
            />

            {showDetails &&
                professionalExperiences.map((experience) => (
                    <div key={experience.id} className={styles['experience-block']}>
                        <p>
                            <strong>Job Title:</strong>
                            <br />
                            <input
                                placeholder='...'
                                name='jobTitle'
                                value={experience.jobTitle}
                                onChange={(e) => handleInputChange(e, experience.id)}
                            />
                        </p>
                        <p>
                            <strong>Company:</strong>
                            <br />
                            <input
                                placeholder='...'
                                name='company'
                                value={experience.company}
                                onChange={(e) => handleInputChange(e, experience.id)}
                            />
                        </p>
                        <p>
                            <strong>Start Date:</strong>
                            <br />
                            <input
                                placeholder='...'
                                name='startDate'
                                value={experience.startDate}
                                onChange={(e) => handleInputChange(e, experience.id)}
                            />
                        </p>
                        <p>
                            <strong>End Date:</strong>
                            <br />
                            <input
                                placeholder='...'
                                name='endDate'
                                value={experience.endDate}
                                onChange={(e) => handleInputChange(e, experience.id)}
                            />
                        </p>
                        <p>
                            <strong>Description:</strong>
                            <br />
                            <input
                                placeholder='...'
                                name='description'
                                value={experience.description}
                                onChange={(e) => handleInputChange(e, experience.id)}
                            />
                        </p>
                        <button onClick={() => handleDeleteExperience(experience.id)}>
                            Delete Experience
                        </button>
                    </div>
                ))}

            {showDetails && <button className={styles.addButton} onClick={handleAddExperience}>Add Other Experience</button>}
        </div>
    );
}




