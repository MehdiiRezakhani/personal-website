import React from 'react';

//style 
import styles from './Resume.module.css'
//media 
import Avatar from './Media/MehdiRezakhani1.jpg'
import HTML_Logo from './Media/HtmlIcon.svg';
import CSS_Logo from './Media/CssIcon.svg';
import Sass_Logo from './Media/SassIcon.svg';
import React_Logo from './Media/ReactIcon.svg';
import Redux_Logo from './Media/reduxIcon.svg';
import TS_Logo from './Media/typescriptIcon.svg';
import JS_Logo from './Media/JSicon.svg';
import MaterialUI_Logo from './Media/material-uiIcon.svg';
import Git_Logo from './Media/GitIcon.svg';
import WordPress_Logo from './Media/wordpressIcon.svg';
import UT_Logo from './Media/UT_Logo.png'
import HighSchool_Logo from './Media/HighSchool_Logo.svg'
import Digid_Logo from './Media/Digid_Logo.png'
import Dorminaco_Logo from './Media/Dorminaco_Logo.png';
import NeginAndroid_Logo from './Media/NeginAndroid_Logo.jpg';
import Resume_File from './Media/Resume.pdf'
const Resume = () => {
    const Skills = [
                    {name:"HTML", image:HTML_Logo},
                    {name:"CSS", image:CSS_Logo},
                    {name:"Sass", image:Sass_Logo},
                    {name:"JavaScript", image:JS_Logo},
                    {name:"TypeScript", image:TS_Logo},
                    {name:"ReactJS", image:React_Logo},
                    {name:"Redux", image:Redux_Logo},
                    {name:"Material UI", image:MaterialUI_Logo},
                    {name:"Git", image:Git_Logo},
                    {name:"WordPress", image:WordPress_Logo}
                    ]
    const WorkEx = [{position:"Front-End Developer", kind:"freelance", date:"May 2022 - Present", company:"Digid", companyLogo:Digid_Logo, companyLink:"https://Digid.ca", description:"I help Canadian businesses to improve their work by creating attractive website."},
                    {position:"Founder & Front-End Developer", kind:"SelfEmployed", date:"Dec 2020 - April 2022", company:"Dorminaco", companyLogo:Dorminaco_Logo, companyLink:"https://Dorminaco.ir", description:"Developed interactive JavaScript applications.Wrote HTML code to structure pages.Developed custom web component.Wrote code to fetch data from remote API."},
                    {position:"Founder & Android Developer", kind:"SelfEmployed", date:"Feb 2016 - Aug 2018", company:"NeginAndroid", companyLogo:NeginAndroid_Logo, companyLink:"https://cafebazaar.ir/developer/mehdi-253", description:"Production and development of educational application."}]
    const Education = [
        {institution:"University of Tehran", logo:UT_Logo , date:"2019", degree:"Bachelor of Engineering", field:"Polymer Engineering"},
        {institution:"Emam High School", logo:HighSchool_Logo, date:"2016-2019", degree:"High School Diploma", field:"Mathematical Physics"}
    ]
    return (
        <div>
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
            <div className={styles.WorkEx}>
                <span className={styles.HeadingShadow}>Experience</span>
                <h2>Work Experience</h2>
                <div className={styles.WorkExSection}>
                    {WorkEx.length ? WorkEx.map(item => 
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
            <div className={styles.Skills}>
                <span className={styles.HeadingShadow}>My Skills</span>
                <h2>My Skills</h2>
                <div></div>
                <div className={styles.SkillsSection}>
                    {Skills.length ? Skills.map(item =>  
                        <div className={styles.SkillsBox} key={item.name}>
                            <img src={item.image} alt={item.name}/>
                            <h3>{item.name}</h3>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={styles.Education}>
                <span className={styles.HeadingShadow}>My Education</span>
                <h2>Education</h2>
                <div className={styles.EducationSection}>
                    {Education.length ? Education.map(item => 
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