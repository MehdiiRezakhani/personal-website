import React from 'react';
import { Link } from 'react-router-dom';
//style 
import styles from '../styles/Resume.module.css'
//media 
import Avatar from '../assets/MehdiRezakhani.jpg'
import Resume_File from '../assets/Resume.pdf';
//data
import { SkillsData, WorkExData, EducationData } from '../data/index';

const Resume = () => {
    return (
        <div>
            {/* Summary */}
            <div className={styles.Summary}>
                <img src={Avatar} alt="AvatarPic"/>
                <h1>Mehdi Rezakhani</h1>
                <h2>Front-End Developer</h2>
                <div className={styles.socialBox}>
                    <p>Find Me On</p>
                    <a href="https://au.linkedin.com/in/mehdiirezakhani" target="_blank" rel='noreferrer'><i className="fab fa-linkedin si"></i></a>
                    <a href="https://github.com/MehdiiRezakhani" target="_blank" rel='noreferrer'><i className="fab fa-github si"></i></a>
                    <a href="mailto:mehdiirezakhani@gmail.com" target="_blank" rel='noreferrer'><i className="fas fa-envelope si"></i></a>
                    <a href="https://wa.me/+989210393561" rel='noreferrer'><i className="fab fa-whatsapp si"></i></a>
                    <a href="https://t.me/Dorminaco" target="_blank" rel='noreferrer'><i className="fab fa-telegram si"></i></a>
                </div>
                <p>I’m a Front-End Developer with about 2 years of experience
                        and I'm familiar with most of the necessary libraries. 
                        I’m able to quickly grasp new concepts.
                        I love coding websites and most of the time I do it as a hobby. 
                        I look forward to learning new stuff and being the best version of 
                        myself as a Developer. I’m not afraid of errors and bugs and actually, 
                        they are the fun part of coding. I like the nice feeling and excitement 
                        after solving them. 
                </p>
                <a href={Resume_File} target="_blank" rel='noreferrer'>Download My Resume</a>
            </div>

            {/* Work Experience */}
            <div className={styles.WorkEx}>
                <span className={styles.HeadingShadow}>Experience</span>
                <h2>Work Experience</h2>
                <div className={styles.WorkExSection}>
                    {WorkExData.length ? WorkExData.map(item => 
                        <div className={styles.WorkExBox} key={item.position+item.company}>
                            <img src={item.companyLogo} alt={item.company}/>
                            <div>
                                <p>{item.position}</p>
                                <p><a href={item.companyLink} target="_blank" rel="noreferrer">{item.company}</a><span> - {item.kind}</span></p>
                                <p>{item.date}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            {/* My Skills */}
            <div className={styles.Skills}>
                <span className={styles.HeadingShadow}>My Skills</span>
                <h2>My Skills</h2>
                <div></div>
                <div className={styles.SkillsSection}>
                    {SkillsData.length ? SkillsData.map(item =>  
                        <div className={styles.SkillsBox} key={item.name}>
                            <img src={item.image} alt={item.name}/>
                            <h3>{item.name}</h3>
                        </div>
                    ) : null}
                </div>
            </div>

            {/* My Projects */}
            <div className={styles.Education}>
                <span className={styles.HeadingShadow}>My Projects</span>
                <h2>Latest Projects</h2>
                <div className={styles.EducationSection}>
                    <h4 className={styles.Project}>
                        <Link to='/projects' onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>View My All Project</Link>
                    </h4>
                </div>
            </div>
            
            {/* Education */}
            <div className={styles.Education}>
                <span className={styles.HeadingShadow}>My Education</span>
                <h2>Education</h2>
                <div className={styles.EducationSection}>
                    {EducationData.length ? EducationData.map(item => 
                        <div className={styles.EducationBox} key={item.field}>
                            <img src={item.logo} alt="item.institution"/>
                            <div>
                                <p>{item.institution}<span> -- {item.date}</span></p>
                                <p>{item.degree} - {item.field}</p>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Resume;