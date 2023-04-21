import React from 'react';
import { Link } from 'react-router-dom';
//style
import styles from '../styles/HomePage.module.css'
//media 
import Avatar from '../assets/MehdiRezakhani.jpg';
//data
import { ProjectsData, OffersData, HireData } from '../data/index';

const HomePage = () => {
    return (
        <div className={styles.HomePage}>
            {/* Introduce */}
            <div className={styles.Introduce}>
                <div className={styles.IntroduceText} id="Introduce">
                    <p>Hello Everyone!</p>
                    <h1>I am <span>Mehdi Rezakhani</span></h1>
                    <h2>Front-End Developer</h2>
                    <div></div>
                    <p className={styles.summary}>I’m a Front-End Developer with about 2 years of experience
                        and I'm familiar with most of the necessary libraries. 
                        I’m able to quickly grasp new concepts.
                        I love coding websites and most of the time I do it as a hobby. 
                        I look forward to learning new stuff and being the best version of 
                        myself as a Developer. I’m not afraid of errors and bugs and actually, 
                        they are the fun part of coding. I like the nice feeling and excitement 
                        after solving them. </p>
                    <Link to='/resume' onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>My Resume</Link>
                </div>
                <div className={styles.IntroducePic}>
                    <img src={Avatar} alt="AvatarPic"/>
                        <div className={styles.socialBox}>
                            <p>Find Me On</p>
                            <a href="https://au.linkedin.com/in/mehdiirezakhani" target="_blank" rel='noreferrer'><i className="fab fa-linkedin si"></i></a>
                            <a href="https://github.com/MehdiiRezakhani" target="_blank" rel='noreferrer'><i className="fab fa-github si"></i></a>
                            <a href="mailto:mehdiirezakhani@gmail.com" target="_blank" rel='noreferrer'><i className="fas fa-envelope si"></i></a>
                            <a href="https://wa.me/+989210393561" rel='noreferrer'><i className="fab fa-whatsapp si"></i></a>
                            <a href="https://t.me/Dorminaco" target="_blank" rel='noreferrer'><i className="fab fa-telegram si"></i></a>
                        </div>
                </div>
            </div>

            {/* What Do I Offer?  */}
            <div className={styles.WhatOffer}>
                <span className={styles.HeadingShadow}>What Do I Offer?</span>
                <h3>What Do I Offer?</h3>
                <div className={styles.WhatOfferSection}>
                    {OffersData.length ? OffersData.map(item => 
                        <div className={styles.WhatOfferBox} key={item.name}>
                            <img src={item.image} alt={item.name}/>
                            <h4>{item.name}</h4>
                        </div>) 
                    : null} 
                </div>
            </div>
            
            {/* My Project */}
            <div className={styles.MyProjects}>
                <span className={styles.HeadingShadow}><Link to='/projects'>MY PROJECTS</Link></span>
                <h3><Link to='/projects'>Latest Projects</Link></h3>
                <div className={styles.ProjectsSection}>
                    {ProjectsData.length ? ProjectsData.slice(0,4).map(item => 
                        <div className={styles.ProjectBox} key={item.name}> 
                            <div>
                                <img src={item.image} alt={item.name}/>
                            </div>
                            <h4>{item.name}</h4>
                            <a href={item.link} target="_blank" rel="noreferrer">View</a>
                        </div>) 
                    : null} 
                </div>
                <Link to='/projects' onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>More</Link>
                <div className={styles.ProjectOfferBox}>
                        <div>
                            <p>Have any project in mind?</p>
                            <span>I'm available for freelancing</span>
                        </div>
                        <a href="https://wa.me/+989210393561" target="_blank" rel="noreferrer">Tell Me</a>
                </div>
            </div>

            {/* Why Hire ME */}
            <div className={styles.WhyHireMe}>
                <span className={styles.HeadingShadow}>WHY HIRE ME?</span>
                <h3>Why Hire Me?</h3>
                <div className={styles.PointsSection}>
                    {HireData.length ? HireData.map(item => 
                        <div className={styles.PointBox} key={item.reason}>
                            <img src={item.image} alt={item.reason}/>
                            <h5>{item.reason}</h5>
                            <p>{item.description}</p>
                        </div>) 
                    : null}
                </div>
            </div>

        </div>
    );
};

export default HomePage;